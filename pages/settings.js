/**
 * صفحة الإعدادات - Settings Page
 */

(function() {
    'use strict';

    const SettingsPage = {
        name: 'settings',
        initialized: false,

        async init() {
            if (this.initialized) return;
            console.log('🔄 تهيئة صفحة الإعدادات...');
            this.loadSettings();
            this.setupEvents();
            this.initialized = true;
            console.log('✅ تم تهيئة صفحة الإعدادات');
        },

        onShow() {
            this.loadSettings();
        },

        setupEvents() {
            const saveBtn = document.getElementById('saveSettingsBtn');
            if (saveBtn) {
                saveBtn.addEventListener('click', () => this.saveSettings());
            }

            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', () => {
                    window.app.toggleTheme();
                });
            }
        },

        loadSettings() {
            if (!window.app) return;
            
            const settings = window.app.getSettings();
            
            const storeNameInput = document.getElementById('storeName');
            if (storeNameInput) storeNameInput.value = settings.storeName || '';
            
            const storeAddressInput = document.getElementById('storeAddress');
            if (storeAddressInput) storeAddressInput.value = settings.storeAddress || '';
            
            const storePhoneInput = document.getElementById('storePhone');
            if (storePhoneInput) storePhoneInput.value = settings.storePhone || '';
        },

        async saveSettings() {
            const settings = {
                storeName: document.getElementById('storeName')?.value,
                storeAddress: document.getElementById('storeAddress')?.value,
                storePhone: document.getElementById('storePhone')?.value
            };

            if (window.app) {
                await window.app.saveSettings(settings);
                showToast('تم حفظ الإعدادات', 'success');
            }
        },

        async refresh() {
            this.loadSettings();
        }
    };

    if (typeof window.pageManager !== 'undefined') {
        window.pageManager.registerPage('settings', SettingsPage);
    }
    window.settingsPage = SettingsPage;
    SettingsPage.init();
    console.log('✅ تم تحميل صفحة الإعدادات');
})();
