/** صفحة إدارة المخزن */
(function() {
    const InventoryPage = {
        name: 'inventory',
        initialized: false,
        async init() {
            if (this.initialized) return;
            console.log('🔄 تهيئة صفحة المخزن...');
            this.initialized = true;
        },
        onShow() {},
        async refresh() {}
    };
    if (typeof window.pageManager !== 'undefined') {
        window.pageManager.registerPage('inventory', InventoryPage);
    }
    window.inventoryPage = InventoryPage;
    InventoryPage.init();
})();
