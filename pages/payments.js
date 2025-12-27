/** صفحة التسديدات */
(function() {
    const PaymentsPage = {
        name: 'payments',
        initialized: false,
        async init() {
            if (this.initialized) return;
            console.log('🔄 تهيئة صفحة التسديدات...');
            this.initialized = true;
        },
        onShow() {},
        async refresh() {}
    };
    if (typeof window.pageManager !== 'undefined') {
        window.pageManager.registerPage('payments', PaymentsPage);
    }
    window.paymentsPage = PaymentsPage;
    PaymentsPage.init();
})();
