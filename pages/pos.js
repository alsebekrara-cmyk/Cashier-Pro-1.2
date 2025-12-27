/**
 * =============================================
 * صفحة نقطة البيع - POS Page
 * نظام نقاط البيع - Digital Creativity
 * =============================================
 */

(function() {
    'use strict';

    const POSPage = {
        name: 'pos',
        initialized: false,
        cart: [],
        selectedCustomer: null,
        paymentType: 'cash',

        /**
         * تهيئة الصفحة
         */
        async init() {
            if (this.initialized) return;

            try {
                console.log('🔄 تهيئة صفحة نقطة البيع...');
                
                // تحميل المنتجات
                await this.loadProducts();
                
                // إعداد الأحداث
                this.setupEvents();
                
                // تحميل سلة التسوق المحفوظة
                this.loadCart();
                
                this.initialized = true;
                console.log('✅ تم تهيئة صفحة نقطة البيع');
            } catch (error) {
                console.error('❌ خطأ في تهيئة صفحة نقطة البيع:', error);
            }
        },

        /**
         * عند عرض الصفحة
         */
        onShow() {
            console.log('👁️ عرض صفحة نقطة البيع');
            this.refreshProductsList();
            this.updateCartDisplay();
        },

        /**
         * عند إخفاء الصفحة
         */
        onHide() {
            console.log('👋 إخفاء صفحة نقطة البيع');
            this.saveCart();
        },

        /**
         * إعداد الأحداث
         */
        setupEvents() {
            // حدث البحث عن منتج
            const searchInput = document.getElementById('posSearchInput');
            if (searchInput) {
                searchInput.addEventListener('input', debounce((e) => {
                    this.searchProducts(e.target.value);
                }, 300));
            }

            // حدث تغيير نوع الدفع
            const paymentTypeInputs = document.querySelectorAll('input[name="paymentType"]');
            paymentTypeInputs.forEach(input => {
                input.addEventListener('change', (e) => {
                    this.paymentType = e.target.value;
                    this.handlePaymentTypeChange();
                });
            });

            // حدث إتمام البيع
            const checkoutBtn = document.getElementById('posCheckoutBtn');
            if (checkoutBtn) {
                checkoutBtn.addEventListener('click', () => {
                    this.checkout();
                });
            }

            // حدث مسح السلة
            const clearCartBtn = document.getElementById('posClearCartBtn');
            if (clearCartBtn) {
                clearCartBtn.addEventListener('click', () => {
                    this.clearCart();
                });
            }
        },

        /**
         * تحميل المنتجات
         */
        async loadProducts() {
            try {
                // TODO: تحميل المنتجات من قاعدة البيانات
                console.log('📦 تحميل المنتجات...');
                
                // مثال: استخدام localStorage كبديل مؤقت
                const products = getFromLocalStorage('products', []);
                this.displayProducts(products);
                
            } catch (error) {
                console.error('❌ خطأ في تحميل المنتجات:', error);
                showToast('فشل تحميل المنتجات', 'error');
            }
        },

        /**
         * عرض المنتجات
         */
        displayProducts(products) {
            const container = document.getElementById('posProductsList');
            if (!container) return;

            if (products.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <i class="fas fa-box-open"></i>
                        <p>لا توجد منتجات متاحة</p>
                        <button class="btn btn-primary" onclick="showPage('products')">
                            إضافة منتجات
                        </button>
                    </div>
                `;
                return;
            }

            container.innerHTML = products.map(product => `
                <div class="product-card" onclick="posPage.addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})">
                    <div class="product-image">
                        <img src="${product.image || 'assets/default-product.png'}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h4>${product.name}</h4>
                        <p class="product-price">${formatCurrency(product.price)}</p>
                        <p class="product-stock">المخزون: ${product.stock || 0}</p>
                    </div>
                </div>
            `).join('');
        },

        /**
         * البحث عن منتجات
         */
        searchProducts(query) {
            const products = getFromLocalStorage('products', []);
            
            if (!query) {
                this.displayProducts(products);
                return;
            }

            const filtered = products.filter(p => 
                p.name.toLowerCase().includes(query.toLowerCase()) ||
                (p.barcode && p.barcode.includes(query))
            );

            this.displayProducts(filtered);
        },

        /**
         * إضافة منتج للسلة
         */
        addToCart(product) {
            const existingItem = this.cart.find(item => item.id === product.id);
            
            if (existingItem) {
                existingItem.quantity++;
            } else {
                this.cart.push({
                    ...product,
                    quantity: 1
                });
            }

            this.updateCartDisplay();
            showToast(`تمت إضافة ${product.name} للسلة`, 'success', 1500);
        },

        /**
         * حذف منتج من السلة
         */
        removeFromCart(productId) {
            this.cart = this.cart.filter(item => item.id !== productId);
            this.updateCartDisplay();
        },

        /**
         * تحديث كمية منتج في السلة
         */
        updateCartQuantity(productId, quantity) {
            const item = this.cart.find(item => item.id === productId);
            
            if (item) {
                item.quantity = parseInt(quantity);
                if (item.quantity <= 0) {
                    this.removeFromCart(productId);
                } else {
                    this.updateCartDisplay();
                }
            }
        },

        /**
         * تحديث عرض السلة
         */
        updateCartDisplay() {
            const container = document.getElementById('posCartItems');
            const totalElement = document.getElementById('posCartTotal');
            
            if (!container) return;

            if (this.cart.length === 0) {
                container.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <p>السلة فارغة</p>
                    </div>
                `;
                if (totalElement) totalElement.textContent = '0 د.ع';
                return;
            }

            container.innerHTML = this.cart.map(item => `
                <div class="cart-item">
                    <div class="item-info">
                        <h5>${item.name}</h5>
                        <p class="item-price">${formatCurrency(item.price)}</p>
                    </div>
                    <div class="item-quantity">
                        <input type="number" 
                               value="${item.quantity}" 
                               min="1" 
                               onchange="posPage.updateCartQuantity('${item.id}', this.value)">
                    </div>
                    <div class="item-total">
                        <p>${formatCurrency(item.price * item.quantity)}</p>
                    </div>
                    <button class="btn-remove" onclick="posPage.removeFromCart('${item.id}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `).join('');

            // حساب الإجمالي
            const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            if (totalElement) {
                totalElement.textContent = formatCurrency(total);
            }
        },

        /**
         * معالجة تغيير نوع الدفع
         */
        handlePaymentTypeChange() {
            const installmentOptions = document.getElementById('posInstallmentOptions');
            
            if (this.paymentType === 'installment' && installmentOptions) {
                installmentOptions.style.display = 'block';
            } else if (installmentOptions) {
                installmentOptions.style.display = 'none';
            }
        },

        /**
         * إتمام البيع
         */
        async checkout() {
            if (this.cart.length === 0) {
                showToast('السلة فارغة', 'warning');
                return;
            }

            try {
                showLoading(true, 'جاري إتمام البيع...');

                const invoice = {
                    id: generateUniqueId(),
                    items: this.cart,
                    total: this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                    paymentType: this.paymentType,
                    customer: this.selectedCustomer,
                    date: new Date().toISOString(),
                    status: 'completed'
                };

                // TODO: حفظ الفاتورة في قاعدة البيانات
                
                // حفظ مؤقتاً في localStorage
                const invoices = getFromLocalStorage('invoices', []);
                invoices.push(invoice);
                await saveToLocalStorage('invoices', invoices);

                // طباعة الفاتورة إذا كان متاحاً
                if (typeof window.printInvoice === 'function') {
                    window.printInvoice(invoice);
                }

                // مسح السلة
                this.clearCart();
                
                showToast('تم إتمام البيع بنجاح', 'success');
                showLoading(false);

            } catch (error) {
                console.error('❌ خطأ في إتمام البيع:', error);
                showToast('فشل في إتمام البيع', 'error');
                showLoading(false);
            }
        },

        /**
         * مسح السلة
         */
        clearCart() {
            this.cart = [];
            this.selectedCustomer = null;
            this.updateCartDisplay();
            showToast('تم مسح السلة', 'info');
        },

        /**
         * حفظ السلة
         */
        saveCart() {
            saveToLocalStorage('posCart', this.cart);
        },

        /**
         * تحميل السلة المحفوظة
         */
        loadCart() {
            this.cart = getFromLocalStorage('posCart', []);
            this.updateCartDisplay();
        },

        /**
         * تحديث قائمة المنتجات
         */
        refreshProductsList() {
            this.loadProducts();
        },

        /**
         * تحديث الصفحة
         */
        async refresh() {
            await this.loadProducts();
            this.updateCartDisplay();
        }
    };

    // تسجيل الصفحة في مدير الصفحات
    if (typeof window.pageManager !== 'undefined') {
        window.pageManager.registerPage('pos', POSPage);
    }

    // تصدير للاستخدام العام
    if (typeof window !== 'undefined') {
        window.posPage = POSPage;
    }

    // تهيئة الصفحة
    POSPage.init();

    console.log('✅ تم تحميل صفحة نقطة البيع');
})();
