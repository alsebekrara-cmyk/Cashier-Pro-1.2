/**
 * =============================================
 * ملف الدوال المساعدة العامة
 * نظام نقاط البيع - Digital Creativity
 * =============================================
 */

// ==========================================
// دوال تخزين البيانات
// ==========================================

/**
 * حفظ البيانات في localStorage بشكل آمن
 * @param {string} key - مفتاح التخزين
 * @param {any} value - القيمة المراد حفظها
 * @returns {Promise<boolean>} - نجاح العملية
 */
async function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        console.error('❌ خطأ في حفظ البيانات في localStorage:', e);
        return false;
    }
}

/**
 * استرجاع البيانات من localStorage
 * @param {string} key - مفتاح التخزين
 * @param {any} defaultValue - القيمة الافتراضية
 * @returns {any} - البيانات المحفوظة أو القيمة الافتراضية
 */
function getFromLocalStorage(key, defaultValue = null) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : defaultValue;
    } catch (e) {
        console.error('❌ خطأ في استرجاع البيانات من localStorage:', e);
        return defaultValue;
    }
}

// ==========================================
// دوال التنسيق والتحويل
// ==========================================

/**
 * تحويل الأرقام العربية إلى إنجليزية
 * @param {string|number} str - النص المراد تحويله
 * @returns {string} - النص بأرقام إنجليزية
 */
function toEnglishDigits(str) {
    if (typeof str !== 'string') str = String(str);
    return str.replace(/[٠-٩]/g, d => '0123456789'['٠١٢٣٤٥٦٧٨٩'.indexOf(d)]);
}

/**
 * تحويل الأرقام الإنجليزية إلى عربية
 * @param {string|number} str - النص المراد تحويله
 * @returns {string} - النص بأرقام عربية
 */
function toArabicDigits(str) {
    if (typeof str !== 'string') str = String(str);
    return str.replace(/[0-9]/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
}

/**
 * تنسيق العملة (دينار عراقي)
 * @param {number} amount - المبلغ
 * @param {boolean} includeSymbol - إضافة رمز العملة
 * @returns {string} - المبلغ منسق
 */
function formatCurrency(amount, includeSymbol = true) {
    const formatted = Number(amount).toLocaleString('en');
    return includeSymbol ? `${formatted} د.ع` : formatted;
}

/**
 * تنسيق التاريخ
 * @param {Date|string} date - التاريخ
 * @param {boolean} includeTime - إضافة الوقت
 * @returns {string} - التاريخ منسق
 */
function formatDate(date, includeTime = false) {
    const d = date instanceof Date ? date : new Date(date);
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    const dateStrArabic = d.toLocaleDateString('ar-IQ', dateOptions);
    const dateStr = toEnglishDigits(dateStrArabic);
    
    if (!includeTime) return dateStr;
    
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    const timeStrArabic = d.toLocaleTimeString('ar-IQ', timeOptions);
    const timeStr = toEnglishDigits(timeStrArabic);
    
    return `${dateStr} - ${timeStr}`;
}

// ==========================================
// دوال التحقق والتثبت
// ==========================================

/**
 * التحقق من صحة رقم الهاتف العراقي
 * @param {string} phone - رقم الهاتف
 * @returns {boolean} - صحة الرقم
 */
function isValidIraqiPhone(phone) {
    const phoneRegex = /^(07[3-9]\d{8}|009647[3-9]\d{8}|\+9647[3-9]\d{8})$/;
    return phoneRegex.test(phone);
}

/**
 * التحقق من صحة البريد الإلكتروني
 * @param {string} email - البريد الإلكتروني
 * @returns {boolean} - صحة البريد
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ==========================================
// دوال واجهة المستخدم
// ==========================================

/**
 * عرض رسالة Toast
 * @param {string} message - الرسالة
 * @param {string} type - نوع الرسالة (success, error, warning, info)
 * @param {number} duration - مدة العرض بالميلي ثانية
 */
function showToast(message, type = 'info', duration = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    const container = document.getElementById('toastContainer') || createToastContainer();
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

/**
 * إنشاء حاوية Toast إذا لم تكن موجودة
 */
function createToastContainer() {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
    return container;
}

/**
 * عرض نافذة تأكيد
 * @param {string} message - رسالة التأكيد
 * @param {Function} onConfirm - دالة التنفيذ عند التأكيد
 * @param {Function} onCancel - دالة التنفيذ عند الإلغاء
 */
function showConfirm(message, onConfirm, onCancel = null) {
    const modal = document.createElement('div');
    modal.className = 'confirm-modal';
    modal.innerHTML = `
        <div class="confirm-content">
            <p>${message}</p>
            <div class="confirm-buttons">
                <button class="btn btn-danger" onclick="this.closest('.confirm-modal').remove(); ${onCancel ? onCancel.toString() + '()' : ''}">إلغاء</button>
                <button class="btn btn-success" onclick="this.closest('.confirm-modal').remove(); ${onConfirm.toString()}()">تأكيد</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

/**
 * عرض شاشة التحميل
 * @param {boolean} show - إظهار أو إخفاء
 * @param {string} message - رسالة التحميل
 */
function showLoading(show = true, message = 'جاري التحميل...') {
    let loader = document.getElementById('globalLoader');
    
    if (!loader) {
        loader = document.createElement('div');
        loader.id = 'globalLoader';
        loader.className = 'global-loader';
        loader.innerHTML = `
            <div class="loader-content">
                <div class="spinner"></div>
                <p class="loader-message">${message}</p>
            </div>
        `;
        document.body.appendChild(loader);
    }
    
    if (show) {
        loader.querySelector('.loader-message').textContent = message;
        loader.classList.add('show');
    } else {
        loader.classList.remove('show');
    }
}

// ==========================================
// دوال مساعدة أخرى
// ==========================================

/**
 * توليد معرف فريد
 * @returns {string} - معرف فريد
 */
function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * نسخ نص إلى الحافظة
 * @param {string} text - النص المراد نسخه
 * @returns {Promise<boolean>} - نجاح العملية
 */
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('تم النسخ بنجاح', 'success');
        return true;
    } catch (error) {
        console.error('خطأ في النسخ:', error);
        showToast('فشل النسخ', 'error');
        return false;
    }
}

/**
 * تأخير تنفيذ دالة
 * @param {number} ms - الوقت بالميلي ثانية
 * @returns {Promise} - وعد يتم حله بعد التأخير
 */
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * تصدير دالة debounce
 * @param {Function} func - الدالة المراد تأخيرها
 * @param {number} wait - وقت الانتظار
 * @returns {Function} - الدالة المعدلة
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// تصدير الدوال
// ==========================================

// تصدير جميع الدوال للاستخدام العام
if (typeof window !== 'undefined') {
    window.utils = {
        saveToLocalStorage,
        getFromLocalStorage,
        toEnglishDigits,
        toArabicDigits,
        formatCurrency,
        formatDate,
        isValidIraqiPhone,
        isValidEmail,
        showToast,
        showConfirm,
        showLoading,
        generateUniqueId,
        copyToClipboard,
        delay,
        debounce
    };
}

console.log('✅ تم تحميل ملف الدوال المساعدة بنجاح');
