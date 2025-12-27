/** صفحة إدارة المصاريف */
(function() {
    const ExpensesPage = {
        name: 'expenses',
        initialized: false,
        async init() {
            if (this.initialized) return;
            console.log('🔄 تهيئة صفحة المصاريف...');
            this.initialized = true;
        },
        onShow() {},
        async refresh() {}
    };
    if (typeof window.pageManager !== 'undefined') {
        window.pageManager.registerPage('expenses', ExpensesPage);
    }
    window.expensesPage = ExpensesPage;
    ExpensesPage.init();
})();
