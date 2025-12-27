<script>
// دالة عامة لحفظ البيانات في localStorage بشكل آمن (مع دعم await)
async function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        // يمكن إضافة رسالة لوج هنا إذا رغبت
        // console.log(`✅ تم حفظ ${key} في localStorage`);
        return true;
    } catch (e) {
        console.error('❌ خطأ في حفظ البيانات في localStorage:', e);
        return false;
    }
}
// دالة مساعدة لتحويل الأرقام العربية إلى إنجليزية (تعمل على كل النصوص)
function toEnglishDigits(str) {
    if (typeof str !== 'string') str = String(str);
    return str.replace(/[٠-٩]/g, d => '0123456789'['٠١٢٣٤٥٦٧٨٩'.indexOf(d)]);
}
// ✅ إيصال تسديد - مضغوط لصفحة واحدة A4 (مضمون 100%)
function generateInstallmentPaymentReceipt({debt, paidInstallment, storeSettings}) {
    // البيانات الأساسية
    const customerName = debt.customer_name || '';
    const customerPhone = debt.customer_phone || '';
    const storeName = storeSettings?.storeName || storeSettings?.store_name || 'معرض يعقوب';
    const storeAddress = storeSettings?.storeAddress || storeSettings?.store_address || 'باب الهاشمية';
    const storePhone = storeSettings?.storePhone || storeSettings?.store_phone || '07803092185';
    
    // معلومات القسط
    const paidMonth = paidInstallment.month;
    const paidAmount = paidInstallment.paid_amount || paidInstallment.amount;
    const paidDate = paidInstallment.paid_date ? new Date(paidInstallment.paid_date) : new Date();
    const paidDifference = paidInstallment.difference || 0;
    const paidType = paidInstallment.payment_type || (paidDifference > 0 ? 'partial' : 'full');
    const paidNotes = paidInstallment.notes || '';
    // ملاحظة تلقائية للدفع الجزئي
    let autoNote = paidNotes;
    if (paidType === 'partial' && paidDifference > 0) {
        autoNote = `تم دفع جزء من القسط (${toEnglishDigits(paidAmount.toLocaleString('en'))} د.ع)، المتبقي (${toEnglishDigits(paidDifference.toLocaleString('en'))} د.ع) تم ترحيله إلى الشهر القادم.`;
    }
    
    // تنسيق التاريخ - عربي مع أرقام إنجليزية
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const dateStrArabic = paidDate.toLocaleDateString('ar-IQ', dateOptions);
    const dateStr = toEnglishDigits(dateStrArabic);
    
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    const timeStrArabic = paidDate.toLocaleTimeString('ar-IQ', timeOptions);
    const timeStr = toEnglishDigits(timeStrArabic);
    
    // حسابات الأقساط
    const allInstallments = debt.installments || [];
    const remainingInstallments = allInstallments.filter(inst => inst.status !== 'paid');
    const paidInstallments = allInstallments.filter(inst => inst.status === 'paid');
    const remainingMonths = remainingInstallments.length;
    const remainingAmount = remainingInstallments.reduce((sum, inst) => sum + (inst.amount || 0), 0);
    const totalPaidAmount = debt.paid_amount || 0;
    const totalAmount = debt.total_amount || debt.final_total || 0;
    const totalMonths = debt.installment_months || allInstallments.length;
    const paidMonthsCount = paidInstallments.length;
    
    // معلومات إضافية
    const invoiceId = debt.invoice_id || debt.debt_id || 'غير محدد';
    
    // إصلاح: محاولة الحصول على المنتجات من مصادر متعددة
    let products = [];
    if (Array.isArray(debt.products) && debt.products.length > 0) {
        products = debt.products;
    } else if (Array.isArray(debt.items) && debt.items.length > 0) {
        products = debt.items;
    } else if (typeof debt.items === 'string') {
        try {
            products = JSON.parse(debt.items);
        } catch (e) {
            console.error('فشل تحليل المنتجات:', e);
            products = [];
        }
    }
    
    const hasProducts = products.length > 0;
    const paymentPercentage = totalAmount > 0 ? ((totalPaidAmount / totalAmount) * 100).toFixed(0) : 0;
    const receiptNumber = `${invoiceId}-${paidMonth}`;
    // القسط القادم مع مراعاة الترحيل
    let nextInstallment = null;
    if (remainingInstallments.length > 0) {
        // ابحث عن أول قسط بعد القسط الحالي
        nextInstallment = remainingInstallments.find(inst => inst.month > paidMonth) || remainingInstallments[0];
    }

    let html = `<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
<meta charset="UTF-8">
<title>إيصال تسديد</title>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
    font-family: 'Cairo', sans-serif;
    font-size: 9px;
    line-height: 1.3;
    background: #f4f6fa;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
}

/* ========================================
   حالة الدفع الجزئي - Partial Payment
   ======================================== */
.installment-status.partially_paid {
    background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.85em;
    font-weight: 600;
    display: inline-block;
    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.3);
}
/* معلومات الترحيل - Carryforward Info */
.carryforward-info {
    background: #fef3c7;
    border-left: 4px solid #f59e0b;
    padding: 10px 15px;
    margin: 10px 0;
    border-radius: 8px;
    font-size: 0.9em;
}
.carryforward-info i {
    color: #f59e0b;
    margin-left: 8px;
}
/* تحسين عرض المبالغ المرحلة */
.amount-breakdown {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.amount-breakdown .original {
    color: #6b7280;
    font-size: 0.85em;
}
.amount-breakdown .carryforward {
    color: #f59e0b;
    font-size: 0.85em;
    font-weight: 600;
}
.amount-breakdown .total {
    font-weight: bold;
    color: #1f2937;
}
/* تحسين عرض الحالات */
.installment-status {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.85em;
    font-weight: 600;
    text-align: center;
}
.a4-sheet {
    width: 297mm;
    height: 210mm;
    max-width: 100vw;
    max-height: 100vh;
    margin: 0 auto;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 0 20px #0001;
    padding: 12px 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
}
.a4-grid {
    display: grid;
    grid-template-columns: 2fr 1.5fr 2fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 12px 16px;
    height: 100%;
}
.a4-header {
    grid-column: 1 / 4;
    text-align: center;
    background: linear-gradient(90deg, #667eea 0%, #38ef7d 100%);
    color: #fff;
    padding: 8px 0 6px 0;
    border-radius: 8px;
    margin-bottom: 8px;
}
.a4-header h1 {
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
    letter-spacing: 0.5px;
}
.a4-header .info {
    font-size: 0.8rem;
    font-weight: 500;
}
.a4-box {
    background: #f8fafc;
    border-radius: 6px;
    box-shadow: 0 1px 4px #0001;
    padding: 8px 10px;
    border: 1px solid #e0e7ef;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 80px;
}
.a4-box-title {
    font-weight: 700;
    font-size: 0.8rem;
    margin-bottom: 4px;
    color: #667eea;
}
.a4-box-value {
    font-weight: 900;
    font-size: 1rem;
    color: #22223b;
    margin-bottom: 3px;
}
.a4-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.7rem;
    margin-top: 4px;
}
.a4-table th, .a4-table td {
    border: 1px solid #e0e7ef;
    padding: 4px 3px;
    text-align: center;
}
.a4-table th {
    background: #667eea;
    color: #fff;
    font-weight: 700;
    font-size: 0.65rem;
}
.a4-progress {
    width: 100%;
    height: 12px;
    background: #e9ecef;
    border-radius: 6px;
    overflow: hidden;
    margin-top: 4px;
}
.a4-progress-bar {
    height: 100%;
    background: linear-gradient(90deg, #38ef7d 0%, #667eea 100%);
    border-radius: 6px;
}
.a4-footer {
    grid-column: 1 / 4;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff;
    padding: 6px 0 4px 0;
    border-radius: 8px;
    font-size: 0.75rem;
    margin-top: 8px;
}
@media print {
    body { margin: 0; }
    .a4-sheet { margin: 0; box-shadow: none; border-radius: 0; }
}
</style>
</head>
<body>
<div class="a4-sheet">
    <div class="a4-header">
        ${storeSettings?.store_logo ? `<div style="text-align:center;margin-bottom:6px;"><img src="${storeSettings.store_logo}" alt="Logo" style="max-width:60px;max-height:60px;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.2);" onerror="this.style.display='none'" /></div>` : ''}
        <h1>إيصال تسديد قسط</h1>
        <div class="info"><strong>${storeName}</strong> • ${storeAddress} • ${storePhone}</div>
    </div>
    <div class="a4-grid">
        <div class="a4-box" style="grid-row: 1; grid-column: 1;">
            <div class="a4-box-title">👤 بيانات العميل</div>
            <div style="font-size:0.75rem;"><b>الاسم:</b> ${customerName}</div>
            ${customerPhone ? `<div><b>الهاتف:</b> ${customerPhone}</div>` : ''}
            <div><b>رقم الفاتورة:</b> ${toEnglishDigits(invoiceId)}</div>
        </div>
        <div class="a4-box" style="grid-row: 1; grid-column: 2; text-align:center; min-width:180px; min-height:110px; display:flex; flex-direction:column; align-items:center; justify-content:center;">
            <div class="a4-box-title" style="font-size:0.95rem;">💳 رقم الإيصال</div>
            <div class="a4-box-value" style="font-size:1.1rem;letter-spacing:0.5px; padding:2px 0;">${toEnglishDigits(receiptNumber)}</div>
            <div style="font-size:0.9rem;margin-top:4px;"><b>التاريخ والوقت:</b></div>
            <div style="font-size:0.95rem;font-weight:700;">${dateStr} - ${timeStr}</div>
        </div>
        <div class="a4-box" style="grid-row: 1; grid-column: 3;">
            <div class="a4-box-title">💰 القسط المسدد</div>
            <div style="font-size:1.1rem;font-weight:700;"><b>رقم القسط:</b> <span style="color:#6366f1;">${toEnglishDigits(paidMonth)} من ${toEnglishDigits(totalMonths)}</span></div>
            <div style="font-size:1.2rem;"><b>المبلغ:</b> <span style="color:#11998e;font-weight:900;">${toEnglishDigits(paidAmount.toLocaleString('en'))} د.ع</span></div>
            <div style="margin-top:6px;font-size:1rem;"><b>نوع الدفع:</b> ${paidType === 'partial' ? '<span style="color:#f59e0b;font-weight:700;">دفع جزئي</span>' : '<span style="color:#10b981;font-weight:700;">دفع كامل</span>'}</div>
            ${paidType === 'partial' && paidDifference > 0 ? `<div style="color:#f59e0b;font-size:0.95rem;margin-top:4px;"><b>المتبقي لهذا القسط:</b> ${toEnglishDigits(paidDifference.toLocaleString('en'))} د.ع</div>` : ''}
            <div style="margin-top:6px;font-size:0.95rem;"><b>ملاحظات سجل التسديد:</b> <span>${paidNotes || '-'}</span></div>
        </div>
        <div class="a4-box" style="grid-row: 2; grid-column: 1;">
            <div class="a4-box-title" style="font-size:1rem;">📊 ملخص الدين</div>
            <div style="font-size:1rem;"><b>إجمالي الدين:</b> ${toEnglishDigits(totalAmount.toLocaleString('en'))} د.ع</div>
            <div style="font-size:1rem;"><b>المسدد:</b> <span style="color:#047857;">${toEnglishDigits(totalPaidAmount.toLocaleString('en'))} د.ع (${toEnglishDigits(paidMonthsCount)} قسط)</span></div>
            <div style="font-size:1rem;"><b>المتبقي:</b> <span style="color:#dc2626;">${toEnglishDigits(remainingAmount.toLocaleString('en'))} د.ع (${toEnglishDigits(remainingMonths)} قسط)</span></div>
            <div style="margin-top:8px;font-size:1rem;"><b>نسبة الإنجاز:</b> <span style="color:#667eea;font-weight:900;">${toEnglishDigits(paymentPercentage)}%</span></div>
            <div class="a4-progress"><div class="a4-progress-bar" style="width:${paymentPercentage}%;"></div></div>
        </div>
        <div class="a4-box" style="grid-row: 2; grid-column: 2;">
            <div class="a4-box-title">🛒 المنتجات</div>
                ${hasProducts ? `<div style="max-height:90px;overflow-y:auto;"><table class="a4-table" style="font-size:0.8rem;"><tr><th>المنتج</th><th>الكمية</th><th>السعر</th></tr>${products.map(p => `<tr><td style=\"text-align:right;\">${p.name || p.product_name}</td><td>${toEnglishDigits(p.quantity || 1)}</td><td>${toEnglishDigits((p.price || 0).toLocaleString('en'))}</td></tr>`).join('')}</table></div>` : '<div style="color:#aaa;">لا توجد منتجات</div>'}
        </div>
        <div class="a4-box" style="grid-row: 2; grid-column: 3;">
            <div class="a4-box-title">📅 الأقساط القادمة</div>
            ${remainingMonths > 0 ? `<table class="a4-table"><tr><th>القسط</th><th>المبلغ</th><th>الاستحقاق</th></tr>${remainingInstallments.slice(0, 4).map(inst => {
                // إذا كان القسط هو القسط القادم، أضف المبلغ المرحل إليه
                let displayAmount = inst.amount;
                if (inst.carryforward_received && inst.carryforward_received > 0) {
                    displayAmount = inst.amount;
                }
                const dueDate = inst.due_date ? new Date(inst.due_date).toLocaleDateString('ar-IQ', {month:'numeric',day:'numeric'}) : '-';
                return `<tr><td>${toEnglishDigits(inst.month)}</td><td>${toEnglishDigits(displayAmount.toLocaleString('en'))}</td><td>${toEnglishDigits(dueDate)}</td></tr>`;
            }).join('')}${remainingMonths > 4 ? `<tr><td colspan="3" style="color:#1e40af;font-weight:600;">+ ${toEnglishDigits(remainingMonths - 4)} قسط إضافي</td></tr>` : ''}</table>` : '<div style="color:#047857;font-weight:700;">تم سداد جميع الأقساط!</div>'}
        </div>
        <div class="a4-box" style="grid-row: 3; grid-column: 1 / 4;">
            <div class="a4-box-title">📌 ملاحظات</div>
            <ul style="margin:0 0 0 18px;padding:0;font-size:1.15rem;">
                <li>احتفظ بهذا الإيصال كإثبات للدفع</li>
                ${nextInstallment ? `<li>القسط القادم: <strong>${toEnglishDigits(nextInstallment.amount.toLocaleString('en'))} د.ع</strong> ${nextInstallment.due_date ? `بتاريخ ${toEnglishDigits(new Date(nextInstallment.due_date).toLocaleDateString('en-GB'))}` : ''}</li>` : ''}
                <li>للاستفسار: ${storePhone}</li>
                <li><b>ملخص القسط الحالي:</b> ${paidType === 'partial' && paidDifference > 0 ? `تم دفع جزء من القسط بمبلغ (${toEnglishDigits(paidAmount.toLocaleString('en'))} د.ع)، والمتبقي (${toEnglishDigits(paidDifference.toLocaleString('en'))} د.ع) تم ترحيله إلى الشهر القادم.` : 'تم دفع كامل القسط.'}</li>
            </ul>
        </div>
    </div>
    <div class="a4-footer">
        <div style="font-weight:700;margin-bottom:2px;">شكراً لثقتكم 🙏</div>
        <div>نظام كاش برو - Digital Creativity © ${new Date().getFullYear()}</div>
    </div>
</div>
</body>
</html>`;
    
    return html;
}
</script>
