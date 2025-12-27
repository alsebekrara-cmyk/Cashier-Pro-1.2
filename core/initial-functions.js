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

    let html = `