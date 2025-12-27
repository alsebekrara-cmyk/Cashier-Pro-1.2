/**
 * صفحة الفواتير - Invoices Page
 */

(function() {
    'use strict';

    const InvoicesPage = {
        name: 'invoices',
        initialized: false,
        invoices: [],

        async init() {
            if (this.initialized) return;
            console.log('🔄 تهيئة صفحة الفواتير...');
            await this.loadInvoices();
            this.setupEvents();
            this.initialized = true;
            console.log('✅ تم تهيئة صفحة الفواتير');
        },

        onShow() {
            this.refreshInvoicesList();
        },

        setupEvents() {
            // إعداد أحداث الفواتير
        },

        async loadInvoices() {
            this.invoices = getFromLocalStorage('invoices', []);
            this.displayInvoices();
        },

        displayInvoices() {
            const container = document.getElementById('invoicesList');
            if (!container) return;

            if (this.invoices.length === 0) {
                container.innerHTML = '<div class="empty-state">لا توجد فواتير</div>';
                return;
            }

            container.innerHTML = this.invoices.map(inv => `
                <div class="invoice-row">
                    <span>${inv.id}</span>
                    <span>${formatDate(inv.date)}</span>
                    <span>${formatCurrency(inv.total)}</span>
                    <span>${inv.status}</span>
                    <div class="actions">
                        <button onclick="invoicesPage.viewInvoice('${inv.id}')">عرض</button>
                        <button onclick="invoicesPage.printInvoice('${inv.id}')">طباعة</button>
                    </div>
                </div>
            `).join('');
        },

        viewInvoice(invoiceId) {
            // TODO: عرض تفاصيل الفاتورة
            console.log('عرض الفاتورة:', invoiceId);
        },

        printInvoice(invoiceId) {
            // TODO: طباعة الفاتورة
            console.log('طباعة الفاتورة:', invoiceId);
        },

        refreshInvoicesList() {
            this.loadInvoices();
        },

        async refresh() {
            await this.loadInvoices();
        }
    };

    if (typeof window.pageManager !== 'undefined') {
        window.pageManager.registerPage('invoices', InvoicesPage);
    }
    window.invoicesPage = InvoicesPage;
    InvoicesPage.init();
    console.log('✅ تم تحميل صفحة الفواتير');
})();
