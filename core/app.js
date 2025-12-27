/**
 * =============================================
 * التطبيق الرئيسي - Main App
 * نظام نقاط البيع المتقدم - Digital Creativity
 * =============================================
 */

class POSApp {
    constructor() {
        this.initialized = false;
        this.currentUser = null;
        this.settings = {};
        this.theme = 'light';
    }

    /**
     * تهيئة التطبيق
     */
    async init() {
        if (this.initialized) {
            console.warn('⚠️ التطبيق تم تهيئته مسبقاً');
            return;
        }

        try {
            console.log('🚀 بدء تهيئة التطبيق...');
            
            // 1. تحميل الإعدادات
            await this.loadSettings();
            
            // 2. تهيئة السمة (Theme)
            this.initTheme();
            
            // 3. تهيئة Firebase
            await this.initFirebase();
            
            // 4. تهيئة Element SDK
            await this.initElementSDK();
            
            // 5. تهيئة قاعدة البيانات المحلية
            await this.initLocalDatabase();
            
            // 6. تهيئة مدير الصفحات
            await pageManager.init();
            
            // 7. تهيئة الشريط الجانبي
            this.initSidebar();
            
            // 8. تهيئة الإشعارات
            this.initNotifications();
            
            // 9. تحميل بيانات المستخدم
            await this.loadUserData();
            
            this.initialized = true;
            console.log('✅ تم تهيئة التطبيق بنجاح');
            
            // إخفاء شاشة التحميل
            this.hideSplashScreen();
            
        } catch (error) {
            console.error('❌ خطأ في تهيئة التطبيق:', error);
            showToast('فشل في تهيئة التطبيق', 'error');
        }
    }

    /**
     * تحميل الإعدادات
     */
    async loadSettings() {
        try {
            this.settings = getFromLocalStorage('appSettings', {
                storeName: 'معرض يعقوب',
                storeAddress: 'باب الهاشمية',
                storePhone: '07803092185',
                theme: 'light',
                language: 'ar',
                printerEnabled: false,
                autoBackup: true
            });
            
            console.log('✅ تم تحميل الإعدادات');
        } catch (error) {
            console.error('❌ خطأ في تحميل الإعدادات:', error);
        }
    }

    /**
     * حفظ الإعدادات
     */
    async saveSettings(newSettings) {
        try {
            this.settings = { ...this.settings, ...newSettings };
            await saveToLocalStorage('appSettings', this.settings);
            console.log('✅ تم حفظ الإعدادات');
            return true;
        } catch (error) {
            console.error('❌ خطأ في حفظ الإعدادات:', error);
            return false;
        }
    }

    /**
     * تهيئة السمة (Theme)
     */
    initTheme() {
        this.theme = this.settings.theme || 'light';
        document.documentElement.setAttribute('data-theme', this.theme);
        console.log(`✅ تم تطبيق السمة: ${this.theme}`);
    }

