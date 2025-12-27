/**
 * صفحة إدارة الديون - Debts Page
 */

(function() {
    'use strict';

    const DebtsPage = {
        name: 'debts',
        initialized: false,
        debts: [],

        async init() {
            if (this.initialized) return;
            console.log('🔄 تهيئة صفحة الديون...');
            await this.loadDebts();
            this.setupEvents();
            this.initialized = true;
            console.log('✅ تم تهيئة صفحة الديون');
        },

        onShow() {
            this.refreshDebtsList();
        },

        setupEvents() {},

        async loadDebts() {
            this.debts = getFromLocalStorage('debts', []);
            this.displayDebts();
        },

        displayDebts() {
            const container = document.getElementById('debtsList');
            if (!container) return;

            if (this.debts.length === 0) {
                container.innerHTML = '<div class="empty-state">لا توجد ديون</div>';
                return;
            }

            container.innerHTML = this.debts.map(debt => `
                <div class="debt-row">
                    <span>${debt.customer_name}</span>
                    <span>${formatCurrency(debt.total_amount)}</span>
                    <span>${formatCurrency(debt.paid_amount)}</span>
                    <span>${formatCurrency(debt.remaining_amount)}</span>
                    <div class="actions">
                        <button onclick="debtsPage.viewDebt('${debt.id}')">عرض</button>
                        <button onclick="debtsPage.recordPayment('${debt.id}')">تسديد</button>
                    </div>
                </div>
            `).join('');
        },

        viewDebt(debtId) {
            console.log('عرض الدين:', debtId);
        },

        recordPayment(debtId) {
            console.log('تسديد الدين:', debtId);
        },

        refreshDebtsList() {
            this.loadDebts();
        },

        async refresh() {
            await this.loadDebts();
        }
    };

    if (typeof window.pageManager !== 'undefined') {
        window.pageManager.registerPage('debts', DebtsPage);
    }
    window.debtsPage = DebtsPage;
    DebtsPage.init();
    console.log('✅ تم تحميل صفحة الديون');
})();
