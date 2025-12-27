/**
 * صفحة إدارة المنتجات - Products Page
 */

(function() {
    'use strict';

    const ProductsPage = {
        name: 'products',
        initialized: false,
        products: [],

        async init() {
            if (this.initialized) return;
            console.log('🔄 تهيئة صفحة المنتجات...');
            await this.loadProducts();
            this.setupEvents();
            this.initialized = true;
            console.log('✅ تم تهيئة صفحة المنتجات');
        },

        onShow() {
            this.refreshProductsList();
        },

        setupEvents() {
            const addProductBtn = document.getElementById('addProductBtn');
            if (addProductBtn) {
                addProductBtn.addEventListener('click', () => this.showAddProductModal());
            }
        },

        async loadProducts() {
            this.products = getFromLocalStorage('products', []);
            this.displayProducts();
        },

        displayProducts() {
            const container = document.getElementById('productsList');
            if (!container) return;

            if (this.products.length === 0) {
                container.innerHTML = '<div class="empty-state">لا توجد منتجات</div>';
                return;
            }

            container.innerHTML = this.products.map(p => `
                <div class="product-row">
                    <span>${p.name}</span>
                    <span>${formatCurrency(p.price)}</span>
                    <span>${p.stock || 0}</span>
                    <div class="actions">
                        <button onclick="productsPage.editProduct('${p.id}')">تعديل</button>
                        <button onclick="productsPage.deleteProduct('${p.id}')">حذف</button>
                    </div>
                </div>
            `).join('');
        },

        showAddProductModal() {
            // TODO: عرض نافذة إضافة منتج
            console.log('عرض نافذة إضافة منتج');
        },

        async addProduct(productData) {
            this.products.push({ ...productData, id: generateUniqueId() });
            await saveToLocalStorage('products', this.products);
            this.displayProducts();
            showToast('تمت إضافة المنتج', 'success');
        },

        async editProduct(productId) {
            // TODO: تعديل المنتج
            console.log('تعديل المنتج:', productId);
        },

        async deleteProduct(productId) {
            this.products = this.products.filter(p => p.id !== productId);
            await saveToLocalStorage('products', this.products);
            this.displayProducts();
            showToast('تم حذف المنتج', 'success');
        },

        refreshProductsList() {
            this.loadProducts();
        },

        async refresh() {
            await this.loadProducts();
        }
    };

    if (typeof window.pageManager !== 'undefined') {
        window.pageManager.registerPage('products', ProductsPage);
    }
    window.productsPage = ProductsPage;
    ProductsPage.init();
    console.log('✅ تم تحميل صفحة المنتجات');
})();
