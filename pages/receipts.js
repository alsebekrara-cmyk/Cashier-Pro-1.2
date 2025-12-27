/** صفحة إدارة الإيصالات */
(function() {
    const ReceiptsPage = {
        name: 'receipts',
        initialized: false,
        async init() {
            if (this.initialized) return;
            console.log('🔄 تهيئة صفحة الإيصالات...');
            this.initialized = true;
        },
        onShow() {},
        async refresh() {}
    };
    if (typeof window.pageManager !== 'undefined') {
        window.pageManager.registerPage('receipts', ReceiptsPage);
    }
    window.receiptsPage = ReceiptsPage;
    ReceiptsPage.init();
})();
