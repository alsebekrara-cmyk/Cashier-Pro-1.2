/**
 * =============================================
 * مدير الصفحات - Page Manager
 * نظام نقاط البيع - Digital Creativity
 * =============================================
 */

class PageManager {
    constructor() {
        this.currentPage = 'pos';
        this.pages = {};
        this.initialized = false;
    }

    /**
     * تهيئة مدير الصفحات
     */
    async init() {
        if (this.initialized) {
            console.warn('⚠️ PageManager already initialized');
            return;
        }

        try {
            // تحميل جميع الصفحات المسجلة
            await this.loadAllPages();
            
            // إعداد الأحداث
            this.setupEvents();
            
            // عرض الصفحة الافتراضية
            this.showPage(this.currentPage);
            
            this.initialized = true;
            console.log('✅ تم تهيئة مدير الصفحات بنجاح');
        } catch (error) {
            console.error('❌ خطأ في تهيئة مدير الصفحات:', error);
            showToast('فشل في تهيئة النظام', 'error');
        }
    }

    /**
     * تسجيل صفحة جديدة
     * @param {string} pageName - اسم الصفحة
     * @param {Object} pageModule - وحدة الصفحة
     */
    registerPage(pageName, pageModule) {
        this.pages[pageName] = pageModule;
        console.log(`✅ تم تسجيل الصفحة: ${pageName}`);
    }

    /**
     * تحميل جميع الصفحات
     */
    async loadAllPages() {
        const pageList = [
            'pos',
            'invoices',
            'receipts',
            'products',
            'inventory',
            'debts',
            'payments',
            'expenses',
            'printer',
            'settings'
        ];

        for (const pageName of pageList) {
            try {
                // الصفحات ستحمّل نفسها عند تضمينها في index.html
                console.log(`⏳ جاري تحميل الصفحة: ${pageName}`);
            } catch (error) {
                console.error(`❌ فشل تحميل الصفحة ${pageName}:`, error);
            }
        }
    }

    /**
     * عرض صفحة معينة
     * @param {string} pageId - معرف الصفحة
     */
    showPage(pageId) {
        try {
            // إخفاء جميع الصفحات
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });

            // إزالة التفعيل من جميع روابط القائمة
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });

            // عرض الصفحة المطلوبة
            const pageElement = document.getElementById(pageId);
            if (pageElement) {
                pageElement.classList.add('active');
                this.currentPage = pageId;

                // تفعيل رابط القائمة المناسب
                const activeLink = document.querySelector(`.nav-link[onclick*="'${pageId}'"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }

                // تنفيذ دالة onShow للصفحة إن وجدت
                if (this.pages[pageId] && typeof this.pages[pageId].onShow === 'function') {
                    this.pages[pageId].onShow();
                }

                console.log(`✅ تم عرض الصفحة: ${pageId}`);
            } else {
                console.error(`❌ الصفحة غير موجودة: ${pageId}`);
                showToast('الصفحة غير موجودة', 'error');
            }
        } catch (error) {
            console.error('❌ خطأ في عرض الصفحة:', error);
            showToast('فشل في عرض الصفحة', 'error');
        }
    }

    /**
     * الحصول على الصفحة الحالية
     * @returns {string} - معرف الصفحة الحالية
     */
    getCurrentPage() {
        return this.currentPage;
    }

    /**
     * الحصول على وحدة صفحة معينة
     * @param {string} pageName - اسم الصفحة
     * @returns {Object|null} - وحدة الصفحة أو null
     */
    getPage(pageName) {
        return this.pages[pageName] || null;
    }

    /**
     * إعداد الأحداث
     */
    setupEvents() {
        // الاستماع لحدث تغيير الصفحة
        window.addEventListener('page-change', (event) => {
            if (event.detail && event.detail.page) {
                this.showPage(event.detail.page);
            }
        });

        // إعداد أزرار التنقل
        this.setupNavigationButtons();
    }

    /**
     * إعداد أزرار التنقل
     */
    setupNavigationButtons() {
        const navItems = document.querySelectorAll('.nav-item .nav-link');
        navItems.forEach(navItem => {
            navItem.addEventListener('click', (e) => {
                // لا تمنع السلوك الافتراضي لأن الدالة showPage موجودة في onclick
                // فقط للتأكد من أن الصفحة تعمل بشكل صحيح
            });
        });
    }

    /**
     * تحديث محتوى صفحة
     * @param {string} pageId - معرف الصفحة
     */
    async refreshPage(pageId = null) {
        const targetPage = pageId || this.currentPage;
        
        if (this.pages[targetPage] && typeof this.pages[targetPage].refresh === 'function') {
            await this.pages[targetPage].refresh();
            console.log(`✅ تم تحديث الصفحة: ${targetPage}`);
        }
    }

    /**
     * تنظيف الصفحة الحالية قبل الانتقال
     */
    cleanup() {
        const currentPageModule = this.pages[this.currentPage];
        
        if (currentPageModule && typeof currentPageModule.onHide === 'function') {
            currentPageModule.onHide();
        }
    }
}

// إنشاء نسخة واحدة من مدير الصفحات
const pageManager = new PageManager();

// تصدير للاستخدام العام
if (typeof window !== 'undefined') {
    window.pageManager = pageManager;
    window.showPage = (pageId) => pageManager.showPage(pageId);
}

console.log('✅ تم تحميل مدير الصفحات بنجاح');