    /**
     * تبديل السمة
     */
    toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.theme);
        this.saveSettings({ theme: this.theme });
        console.log(`✅ تم تبديل السمة إلى: ${this.theme}`);
    }

    /**
     * تهيئة Firebase
     */
    async initFirebase() {
        try {
            if (typeof window.firebaseInitialized !== 'undefined' && window.firebaseInitialized) {
                console.log('✅ Firebase تم تهيئته مسبقاً');
                return;
            }

            // انتظار تهيئة Firebase
            await new Promise((resolve, reject) => {
                if (typeof window.isFirebaseReady === 'function' && window.isFirebaseReady()) {
                    resolve();
                } else if (typeof window.waitForFirebase === 'function') {
                    window.waitForFirebase((ready) => {
                        if (ready) {
                            resolve();
                        } else {
                            reject(new Error('فشل في تهيئة Firebase'));
                        }
                    });
                } else {
                    // Firebase غير متوفر، المتابعة بدونه
                    console.warn('⚠️ Firebase غير متوفر، العمل في الوضع المحلي فقط');
                    resolve();
                }
            });
            
            console.log('✅ تم تهيئة Firebase');
        } catch (error) {
            console.error('❌ خطأ في تهيئة Firebase:', error);
            // المتابعة بدون Firebase
        }
    }

    /**
     * تهيئة Element SDK
     */
    async initElementSDK() {
        try {
            if (typeof window.elementSdk === 'undefined') {
                console.warn('⚠️ Element SDK غير متوفر');
                return;
            }

            const defaultConfig = {
                app_name: 'نظام نقاط البيع المتقدم',
                version: '2.0.3',
                company: 'Digital Creativity'
            };

            const result = await window.elementSdk.init({
                defaultConfig,
                onConfigChange: (config) => {
                    console.log('📝 تم تحديث إعدادات Element SDK:', config);
                }
            });

            if (result.isOk) {
                console.log('✅ تم تهيئة Element SDK');
            } else {
                console.error('❌ فشل في تهيئة Element SDK:', result.error);
            }
        } catch (error) {
            console.error('❌ خطأ في تهيئة Element SDK:', error);
        }
    }

    /**
     * تهيئة قاعدة البيانات المحلية
     */
    async initLocalDatabase() {
        try {
            // التحقق من توفر sqlite من خلال Electron
            if (typeof window.electron !== 'undefined' && window.electron.sqlite) {
                console.log('✅ قاعدة البيانات المحلية جاهزة');
            } else {
                console.warn('⚠️ قاعدة البيانات المحلية غير متوفرة');
            }
        } catch (error) {
            console.error('❌ خطأ في تهيئة قاعدة البيانات:', error);
        }
    }

    /**
     * تهيئة الشريط الجانبي
     */
    initSidebar() {
        const sidebar = document.getElementById('sidebar');
        const sidebarToggle = document.getElementById('sidebarToggle');
        
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => {
                this.toggleSidebar();
            });
        }

        // استعادة حالة الشريط الجانبي
        const sidebarCollapsed = getFromLocalStorage('sidebarCollapsed', false);
        if (sidebarCollapsed && sidebar) {
            sidebar.classList.add('collapsed');
        }
    }

    /**
     * تبديل الشريط الجانبي
     */
    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.toggle('collapsed');
            const isCollapsed = sidebar.classList.contains('collapsed');
            saveToLocalStorage('sidebarCollapsed', isCollapsed);
        }
    }

    /**
     * تهيئة الإشعارات
     */
    initNotifications() {
        // سيتم تهيئة نظام الإشعارات هنا
        console.log('✅ تم تهيئة نظام الإشعارات');
    }

    /**
     * تحميل بيانات المستخدم
     */
    async loadUserData() {
        try {
            this.currentUser = getFromLocalStorage('currentUser', null);
            
            if (this.currentUser) {
                console.log('✅ تم تحميل بيانات المستخدم:', this.currentUser.name);
            } else {
                console.log('ℹ️ لا يوجد مستخدم مسجل حالياً');
            }
        } catch (error) {
            console.error('❌ خطأ في تحميل بيانات المستخدم:', error);
        }
    }

    /**
     * إخفاء شاشة التحميل
     */
    hideSplashScreen() {
        const splash = document.querySelector('.splash-screen');
        if (splash) {
            setTimeout(() => {
                splash.style.opacity = '0';
                setTimeout(() => {
                    splash.style.display = 'none';
                }, 300);
            }, 500);
        }
    }

    /**
     * الحصول على الإعدادات الحالية
     */
    getSettings() {
        return { ...this.settings };
    }

    /**
     * الحصول على المستخدم الحالي
     */
    getCurrentUser() {
        return this.currentUser;
    }
}

// إنشاء نسخة واحدة من التطبيق
const app = new POSApp();

// تصدير للاستخدام العام
if (typeof window !== 'undefined') {
    window.app = app;
}

// بدء التطبيق عند تحميل الصفحة
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        app.init();
    });
} else {
    app.init();
}

console.log('✅ تم تحميل التطبيق الرئيسي');
