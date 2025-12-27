      </div>
     </div>

     <!-- صفحة إعدادات الأمان -->
     <div id="settings-security" class="page" style="display: none;">
      <div class="section-header">
       <button class="btn btn-secondary" onclick="showPage('settings')" style="margin-left: 1rem;">
         <i class="fas fa-arrow-right"></i> رجوع
       </button>
       <div class="section-title"><i class="fas fa-shield-alt"></i> الأمان والخصوصية</div>
      </div>

      <div class="settings-full-width">
        <div class="settings-content-wrapper">
          
          <!-- كلمة المرور -->
          <div class="settings-section">
            <h3 style="margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px solid rgba(255,255,255,0.1);">
              <i class="fas fa-key"></i> كلمة المرور
            </h3>

            <div class="form-group">
              <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                <input type="checkbox" id="enablePassword" style="width: auto;">
                <span>تفعيل الحماية بكلمة مرور</span>
              </label>
            </div>

            <div id="passwordFields" style="display: none;">
              <div class="form-group">
                <label class="form-label">كلمة المرور الحالية</label>
                <input type="password" class="form-input" id="currentPassword">
              </div>

              <div class="form-group">
                <label class="form-label">كلمة المرور الجديدة</label>
                <input type="password" class="form-input" id="newPassword">
              </div>

              <div class="form-group">
                <label class="form-label">تأكيد كلمة المرور</label>
                <input type="password" class="form-input" id="confirmPassword">
              </div>

              <button class="btn btn-warning" onclick="changePassword()">
                <i class="fas fa-key"></i> تغيير كلمة المرور
              </button>
            </div>
          </div>

          <!-- الصلاحيات -->
          <div class="settings-section">
            <h3 style="margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px solid rgba(255,255,255,0.1);">
              <i class="fas fa-user-shield"></i> الصلاحيات
            </h3>

            <div class="form-group">
              <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                <input type="checkbox" id="requirePasswordForDelete" checked style="width: auto;">
                <span>طلب كلمة المرور عند الحذف</span>
              </label>
            </div>

            <div class="form-group">
              <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                <input type="checkbox" id="requirePasswordForReports" style="width: auto;">
                <span>طلب كلمة المرور لعرض التقارير المالية</span>
              </label>
            </div>

            <div class="form-group">
              <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                <input type="checkbox" id="requirePasswordForSettings" checked style="width: auto;">
                <span>طلب كلمة المرور لتعديل الإعدادات</span>
              </label>
            </div>
          </div>

          <!-- سجل النشاطات -->
          <div class="settings-section">
            <h3 style="margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px solid rgba(255,255,255,0.1);">
              <i class="fas fa-history"></i> سجل النشاطات
            </h3>

            <div class="form-group">
              <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                <input type="checkbox" id="enableActivityLog" checked style="width: auto;">
                <span>تفعيل سجل النشاطات</span>
              </label>
              <small style="color: var(--theme-text-secondary); margin-top: 0.5rem; display: block;">
                تسجيل جميع العمليات (البيع، الحذف، التعديل)
              </small>
            </div>

            <div class="form-group">
              <label class="form-label">مدة الاحتفاظ بالسجل</label>
              <select class="form-select" id="logRetentionPeriod">
                <option value="30">30 يوم</option>
                <option value="90" selected>90 يوم</option>
                <option value="180">180 يوم</option>
                <option value="365">سنة كاملة</option>
                <option value="0">بدون حد</option>
              </select>
            </div>

            <button class="btn btn-secondary" onclick="viewActivityLog()">
              <i class="fas fa-list"></i> عرض سجل النشاطات
            </button>
          </div>

          <div class="form-actions">
            <button class="btn btn-primary" onclick="saveSecuritySettings()">
              <i class="fas fa-save"></i> حفظ جميع الإعدادات
            </button>
            <button class="btn btn-secondary" onclick="showPage('settings')">
              <i class="fas fa-times"></i> إلغاء
            </button>
          </div>

        </div>
      </div>
     </div>

    </div>
   </main>
  </div><!-- نافذة إضافة منتج -->
  <div id="addProductModal" class="modal">
   <div class="modal-content">
    <div class="modal-header">
     <h3 class="modal-title"><i class="fas fa-plus-circle"></i> إضافة منتج جديد</h3><button class="close-btn" onclick="closeModal('addProductModal')"> <i class="fas fa-times"></i> </button>
    </div>
    <form id="addProductForm">
     <div class="form-grid">
      <div class="form-group"><label class="form-label"> <i class="fas fa-tag"></i> اسم المنتج </label> <input type="text" class="form-input" id="productName" required>
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-barcode"></i> الباركود </label>
       <div class="barcode-section"><input type="text" class="form-input barcode-input" id="productBarcode"> <button type="button" class="generate-barcode-btn" onclick="generateBarcode()"> <i class="fas fa-magic"></i> توليد </button>
       </div>
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-layer-group"></i> التصنيف </label> <select class="form-select" id="productCategory" required> <option value="">اختر التصنيف</option> </select>
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-truck"></i> المورد </label> <input type="text" class="form-input" id="productSupplier">
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-coins"></i> سعر التكلفة (مفرد) </label> <input type="number" class="form-input" id="productCostRetail" required>
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-coins"></i> سعر التكلفة (جملة) </label> <input type="number" class="form-input" id="productCostWholesale">
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-money-bill"></i> سعر البيع (مفرد) </label> <input type="number" class="form-input" id="productPriceRetail" required>
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-money-bill"></i> سعر البيع (جملة) </label> <input type="number" class="form-input" id="productPriceWholesale">
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-warehouse"></i> الكمية الحالية </label> <input type="number" class="form-input" id="productStock" required>
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-exclamation-triangle"></i> الحد الأدنى للمخزون </label> <input type="number" class="form-input" id="productMinStock" value="10">
      </div>
     </div>
     <div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal('addProductModal')"> <i class="fas fa-times"></i> إلغاء </button> <button type="submit" class="btn btn-primary"> <i class="fas fa-save"></i> حفظ المنتج </button>
     </div>
    </form>
   </div>
  </div><!-- نافذة تعديل منتج -->
  <div id="editProductModal" class="modal">
   <div class="modal-content">
    <div class="modal-header">
     <h3 class="modal-title"><i class="fas fa-edit"></i> تعديل المنتج</h3><button class="close-btn" onclick="closeModal('editProductModal')"> <i class="fas fa-times"></i> </button>
    </div>
    <form id="editProductForm" onsubmit="handleEditProduct(event)">
     <input type="hidden" id="editProductId">
     <div class="form-grid">
      <div class="form-group"><label class="form-label"> <i class="fas fa-tag"></i> اسم المنتج </label> <input type="text" class="form-input" id="editProductName" required>
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-barcode"></i> الباركود </label> <input type="text" class="form-input" id="editProductBarcode">
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-layer-group"></i> التصنيف </label> <select class="form-select" id="editProductCategory" required> <option value="">اختر التصنيف</option> </select>
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-truck"></i> المورد </label> <input type="text" class="form-input" id="editProductSupplier">
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-coins"></i> سعر التكلفة (مفرد) </label> <input type="number" class="form-input" id="editProductCostRetail" required>
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-coins"></i> سعر التكلفة (جملة) </label> <input type="number" class="form-input" id="editProductCostWholesale">
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-money-bill"></i> سعر البيع (مفرد) </label> <input type="number" class="form-input" id="editProductPriceRetail" required>
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-money-bill"></i> سعر البيع (جملة) </label> <input type="number" class="form-input" id="editProductPriceWholesale">
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-warehouse"></i> الكمية الحالية </label> <input type="number" class="form-input" id="editProductStock" required>
      </div>
      <div class="form-group"><label class="form-label"> <i class="fas fa-exclamation-triangle"></i> الحد الأدنى للمخزون </label> <input type="number" class="form-input" id="editProductMinStock">
      </div>
     </div>
     <div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal('editProductModal')"> <i class="fas fa-times"></i> إلغاء </button> <button type="submit" class="btn btn-success"> <i class="fas fa-save"></i> حفظ التعديلات </button>
     </div>
    </form>
   </div>
  </div><!-- نافذة إضافة تصنيف -->
  <div id="addCategoryModal" class="modal">
   <div class="modal-content">
    <div class="modal-header">
     <h3 class="modal-title"><i class="fas fa-plus-circle"></i> إضافة تصنيف جديد</h3><button class="close-btn" onclick="closeModal('addCategoryModal')"> <i class="fas fa-times"></i> </button>
    </div>
    <form id="addCategoryForm">
     <div class="form-group"><label class="form-label"> <i class="fas fa-tag"></i> اسم التصنيف </label> <input type="text" class="form-input" id="categoryName" required>
     </div>
     <div class="form-group"><label class="form-label"> <i class="fas fa-icons"></i> اختيار الأيقونة </label>
      <div class="category-icon-grid" id="categoryIconGrid"><!-- الأيقونات ستظهر هنا -->
      </div><input type="hidden" id="selectedCategoryIcon" value="fas fa-box">
     </div>
     <div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal('addCategoryModal')"> <i class="fas fa-times"></i> إلغاء </button> <button type="submit" class="btn btn-primary"> <i class="fas fa-save"></i> حفظ التصنيف </button>
     </div>
    </form>
   </div>
  </div><!-- نافذة اختيار طريقة الدفع -->
  <div id="paymentModal" class="modal">
   <div class="modal-content" style="max-width: 800px; max-height: 90vh; overflow-y: auto;">
    <div class="modal-header">
     <h3 class="modal-title"><i class="fas fa-credit-card"></i> اختيار طريقة الدفع</h3>
     <button class="close-btn" onclick="closeModal('paymentModal')">
         <i class="fas fa-times"></i>
     </button>
    </div>
    
    <!-- خيارات طريقة الدفع -->
    <div class="payment-options-container">
        <button class="payment-option-card cash-payment" onclick="processCashPayment()">
            <div class="payment-option-icon">
                <i class="fas fa-money-bill-wave"></i>
            </div>
            <div class="payment-option-title">دفع نقدي</div>
            <div class="payment-option-description">إتمام البيع فوراً بالدفع النقدي</div>
        </button>
        
        <button class="payment-option-card installment-payment" onclick="showInstallmentForm()">
            <div class="payment-option-icon">
                <i class="fas fa-calendar-alt"></i>
            </div>
            <div class="payment-option-title">دفع بالأقساط</div>
            <div class="payment-option-description">تقسيم المبلغ على عدة أشهر</div>
        </button>
    </div>
    
    <!-- نموذج الأقساط -->
    <div id="installmentForm" class="installment-form">
        <div class="installment-header">
            <i class="fas fa-user-edit"></i>
            <h4>بيانات العميل والأقساط</h4>
        </div>
        
        <!-- معلومات العميل -->
        <div class="form-section">
            <div class="section-title">
                <i class="fas fa-user-circle"></i>
                <span>معلومات العميل</span>
            </div>
            
            <!-- خيار البحث عن عميل مدين -->
            <div class="form-group">
                <label class="form-label">
                    <i class="fas fa-search"></i>
                    البحث عن عميل مدين موجود (اختياري)
                </label>
                <div class="search-customer-wrapper">
                    <input type="text" 
                           class="form-input" 
                           id="searchExistingCustomer" 
                           placeholder="ابحث بالاسم أو رقم الهاتف..."
                           oninput="searchDebtCustomers(this.value)">
                    <div id="customerSearchResults" class="customer-search-results"></div>
                </div>
                <small class="form-hint">
                    <i class="fas fa-info-circle"></i>
                    اختر عميل موجود لإضافة الدين إلى حسابه، أو أدخل بيانات عميل جديد
                </small>
            </div>
            
            <div class="form-grid-2">
                <div class="form-group">
                    <label class="form-label">
                        <i class="fas fa-user"></i>
                        اسم العميل
                        <span class="required">*</span>
                    </label>
                    <input type="text" class="form-input" id="customerName" placeholder="أدخل اسم العميل" required>
                </div>
                <div class="form-group">
                    <label class="form-label">
                        <i class="fas fa-phone"></i>
                        رقم الهاتف
                        <span class="required">*</span>
                    </label>
                    <input type="text" class="form-input" id="customerPhone" placeholder="07XX XXX XXXX" required>
                </div>
            </div>
            <div class="form-group">
                <label class="form-label">
                    <i class="fas fa-map-marker-alt"></i>
                    العنوان (اختياري)
                </label>
                <input type="text" class="form-input" id="customerAddress" placeholder="أدخل عنوان العميل">
            </div>
        </div>
        
        <!-- تفاصيل الأقساط -->
        <div class="form-section">
            <div class="section-title">
                <i class="fas fa-calculator"></i>
                <span>تفاصيل الأقساط</span>
            </div>
            
            <!-- خيارات التحكم المتقدمة -->
            <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05)); padding: 1rem; border-radius: 8px; margin-bottom: 1rem; border-right: 4px solid var(--primary-color);">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
                    <i class="fas fa-sliders-h" style="color: var(--primary-color);"></i>
                    <span style="font-weight: 600; color: var(--theme-text-primary); font-size: 0.95rem;">وضع التحكم المتقدم</span>
                </div>
                <div class="form-group" style="margin: 0;">
                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; user-select: none;">
                        <input type="checkbox" id="advancedEditMode" onchange="toggleAdvancedEditMode()" style="width: 18px; height: 18px; cursor: pointer;">
                        <span style="font-size: 0.9rem; color: var(--theme-text-secondary);">
                            تفعيل التعديل المباشر على المبالغ (المبلغ الأصلي، الإجمالي، القسط الشهري)
                        </span>
                    </label>
                    <small class="form-hint" style="margin-top: 0.5rem; margin-right: 1.75rem;">
                        <i class="fas fa-info-circle"></i>
                        تفعيل هذا الخيار يتيح لك التحكم الكامل في قيم المبالغ والأقساط
                    </small>
                </div>
            </div>
            
            <div class="form-grid-3">
                <div class="form-group">
                    <label class="form-label">
                        <i class="fas fa-calendar"></i>
                        عدد الأشهر
                    </label>
                    <input type="number" class="form-input" id="installmentMonths" min="1" max="60" value="12" onchange="calculateInstallment()">
                    <small class="form-hint">من 1 إلى 60 شهر</small>
                </div>
                <div class="form-group">
                    <label class="form-label">
                        <i class="fas fa-money-bill-wave"></i>
                        المبلغ الإضافي
                    </label>
                    <input type="number" class="form-input" id="additionalAmount" value="0" min="0" step="1000" placeholder="0" onchange="calculateInstallment()">
                    <small class="form-hint">الزيادة على المبلغ الأصلي</small>
                </div>
                <div class="form-group">
                    <label class="form-label">
                        <i class="fas fa-hand-holding-usd"></i>
                        الدفعة المقدمة
                    </label>
                    <input type="number" class="form-input" id="downPayment" value="0" min="0" step="1000" placeholder="0" onchange="calculateInstallment()">
                    <small class="form-hint">المبلغ المدفوع مقدماً</small>
                </div>
            </div>
            
            <!-- تاريخ بداية الأقساط -->
            <div class="form-group">
                <label class="form-label">
                    <i class="fas fa-calendar-alt"></i>
                    تاريخ بداية الأقساط
                </label>
                <input type="date" class="form-input" id="installmentStartDate">
                <small class="form-hint">حدد تاريخ بداية استحقاق الأقساط (اختياري)</small>
            </div>
            
            <!-- حقول التعديل المتقدم (مخفية افتراضياً) -->
            <div id="advancedEditFields" style="display: none; margin-top: 1rem;">
                <div style="background: rgba(255, 193, 7, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem; border-right: 4px solid var(--warning-color);">
                    <div style="display: flex; gap: 0.5rem; align-items: start;">
                        <i class="fas fa-exclamation-triangle" style="color: var(--warning-color); margin-top: 0.2rem;"></i>
                        <div style="flex: 1;">
                            <p style="margin: 0; font-size: 0.85rem; color: var(--theme-text-primary); line-height: 1.4;">
                                <strong>وضع التحكم المتقدم مفعّل:</strong> يمكنك الآن تعديل المبالغ مباشرة. 
                                أي تغيير ستقوم به سيؤثر على باقي الحسابات تلقائياً.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="form-grid-3">
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-shopping-cart"></i>
                            تعديل المبلغ الأصلي
                        </label>
                        <input type="number" class="form-input" id="customOriginalAmount" placeholder="المبلغ الأصلي" step="1000" min="0" oninput="recalculateFromOriginal()">
                        <small class="form-hint">
                            <i class="fas fa-sync-alt"></i> سيتم إعادة حساب الإجمالي والقسط
                        </small>
                    </div>
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-wallet"></i>
                            تعديل المبلغ الإجمالي
                        </label>
                        <input type="number" class="form-input" id="customTotalAmount" placeholder="المبلغ الإجمالي" step="1000" min="0" oninput="recalculateFromTotal()">
                        <small class="form-hint">
                            <i class="fas fa-sync-alt"></i> سيتم إعادة حساب القسط الشهري
                        </small>
                    </div>
                    <div class="form-group">
                        <label class="form-label">
                            <i class="fas fa-calendar-check"></i>
                            تعديل القسط الشهري
                        </label>
                        <input type="number" class="form-input" id="customMonthlyAmount" placeholder="القسط الشهري" step="100" min="0" oninput="recalculateFromMonthly()">
                        <small class="form-hint">
                            <i class="fas fa-sync-alt"></i> سيتم إعادة حساب الإجمالي
                        </small>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- ملخص الحساب -->
        <div class="installment-summary">
            <div class="summary-title">
                <i class="fas fa-file-invoice-dollar"></i>
                <span>ملخص الحساب</span>
            </div>
            <div class="summary-items">
                <div class="summary-row">
                    <span class="summary-label">
                        <i class="fas fa-shopping-cart"></i>
                        المبلغ الأصلي
                    </span>
                    <span class="summary-value" id="originalAmount">0 دينار</span>
                </div>
                <div class="summary-row">
                    <span class="summary-label">
                        <i class="fas fa-plus-circle"></i>
                        المبلغ الإضافي
                    </span>
                    <span class="summary-value text-warning" id="addedProfit">0 دينار</span>
                </div>
                <div class="summary-row" id="downPaymentRow" style="display: none;">
                    <span class="summary-label">
                        <i class="fas fa-hand-holding-usd"></i>
                        الدفعة المقدمة
                    </span>
                    <span class="summary-value text-success" id="downPaymentDisplay">0 دينار</span>
                </div>
                <div class="summary-divider"></div>
                <div class="summary-row total-row">
                    <span class="summary-label">
                        <i class="fas fa-wallet"></i>
                        المبلغ الإجمالي
                    </span>
                    <span class="summary-value" id="totalInstallmentAmount">0 دينار</span>
                </div>
                <div class="summary-row monthly-row">
                    <span class="summary-label">
                        <i class="fas fa-calendar-check"></i>
                        القسط الشهري
                    </span>
                    <span class="summary-value highlight" id="monthlyPayment">0 دينار</span>
                </div>
            </div>
        </div>
        
        <!-- أزرار الإجراءات -->
        <div class="form-actions">
            <button type="button" class="btn btn-secondary" onclick="closeModal('paymentModal')">
                <i class="fas fa-times"></i>
                إلغاء
            </button>
            <button type="button" class="btn btn-primary" onclick="processInstallmentPayment()">
                <i class="fas fa-check-circle"></i>
                حفظ وإتمام البيع
            </button>
        </div>
    </div>
   </div>
  </div><!-- نافذة تفاصيل المنتج -->
  <div id="productDetailsModal" class="modal">
   <div class="modal-content">
    <div class="modal-header">
     <h3 class="modal-title"><i class="fas fa-info-circle"></i> تفاصيل المنتج</h3><button class="close-btn" onclick="closeModal('productDetailsModal')"> <i class="fas fa-times"></i> </button>
    </div>
    <div id="productDetailsContent"><!-- تفاصيل المنتج ستظهر هنا -->
    </div>
   </div>
  </div><!-- نافذة تفاصيل الفاتورة -->
  <div id="invoiceDetailsModal" class="modal">
   <div class="modal-content" style="max-width: 800px;">
    <div class="modal-header">
     <h3 class="modal-title"><i class="fas fa-file-invoice"></i> تفاصيل الفاتورة</h3><button class="close-btn" onclick="closeModal('invoiceDetailsModal')"> <i class="fas fa-times"></i> </button>
    </div>
    <div id="invoiceDetailsContent"><!-- تفاصيل الفاتورة ستظهر هنا -->
    </div>
   </div>
  </div><!-- نافذة تفاصيل الدين -->
  <div id="debtDetailsModal" class="modal">
   <div class="modal-content">
    <div class="modal-header">
     <h3 class="modal-title"><i class="fas fa-user-circle"></i> تفاصيل العميل والدين</h3><button class="close-btn" onclick="closeModal('debtDetailsModal')"> <i class="fas fa-times"></i> </button>
    </div>
    <div id="debtDetailsContent"><!-- تفاصيل الدين ستظهر هنا -->
    </div>
   </div>
  </div><!-- نافذة تسديد الدين -->
  <div id="payDebtModal" class="modal">
   <div class="modal-content">
    <div class="modal-header">
     <h3 class="modal-title"><i class="fas fa-money-check-alt"></i> تسديد دين</h3><button class="close-btn" onclick="closeModal('payDebtModal')"> <i class="fas fa-times"></i> </button>
    </div>
    <form id="payDebtForm">
     <div class="form-group"><label class="form-label">المبلغ المتبقي</label> <input type="text" class="form-input" id="remainingDebtAmount" readonly>
     </div>
     <div class="form-group"><label class="form-label">مبلغ التسديد</label> <input type="number" class="form-input" id="paymentAmount" required>
     </div>
     <div class="form-group"><label class="form-label">ملاحظات</label> <textarea class="form-input" id="paymentNotes" rows="3"></textarea>
     </div>
     <div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal('payDebtModal')"> <i class="fas fa-times"></i> إلغاء </button> <button type="submit" class="btn btn-success"> <i class="fas fa-check"></i> تسديد </button>
     </div>
    </form>
   </div>
  </div><!-- نافذة تسديد قسط شهري -->
  <div id="payInstallmentModal" class="modal">
   <div class="modal-content">
    <div class="modal-header">
     <h3 class="modal-title"><i class="fas fa-money-check-alt"></i> تسديد القسط الشهري</h3><button class="close-btn" onclick="closeModal('payInstallmentModal')"> <i class="fas fa-times"></i> </button>
    </div>
    <form id="payInstallmentForm" onsubmit="handlePayInstallment(event)">
     <div class="form-group"><label class="form-label">الشهر</label> <input type="text" class="form-input" id="installmentMonthDisplay" readonly>
     </div>
     <div class="form-group">
      <label class="form-label">مبلغ القسط <span style="color: var(--theme-text-secondary); font-size: 0.85em;">(يمكن التعديل)</span></label>
      <input type="number" class="form-input" id="installmentAmountInput" placeholder="سيتم ملؤه تلقائياً" step="1" min="0" required style="font-size: 1.1em; font-weight: 600; color: var(--primary-color);">
     </div>
     <div class="form-group"><label class="form-label">ملاحظات (اختياري)</label> <textarea class="form-input" id="installmentNotes" rows="3" placeholder="أضف ملاحظة إذا أردت..."></textarea>
     </div>
     <div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal('payInstallmentModal')"> <i class="fas fa-times"></i> إلغاء </button> <button type="submit" class="btn btn-success"> <i class="fas fa-check"></i> تسديد </button>
     </div>
    </form>
   </div>
  </div><!-- نافذة تأكيد الحذف -->
  <div id="confirmDeleteModal" class="modal">
   <div class="modal-content" style="max-width: 500px;">
    <div class="modal-header">
     <h3 class="modal-title" style="color: var(--danger-color);"><i class="fas fa-exclamation-triangle"></i> تحذير: حذف الدين</h3><button class="close-btn" onclick="closeModal('confirmDeleteModal')"> <i class="fas fa-times"></i> </button>
    </div>
    <div style="padding: 1rem 0;">
     <div style="background: var(--danger-gradient); opacity: 0.1; padding: 2rem; border-radius: 12px; text-align: center; margin-bottom: 1.5rem;"><i class="fas fa-exclamation-circle" style="font-size: 4rem; color: var(--danger-color);"></i>
     </div>
     <div style="text-align: center; margin-bottom: 1.5rem;">
      <h4 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--theme-text-primary);">هل أنت متأكد من حذف هذا الدين؟</h4>
      <p style="color: var(--theme-text-secondary); font-size: 0.95rem;">العميل: <strong id="deleteDebtCustomerName" style="color: var(--theme-text-primary);"></strong></p>
     </div>
     <div style="background: var(--theme-bg-secondary); border-right: 4px solid var(--danger-color); padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
      <p style="font-weight: 600; margin-bottom: 0.75rem; color: var(--danger-color);"><i class="fas fa-info-circle"></i> سيتم حذف:</p>
      <ul style="list-style: none; padding-right: 1.5rem; color: var(--theme-text-secondary); font-size: 0.9rem;">
       <li style="margin-bottom: 0.5rem;"><i class="fas fa-check" style="color: var(--danger-color); margin-left: 0.5rem;"></i> جميع معلومات الدين</li>
       <li style="margin-bottom: 0.5rem;"><i class="fas fa-check" style="color: var(--danger-color); margin-left: 0.5rem;"></i> جميع سجلات الأقساط</li>
       <li style="margin-bottom: 0.5rem;"><i class="fas fa-check" style="color: var(--danger-color); margin-left: 0.5rem;"></i> جميع سجلات التسديدات</li>
      </ul>
      <p style="margin-top: 1rem; font-weight: 600; color: var(--danger-color); font-size: 0.9rem;"><i class="fas fa-exclamation-triangle"></i> هذا الإجراء لا يمكن التراجع عنه!</p>
     </div>
    </div>
    <div class="form-actions"><button type="button" class="btn btn-secondary" onclick="closeModal('confirmDeleteModal')"> <i class="fas fa-times"></i> إلغاء </button> <button type="button" class="btn btn-danger" onclick="executeDeleteDebt()" style="background: var(--danger-gradient);"> <i class="fas fa-trash-alt"></i> تأكيد الحذف </button>
    </div>
   </div>
  </div>

  <!-- نافذة إدارة النظام والإصلاح -->
  <div id="systemManagementModal" class="modal">
    <div class="modal-content" style="max-width: 900px;">
      <div class="modal-header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <h3 class="modal-title">
          <i class="fas fa-tools"></i> إدارة النظام والإصلاح
        </h3>
        <button class="close-btn" onclick="closeModal('systemManagementModal')" style="color: white;">
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div class="modal-body" style="padding: 2rem;">
        <!-- حالة النظام -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
          <h4 style="margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-info-circle"></i> حالة النظام
          </h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
            <div style="background: rgba(255, 255, 255, 0.2); padding: 1rem; border-radius: 8px; backdrop-filter: blur(10px);">
              <div style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 0.25rem;">معرف المستخدم</div>
              <div id="systemStatusUID" style="font-weight: bold; font-size: 1.1rem;">---</div>
            </div>
            <div style="background: rgba(255, 255, 255, 0.2); padding: 1rem; border-radius: 8px; backdrop-filter: blur(10px);">
              <div style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 0.25rem;">حالة الحساب</div>
              <div id="systemStatusAccount" style="font-weight: bold; font-size: 1.1rem;">---</div>
            </div>
            <div style="background: rgba(255, 255, 255, 0.2); padding: 1rem; border-radius: 8px; backdrop-filter: blur(10px);">
              <div style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 0.25rem;">إصدار التطبيق</div>
              <div id="systemStatusVersion" style="font-weight: bold; font-size: 1.1rem;">---</div>
            </div>
            <div style="background: rgba(255, 255, 255, 0.2); padding: 1rem; border-radius: 8px; backdrop-filter: blur(10px);">
              <div style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 0.25rem;">حالة Firebase</div>
              <div id="systemStatusFirebase" style="font-weight: bold; font-size: 1.1rem;">---</div>
            </div>
          </div>
        </div>

        <!-- أدوات الإصلاح -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
          <!-- فحص الحساب -->
          <div style="background: var(--theme-bg-secondary); border: 2px solid var(--theme-border); border-radius: 12px; padding: 1.5rem; transition: all 0.3s ease;">
            <h5 style="color: var(--theme-text-primary); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fas fa-search" style="color: #3b82f6;"></i> فحص الحساب
            </h5>
            <p style="color: var(--theme-text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">التحقق من صلاحية بيانات الحساب المحفوظة</p>
            <button onclick="systemCheckAccount()" class="btn btn-primary" style="width: 100%; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);">
              <i class="fas fa-search"></i> فحص الآن
            </button>
          </div>

          <!-- إصلاح التسجيل -->
          <div style="background: var(--theme-bg-secondary); border: 2px solid var(--theme-border); border-radius: 12px; padding: 1.5rem; transition: all 0.3s ease;">
            <h5 style="color: var(--theme-text-primary); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fas fa-wrench" style="color: #10b981;"></i> إصلاح التسجيل
            </h5>
            <p style="color: var(--theme-text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">حل مشاكل إنشاء الحسابات الجديدة</p>
            <button onclick="systemFixRegistration()" class="btn btn-success" style="width: 100%; background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
              <i class="fas fa-wrench"></i> إصلاح
            </button>
          </div>

          <!-- إعادة تعيين خفيفة -->
          <div style="background: var(--theme-bg-secondary); border: 2px solid var(--theme-border); border-radius: 12px; padding: 1.5rem; transition: all 0.3s ease;">
            <h5 style="color: var(--theme-text-primary); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fas fa-sync" style="color: #6366f1;"></i> إعادة تعيين خفيفة
            </h5>
            <p style="color: var(--theme-text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">مسح البيانات مع الاحتفاظ بالإعدادات</p>
            <button onclick="systemSoftReset()" class="btn" style="width: 100%; background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: white;">
              <i class="fas fa-sync"></i> إعادة تعيين
            </button>
          </div>

          <!-- إعادة تعيين كاملة -->
          <div style="background: var(--theme-bg-secondary); border: 2px solid var(--theme-border); border-radius: 12px; padding: 1.5rem; transition: all 0.3s ease;">
            <h5 style="color: var(--theme-text-primary); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fas fa-exclamation-triangle" style="color: #ef4444;"></i> إعادة تعيين كاملة
            </h5>
            <p style="color: var(--theme-text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">مسح جميع البيانات والإعدادات</p>
            <button onclick="systemFullReset()" class="btn btn-danger" style="width: 100%; background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);">
              <i class="fas fa-exclamation-triangle"></i> إعادة تعيين كاملة
            </button>
          </div>

          <!-- مسح البيانات غير الصالحة -->
          <div style="background: var(--theme-bg-secondary); border: 2px solid var(--theme-border); border-radius: 12px; padding: 1.5rem; transition: all 0.3s ease;">
            <h5 style="color: var(--theme-text-primary); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fas fa-trash-alt" style="color: #f59e0b;"></i> مسح البيانات غير الصالحة
            </h5>
            <p style="color: var(--theme-text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">إزالة بيانات الحسابات التالفة</p>
            <button onclick="systemClearInvalidData()" class="btn" style="width: 100%; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: white;">
              <i class="fas fa-trash-alt"></i> مسح
            </button>
          </div>

          <!-- تصدير نسخة احتياطية -->
          <div style="background: var(--theme-bg-secondary); border: 2px solid var(--theme-border); border-radius: 12px; padding: 1.5rem; transition: all 0.3s ease;">
            <h5 style="color: var(--theme-text-primary); margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fas fa-download" style="color: #8b5cf6;"></i> تصدير نسخة احتياطية
            </h5>
            <p style="color: var(--theme-text-secondary); font-size: 0.9rem; margin-bottom: 1rem;">حفظ نسخة من البيانات الحالية</p>
            <button onclick="systemExportBackup()" class="btn" style="width: 100%; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); color: white;">
              <i class="fas fa-download"></i> تصدير
            </button>
          </div>
        </div>

        <!-- سجل العمليات -->
        <div style="margin-bottom: 1rem;">
          <h4 style="color: var(--theme-text-primary); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-list"></i> سجل العمليات
          </h4>
          <div id="systemConsoleLog" style="background: #1f2937; color: #e5e7eb; padding: 1.5rem; border-radius: 8px; max-height: 250px; overflow-y: auto; font-family: 'Courier New', monospace; font-size: 0.9rem; line-height: 1.6;">
            <div style="color: #3b82f6;">ℹ️ في انتظار العمليات...</div>
          </div>
        </div>

        <!-- معلومات المطور -->
        <div style="text-align: center; padding: 1rem; border-top: 2px solid var(--theme-border); color: var(--theme-text-secondary); font-size: 0.9rem;">
          <p style="margin-bottom: 0.5rem;">
            <strong style="color: var(--theme-text-primary);">Digital Creativity Company</strong>
          </p>
          <p>نظام نقاط البيع المتقدم - كاش برو</p>
          <p style="margin-top: 0.5rem;">المطور: كرار | 07813798636</p>
        </div>
      </div>
    </div>
  </div>

  <!-- نافذة الدفع النقدي الحديثة -->
  <div id="cashPaymentModal" class="modal">
   <div class="modal-content" style="max-width: 600px;">
    <div class="modal-header" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
     <h3 class="modal-title" style="color: white;">
      <i class="fas fa-money-bill-wave"></i> إتمام البيع نقداً
     </h3>
     <button class="close-btn" onclick="closeCashPaymentModal()" style="color: white;">
      <i class="fas fa-times"></i>
     </button>
    </div>
    
    <div style="padding: 2rem;">
     <!-- ملخص المشتريات -->
     <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
      <div style="text-align: center; margin-bottom: 1rem;">
       <i class="fas fa-shopping-cart" style="font-size: 2.5rem; color: var(--primary-color);"></i>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
       <span style="color: var(--theme-text-secondary);">
        <i class="fas fa-box"></i> عدد المنتجات:
       </span>
       <span id="cashModalItemCount" style="font-weight: 600; color: var(--theme-text-primary);">0</span>
      </div>
      <div style="height: 1px; background: rgba(102, 126, 234, 0.2); margin: 1rem 0;"></div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
       <span style="color: var(--theme-text-secondary); font-size: 0.9rem;">المبلغ الإجمالي الأصلي:</span>
       <span id="cashModalOriginalTotal" style="font-weight: 600; color: var(--theme-text-primary); font-size: 1.1rem;">0 دينار</span>
      </div>
     </div>
     
     <!-- تعديل السعر النهائي (اختياري) -->
     <div style="background: var(--theme-bg-secondary); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem;">
      <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
       <i class="fas fa-edit" style="color: var(--warning-color);"></i>
       <h4 style="font-size: 1rem; color: var(--theme-text-primary);">تعديل السعر النهائي (اختياري)</h4>
      </div>
      
      <div class="form-group" style="margin-bottom: 1rem;">
       <label class="form-label" style="display: flex; align-items: center; gap: 0.5rem;">
        <i class="fas fa-dollar-sign"></i>
        السعر النهائي بعد التعديل
       </label>
       <div style="position: relative;">
        <input type="number" 
               class="form-input" 
               id="cashModalFinalPrice" 
               placeholder="اترك فارغاً للمبلغ الأصلي"
               step="1000"
               min="0"
               oninput="updateCashPaymentPreview()"
               style="padding-right: 3rem; font-size: 1.2rem; font-weight: 600; border: 2px solid rgba(102, 126, 234, 0.3);">
        <span style="position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); color: var(--theme-text-secondary); font-weight: 600;">دينار</span>
       </div>
       <small class="form-hint" style="display: flex; align-items: center; gap: 0.3rem; margin-top: 0.5rem;">
        <i class="fas fa-info-circle"></i>
        اترك الحقل فارغاً للمبلغ الأصلي، أو أدخل مبلغاً مختلفاً
       </small>
      </div>
      
      <!-- عرض الفرق -->
      <div id="cashPriceDifferenceDisplay" style="display: none; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
       <div style="display: flex; justify-content: space-between; align-items: center;">
        <span id="cashDifferenceLabel" style="display: flex; align-items: center; gap: 0.5rem;">
         <i class="fas fa-exchange-alt"></i> الفرق:
        </span>
        <span id="cashDifferenceAmount" style="font-weight: 700; font-size: 1.1rem;"></span>
       </div>
      </div>
     </div>
     
     <!-- المبلغ النهائي الذي سيُطبع -->
     <div style="background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(56, 142, 60, 0.1)); padding: 1.5rem; border-radius: 12px; border: 2px solid rgba(76, 175, 80, 0.3); margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center;">
       <span style="color: var(--theme-text-secondary); display: flex; align-items: center; gap: 0.5rem;">
        <i class="fas fa-print"></i> المبلغ الذي سيُطبع:
       </span>
       <span id="cashModalFinalAmount" style="font-weight: 700; font-size: 1.5rem; color: var(--success-color);">0 دينار</span>
      </div>
     </div>
     
     <!-- ملاحظة توضيحية -->
     <div style="background: rgba(255, 193, 7, 0.1); padding: 1rem; border-radius: 8px; border-right: 4px solid var(--warning-color); margin-bottom: 1.5rem;">
      <div style="display: flex; gap: 0.75rem;">
       <i class="fas fa-lightbulb" style="color: var(--warning-color); font-size: 1.2rem;"></i>
       <div style="flex: 1;">
        <p style="margin: 0; font-size: 0.9rem; color: var(--theme-text-primary); line-height: 1.5;">
         يمكنك تعديل السعر النهائي حسب الحاجة (مثل منح خصم إضافي أو إضافة رسوم). 
         المبلغ الذي تدخله هو ما سيظهر في الفاتورة المطبوعة.
        </p>
       </div>
      </div>
     </div>
     
     <!-- أزرار الإجراءات -->
     <div class="form-actions" style="display: flex; gap: 1rem;">
      <button type="button" class="btn btn-secondary" onclick="closeCashPaymentModal()" style="flex: 1;">
       <i class="fas fa-times"></i>
       إلغاء
      </button>
      <button type="button" class="btn btn-success" onclick="confirmCashPayment()" style="flex: 2; background: linear-gradient(135deg, #4CAF50, #388E3C); font-size: 1.1rem; padding: 1rem;">
       <i class="fas fa-check-circle"></i>
       تأكيد البيع والطباعة
      </button>
     </div>
    </div>
   </div>
  </div>

  <!-- نافذة معلومات المستخدم الجديد -->
  <div id="userInfoModal" class="modal">
   <div class="modal-content" style="max-width: 600px;">
    <div class="modal-header">
     <h3 class="modal-title" style="color: var(--success-color);"><i class="fas fa-user-check"></i> تم إنشاء حساب جديد بنجاح</h3>
     <button class="close-btn" onclick="closeModal('userInfoModal')"> <i class="fas fa-times"></i> </button>
    </div>
    <div style="padding: 1.5rem 0;">
     <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)); padding: 2rem; border-radius: 12px; text-align: center; margin-bottom: 1.5rem;">
      <i class="fas fa-user-circle" style="font-size: 4rem; color: var(--primary-color); margin-bottom: 1rem;"></i>
      <h4 style="font-size: 1.2rem; margin-bottom: 0.5rem; color: var(--theme-text-primary);">معلومات حسابك</h4>
      <p style="color: var(--theme-text-secondary); font-size: 0.9rem;">احتفظ بهذه المعلومات في مكان آمن</p>
     </div>
     
     <div style="background: var(--theme-bg-secondary); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
      <div style="margin-bottom: 1.5rem;">
       <label style="display: block; font-size: 0.9rem; color: var(--theme-text-secondary); margin-bottom: 0.5rem;">
        <i class="fas fa-fingerprint"></i> معرف المستخدم (UID)
       </label>
       <div style="background: var(--theme-bg-card); padding: 1rem; border-radius: 8px; border: 2px solid rgba(102, 126, 234, 0.3); display: flex; align-items: center; gap: 1rem;">
        <code id="userUID" style="flex: 1; color: var(--primary-color); font-size: 1.1rem; font-weight: 600;"></code>
        <button onclick="copyToClipboard(document.getElementById('userUID').textContent)" class="btn btn-sm" style="padding: 0.5rem 1rem; background: var(--primary-gradient);">
         <i class="fas fa-copy"></i> نسخ
        </button>
       </div>
      </div>
      
      <div style="margin-bottom: 1.5rem;">
       <label style="display: block; font-size: 0.9rem; color: var(--theme-text-secondary); margin-bottom: 0.5rem;">
        <i class="fas fa-key"></i> المفتاح السري (Secret Key)
       </label>
       <div style="background: var(--theme-bg-card); padding: 1rem; border-radius: 8px; border: 2px solid rgba(240, 147, 251, 0.3); display: flex; align-items: center; gap: 1rem;">
        <code id="userSecret" style="flex: 1; color: #f093fb; font-size: 1.1rem; font-weight: 600;"></code>
        <button onclick="copyToClipboard(document.getElementById('userSecret').textContent)" class="btn btn-sm" style="padding: 0.5rem 1rem; background: linear-gradient(135deg, #f093fb, #f5576c);">
         <i class="fas fa-copy"></i> نسخ
        </button>
       </div>
      </div>
      
      <div style="background: linear-gradient(135deg, rgba(67, 233, 123, 0.1), rgba(56, 249, 215, 0.1)); padding: 1rem; border-radius: 8px; border-right: 4px solid #43e97b;">
       <p style="margin: 0; font-size: 0.95rem; color: var(--theme-text-primary);">
        <i class="fas fa-gift" style="color: #43e97b; margin-left: 0.5rem;"></i>
        <strong>الفترة التجريبية:</strong> <span id="trialDaysDisplay"></span> يوم
       </p>
      </div>
     </div>
     
     <div style="background: var(--theme-bg-secondary); border-right: 4px solid var(--warning-color); padding: 1rem; border-radius: 8px;">
      <p style="font-weight: 600; margin-bottom: 0.5rem; color: var(--warning-color);"><i class="fas fa-exclamation-triangle"></i> تنبيه هام:</p>
      <ul style="list-style: none; padding-right: 1.5rem; color: var(--theme-text-secondary); font-size: 0.85rem; margin: 0;">
       <li style="margin-bottom: 0.25rem;">• احفظ UID والمفتاح السري في مكان آمن</li>
       <li style="margin-bottom: 0.25rem;">• ستحتاج إليهما لتسجيل الدخول من أي جهاز</li>
       <li style="margin-bottom: 0.25rem;">• يمكنك تفعيل اشتراك مدفوع باستخدام رمز التفعيل</li>
      </ul>
     </div>
    </div>
    <div class="form-actions">
     <button type="button" class="btn btn-primary" onclick="closeModal('userInfoModal')">
      <i class="fas fa-check"></i> فهمت، ابدأ الاستخدام
     </button>
    </div>
   </div>
  </div>

  <!-- نافذة تفعيل الاشتراك -->
  <div id="activationModal" class="modal">
   <div class="modal-content" style="max-width: 550px;">
    <div class="modal-header">
     <h3 class="modal-title" style="color: var(--warning-color);"><i class="fas fa-crown"></i> تفعيل الاشتراك</h3>
     <button class="close-btn" onclick="closeActivationModal()"> <i class="fas fa-times"></i> </button>
    </div>
    <div style="padding: 1.5rem 0;">
     
     <!-- رسالة انتهاء الاشتراك -->
     <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(239, 68, 68, 0.1)); padding: 1.5rem; border-radius: 12px; text-align: center; margin-bottom: 1.5rem; border: 2px solid rgba(245, 158, 11, 0.3);">
      <i class="fas fa-hourglass-end" style="font-size: 3rem; color: var(--warning-color); margin-bottom: 1rem;"></i>
      <h4 style="font-size: 1.1rem; margin-bottom: 0.5rem; color: var(--theme-text-primary);">انتهت صلاحية الاشتراك</h4>
      <p style="color: var(--theme-text-secondary); font-size: 0.9rem; margin: 0;">للاستمرار في استخدام التطبيق، يرجى تفعيل اشتراكك</p>
     </div>

     <!-- تبويبات التفعيل -->
     <div style="margin-bottom: 1.5rem;">
      <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
       <button onclick="showActivationTab('code')" id="codeTabBtn" class="btn" style="flex: 1; background: var(--primary-gradient); padding: 0.75rem;">
        <i class="fas fa-ticket-alt"></i> رمز التفعيل
       </button>
       <button onclick="showActivationTab('login')" id="loginTabBtn" class="btn btn-secondary" style="flex: 1; padding: 0.75rem;">
        <i class="fas fa-sign-in-alt"></i> تسجيل الدخول
       </button>
      </div>

      <!-- تبويب رمز التفعيل -->
      <div id="codeTab" class="activation-tab">
       <div style="background: var(--theme-bg-secondary); border-radius: 12px; padding: 1.5rem;">
        <div style="margin-bottom: 1rem;">
         <label style="display: block; font-size: 0.9rem; color: var(--theme-text-secondary); margin-bottom: 0.5rem;">
          <i class="fas fa-ticket-alt"></i> أدخل رمز التفعيل
         </label>
         <input type="text" id="activationCodeInput" placeholder="مثال: ABC123XYZ456" style="width: 100%; padding: 1rem; border-radius: 8px; border: 2px solid rgba(102, 126, 234, 0.3); background: var(--theme-bg-card); color: var(--theme-text-primary); font-size: 1.1rem; font-weight: 600; text-align: center; letter-spacing: 2px; text-transform: uppercase;" maxlength="20">
        </div>
        
        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.1)); padding: 1rem; border-radius: 8px; border-right: 4px solid #10b981; margin-bottom: 1rem;">
         <p style="margin: 0; font-size: 0.85rem; color: var(--theme-text-secondary);">
          <i class="fas fa-info-circle" style="color: #10b981; margin-left: 0.5rem;"></i>
          احصل على رمز التفعيل من المسؤول أو من لوحة التحكم
         </p>
        </div>

        <button onclick="activateWithCode()" class="btn btn-primary" style="width: 100%; padding: 1rem; font-size: 1rem;">
         <i class="fas fa-check-circle"></i> تفعيل الآن
        </button>
       </div>
      </div>

      <!-- تبويب تسجيل الدخول -->
      <div id="loginTab" class="activation-tab" style="display: none;">
       <div style="background: var(--theme-bg-secondary); border-radius: 12px; padding: 1.5rem;">
        <div style="margin-bottom: 1rem;">
         <label style="display: block; font-size: 0.9rem; color: var(--theme-text-secondary); margin-bottom: 0.5rem;">
          <i class="fas fa-fingerprint"></i> معرف المستخدم (UID)
         </label>
         <input type="text" id="loginUIDInput" placeholder="أدخل UID الخاص بك" style="width: 100%; padding: 1rem; border-radius: 8px; border: 2px solid rgba(102, 126, 234, 0.3); background: var(--theme-bg-card); color: var(--theme-text-primary); font-size: 1rem;">
        </div>
        
        <div style="margin-bottom: 1rem;">
         <label style="display: block; font-size: 0.9rem; color: var(--theme-text-secondary); margin-bottom: 0.5rem;">
          <i class="fas fa-key"></i> المفتاح السري
         </label>
         <input type="password" id="loginSecretInput" placeholder="أدخل المفتاح السري" style="width: 100%; padding: 1rem; border-radius: 8px; border: 2px solid rgba(240, 147, 251, 0.3); background: var(--theme-bg-card); color: var(--theme-text-primary); font-size: 1rem;">
        </div>

        <div style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1)); padding: 1rem; border-radius: 8px; border-right: 4px solid var(--primary-color); margin-bottom: 1rem;">
         <p style="margin: 0; font-size: 0.85rem; color: var(--theme-text-secondary);">
          <i class="fas fa-shield-alt" style="color: var(--primary-color); margin-left: 0.5rem;"></i>
          استخدم UID والمفتاح السري الذي تم إنشاؤه عند أول تشغيل
         </p>
        </div>

        <button onclick="loginWithCredentials()" class="btn btn-primary" style="width: 100%; padding: 1rem; font-size: 1rem;">
         <i class="fas fa-sign-in-alt"></i> تسجيل الدخول
                </button>
                <button onclick="createLocalUserIfNeeded()" class="btn btn-success" style="width: 100%; margin-top: 0.5rem; padding: 1rem; font-size: 1rem;">
                    <i class="fas fa-user-plus"></i> إنشاء حساب جديد
        </button>
        <!-- نموذج بيانات المستخدم الجديد -->
        <div id="userDetailsForm" style="display:block; margin-top:1.5rem; background:rgb(23,25,27); border-radius:10px; padding:1.2rem; border:1px solid rgb(229,231,235);">
            <h4 style="margin-bottom:1rem; color:var(--primary-gradient); font-weight:700; letter-spacing:1px; text-shadow:0 2px 8px rgba(99,102,241,0.10); font-family:'Cairo',sans-serif;"><i class="fas fa-user"></i> بيانات المستخدم</h4>
            <div class="form-group" style="margin-bottom:1rem;">
                <label style="color:var(--theme-text-secondary); font-weight:600; margin-bottom:0.3rem; display:block; font-family:'Cairo',sans-serif; font-size:1.08rem;"><i class="fas fa-user"></i> الاسم الرباعي</label>
                <input type="text" id="newUserFullName" class="form-input" placeholder="أدخل الاسم الرباعي" required style="background:var(--theme-bg-card); color:var(--theme-text-primary); border:2px solid var(--theme-border,#d8d8d8); border-radius:8px; padding:1.1rem 0.9rem; font-size:1.13rem; font-weight:600; font-family:'Cairo',sans-serif; transition:box-shadow 0.2s;">
            </div>
            <div class="form-group" style="margin-bottom:1rem;">
                <label style="color:var(--theme-text-secondary); font-weight:600; margin-bottom:0.3rem; display:block; font-family:'Cairo',sans-serif; font-size:1.08rem;"><i class="fas fa-phone"></i> رقم الهاتف</label>
                <input type="tel" id="newUserPhone" class="form-input" placeholder="07XX XXX XXXX" required style="background:var(--theme-bg-card); color:var(--theme-text-primary); border:2px solid var(--theme-border,#d8d8d8); border-radius:8px; padding:1.1rem 0.9rem; font-size:1.13rem; font-weight:600; font-family:'Cairo',sans-serif; transition:box-shadow 0.2s;">
            </div>
            <div class="form-group" style="margin-bottom:1rem;">
                <label style="color:var(--theme-text-secondary); font-weight:600; margin-bottom:0.3rem; display:block; font-family:'Cairo',sans-serif; font-size:1.08rem;"><i class="fas fa-map-marker-alt"></i> العنوان</label>
                <input type="text" id="newUserAddress" class="form-input" placeholder="العنوان الكامل" required style="background:var(--theme-bg-card); color:var(--theme-text-primary); border:2px solid var(--theme-border,#d8d8d8); border-radius:8px; padding:1.1rem 0.9rem; font-size:1.13rem; font-weight:600; font-family:'Cairo',sans-serif; transition:box-shadow 0.2s;">
            </div>
            <div class="form-group" style="margin-bottom:1rem;">
                <label style="color:var(--theme-text-secondary); font-weight:600; margin-bottom:0.3rem; display:block; font-family:'Cairo',sans-serif; font-size:1.08rem;"><i class="fas fa-store"></i> اسم المتجر</label>
                <input type="text" id="newUserStoreName" class="form-input" placeholder="اسم المتجر/المؤسسة" required style="background:var(--theme-bg-card); color:var(--theme-text-primary); border:2px solid var(--theme-border,#d8d8d8); border-radius:8px; padding:1.1rem 0.9rem; font-size:1.13rem; font-weight:600; font-family:'Cairo',sans-serif; transition:box-shadow 0.2s;">
            </div>
            <div class="form-group" style="margin-bottom:1rem; display:flex; align-items:center; gap:0.7rem;">
                <label style="color:var(--theme-text-secondary); font-weight:500;"><i class="fas fa-map-marked-alt"></i> الموقع الجغرافي</label>
                <button type="button" class="btn btn-info" style="background:linear-gradient(135deg,#3b82f6,#2563eb);color:#fff;padding:0.5rem 1.2rem;border-radius:7px;font-weight:600;box-shadow:0 2px 8px rgba(59,130,246,0.10);" onclick="getUserLocation()"><i class="fas fa-map-marker-alt"></i> تحديد الموقع</button>
                <span id="locationStatus" style="font-size:0.95rem; color:#059669; margin-right:8px;"></span>
            </div>
            <input type="hidden" id="newUserLat">
            <input type="hidden" id="newUserLng">
            <div style="margin-top:1.2rem; display:flex; gap:0.7rem;">
                <button type="button" class="btn btn-success" style="width: 100%; margin-bottom: 0.5rem; padding: 1rem; font-size: 1rem; border-radius: 8px; background: linear-gradient(135deg,#10b981,#059669); color: #fff; font-weight: 700;" onclick="saveNewUserDetails()"><i class="fas fa-save"></i> حفظ البيانات وإنشاء الحساب</button>
                <button type="button" class="btn btn-secondary" style="width: 100%; padding: 1rem; font-size: 1rem; border-radius: 8px; background: linear-gradient(135deg,#64748b,#334155); color: #fff; font-weight: 700;" onclick="hideUserDetailsForm()">إلغاء</button>
            </div>
        </div>
        </button>
       </div>
      </div>
     </div>

     <!-- تعليمات إضافية -->
     <div style="background: var(--theme-bg-secondary); border-radius: 8px; padding: 1rem;">
      <p style="font-weight: 600; margin-bottom: 0.5rem; color: var(--theme-text-primary); font-size: 0.9rem;">
       <i class="fas fa-question-circle" style="color: var(--primary-color);"></i> هل تحتاج مساعدة؟
      </p>
      <ul style="list-style: none; padding-right: 1.5rem; color: var(--theme-text-secondary); font-size: 0.8rem; margin: 0;">
       <li style="margin-bottom: 0.25rem;">• تواصل مع المسؤول للحصول على رمز تفعيل</li>
       <li style="margin-bottom: 0.25rem;">• إذا كنت تملك حساب سابق، استخدم UID والمفتاح السري</li>
       <li>• الفترة التجريبية: 30 يوم من تاريخ الإنشاء</li>
      </ul>
     </div>
    </div>
   </div>
  </div>

  <!-- 💰 نافذة منبثقة لإضافة مصروف جديد -->
  <div id="addExpenseModal" class="modal">
   <div class="modal-content" style="max-width: 700px;">
    <div class="modal-header">
     <h3 class="modal-title"><i class="fas fa-plus-circle"></i> إضافة مصروف جديد</h3>
     <button class="close-btn" onclick="closeAddExpenseModal()"> <i class="fas fa-times"></i> </button>
    </div>
    <div class="modal-body">
     <div class="form-group">
      <label><i class="fas fa-list"></i> نوع المصروف</label>
      <select id="expenseType" class="form-control" required>
       <option value="">اختر نوع المصروف</option>
       <option value="rent">🏠 إيجار</option>
       <option value="utilities">⚡ كهرباء/ماء</option>
       <option value="salary">💰 رواتب</option>
       <option value="maintenance">🔧 صيانة</option>
       <option value="transportation">🚗 نقل ومواصلات</option>
       <option value="supplies">📦 لوازم مكتبية</option>
       <option value="marketing">📢 تسويق وإعلان</option>
       <option value="insurance">🛡️ تأمينات</option>
       <option value="taxes">📊 ضرائب ورسوم</option>
       <option value="other">📝 أخرى</option>
      </select>
     </div>
     <div class="form-group">
      <label><i class="fas fa-money-bill"></i> المبلغ (دينار)</label>
      <input type="number" id="expenseAmount" class="form-control" placeholder="أدخل المبلغ" min="0" required>
     </div>
     <div class="form-group">
      <label><i class="fas fa-sticky-note"></i> الوصف</label>
      <textarea id="expenseDescription" class="form-control" rows="3" placeholder="وصف تفصيلي للمصروف"></textarea>
     </div>
     <div class="form-group">
      <label><i class="fas fa-calendar"></i> التاريخ</label>
      <input type="date" id="expenseDate" class="form-control" required>
     </div>
     <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeAddExpenseModal()">إلغاء</button>
      <button class="btn btn-primary" onclick="saveExpense()"><i class="fas fa-save"></i> حفظ المصروف</button>
     </div>
    </div>
   </div>
  </div>

  <!-- 🛒 نافذة منبثقة لإضافة فاتورة مشتريات -->
  <div id="addPurchaseModal" class="modal">
   <div class="modal-content" style="max-width: 900px;">
    <div class="modal-header">
     <h3 class="modal-title"><i class="fas fa-cart-plus"></i> إضافة فاتورة مشتريات</h3>
     <button class="close-btn" onclick="closeAddPurchaseModal()"> <i class="fas fa-times"></i> </button>
    </div>
    <div class="modal-body">
     <!-- معلومات المورد -->
     <div style="background: var(--theme-bg-secondary); padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 1rem; color: var(--primary-color);"><i class="fas fa-building"></i> معلومات المورد</h4>
      <div class="form-row">
       <div class="form-group" style="flex: 1;">
        <label><i class="fas fa-building"></i> اسم المورد</label>
        <input type="text" id="supplierName" class="form-control" placeholder="أدخل اسم المورد" required>
       </div>
       <div class="form-group" style="flex: 1;">
        <label><i class="fas fa-phone"></i> رقم الهاتف</label>
        <input type="tel" id="supplierPhone" class="form-control" placeholder="07XX XXX XXXX">
       </div>
      </div>
      <div class="form-row">
       <div class="form-group" style="flex: 1;">
        <label><i class="fas fa-hashtag"></i> رقم الفاتورة</label>
        <input type="text" id="invoiceNumber" class="form-control" placeholder="رقم الفاتورة (اختياري)">
       </div>
       <div class="form-group" style="flex: 1;">
        <label><i class="fas fa-calendar"></i> تاريخ الفاتورة</label>
        <input type="date" id="purchaseDate" class="form-control" required>
       </div>
      </div>
     </div>

     <!-- منتجات الفاتورة -->
     <div style="margin-bottom: 1.5rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
       <h4 style="color: var(--primary-color);"><i class="fas fa-boxes"></i> المنتجات</h4>
       <button class="btn btn-success" onclick="addPurchaseItem()"><i class="fas fa-plus"></i> إضافة منتج</button>
      </div>
      <div id="purchaseItemsContainer">
       <!-- المنتجات ستظهر هنا -->
      </div>
     </div>

     <!-- ملخص الفاتورة -->
     <div style="background: var(--theme-bg-secondary); padding: 1.5rem; border-radius: var(--border-radius);">
      <div class="summary-row">
       <span style="font-size: 1.2rem; font-weight: bold;">المجموع الإجمالي:</span>
       <span id="purchaseTotalAmount" style="font-size: 1.3rem; font-weight: bold; color: var(--primary-color);">0 دينار</span>
      </div>
     </div>

     <div class="modal-footer" style="margin-top: 1.5rem;">
      <button class="btn btn-secondary" onclick="closeAddPurchaseModal()">إلغاء</button>
      <button class="btn btn-primary" onclick="savePurchase()"><i class="fas fa-save"></i> حفظ فاتورة المشتريات</button>
     </div>
    </div>
   </div>
  </div>

  <!-- 📝 نافذة منبثقة لعرض تفاصيل فاتورة المشتريات -->
  <div id="viewPurchaseModal" class="modal">
   <div class="modal-content" style="max-width: 800px;">
    <div class="modal-header">
     <h3 class="modal-title"><i class="fas fa-file-invoice"></i> تفاصيل فاتورة المشتريات</h3>
     <button class="close-btn" onclick="closeViewPurchaseModal()"> <i class="fas fa-times"></i> </button>
    </div>
    <div class="modal-body" id="purchaseDetailsContent">
     <!-- التفاصيل ستظهر هنا -->
    </div>
   </div>
  </div>

  <!-- 💳 نافذة منبثقة لإضافة دين يدوياً -->
  <div id="addManualDebtModal" class="modal">
   <div class="modal-content" style="max-width: 900px;">
    <div class="modal-header">
     <h3 class="modal-title"><i class="fas fa-user-plus"></i> إضافة دين جديد</h3>
     <button class="close-btn" onclick="closeAddManualDebtModal()"> <i class="fas fa-times"></i> </button>
    </div>
    <div class="modal-body">
     <!-- معلومات العميل -->
     <div style="background: var(--theme-bg-secondary); padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 1rem; color: var(--primary-color);"><i class="fas fa-user"></i> معلومات العميل</h4>
      <div class="form-row" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
       <div class="form-group">
        <label><i class="fas fa-user"></i> اسم العميل</label>
        <input type="text" id="manualDebtCustomerName" class="form-control" placeholder="أدخل اسم العميل" required>
       </div>
       <div class="form-group">
        <label><i class="fas fa-phone"></i> رقم الهاتف</label>
        <input type="tel" id="manualDebtCustomerPhone" class="form-control" placeholder="07XX XXX XXXX" required>
       </div>
       <div class="form-group">
        <label><i class="fas fa-map-marker-alt"></i> العنوان</label>
        <input type="text" id="manualDebtCustomerAddress" class="form-control" placeholder="عنوان العميل">
       </div>
       <div class="form-group">
        <label><i class="fas fa-calendar"></i> تاريخ الدين</label>
        <input type="date" id="manualDebtDate" class="form-control" required>
       </div>
      </div>
     </div>

     <!-- قسم المنتجات -->
     <div style="background: var(--theme-bg-secondary); padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 1rem; color: var(--primary-color);"><i class="fas fa-shopping-cart"></i> المنتجات</h4>
      
      <!-- البحث عن المنتجات -->
      <div class="form-group">
       <label><i class="fas fa-search"></i> البحث عن منتج</label>
       <div style="position: relative;">
        <input type="text" id="manualDebtProductSearch" class="form-control" placeholder="ابحث عن منتج..." oninput="searchProductsForDebt(this.value)">
        <div id="manualDebtProductSearchResults" style="position: absolute; top: 100%; left: 0; right: 0; background: var(--theme-bg-primary); border: 1px solid var(--theme-border-color); border-radius: var(--border-radius); max-height: 200px; overflow-y: auto; z-index: 1000; display: none; margin-top: 5px;"></div>
       </div>
      </div>
      
      <!-- إضافة منتج يدوياً -->
      <div class="form-row" style="display: grid; grid-template-columns: 2fr 1fr 1fr auto; gap: 1rem; align-items: end; margin-bottom: 1rem;">
       <div class="form-group" style="margin: 0;">
        <label><i class="fas fa-box"></i> اسم المنتج</label>
        <input type="text" id="manualDebtProductName" class="form-control" placeholder="اسم المنتج">
       </div>
       <div class="form-group" style="margin: 0;">
        <label><i class="fas fa-tag"></i> السعر</label>
        <input type="number" id="manualDebtProductPrice" class="form-control" placeholder="السعر" min="0">
       </div>
       <div class="form-group" style="margin: 0;">
        <label><i class="fas fa-sort-numeric-up"></i> الكمية</label>
        <input type="number" id="manualDebtProductQty" class="form-control" placeholder="الكمية" min="1" value="1">
       </div>
       <button type="button" class="btn btn-success" onclick="addManualDebtProduct()" style="padding: 0.75rem 1.5rem;">
        <i class="fas fa-plus"></i>
       </button>
      </div>
      
      <!-- جدول المنتجات المضافة -->
      <div id="manualDebtProductsContainer" style="display: none; margin-top: 1rem;">
       <h5 style="margin-bottom: 0.75rem; color: var(--theme-text-secondary);"><i class="fas fa-list"></i> المنتجات المضافة</h5>
       <div class="table-container" style="max-height: 300px; overflow-y: auto;">
        <table class="table">
         <thead>
          <tr>
           <th>المنتج</th>
           <th>السعر</th>
           <th>الكمية</th>
           <th>الإجمالي</th>
           <th>إجراءات</th>
          </tr>
         </thead>
         <tbody id="manualDebtProductsTable">
         </tbody>
        </table>
       </div>
      </div>
     </div>

     <!-- تفاصيل الدين -->
     <div style="background: var(--theme-bg-secondary); padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 1rem; color: var(--primary-color);"><i class="fas fa-money-bill-wave"></i> تفاصيل الدين</h4>
      <div class="form-row" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
       <div class="form-group">
        <label><i class="fas fa-money-bill"></i> المبلغ الإجمالي (دينار)</label>
        <input type="number" id="manualDebtTotalAmount" class="form-control" placeholder="المبلغ الإجمالي" min="0" onchange="calculateManualDebtInstallments()" required>
       </div>
       <div class="form-group">
        <label><i class="fas fa-hand-holding-usd"></i> الدفعة المقدمة (دينار)</label>
        <input type="number" id="manualDebtDownPayment" class="form-control" placeholder="0" min="0" value="0" onchange="calculateManualDebtInstallments()">
       </div>
       <div class="form-group">
        <label><i class="fas fa-calendar-alt"></i> عدد الأشهر</label>
        <input type="number" id="manualDebtMonths" class="form-control" placeholder="عدد الأشهر" min="1" max="60" onchange="calculateManualDebtInstallments()" required>
       </div>
       <div class="form-group">
        <label><i class="fas fa-plus-circle"></i> مبلغ إضافي (اختياري)</label>
        <input type="number" id="manualDebtAdditionalAmount" class="form-control" placeholder="0" min="0" value="0" onchange="calculateManualDebtInstallments()">
       </div>
       <div class="form-group">
        <label><i class="fas fa-calendar"></i> تاريخ بداية الأقساط</label>
        <input type="date" id="manualDebtStartDate" class="form-control">
       </div>
      </div>
      <div class="form-group">
       <label><i class="fas fa-sticky-note"></i> ملاحظات (اختياري)</label>
       <textarea id="manualDebtNotes" class="form-control" rows="2" placeholder="أي ملاحظات إضافية عن الدين"></textarea>
      </div>
     </div>

     <!-- ملخص الحسابات -->
     <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1)); padding: 1.5rem; border-radius: var(--border-radius); border: 2px solid rgba(99, 102, 241, 0.3);">
      <h4 style="margin-bottom: 1rem; color: var(--primary-color);"><i class="fas fa-calculator"></i> ملخص الحسابات</h4>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
       <div style="text-align: center;">
        <div style="font-size: 0.9rem; color: var(--theme-text-tertiary); margin-bottom: 0.5rem;">المبلغ المتبقي</div>
        <div id="manualDebtRemainingAmount" style="font-size: 1.5rem; font-weight: bold; color: var(--danger-color);">0 دينار</div>
       </div>
       <div style="text-align: center;">
        <div style="font-size: 0.9rem; color: var(--theme-text-tertiary); margin-bottom: 0.5rem;">القسط الشهري</div>
        <div id="manualDebtMonthlyAmount" style="font-size: 1.5rem; font-weight: bold; color: var(--primary-color);">0 دينار</div>
       </div>
       <div style="text-align: center;">
        <div style="font-size: 0.9rem; color: var(--theme-text-tertiary); margin-bottom: 0.5rem;">المجموع النهائي</div>
        <div id="manualDebtFinalTotal" style="font-size: 1.5rem; font-weight: bold; color: var(--success-color);">0 دينار</div>
       </div>
      </div>
     </div>

     <div class="modal-footer" style="margin-top: 1.5rem;">
      <button class="btn btn-secondary" onclick="closeAddManualDebtModal()">إلغاء</button>
      <button class="btn btn-primary" onclick="saveManualDebt()"><i class="fas fa-save"></i> حفظ الدين</button>
     </div>
    </div>
   </div>
  </div>

  <!-- نافذة تعديل دين موجود -->
  <div id="editDebtModal" class="modal">
   <div class="modal-content" style="max-width: 900px;">
    <div class="modal-header">
     <h3 class="modal-title"><i class="fas fa-edit"></i> تعديل دين العميل</h3>
     <button class="close-btn" onclick="closeEditDebtModal()"> <i class="fas fa-times"></i> </button>
    </div>
    <div class="modal-body">
     <!-- معلومات العميل -->
     <div style="background: var(--theme-bg-secondary); padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 1rem; color: var(--primary-color);"><i class="fas fa-user"></i> معلومات العميل</h4>
      <div class="form-row" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
       <div class="form-group">
        <label><i class="fas fa-user"></i> اسم العميل</label>
        <input type="text" id="editDebtCustomerName" class="form-control" placeholder="أدخل اسم العميل" required>
       </div>
       <div class="form-group">
        <label><i class="fas fa-phone"></i> رقم الهاتف</label>
        <input type="tel" id="editDebtCustomerPhone" class="form-control" placeholder="07XX XXX XXXX" required>
       </div>
       <div class="form-group">
        <label><i class="fas fa-map-marker-alt"></i> العنوان</label>
        <input type="text" id="editDebtCustomerAddress" class="form-control" placeholder="عنوان العميل">
       </div>
       <div class="form-group">
        <label><i class="fas fa-calendar"></i> تاريخ الدين</label>
        <input type="date" id="editDebtDate" class="form-control" required>
       </div>
      </div>
     </div>

     <!-- قسم المنتجات -->
     <div style="background: var(--theme-bg-secondary); padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 1rem; color: var(--primary-color);"><i class="fas fa-shopping-cart"></i> المنتجات</h4>
      
      <!-- البحث عن المنتجات -->
      <div class="form-group">
       <label><i class="fas fa-search"></i> البحث عن منتج</label>
       <div style="position: relative;">
        <input type="text" id="editDebtProductSearch" class="form-control" placeholder="ابحث عن منتج..." oninput="searchProductsForEditDebt(this.value)">
        <div id="editDebtProductSearchResults" style="position: absolute; top: 100%; left: 0; right: 0; background: var(--theme-bg-primary); border: 1px solid var(--theme-border-color); border-radius: var(--border-radius); max-height: 200px; overflow-y: auto; z-index: 1000; display: none; margin-top: 5px;"></div>
       </div>
      </div>
      
      <!-- إضافة منتج يدوياً -->
      <div class="form-row" style="display: grid; grid-template-columns: 2fr 1fr 1fr auto; gap: 1rem; align-items: end; margin-bottom: 1rem;">
       <div class="form-group" style="margin: 0;">
        <label><i class="fas fa-box"></i> اسم المنتج</label>
        <input type="text" id="editDebtProductName" class="form-control" placeholder="اسم المنتج">
       </div>
       <div class="form-group" style="margin: 0;">
        <label><i class="fas fa-tag"></i> السعر</label>
        <input type="number" id="editDebtProductPrice" class="form-control" placeholder="السعر" min="0">
       </div>
       <div class="form-group" style="margin: 0;">
        <label><i class="fas fa-sort-numeric-up"></i> الكمية</label>
        <input type="number" id="editDebtProductQty" class="form-control" placeholder="الكمية" min="1" value="1">
       </div>
       <button type="button" class="btn btn-success" onclick="addEditDebtProduct()" style="padding: 0.75rem 1.5rem;">
        <i class="fas fa-plus"></i>
       </button>
      </div>
      
      <!-- جدول المنتجات المضافة -->
      <div id="editDebtProductsContainer" style="display: none; margin-top: 1rem;">
       <h5 style="margin-bottom: 0.75rem; color: var(--theme-text-secondary);"><i class="fas fa-list"></i> المنتجات المضافة</h5>
       <div class="table-container" style="max-height: 300px; overflow-y: auto;">
        <table class="table">
         <thead>
          <tr>
           <th>المنتج</th>
           <th>السعر</th>
           <th>الكمية</th>
           <th>الإجمالي</th>
           <th>إجراءات</th>
          </tr>
         </thead>
         <tbody id="editDebtProductsTable">
         </tbody>
        </table>
       </div>
      </div>
     </div>

     <!-- تفاصيل الدين -->
     <div style="background: var(--theme-bg-secondary); padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 1rem; color: var(--primary-color);"><i class="fas fa-money-bill-wave"></i> تفاصيل الدين</h4>
      <div class="form-row" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
       <div class="form-group">
        <label><i class="fas fa-money-bill"></i> المبلغ الإجمالي (دينار)</label>
        <input type="number" id="editDebtTotalAmount" class="form-control" placeholder="المبلغ الإجمالي" min="0" onchange="calculateEditDebtInstallments()" required>
       </div>
       <div class="form-group">
        <label><i class="fas fa-hand-holding-usd"></i> الدفعة المقدمة (دينار)</label>
        <input type="number" id="editDebtDownPayment" class="form-control" placeholder="0" min="0" value="0" onchange="calculateEditDebtInstallments()">
       </div>
       <div class="form-group">
        <label><i class="fas fa-calendar-alt"></i> عدد الأشهر</label>
        <input type="number" id="editDebtMonths" class="form-control" placeholder="عدد الأشهر" min="1" max="60" onchange="calculateEditDebtInstallments()" required>
       </div>
       <div class="form-group">
        <label><i class="fas fa-plus-circle"></i> مبلغ إضافي (اختياري)</label>
        <input type="number" id="editDebtAdditionalAmount" class="form-control" placeholder="0" min="0" value="0" onchange="calculateEditDebtInstallments()">
       </div>
       <div class="form-group">
        <label><i class="fas fa-calendar"></i> تاريخ بداية الأقساط</label>
        <input type="date" id="editDebtStartDate" class="form-control">
       </div>
      </div>
      <div class="form-group">
       <label><i class="fas fa-sticky-note"></i> ملاحظات (اختياري)</label>
       <textarea id="editDebtNotes" class="form-control" rows="2" placeholder="أي ملاحظات إضافية عن الدين"></textarea>
      </div>
     </div>

     <!-- ملخص الحسابات -->
     <div style="background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1)); padding: 1.5rem; border-radius: var(--border-radius); border: 2px solid rgba(99, 102, 241, 0.3);">
      <h4 style="margin-bottom: 1rem; color: var(--primary-color);"><i class="fas fa-calculator"></i> ملخص الحسابات</h4>
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
       <div style="text-align: center;">
        <div style="font-size: 0.9rem; color: var(--theme-text-tertiary); margin-bottom: 0.5rem;">المبلغ المتبقي</div>
        <div id="editDebtRemainingAmount" style="font-size: 1.5rem; font-weight: bold; color: var(--danger-color);">0 دينار</div>
       </div>
       <div style="text-align: center;">
        <div style="font-size: 0.9rem; color: var(--theme-text-tertiary); margin-bottom: 0.5rem;">القسط الشهري</div>
        <div id="editDebtMonthlyAmount" style="font-size: 1.5rem; font-weight: bold; color: var(--primary-color);">0 دينار</div>
       </div>
       <div style="text-align: center;">
        <div style="font-size: 0.9rem; color: var(--theme-text-tertiary); margin-bottom: 0.5rem;">المجموع النهائي</div>
        <div id="editDebtFinalTotal" style="font-size: 1.5rem; font-weight: bold; color: var(--success-color);">0 دينار</div>
       </div>
      </div>
     </div>

     <div class="modal-footer" style="margin-top: 1.5rem;">
      <button class="btn btn-secondary" onclick="closeEditDebtModal()">إلغاء</button>
      <button class="btn btn-primary" onclick="updateDebt()"><i class="fas fa-save"></i> حفظ التعديلات</button>
     </div>
    </div>
   </div>
  </div>

  <script>
        // متغيرات التطبيق
        let cart = [];
        let products = [];
        let categories = [];
        let salesData = [];
        let debtsData = [];
        let selectedPaymentMethod = 'نقدي';
        let isLoading = false;
        let currentCategory = 'all';
        let currentTheme = 'dark';
        let sidebarCollapsed = false;
        
        // 💰 متغيرات المصاريف
        let expensesData = [];
        let purchasesData = [];
        let currentExpenseTab = 'general';
        let purchaseItems = [];
        
        // متغيرات تسديد القسط
        let currentInstallmentDebtId = null;
        let currentInstallmentMonth = null;
        
        // متغير حذف الدين
        let debtToDelete = null;
        
        // متغيرات المنتجات في نافذة الدين
        let manualDebtProducts = [];
        let editDebtProducts = [];
        let currentEditDebtId = null;

        // إعدادات افتراضية
        const defaultConfig = {
            store_name: 'متجر التقنية الحديثة',
            store_address: 'بغداد - المنصور',
            store_phone: '07803092185',
            tax_rate: '0'
        };

        // أيقونات التصنيفات المتاحة
        const availableIcons = [
            // إلكترونيات وحواسيب
            'fas fa-laptop', 'fas fa-desktop', 'fas fa-tablet-alt', 'fas fa-mobile-alt',
            'fas fa-keyboard', 'fas fa-mouse', 'fas fa-headphones', 'fas fa-microphone',
            'fas fa-camera', 'fas fa-video', 'fas fa-webcam', 'fas fa-gamepad',
            'fas fa-headset', 'fas fa-microchip', 'fas fa-memory', 'fas fa-hdd',
            'fas fa-sim-card', 'fas fa-sd-card', 'fas fa-save', 'fas fa-compact-disc',
            'fas fa-server', 'fas fa-database', 'fas fa-network-wired', 'fas fa-ethernet',
            'fas fa-wifi', 'fas fa-bluetooth', 'fas fa-satellite-dish', 'fas fa-router',
            'fas fa-usb', 'fas fa-plug', 'fas fa-power-off', 'fas fa-print',
            'fas fa-scanner', 'fas fa-fax', 'fas fa-calculator', 'fas fa-cash-register',
            
            // أجهزة كهربائية منزلية
            'fas fa-tv', 'fas fa-blender', 'fas fa-lightbulb', 'fas fa-fan', 
            'fas fa-snowflake', 'fas fa-fire', 'fas fa-temperature-high', 'fas fa-temperature-low',
            'fas fa-thermometer-half', 'fas fa-wind', 'fas fa-bolt', 'fas fa-charging-station',
            'fas fa-battery-full', 'fas fa-battery-half', 'fas fa-battery-quarter', 'fas fa-solar-panel',
            'fas fa-broadcast-tower', 'fas fa-satellite', 'fas fa-coffee', 'fas fa-mug-hot',
            'fas fa-blender-phone', 'fas fa-utensils', 'fas fa-sink', 'fas fa-toilet',
            'fas fa-shower', 'fas fa-bath', 'fas fa-pump-soap', 'fas fa-spray-can',
            
            // مكتبيات وقرطاسية
            'fas fa-book', 'fas fa-book-open', 'fas fa-bookmark', 'fas fa-books',
            'fas fa-pen', 'fas fa-pencil-alt', 'fas fa-pen-fancy', 'fas fa-pen-nib',
            'fas fa-marker', 'fas fa-highlighter', 'fas fa-eraser', 'fas fa-ruler',
            'fas fa-ruler-combined', 'fas fa-ruler-horizontal', 'fas fa-ruler-vertical', 'fas fa-drafting-compass',
            'fas fa-paperclip', 'fas fa-thumbtack', 'fas fa-sticky-note', 'fas fa-clipboard',
            'fas fa-clipboard-list', 'fas fa-paste', 'fas fa-file', 'fas fa-file-alt',
            'fas fa-folder', 'fas fa-folder-open', 'fas fa-archive', 'fas fa-envelope',
            'fas fa-envelope-open', 'fas fa-stamp', 'fas fa-stapler', 'fas fa-scissors',
            
            // أثاث ومكاتب
            'fas fa-chair', 'fas fa-couch', 'fas fa-bed', 'fas fa-door-open',
            'fas fa-door-closed', 'fas fa-table', 'fas fa-desktop', 'fas fa-lamp',
            'fas fa-warehouse', 'fas fa-store', 'fas fa-store-alt', 'fas fa-building',
            
            // ملابس وإكسسوارات
            'fas fa-tshirt', 'fas fa-hat-cowboy', 'fas fa-hat-wizard', 'fas fa-glasses',
            'fas fa-sunglasses', 'fas fa-ring', 'fas fa-gem', 'fas fa-crown',
            'fas fa-user-tie', 'fas fa-shoe-prints', 'fas fa-socks', 'fas fa-mitten',
            'fas fa-watch', 'fas fa-clock', 'fas fa-stopwatch', 'fas fa-hourglass',
            
            // رياضة ولياقة
            'fas fa-dumbbell', 'fas fa-running', 'fas fa-walking', 'fas fa-biking',
            'fas fa-swimming-pool', 'fas fa-bicycle', 'fas fa-football-ball', 'fas fa-basketball-ball',
            'fas fa-baseball-ball', 'fas fa-volleyball-ball', 'fas fa-table-tennis', 'fas fa-bowling-ball',
            'fas fa-skating', 'fas fa-skiing', 'fas fa-snowboarding', 'fas fa-heart',
            
            // أدوات وصيانة
            'fas fa-tools', 'fas fa-wrench', 'fas fa-screwdriver', 'fas fa-hammer',
            'fas fa-toolbox', 'fas fa-cog', 'fas fa-cogs', 'fas fa-paint-roller',
            'fas fa-brush', 'fas fa-magic', 'fas fa-spray-can', 'fas fa-fire-extinguisher',
            'fas fa-flashlight', 'fas fa-oil-can', 'fas fa-tape', 'fas fa-shield-alt',
            
            // طبية وصحية
            'fas fa-medkit', 'fas fa-first-aid', 'fas fa-pills', 'fas fa-prescription-bottle',
            'fas fa-syringe', 'fas fa-thermometer', 'fas fa-heartbeat', 'fas fa-stethoscope',
            'fas fa-hospital', 'fas fa-ambulance', 'fas fa-wheelchair', 'fas fa-hand-holding-medical',
            
            // سيارات ومركبات
            'fas fa-car', 'fas fa-car-side', 'fas fa-car-alt', 'fas fa-truck',
            'fas fa-motorcycle', 'fas fa-bus', 'fas fa-taxi', 'fas fa-shuttle-van',
            'fas fa-oil-can', 'fas fa-gas-pump', 'fas fa-tire', 'fas fa-wheel',
            
            // طعام ومشروبات
            'fas fa-utensils', 'fas fa-utensil-spoon', 'fas fa-utensil-fork', 'fas fa-pizza-slice',
            'fas fa-hamburger', 'fas fa-hotdog', 'fas fa-ice-cream', 'fas fa-cake',
            'fas fa-birthday-cake', 'fas fa-cookie', 'fas fa-apple-alt', 'fas fa-lemon',
            'fas fa-carrot', 'fas fa-pepper-hot', 'fas fa-cheese', 'fas fa-bread-slice',
            'fas fa-coffee', 'fas fa-mug-hot', 'fas fa-wine-glass', 'fas fa-glass-martini',
            'fas fa-beer', 'fas fa-wine-bottle', 'fas fa-flask', 'fas fa-blender',
            
            // حيوانات ونباتات
            'fas fa-dog', 'fas fa-cat', 'fas fa-fish', 'fas fa-dove',
            'fas fa-spider', 'fas fa-frog', 'fas fa-horse', 'fas fa-crow',
            'fas fa-seedling', 'fas fa-tree', 'fas fa-leaf', 'fas fa-cannabis',
            
            // ترفيه وفنون
            'fas fa-music', 'fas fa-guitar', 'fas fa-drum', 'fas fa-film',
            'fas fa-photo-video', 'fas fa-palette', 'fas fa-paint-brush', 'fas fa-theater-masks',
            'fas fa-ticket-alt', 'fas fa-trophy', 'fas fa-medal', 'fas fa-award',
            
            // تعليم وعلوم
            'fas fa-graduation-cap', 'fas fa-school', 'fas fa-chalkboard', 'fas fa-chalkboard-teacher',
            'fas fa-user-graduate', 'fas fa-flask', 'fas fa-microscope', 'fas fa-atom',
            'fas fa-dna', 'fas fa-vial', 'fas fa-vials', 'fas fa-magnet',
            
            // عامة ومتنوعة
            'fas fa-box', 'fas fa-boxes', 'fas fa-cube', 'fas fa-cubes',
            'fas fa-shopping-bag', 'fas fa-shopping-cart', 'fas fa-shopping-basket', 'fas fa-gift',
            'fas fa-tag', 'fas fa-tags', 'fas fa-barcode', 'fas fa-qrcode',
            'fas fa-star', 'fas fa-crown', 'fas fa-gem', 'fas fa-key',
            'fas fa-lock', 'fas fa-unlock', 'fas fa-shield-alt', 'fas fa-home',
            'fas fa-map-marker-alt', 'fas fa-phone', 'fas fa-envelope', 'fas fa-globe',
            'fas fa-flag', 'fas fa-bell', 'fas fa-comment', 'fas fa-comments',
            'fas fa-umbrella', 'fas fa-sun', 'fas fa-moon', 'fas fa-cloud',
            'fas fa-snowflake', 'fas fa-rainbow', 'fas fa-fire', 'fas fa-water'
        ];

        // معالج البيانات للـ Data SDK
        const dataHandler = {
            async onDataChanged(data) {
                // تصنيف البيانات حسب النوع
                products = data.filter(item => item.type === 'product');
                categories = data.filter(item => item.type === 'category');
                salesData = data.filter(item => item.type === 'sale');
                debtsData = data.filter(item => item.type === 'debt');
                
                console.log('Data changed - debtsData:', debtsData);
                
                // ✅ حفظ الديون في localStorage تلقائياً
                await ensureDebtsInLocalStorage();
                
                // إصلاح بيانات الديون تلقائياً
                if (typeof fixDebtsData === 'function' && debtsData && debtsData.length > 0) {
                    console.log('🔧 Running automatic debt data repair on data change...');
                    await fixDebtsData();
                }
                
                // تحديث الواجهات
                updateAllViews();
            }
        };

        // ==================== دوال Firebase والمستخدم ====================
        
        // دوال مساعدة للمستخدم والتخزين
        function generateRandomKey(len = 10) {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let s = '';
            for (let i = 0; i < len; i++) s += chars.charAt(Math.floor(Math.random() * chars.length));
            return s;
        }

        // إظهار نموذج بيانات المستخدم
        window.createLocalUserIfNeeded = function() {
            document.getElementById('userDetailsForm').style.display = 'block';
        };

        // إخفاء النموذج
        window.hideUserDetailsForm = function() {
            document.getElementById('userDetailsForm').style.display = 'none';
        };

        // زر تحديد الموقع الجغرافي
        window.getUserLocation = function() {
            const status = document.getElementById('locationStatus');
            status.textContent = 'جاري تحديد الموقع...';
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(pos) {
                    document.getElementById('newUserLat').value = pos.coords.latitude;
                    document.getElementById('newUserLng').value = pos.coords.longitude;
                    status.textContent = 'تم تحديد الموقع بنجاح';
                }, function(err) {
                    let msg = 'تعذر تحديد الموقع';
                    if (window && window.process && window.process.type === 'renderer') {
                        msg += ' - قد تحتاج لتفعيل صلاحية الموقع من إعدادات النظام أو تشغيل التطبيق كمسؤول.';
                    } else if (err && err.code === 1) {
                        msg += ' - تم رفض الإذن. يرجى السماح للتطبيق بالوصول للموقع.';
                    } else if (err && err.code === 2) {
                        msg += ' - الموقع غير متوفر. تأكد من اتصال الإنترنت أو GPS.';
                    } else if (err && err.code === 3) {
                        msg += ' - انتهت مهلة الطلب. حاول مجددًا.';
                    }
                    status.textContent = msg;
                });
            } else {
                status.textContent = 'المتصفح أو التطبيق لا يدعم تحديد الموقع. إذا كنت تستخدم تطبيق سطح مكتب، قد تحتاج لتفعيل صلاحية الموقع من إعدادات النظام.';
            }
        };

        // حفظ بيانات المستخدم وإنشاء الحساب
        window.saveNewUserDetails = async function() {
            // ✅ فحص Firebase أولاً
            if (!window.database || typeof database === 'undefined') {
                console.error('❌ Firebase غير متصل');
                // تم إزالة الإشعار
                
                // محاولة إعادة تهيئة Firebase
                if (typeof firebase !== 'undefined' && firebase.apps && firebase.apps.length > 0) {
                    try {
                        window.database = firebase.database();
                        console.log('✅ تم إعادة تهيئة Firebase بنجاح');
                        // تم إزالة الإشعار
                        // إعادة استدعاء الدالة بعد ثانية
                        setTimeout(() => window.saveNewUserDetails(), 1000);
                        return;
                    } catch (error) {
                        console.error('❌ فشل إعادة تهيئة Firebase:', error);
                    }
                }
                
                alert('⚠️ خطأ في الاتصال بقاعدة البيانات!\n\nالرجاء التأكد من:\n1. الاتصال بالإنترنت\n2. إعادة تشغيل التطبيق\n3. التواصل مع الدعم الفني إذا استمرت المشكلة');
                return;
            }

            const fullName = document.getElementById('newUserFullName').value.trim();
            const phone = document.getElementById('newUserPhone').value.trim();
            const address = document.getElementById('newUserAddress').value.trim();
            const storeName = document.getElementById('newUserStoreName').value.trim();
            const lat = document.getElementById('newUserLat').value;
            const lng = document.getElementById('newUserLng').value;

            if (!fullName || !phone || !address || !storeName) {
                // تم إزالة الإشعار
                return;
            }

            try {
                let uid = localStorage.getItem('app_uid');
                let secret = localStorage.getItem('app_secret');
                
                if (uid && secret) {
                    // تحقق من عدم وجود المستخدم مسبقاً
                    try {
                        const snap = await database.ref(`users/${uid}`).once('value');
                        if (snap.exists()) {
                            // تم إزالة الإشعار
                            return;
                        }
                    } catch (error) {
                        console.warn('⚠️ خطأ في التحقق من الحساب الموجود:', error);
                        // نتابع لإنشاء حساب جديد
                    }
                }

                // إنشاء مستخدم جديد
                console.log('🔄 جاري إنشاء حساب جديد...');
                // تم إزالة الإشعار
                
                const newUserRef = database.ref('users').push();
                uid = newUserRef.key;
                secret = generateRandomKey(10);

                // الحصول على أيام التجربة
                let trialDays = 30; // القيمة الافتراضية
                try {
                    const appSettingsSnap = await database.ref('appSettings/trialDays').once('value');
                    if (appSettingsSnap.exists()) {
                        trialDays = Number(appSettingsSnap.val());
                    }
                } catch (error) {
                    console.warn('⚠️ استخدام أيام التجربة الافتراضية:', error);
                }

                const createdAt = Date.now();
                const trialUntil = createdAt + (trialDays * 24 * 60 * 60 * 1000);

                const userObj = {
                    profile: {
                        uid,
                        secret,
                        fullName,
                        phone,
                        address,
                        storeName,
                        lat: lat || null,
                        lng: lng || null,
                        createdAt,
                        deviceInfo: {
                            platform: navigator.platform || '',
                            userAgent: navigator.userAgent || '',
                            appVersion: localStorage.getItem('app_version') || '2.0.0'
                        }
                    },
                    trialUntil,
                    subscription: null,
                    status: 'active',
                    createdBy: 'desktop_app'
                };

                // حفظ البيانات في Firebase
                await database.ref(`users/${uid}`).set(userObj);
                
                // حفظ البيانات محلياً
                localStorage.setItem('app_uid', uid);
                localStorage.setItem('app_secret', secret);
                window.currentUser = userObj;
                window.currentUser.uid = uid;
                
                console.log('✅ تم إنشاء الحساب بنجاح');
                console.log('📝 UID:', uid);
                
                // تم إزالة الإشعار
                
                // إخفاء النموذج
                const formElement = document.getElementById('userDetailsForm');
                if (formElement) {
                    formElement.style.display = 'none';
                }
                
                // إظهار معلومات الحساب
                showModal('userInfoModal');
                
                const uidElement = document.getElementById('userUID');
                const secretElement = document.getElementById('userSecret');
                const trialElement = document.getElementById('trialDaysDisplay');
                
                if (uidElement) uidElement.textContent = uid;
                if (secretElement) secretElement.textContent = secret;
                if (trialElement) trialElement.textContent = trialDays;
                
            } catch (error) {
                console.error('❌ خطأ في إنشاء المستخدم:', error);
                console.error('تفاصيل الخطأ:', error.message, error.stack);
                
                let errorMessage = 'حدث خطأ في إنشاء الحساب.';
                
                if (error.code === 'PERMISSION_DENIED') {
                    errorMessage = '⚠️ لا توجد صلاحيات للوصول إلى قاعدة البيانات.';
                } else if (error.message && error.message.includes('network')) {
                    errorMessage = '⚠️ خطأ في الاتصال بالإنترنت. يرجى التحقق من الاتصال.';
                } else if (error.message) {
                    errorMessage = `⚠️ خطأ: ${error.message}`;
                }
                
                // تم إزالة الإشعار
                alert(errorMessage + '\n\nالرجاء:\n1. التحقق من الاتصال بالإنترنت\n2. إعادة تشغيل التطبيق\n3. التواصل مع الدعم الفني: 07813798636');
            }
        };

        async function checkSubscriptionAndGate() {
            const uid = localStorage.getItem('app_uid');
            if (!uid) {
                showActivationModal();
                return false;
            }

            try {
                const userSnap = await database.ref(`users/${uid}`).once('value');
                if (!userSnap.exists()) {
                    showActivationModal();
                    return false;
                }

                const user = userSnap.val();
                const now = Date.now();
                const trialUntil = user.trialUntil;
                const sub = user.subscription;

                if ((sub && sub.validUntil && sub.validUntil > now) || (trialUntil && trialUntil > now)) {
                    window.currentUser = user;
                    window.currentUser.uid = uid;
                    console.log('✅ الاشتراك ساري');
                    return true;
                } else {
                    console.log('⚠️ انتهت صلاحية الاشتراك');
                    showActivationModal();
                    return false;
                }
            } catch (error) {
                console.error('❌ خطأ في التحقق من الاشتراك:', error);
                return false;
            }
        }

        // إظهار نافذة التفعيل
        function showActivationModal() {
            showModal('activationModal');
            // تعيين التبويب الافتراضي
            showActivationTab('code');
        }

        // إغلاق نافذة التفعيل
        function closeActivationModal() {
            closeModal('activationModal');
        }

        // التبديل بين تبويبات التفعيل
        function showActivationTab(tab) {
            const codeTab = document.getElementById('codeTab');
            const loginTab = document.getElementById('loginTab');
            const codeBtn = document.getElementById('codeTabBtn');
            const loginBtn = document.getElementById('loginTabBtn');

            if (tab === 'code') {
                codeTab.style.display = 'block';
                loginTab.style.display = 'none';
                codeBtn.className = 'btn';
                codeBtn.style.background = 'var(--primary-gradient)';
                loginBtn.className = 'btn btn-secondary';
                loginBtn.style.background = '';
            } else {
                codeTab.style.display = 'none';
                loginTab.style.display = 'block';
                loginBtn.className = 'btn';
                loginBtn.style.background = 'var(--primary-gradient)';
                codeBtn.className = 'btn btn-secondary';
                codeBtn.style.background = '';
            }
        }

        // تفعيل باستخدام رمز التفعيل
        async function activateWithCode() {
            const code = document.getElementById('activationCodeInput').value.trim().toUpperCase();
            
            if (!code) {
                // تم إزالة الإشعار
                return;
            }

            // تم إزالة الإشعار

            try {
                await redeemCode(code);
            } catch (error) {
                console.error('❌ خطأ في التفعيل:', error);
                // تم إزالة الإشعار
            }
        }

        // تسجيل الدخول باستخدام UID و Secret
        async function loginWithCredentials() {
            const uid = document.getElementById('loginUIDInput').value.trim();
            const secret = document.getElementById('loginSecretInput').value.trim();

            if (!uid || !secret) {
                // تم إزالة الإشعار
                return;
            }

            // تم إزالة الإشعار

            try {
                await handleLogin(uid, secret);
            } catch (error) {
                console.error('❌ خطأ في تسجيل الدخول:', error);
                // تم إزالة الإشعار
            }
        }

        // نافذة طلب التفعيل / دخول بسيط (مُحدّثة)
        function showActivationPrompt() {
            showActivationModal();
        }

        async function handleLogin(uid, secret) {
            try {
                const snap = await database.ref(`users/${uid}/profile`).once('value');
                if (!snap.exists()) {
                    // تم إزالة الإشعار
                    return;
                }
                const profile = snap.val();
                if (profile.secret !== secret) {
                    // تم إزالة الإشعار
                    return;
                }
                
                // حفظ البيانات محلياً
                localStorage.setItem('app_uid', uid);
                localStorage.setItem('app_secret', secret);
                
                // تحميل بيانات المستخدم
                const userSnap = await database.ref(`users/${uid}`).once('value');
                window.currentUser = userSnap.val();
                window.currentUser.uid = uid;
                
                console.log('✅ تم تسجيل الدخول بنجاح');
                // تم إزالة الإشعار
                
                // إغلاق نافذة التفعيل
                closeActivationModal();
                
                // إعادة تحميل الصفحة بعد ثانية
                setTimeout(() => {
                    location.reload();
                }, 1000);
            } catch (error) {
                console.error('❌ خطأ في تسجيل الدخول:', error);
                // تم إزالة الإشعار
            }
        }

        async function redeemCode(code) {
            try {
                const codeSnap = await database.ref(`subscriptionCodes/${code}`).once('value');
                if (!codeSnap.exists()) {
                    // تم إزالة الإشعار
                    return;
                }
                
                const codeData = codeSnap.val();
                if (codeData.used) {
                    // تم إزالة الإشعار
                    return;
                }

                const uid = localStorage.getItem('app_uid');
                if (!uid) {
                    // تم إزالة الإشعار
                    return;
                }

                const validDays = Number(codeData.days || 30);
                const validUntil = Date.now() + (validDays * 24 * 60 * 60 * 1000);

                await database.ref(`users/${uid}/subscription`).set({
                    type: codeData.type || 'custom',
                    validUntil,
                    activatedByCode: code,
                    activatedAt: Date.now()
                });

                await database.ref(`subscriptionCodes/${code}`).update({
                    used: true,
                    usedBy: uid,
                    usedAt: Date.now()
                });

                console.log('✅ تم تفعيل الاشتراك بنجاح');
                // تم إزالة الإشعار
                
                // إغلاق نافذة التفعيل
                closeActivationModal();
                
                // إعادة تحميل الصفحة بعد ثانيتين
                setTimeout(() => {
                    location.reload();
                }, 2000);
            } catch (error) {
                console.error('❌ خطأ في استرداد الرمز:', error);
                // تم إزالة الإشعار
            }
        }

        // ===============================================
        // 🧪 دوال الاختبار - TEST FUNCTIONS
        // ===============================================

        /**
         * اختبار نافذة التفعيل بجعل الاشتراك منتهي مؤقتاً
         * للاستخدام: افتح Console (F12) واكتب: testExpiredSubscription()
         */
        window.testExpiredSubscription = async function() {
            console.log('🧪 بدء اختبار نافذة التفعيل...');
            
            const uid = localStorage.getItem('app_uid');
            if (!uid) {
                console.error('❌ لا يوجد مستخدم مسجل');
                alert('لا يوجد مستخدم مسجل للاختبار');
                return;
            }

            try {
                // حفظ البيانات الأصلية مؤقتاً
                const originalSnap = await database.ref(`users/${uid}`).once('value');
                const originalData = originalSnap.val();
                
                console.log('💾 تم حفظ البيانات الأصلية مؤقتاً');
                window._testBackup = originalData;

                // تعيين الاشتراك كمنتهي
                const yesterday = Date.now() - (24 * 60 * 60 * 1000); // أمس
                
                await database.ref(`users/${uid}`).update({
                    trialUntil: yesterday,
                    subscription: {
                        type: 'expired_test',
                        validUntil: yesterday,
                        activatedAt: yesterday - (30 * 24 * 60 * 60 * 1000)
                    }
                });

                console.log('✅ تم تعيين الاشتراك كمنتهي');
                console.log('🔄 جاري إعادة فحص الاشتراك...');
                
                // إعادة فحص الاشتراك
                const result = await checkSubscriptionAndGate();
                
                if (!result) {
                    console.log('✅ تم عرض نافذة التفعيل بنجاح!');
                    console.log('💡 لاستعادة البيانات الأصلية، اكتب: restoreOriginalSubscription()');
                }
                
            } catch (error) {
                console.error('❌ خطأ في الاختبار:', error);
                alert('حدث خطأ في الاختبار: ' + error.message);
            }
        };

        /**
         * استعادة البيانات الأصلية بعد الاختبار
         * للاستخدام: افتح Console واكتب: restoreOriginalSubscription()
         */
        window.restoreOriginalSubscription = async function() {
            if (!window._testBackup) {
                console.warn('⚠️ لا توجد بيانات محفوظة للاستعادة');
                alert('لا توجد بيانات محفوظة للاستعادة');
                return;
            }

            const uid = localStorage.getItem('app_uid');
            if (!uid) {
                console.error('❌ لا يوجد مستخدم مسجل');
                return;
            }

            try {
                console.log('🔄 جاري استعادة البيانات الأصلية...');
                
                await database.ref(`users/${uid}`).update({
                    trialUntil: window._testBackup.trialUntil,
                    subscription: window._testBackup.subscription || null
                });

                console.log('✅ تم استعادة البيانات الأصلية بنجاح');
                console.log('🔄 جاري إعادة تحميل الصفحة...');
                
                delete window._testBackup;
                
                setTimeout(() => {
                    location.reload();
                }, 1000);
                
            } catch (error) {
                console.error('❌ خطأ في الاستعادة:', error);
                alert('حدث خطأ في استعادة البيانات: ' + error.message);
            }
        };

        /**
         * عرض نافذة التفعيل مباشرة (بدون تغيير البيانات)
         * للاستخدام: افتح Console واكتب: showActivationModalTest()
         */
        window.showActivationModalTest = function() {
            console.log('🪟 عرض نافذة التفعيل للمعاينة...');
            showActivationModal();
        };

        /**
         * فحص حالة الاشتراك الحالية
         * للاستخدام: افتح Console واكتب: checkCurrentSubscription()
         */
        window.checkCurrentSubscription = async function() {
            const uid = localStorage.getItem('app_uid');
            if (!uid) {
                console.error('❌ لا يوجد مستخدم مسجل');
                return;
            }

            try {
                const userSnap = await database.ref(`users/${uid}`).once('value');
                if (!userSnap.exists()) {
                    console.error('❌ المستخدم غير موجود في قاعدة البيانات');
                    return;
                }

                const user = userSnap.val();
                const now = Date.now();
                const trialUntil = user.trialUntil;
                const sub = user.subscription;

                console.log('📊 حالة الاشتراك الحالية:');
                console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                console.log('🆔 UID:', uid);
                console.log('📅 الآن:', new Date(now).toLocaleString('en-US'));
                console.log('');
                
                if (trialUntil) {
                    const trialDaysLeft = Math.ceil((trialUntil - now) / (1000 * 60 * 60 * 24));
                    console.log('🎁 الفترة التجريبية:');
                    console.log('   تنتهي في:', new Date(trialUntil).toLocaleString('en-US'));
                    console.log('   الأيام المتبقية:', trialDaysLeft > 0 ? trialDaysLeft + ' يوم' : 'منتهية ❌');
                }
                
                console.log('');
                
                if (sub && sub.validUntil) {
                    const subDaysLeft = Math.ceil((sub.validUntil - now) / (1000 * 60 * 60 * 24));
                    console.log('💎 الاشتراك المدفوع:');
                    console.log('   النوع:', sub.type || 'غير محدد');
                    console.log('   ينتهي في:', new Date(sub.validUntil).toLocaleString('en-US'));
                    console.log('   الأيام المتبقية:', subDaysLeft > 0 ? subDaysLeft + ' يوم' : 'منتهي ❌');
                    if (sub.activatedByCode) {
                        console.log('   تم التفعيل بالرمز:', sub.activatedByCode);
                    }
                } else {
                    console.log('💎 الاشتراك المدفوع: غير موجود');
                }
                
                console.log('');
                
                const isValid = (sub && sub.validUntil && sub.validUntil > now) || (trialUntil && trialUntil > now);
                console.log('✅ الحالة النهائية:', isValid ? 'ساري ✓' : 'منتهي ✗');
                console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                
            } catch (error) {
                console.error('❌ خطأ في فحص الاشتراك:', error);
            }
        };

        // طباعة تعليمات الاختبار في Console
        console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #667eea; font-weight: bold;');
        console.log('%c🧪 دوال الاختبار المتاحة:', 'color: #667eea; font-size: 16px; font-weight: bold;');
        console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #667eea; font-weight: bold;');
        console.log('%c1️⃣ testExpiredSubscription()', 'color: #10b981; font-weight: bold;');
        console.log('   جعل الاشتراك منتهي لاختبار نافذة التفعيل');
        console.log('');
        console.log('%c2️⃣ restoreOriginalSubscription()', 'color: #f59e0b; font-weight: bold;');
        console.log('   استعادة البيانات الأصلية بعد الاختبار');
        console.log('');
        console.log('%c3️⃣ showActivationModalTest()', 'color: #8b5cf6; font-weight: bold;');
        console.log('   عرض نافذة التفعيل مباشرة للمعاينة');
        console.log('');
        console.log('%c4️⃣ checkCurrentSubscription()', 'color: #06b6d4; font-weight: bold;');
        console.log('   عرض تفاصيل الاشتراك الحالي');
        console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #667eea; font-weight: bold;');

        // ===============================================
        // نهاية دوال الاختبار
        // ===============================================

        // دوال حفظ البيانات للمستخدم الحالي
        async function saveProductForCurrentUser(productObj) {
            const uid = localStorage.getItem('app_uid');
            if (!uid) throw new Error('لم يتم إيجاد معرف المستخدم');
            
            const key = database.ref(`users/${uid}/products`).push().key;
            productObj.createdAt = Date.now();
            productObj.product_id = key;
            
            await database.ref(`users/${uid}/products/${key}`).set(productObj);
            
            // تسجيل نشاط
            const actKey = database.ref(`users/${uid}/activities`).push().key;
            await database.ref(`users/${uid}/activities/${actKey}`).set({
                type: 'product_create',
                ref: key,
                productName: productObj.product_name || '',
                createdAt: Date.now()
            });
            
            console.log('✅ تم حفظ المنتج:', key);
            return key;
        }

        async function saveSaleForCurrentUser(saleObj) {
            const uid = localStorage.getItem('app_uid');
            if (!uid) throw new Error('لم يتم إيجاد معرف المستخدم');
            
            const key = database.ref(`users/${uid}/sales`).push().key;
            saleObj.createdAt = Date.now();
            saleObj.sale_id = key;
            
            await database.ref(`users/${uid}/sales/${key}`).set(saleObj);
            
            // تسجيل نشاط
            const actKey = database.ref(`users/${uid}/activities`).push().key;
            await database.ref(`users/${uid}/activities/${actKey}`).set({
                type: 'sale_create',
                ref: key,
                totalAmount: saleObj.total_amount || 0,
                createdAt: Date.now()
            });
            
            console.log('✅ تم حفظ البيع:', key);
            return key;
        }

        async function saveDebtForCurrentUser(debtObj) {
            const uid = localStorage.getItem('app_uid');
            if (!uid) throw new Error('لم يتم إيجاد معرف المستخدم');
            
            const key = database.ref(`users/${uid}/debts`).push().key;
            debtObj.createdAt = Date.now();
            debtObj.debt_id = key;
            
            await database.ref(`users/${uid}/debts/${key}`).set(debtObj);
            
            // تسجيل نشاط
            const actKey = database.ref(`users/${uid}/activities`).push().key;
            await database.ref(`users/${uid}/activities/${actKey}`).set({
                type: 'debt_create',
                ref: key,
                customerName: debtObj.customer_name || '',
                totalAmount: debtObj.total_amount || 0,
                createdAt: Date.now()
            });
            
            console.log('✅ تم حفظ الدين:', key);
            return key;
        }

        // ✅ دالة لضمان حفظ الديون في localStorage بشكل إضافي
        async function ensureDebtsInLocalStorage() {
            try {
                if (debtsData && debtsData.length > 0) {
                    const debtsToSave = debtsData.map(debt => ({
                        ...debt,
                        type: 'debt'
                    }));
                    
                    // حفظ في debtsData
                    localStorage.setItem('debtsData', JSON.stringify(debtsToSave));
                    
                    // حفظ نسخة احتياطية في cached_debts
                    localStorage.setItem('cached_debts', JSON.stringify(debtsToSave));
                    
                    console.log('✅ تم حفظ الديون في localStorage (نسخة احتياطية):', debtsToSave.length);
                } else {
                    console.log('⚠️ لا توجد ديون للحفظ');
                }
            } catch (error) {
                console.error('❌ خطأ في حفظ الديون في localStorage:', error);
            }
        }

        // ✅ دالة لتحميل الديون من localStorage
        async function loadDebtsFromLocalStorage() {
            try {
                // 1. محاولة تحميل من debtsData
                const savedDebts = localStorage.getItem('debtsData');
                if (savedDebts) {
                    const parsed = JSON.parse(savedDebts);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        console.log('✅ تم العثور على ديون في debtsData:', parsed.length);
                        debtsData = parsed.map(d => ({...d, type: 'debt'}));
                    }
                }
                
                // 2. محاولة تحميل من cached_debts كنسخة احتياطية
                const cachedDebts = localStorage.getItem('cached_debts');
                if (cachedDebts) {
                    const parsed = JSON.parse(cachedDebts);
                    if (Array.isArray(parsed) && parsed.length > 0) {
                        console.log('📦 تم العثور على ديون محفوظة في cached_debts:', parsed.length);
                        // دمج الديون المحفوظة مع الموجودة
                        parsed.forEach(debt => {
                            const exists = debtsData.find(d => {
                                const id1 = d.id || d.debt_id || d.__backendId;
                                const id2 = debt.id || debt.debt_id || debt.__backendId;
                                return id1 === id2;
                            });
                            if (!exists) {
                                debtsData.push({...debt, type: 'debt'});
                                console.log('✅ تم استرجاع دين من cached_debts:', debt.customer_name);
                            }
                        });
                    }
                }
                
                console.log(`✅ إجمالي الديون المحملة: ${debtsData.length}`);
            } catch (error) {
                console.error('❌ خطأ في تحميل الديون من localStorage:', error);
            }
        }

        async function loadUserDataFromFirebase() {
            const uid = localStorage.getItem('app_uid');
            if (!uid) return;

            try {
                // تحميل المنتجات
                const productsSnap = await database.ref(`users/${uid}/products`).once('value');
                if (productsSnap.exists()) {
                    const productsObj = productsSnap.val();
                    products = Object.keys(productsObj).map(key => ({
                        ...productsObj[key],
                        product_id: key,
                        type: 'product'
                    }));
                }

                // تحميل المبيعات
                const salesSnap = await database.ref(`users/${uid}/sales`).once('value');
                if (salesSnap.exists()) {
                    const salesObj = salesSnap.val();
                    salesData = Object.keys(salesObj).map(key => ({
                        ...salesObj[key],
                        sale_id: key,
                        type: 'sale'
                    }));
                }

                // تحميل الديون
                const debtsSnap = await database.ref(`users/${uid}/debts`).once('value');
                if (debtsSnap.exists()) {
                    const debtsObj = debtsSnap.val();
                    debtsData = Object.keys(debtsObj).map(key => ({
                        ...debtsObj[key],
                        debt_id: key,
                        type: 'debt'
                    }));
                }

                // تحميل التصنيفات
                const categoriesSnap = await database.ref(`users/${uid}/categories`).once('value');
                if (categoriesSnap.exists()) {
                    const categoriesObj = categoriesSnap.val();
                    categories = Object.keys(categoriesObj).map(key => ({
                        ...categoriesObj[key],
                        category_id: key,
                        type: 'category'
                    }));
                }

                console.log('✅ تم تحميل بيانات المستخدم من Firebase');
                updateAllViews();
            } catch (error) {
                console.error('❌ خطأ في تحميل البيانات:', error);
            }
        }

        // ==================== نهاية دوال Firebase ====================

        // ==================== نظام المزامنة التلقائية مع Firestore ====================
        
        // الحصول على معرف المستخدم الفريد
        function getUserId() {
            let userId = localStorage.getItem('user_id');
            if (!userId) {
                userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                localStorage.setItem('user_id', userId);
            }
            return userId;
        }

        // دالة عامة لحفظ البيانات في Firestore
        async function syncToFirestore(collection, docId, data) {
            try {
                if (!window.firestore) {
                    console.warn('⚠️ Firestore غير متاح');
                    return { success: false, error: 'Firestore غير متاح' };
                }

                const userId = getUserId();
                const docRef = window.firestore
                    .collection('users')
                    .doc(userId)
                    .collection(collection)
                    .doc(docId);

                await docRef.set({
                    ...data,
                    lastModified: firebase.firestore.FieldValue.serverTimestamp(),
                    userId: userId
                }, { merge: true });

                console.log(`✅ تم حفظ ${collection}/${docId} في Firestore`);
                return { success: true };
            } catch (error) {
                console.error(`❌ خطأ في حفظ ${collection}:`, error);
                return { success: false, error: error.message };
            }
        }

        // دالة لحذف من Firestore
        async function deleteFromFirestore(collection, docId) {
            try {
                if (!window.firestore) return { success: false };

                const userId = getUserId();
                await window.firestore
                    .collection('users')
                    .doc(userId)
                    .collection(collection)
                    .doc(docId)
                    .delete();

                console.log(`🗑️ تم حذف ${collection}/${docId} من Firestore`);
                return { success: true };
            } catch (error) {
                console.error(`❌ خطأ في حذف ${collection}:`, error);
                return { success: false, error: error.message };
            }
        }

        // مزامنة المنتجات تلقائياً
        async function syncProductToFirestore(product) {
            return await syncToFirestore('products', product.id.toString(), {
                id: product.id,
                name: product.name,
                category: product.category,
                category_id: product.category_id,
                barcode: product.barcode,
                price: product.price,
                cost: product.cost,
                stock: product.stock,
                min_stock: product.min_stock,
                unit: product.unit,
                description: product.description,
                image: product.image,
                is_active: product.is_active,
                created_at: product.created_at || new Date().toISOString()
            });
        }

        // مزامنة التصنيفات تلقائياً
        async function syncCategoryToFirestore(category) {
            return await syncToFirestore('categories', category.id.toString(), {
                id: category.id,
                name: category.name,
                description: category.description,
                icon: category.icon,
                color: category.color,
                created_at: category.created_at || new Date().toISOString()
            });
        }

        // مزامنة المبيعات تلقائياً
        async function syncSaleToFirestore(sale) {
            return await syncToFirestore('sales', sale.invoice_id || sale.id.toString(), {
                id: sale.id,
                invoice_id: sale.invoice_id,
                items: typeof sale.items === 'string' ? sale.items : JSON.stringify(sale.items),
                subtotal: sale.subtotal,
                tax_amount: sale.tax_amount,
                discount: sale.discount,
                discount_amount: sale.discount_amount,
                additional_amount: sale.additional_amount,
                final_total: sale.final_total,
                payment_method: sale.payment_method,
                payment_type: sale.payment_type,
                customer_name: sale.customer_name,
                customer_phone: sale.customer_phone,
                timestamp: sale.timestamp,
                created_at: sale.created_at || new Date().toISOString()
            });
        }

        // مزامنة الديون تلقائياً
        async function syncDebtToFirestore(debt) {
            return await syncToFirestore('debts', debt.id.toString(), {
                id: debt.id,
                invoice_id: debt.invoice_id,
                customer_name: debt.customer_name,
                customer_phone: debt.customer_phone,
                customer_address: debt.customer_address,
                total_amount: debt.total_amount,
                paid_amount: debt.paid_amount,
                remaining_amount: debt.remaining_amount,
                monthly_amount: debt.monthly_amount,
                new_monthly_amount: debt.new_monthly_amount,
                installment_months: debt.installment_months,
                installments: debt.installments,
                status: debt.status,
                created_at: debt.created_at,
                next_payment_date: debt.next_payment_date,
                linked_invoices: debt.linked_invoices,
                merge_count: debt.merge_count,
                merge_method: debt.merge_method,
                payment_history: debt.payment_history
            });
        }

        // استرجاع البيانات من Firestore ودمجها مع البيانات المحلية
        async function fetchFromFirestore(collection) {
            try {
                if (!window.firestore) {
                    console.warn('⚠️ Firestore غير متاح');
                    return [];
                }

                const userId = getUserId();
                const snapshot = await window.firestore
                    .collection('users')
                    .doc(userId)
                    .collection(collection)
                    .get();

                const data = [];
                snapshot.forEach(doc => {
                    data.push({ ...doc.data(), firestoreId: doc.id });
                });

                console.log(`✅ تم استرجاع ${data.length} سجل من ${collection}`);
                return data;
            } catch (error) {
                console.error(`❌ خطأ في استرجاع ${collection}:`, error);
                return [];
            }
        }

        // دمج البيانات المسترجعة مع البيانات المحلية (بدون حذف)
        async function mergeDataWithLocal(collection, firestoreData, localDataArray, idField = 'id') {
            console.log(`🔄 دمج بيانات ${collection}...`);
            console.log(`📦 البيانات المحلية: ${localDataArray.length} سجل`);
            console.log(`☁️ البيانات من Firestore: ${firestoreData.length} سجل`);

            let addedCount = 0;
            let updatedCount = 0;

            for (const firestoreItem of firestoreData) {
                const itemId = firestoreItem[idField];
                const existingIndex = localDataArray.findIndex(item => item[idField] == itemId);

                if (existingIndex === -1) {
                    // عنصر جديد - إضافة
                    localDataArray.push(firestoreItem);
                    addedCount++;
                    console.log(`➕ إضافة ${collection}: ${itemId}`);
                } else {
                    // عنصر موجود - تحديث إذا كان أحدث
                    const localItem = localDataArray[existingIndex];
                    const localModified = new Date(localItem.lastModified || localItem.created_at || 0);
                    const firestoreModified = new Date(
                        firestoreItem.lastModified?.toDate?.() || 
                        firestoreItem.lastModified || 
                        firestoreItem.created_at || 
                        0
                    );

                    if (firestoreModified > localModified) {
                        localDataArray[existingIndex] = { ...localItem, ...firestoreItem };
                        updatedCount++;
                        console.log(`🔄 تحديث ${collection}: ${itemId}`);
                    }
                }
            }

            console.log(`✅ ${collection}: تم إضافة ${addedCount} وتحديث ${updatedCount}`);
            return { added: addedCount, updated: updatedCount };
        }

        // حفظ نسخة احتياطية كاملة
        async function createFullBackup() {
            try {
                // تم إزالة الإشعار

                const userId = getUserId();
                const backupId = 'backup_' + new Date().toISOString().replace(/[:.]/g, '-');

                // جمع جميع البيانات
                const backupData = {
                    version: '1.0',
                    timestamp: new Date().toISOString(),
                    userId: userId,
                    data: {
                        products: await dataSDK.queryByField('type', 'product'),
                        categories: await dataSDK.queryByField('type', 'category'),
                        sales: salesData || [],
                        debts: debtsData || [],
                        settings: {
                            store: JSON.parse(localStorage.getItem('storeSettings') || '{}'),
                            system: JSON.parse(localStorage.getItem('systemSettings') || '{}'),
                            printer: JSON.parse(localStorage.getItem('printerSettings') || '{}'),
                            theme: localStorage.getItem('currentTheme'),
                            customColors: JSON.parse(localStorage.getItem('customColors') || '{}')
                        }
                    }
                };

                // حفظ في Firestore
                await window.firestore
                    .collection('users')
                    .doc(userId)
                    .collection('backups')
                    .doc(backupId)
                    .set(backupData);

                console.log('✅ تم إنشاء النسخة الاحتياطية:', backupId);
                // تم إزالة الإشعار
                
                return { success: true, backupId };
            } catch (error) {
                console.error('❌ خطأ في إنشاء النسخة الاحتياطية:', error);
                // تم إزالة الإشعار
                return { success: false, error: error.message };
            }
        }

        // استرجاع النسخة الاحتياطية
        async function restoreFromBackup(backupId) {
            try {
                // تم إزالة الإشعار

                const userId = getUserId();
                const backupDoc = await window.firestore
                    .collection('users')
                    .doc(userId)
                    .collection('backups')
                    .doc(backupId)
                    .get();

                if (!backupDoc.exists) {
                    throw new Error('النسخة الاحتياطية غير موجودة');
                }

                const backupData = backupDoc.data();
                console.log('📦 البيانات المسترجعة:', backupData);

                // دمج البيانات
                let totalAdded = 0;
                let totalUpdated = 0;

                // دمج المنتجات
                if (backupData.data.products) {
                    const localProducts = await dataSDK.queryByField('type', 'product');
                    const result = await mergeDataWithLocal('products', backupData.data.products, localProducts);
                    totalAdded += result.added;
                    totalUpdated += result.updated;
                    
                    // حفظ المنتجات المدموجة
                    for (const product of localProducts) {
                        await dataSDK.save({ ...product, type: 'product' });
                    }
                }

                // دمج التصنيفات
                if (backupData.data.categories) {
                    const localCategories = await dataSDK.queryByField('type', 'category');
                    const result = await mergeDataWithLocal('categories', backupData.data.categories, localCategories);
                    totalAdded += result.added;
                    totalUpdated += result.updated;
                    
                    for (const category of localCategories) {
                        await dataSDK.save({ ...category, type: 'category' });
                    }
                }

                // دمج المبيعات
                if (backupData.data.sales) {
                    salesData = salesData || [];
                    const result = await mergeDataWithLocal('sales', backupData.data.sales, salesData, 'invoice_id');
                    totalAdded += result.added;
                    totalUpdated += result.updated;
                }

                // دمج الديون
                if (backupData.data.debts) {
                    debtsData = debtsData || [];
                    const result = await mergeDataWithLocal('debts', backupData.data.debts, debtsData);
                    totalAdded += result.added;
                    totalUpdated += result.updated;
                }

                // استرجاع الإعدادات (اختياري - يمكن تخطيه)
                if (backupData.data.settings && confirm('هل تريد استرجاع الإعدادات أيضاً؟')) {
                    if (backupData.data.settings.store) {
                        localStorage.setItem('storeSettings', JSON.stringify(backupData.data.settings.store));
                    }
                    if (backupData.data.settings.system) {
                        localStorage.setItem('systemSettings', JSON.stringify(backupData.data.settings.system));
                    }
                    if (backupData.data.settings.printer) {
                        localStorage.setItem('printerSettings', JSON.stringify(backupData.data.settings.printer));
                    }
                    if (backupData.data.settings.theme) {
                        localStorage.setItem('currentTheme', backupData.data.settings.theme);
                    }
                    if (backupData.data.settings.customColors) {
                        localStorage.setItem('customColors', JSON.stringify(backupData.data.settings.customColors));
                    }
                }

                console.log('✅ تم استرجاع النسخة الاحتياطية بنجاح');
                // تم إزالة الإشعار
                
                // إعادة تحميل الصفحة لتطبيق التغييرات
                if (confirm('تم الاسترجاع بنجاح! هل تريد إعادة تحميل الصفحة؟')) {
                    location.reload();
                }

                return { success: true, added: totalAdded, updated: totalUpdated };
            } catch (error) {
                console.error('❌ خطأ في استرجاع النسخة الاحتياطية:', error);
                // تم إزالة الإشعار
                return { success: false, error: error.message };
            }
        }

        // الحصول على قائمة النسخ الاحتياطية
        async function getBackupsList() {
            try {
                const userId = getUserId();
                const snapshot = await window.firestore
                    .collection('users')
                    .doc(userId)
                    .collection('backups')
                    .orderBy('timestamp', 'desc')
                    .get();

                const backups = [];
                snapshot.forEach(doc => {
                    backups.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });

                return backups;
            } catch (error) {
                console.error('❌ خطأ في جلب قائمة النسخ الاحتياطية:', error);
                return [];
            }
        }

        // ==================== نهاية نظام المزامنة ====================

        // تحديث حالة شاشة التحميل
        function updateLoaderStatus(message) {
            const statusEl = document.getElementById('loaderStatus');
            if (statusEl) {
                statusEl.textContent = message;
            }
            console.log('📊', message);
        }

        /* ============================================
           نظام الحماية والأمان المتكامل
           Digital Creativity - Kraar Al-Shaabari
           ============================================ */

        // نظام الأمان والمصادقة
        class SecurityManager {
            constructor() {
                this.currentUser = null;
                this.users = [];
                this.auditLog = []; // سجل العمليات
                this.init();
            }
            
            // الحصول على اسم المستخدم الحالي
            getCurrentUsername() {
                return this.currentUser ? this.currentUser.username : 'نظام';
            }
            
            // الحصول على الاسم الكامل للمستخدم
            getCurrentUserFullName() {
                return this.currentUser ? this.currentUser.name : 'النظام';
            }
            
            // تسجيل عملية في سجل المراجعة
            logOperation(action, details = {}) {
                const logEntry = {
                    id: 'log_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
                    timestamp: new Date().toISOString(),
                    user: this.getCurrentUsername(),
                    userName: this.getCurrentUserFullName(),
                    userRole: this.currentUser ? this.currentUser.role : 'system',
                    action: action,
                    details: details
                };
                
                this.auditLog.push(logEntry);
                
                // حفظ السجل في localStorage
                try {
                    // الاحتفاظ بآخر 1000 عملية فقط
                    if (this.auditLog.length > 1000) {
                        this.auditLog = this.auditLog.slice(-1000);
                    }
                    localStorage.setItem('audit_log', JSON.stringify(this.auditLog));
                } catch (error) {
                    console.warn('تحذير: لا يمكن حفظ سجل العمليات', error);
                }
                
                console.log('📝 عملية جديدة:', action, 'بواسطة:', this.getCurrentUserFullName());
                
                return logEntry;
            }
            
            // تحميل سجل العمليات
            loadAuditLog() {
                try {
                    const savedLog = localStorage.getItem('audit_log');
                    if (savedLog) {
                        this.auditLog = JSON.parse(savedLog);
                    }
                } catch (error) {
                    console.error('خطأ في تحميل سجل العمليات:', error);
                    this.auditLog = [];
                }
            }

            init() {
                console.log('🔐 تهيئة نظام الأمان...');
                
                // تحميل سجل العمليات
                this.loadAuditLog();
                
                // تحميل المستخدمين من localStorage
                const savedUsers = localStorage.getItem('app_users');
                if (savedUsers) {
                    try {
                        this.users = JSON.parse(savedUsers);
                        console.log('✅ تم تحميل المستخدمين:', this.users.length, 'مستخدم');
                    } catch (error) {
                        console.error('❌ خطأ في قراءة بيانات المستخدمين، سيتم إنشاء حساب جديد');
                        this.createDefaultAdmin();
                    }
                } else {
                    console.log('📝 إنشاء حساب المدير الافتراضي...');
                    this.createDefaultAdmin();
                }

                console.log('👥 المستخدمون المتاحون:');
                this.users.forEach(u => {
                    console.log(`  - ${u.username} (${u.role}) - ${u.active ? 'نشط' : 'معطل'}`);
                });

                // التحقق من جلسة نشطة
                const sessionUser = sessionStorage.getItem('current_user');
                if (sessionUser) {
                    this.currentUser = JSON.parse(sessionUser);
                    this.startInactivityTimer();
                    console.log('✅ جلسة نشطة:', this.currentUser.username);
                    
                    // تسجيل استمرار الجلسة
                    this.logOperation('استمرار الجلسة', { username: this.currentUser.username });
                }
            }

            createDefaultAdmin() {
                this.users = [{
                    id: '1',
                    username: 'admin',
                    password: 'admin123',
                    name: 'المدير العام',
                    role: 'admin',
                    active: true,
                    permissions: this.getAllPermissions(),
                    created_at: new Date().toISOString()
                }];
                this.saveUsers();
                console.log('✅ تم إنشاء حساب المدير: admin / admin123');
            }

            getAllPermissions() {
                return {
                    // Dashboard
                    dashboard_products_count: true,
                    dashboard_inventory_value: true,
                    dashboard_debts_count: true,
                    dashboard_debts_value: true,
                    dashboard_revenue: true,
                    dashboard_profit: true,

                    // الشريط الجانبي
                    sidebar_pos: true,
                    sidebar_invoices: true,
                    sidebar_products: true,
                    sidebar_inventory: true,
                    sidebar_debts: true,
                    sidebar_reports: true,
                    sidebar_printer: true,
                    sidebar_settings: true,

                    // عرض الصفحات
                    sales_view: true,
                    products_view: true,
                    inventory_view: true,
                    debts_view: true,
                    reports_view: true,
                    settings_view: true,

                    // المنتجات
                    products_add: true,
                    products_edit: true,
                    products_delete: true,
                    products_export: true,
                    products_import: true,
                    products_add_category: true,
                    products_stock_management: true,

                    // المخزن
                    inventory_add: true,
                    inventory_edit: true,
                    inventory_delete: true,
                    inventory_adjust: true,
                    inventory_history: true,
                    inventory_export: true,

                    // نقطة البيع
                    pos_access: true,
                    pos_sell: true,
                    pos_add_to_cart: true,
                    pos_installment: true,
                    pos_discount: true,
                    pos_print: true,
                    pos_cancel: true,

                    // الفواتير
                    invoices_view: true,
                    invoices_delete: true,
                    invoices_export: true,

                    // الديون
                    debts_view_details: true,
                    debts_payment: true,
                    debts_delete: true,
                    debts_export: true,
                    debts_reminders: true,

                    // التقارير
                    reports_sales: true,
                    reports_inventory: true,
                    reports_debts: true,
                    reports_profit: true,
                    reports_export: true,

                    // الطابعة والإعدادات
                    printer_configure: true,
                    printer_test: true,
                    settings_edit: true,
                    settings_backup: true,
                    settings_restore: true
                };
            }

            // حفظ المستخدمين
            saveUsers() {
                localStorage.setItem('app_users', JSON.stringify(this.users));
            }

            // تسجيل الدخول
            login(username, password) {
                console.log('🔍 البحث عن المستخدم في القاعدة...');
                console.log('   اسم المستخدم المدخل:', username);
                console.log('   عدد المستخدمين الكلي:', this.users.length);
                
                // طباعة تفاصيل كل مستخدم للمقارنة
                this.users.forEach((u, index) => {
                    console.log(`   [${index}] username: "${u.username}", active: ${u.active}`);
                });
                
                const user = this.users.find(u => 
                    u.username === username && 
                    u.password === password && 
                    u.active
                );

                if (user) {
                    console.log('✅ تم العثور على المستخدم:', user.name);
                    this.currentUser = user;
                    sessionStorage.setItem('current_user', JSON.stringify(user));
                    sessionStorage.setItem('is_logged_in', 'true');
                    sessionStorage.setItem('login_time', new Date().toISOString());
                    this.startInactivityTimer();
                    
                    // تسجيل عملية تسجيل الدخول
                    this.logOperation('تسجيل الدخول', { 
                        username: username,
                        role: user.role,
                        loginTime: new Date().toISOString()
                    });
                    
                    return { success: true, user };
                }

                console.error('❌ لم يتم العثور على المستخدم');
                console.log('   التحقق من:');
                console.log('   - اسم المستخدم صحيح؟');
                console.log('   - كلمة المرور صحيحة؟');
                console.log('   - الحساب نشط؟');
                
                // تسجيل محاولة تسجيل دخول فاشلة
                this.auditLog.push({
                    id: 'log_' + Date.now(),
                    timestamp: new Date().toISOString(),
                    user: username,
                    userName: 'غير معروف',
                    userRole: 'unknown',
                    action: 'محاولة تسجيل دخول فاشلة',
                    details: { username: username }
                });
                
                return { success: false, message: 'اسم المستخدم أو كلمة المرور غير صحيحة' };
            }

            // تسجيل الخروج
            logout() {
                // تسجيل عملية تسجيل الخروج قبل مسح البيانات
                const username = this.currentUser ? this.currentUser.username : 'غير معروف';
                this.logOperation('تسجيل الخروج', { username: username });
                
                this.currentUser = null;
                sessionStorage.removeItem('current_user');
                sessionStorage.removeItem('is_logged_in');
                sessionStorage.removeItem('login_time');
                this.stopInactivityTimer();
                
                // إعادة تحميل الصفحة
                window.location.reload();
            }

            // التحقق من الصلاحية
            hasPermission(permission) {
                if (!this.currentUser) return false;
                if (this.currentUser.role === 'admin') return true;
                return this.currentUser.permissions && this.currentUser.permissions[permission] === true;
            }

            // إدارة المستخدمين
            addUser(userData) {
                const newUser = {
                    id: Date.now().toString(),
                    ...userData,
                    created_at: new Date().toISOString(),
                    active: true
                };
                this.users.push(newUser);
                this.saveUsers();
                return { success: true, user: newUser };
            }

            updateUser(userId, userData) {
                const index = this.users.findIndex(u => u.id === userId);
                if (index !== -1) {
                    this.users[index] = { ...this.users[index], ...userData };
                    this.saveUsers();
                    
                    // تحديث المستخدم الحالي إذا كان هو نفسه
                    if (this.currentUser && this.currentUser.id === userId) {
                        this.currentUser = this.users[index];
                        sessionStorage.setItem('current_user', JSON.stringify(this.currentUser));
                    }
                    
                    return { success: true, user: this.users[index] };
                }
                return { success: false, message: 'المستخدم غير موجود' };
            }

            deleteUser(userId) {
                // منع حذف المستخدم الأساسي
                const user = this.users.find(u => u.id === userId);
                if (user && user.id === '1') {
                    return { success: false, message: 'لا يمكن حذف المدير الأساسي' };
                }

                const index = this.users.findIndex(u => u.id === userId);
                if (index !== -1) {
                    this.users.splice(index, 1);
                    this.saveUsers();
                    return { success: true };
                }
                return { success: false, message: 'المستخدم غير موجود' };
            }

            toggleUserStatus(userId) {
                // منع تعطيل المستخدم الأساسي
                const user = this.users.find(u => u.id === userId);
                if (user && user.id === '1') {
                    return { success: false, message: 'لا يمكن تعطيل المدير الأساسي' };
                }

                const index = this.users.findIndex(u => u.id === userId);
                if (index !== -1) {
                    this.users[index].active = !this.users[index].active;
                    this.saveUsers();
                    return { success: true, user: this.users[index] };
                }
                return { success: false, message: 'المستخدم غير موجود' };
            }

            getUsers() {
                return this.users;
            }

            // مؤقت عدم النشاط
            startInactivityTimer() {
                this.stopInactivityTimer();
                this.inactivityTimer = setTimeout(() => {
                    alert('تم تسجيل الخروج تلقائياً بسبب عدم النشاط');
                    this.logout();
                }, 30 * 60 * 1000); // 30 دقيقة
            }

            stopInactivityTimer() {
                if (this.inactivityTimer) {
                    clearTimeout(this.inactivityTimer);
                    this.inactivityTimer = null;
                }
            }

            // إعادة ضبط مؤقت عدم النشاط
            resetInactivityTimer() {
                if (this.currentUser) {
                    this.startInactivityTimer();
                }
            }

            // عرض صفحة تسجيل الدخول
            showLoginPage() {
                const loginOverlay = document.getElementById('loginOverlay');
                if (loginOverlay) {
                    loginOverlay.style.display = 'flex';
                }
            }

            // إخفاء صفحة تسجيل الدخول
            hideLoginPage() {
                const loginOverlay = document.getElementById('loginOverlay');
                if (loginOverlay) {
                    loginOverlay.style.display = 'none';
                }
            }

            // معالجة تسجيل الدخول من النموذج
            handleLogin() {
                const username = document.getElementById('loginUsername').value.trim();
                const password = document.getElementById('loginPassword').value;

                console.log('🔑 محاولة تسجيل الدخول:', username);

                if (!username || !password) {
                    alert('الرجاء إدخال اسم المستخدم وكلمة المرور');
                    return;
                }

                console.log('📋 عدد المستخدمين المتاحين:', this.users.length);
                console.log('👤 البحث عن مستخدم:', username);

                const result = this.login(username, password);
                
                console.log('📊 نتيجة تسجيل الدخول:', result);

                if (result.success) {
                    console.log('✅ تسجيل الدخول ناجح!');
                    this.hideLoginPage();
                    this.applyPermissions();
                    this.updateSidebarButtons();
                    
                    // إعادة تحميل البيانات
                    if (typeof loadAllData === 'function') {
                        loadAllData();
                    }
                    
                    // تم إزالة الإشعار
                } else {
                    console.error('❌ فشل تسجيل الدخول:', result.message);
                    alert(result.message);
                }
            }

            // فتح لوحة الأمان
            openSecurityPanel() {
                if (!this.currentUser || this.currentUser.role !== 'admin') {
                    alert('هذه الميزة متاحة للمديرين فقط');
                    return;
                }

                const panel = document.getElementById('securityPanel');
                if (panel) {
                    panel.classList.add('active');
                    this.loadUsersTable();
                }
            }

            // إغلاق لوحة الأمان
            closeSecurityPanel() {
                const panel = document.getElementById('securityPanel');
                if (panel) {
                    panel.classList.remove('active');
                }
            }

            // تبديل علامات التبويب
            switchSecurityTab(tab) {
                // إخفاء جميع المحتويات
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.style.display = 'none';
                });

                // إزالة active من جميع الأزرار
                document.querySelectorAll('.security-tab').forEach(btn => {
                    btn.classList.remove('active');
                });

                // عرض المحتوى المطلوب
                const content = document.getElementById(tab + 'Tab');
                if (content) {
                    content.style.display = 'block';
                }

                // تفعيل الزر
                const btn = document.querySelector(`.security-tab[onclick*="${tab}"]`);
                if (btn) {
                    btn.classList.add('active');
                }
            }

            // تحميل جدول المستخدمين
            loadUsersTable() {
                const tbody = document.getElementById('usersTableBody');
                if (!tbody) return;

                tbody.innerHTML = '';
                this.users.forEach(user => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${user.name}</td>
                        <td>${user.username}</td>
                        <td><span class="user-badge badge-${user.role}">${user.role === 'admin' ? 'مدير' : 'مستخدم'}</span></td>
                        <td><span class="status-${user.active ? 'active' : 'inactive'}">${user.active ? 'نشط' : 'معطل'}</span></td>
                        <td>${new Date(user.created_at).toLocaleDateString('en-GB')}</td>
                        <td>
                            <button class="action-btn btn-edit" onclick="window.securityManager.editUser('${user.id}')">
                                <i class="fas fa-edit"></i> تعديل
                            </button>
                            ${user.id !== '1' ? `
                                <button class="action-btn btn-delete" onclick="window.securityManager.deleteUserConfirm('${user.id}')">
                                    <i class="fas fa-trash"></i> حذف
                                </button>
                            ` : ''}
                        </td>
                    `;
                    tbody.appendChild(row);
                });
            }

            // فتح نموذج إضافة/تعديل مستخدم
            openUserModal(userId = null) {
                const modal = document.getElementById('userModal');
                const modalTitle = document.getElementById('userModalTitle');
                const form = document.getElementById('userForm');
                
                if (!modal || !modalTitle || !form) return;

                form.reset();
                document.getElementById('userId').value = '';

                if (userId) {
                    // وضع التعديل
                    const user = this.users.find(u => u.id === userId);
                    if (user) {
                        modalTitle.textContent = 'تعديل مستخدم';
                        document.getElementById('userId').value = user.id;
                        document.getElementById('userName').value = user.name;
                        document.getElementById('userUsername').value = user.username;
                        document.getElementById('userRole').value = user.role;
                        
                        // تحميل الصلاحيات
                        this.loadUserPermissions(user.permissions || {});
                    }
                } else {
                    // وضع الإضافة
                    modalTitle.textContent = 'إضافة مستخدم جديد';
                    this.loadUserPermissions(this.getAllPermissions());
                }

                modal.classList.add('active');
            }

            closeUserModal() {
                const modal = document.getElementById('userModal');
                if (modal) {
                    modal.classList.remove('active');
                }
            }

            // تحميل صلاحيات المستخدم في النموذج
            loadUserPermissions(permissions) {
                Object.keys(permissions).forEach(key => {
                    const checkbox = document.getElementById('perm_' + key);
                    if (checkbox) {
                        checkbox.checked = permissions[key] === true;
                    }
                });
            }

            // جمع الصلاحيات من النموذج
            getPermissionsFromForm() {
                const permissions = {};
                const allPermissions = this.getAllPermissions();
                
                Object.keys(allPermissions).forEach(key => {
                    const checkbox = document.getElementById('perm_' + key);
                    if (checkbox) {
                        permissions[key] = checkbox.checked;
                    }
                });
                
                return permissions;
            }

            // حفظ المستخدم
            saveUser() {
                const userId = document.getElementById('userId').value;
                const name = document.getElementById('userName').value.trim();
                const username = document.getElementById('userUsername').value.trim();
                const password = document.getElementById('userPassword').value;
                const role = document.getElementById('userRole').value;

                if (!name || !username) {
                    alert('الرجاء إدخال الاسم واسم المستخدم');
                    return;
                }

                if (!userId && !password) {
                    alert('الرجاء إدخال كلمة المرور للمستخدم الجديد');
                    return;
                }

                const permissions = this.getPermissionsFromForm();

                const userData = {
                    name,
                    username,
                    role,
                    permissions
                };

                if (password) {
                    userData.password = password;
                }

                let result;
                if (userId) {
                    result = this.updateUser(userId, userData);
                } else {
                    result = this.addUser(userData);
                }

                if (result.success) {
                    this.closeUserModal();
                    this.loadUsersTable();
                    // تم إزالة الإشعار
                } else {
                    alert(result.message);
                }
            }

            // تعديل مستخدم
            editUser(userId) {
                this.openUserModal(userId);
            }

            // تأكيد حذف مستخدم
            deleteUserConfirm(userId) {
                if (confirm('هل أنت متأكد من حذف هذا المستخدم؟')) {
                    const result = this.deleteUser(userId);
                    if (result.success) {
                        this.loadUsersTable();
                        // تم إزالة الإشعار
                    } else {
                        alert(result.message);
                    }
                }
            }

            // تطبيق الصلاحيات على الواجهة
            applyPermissions() {
                if (!this.currentUser) return;

                console.log('🔐 تطبيق الصلاحيات الشاملة للمستخدم:', this.currentUser.username);
                console.log('📋 الدور:', this.currentUser.role);

                // Dashboard Stats - الإحصائيات
                this.toggleElement('quickTotalProducts', 'dashboard_products_count');
                this.toggleElement('quickInventoryValue', 'dashboard_inventory_value');
                this.toggleElement('quickTotalDebts', 'dashboard_debts_count');
                this.toggleElement('quickDebtsValue', 'dashboard_debts_value');

                // Sidebar - القوائم الجانبية
                this.toggleElement('posNavItem', 'sidebar_pos');
                this.toggleElement('invoicesNavItem', 'sidebar_invoices');
                this.toggleElement('productsNavItem', 'sidebar_products');
                this.toggleElement('inventoryNavItem', 'sidebar_inventory');
                this.toggleElement('debtsNavItem', 'sidebar_debts');
                this.toggleElement('reportsNavItem', 'sidebar_reports');
                this.toggleElement('printerNavItem', 'sidebar_printer');
                this.toggleElement('settingsNavItem', 'sidebar_settings');

                // تطبيق الصلاحيات على جميع العناصر التي لها data-permission
                this.applyPermissionsToElements();
                
                // تطبيق الصلاحيات على العناصر الديناميكية
                this.applyDynamicPermissions();
                
                console.log('✅ تم تطبيق الصلاحيات بنجاح');
            }

            // تطبيق الصلاحيات على العناصر الديناميكية
            applyDynamicPermissions() {
                // إعادة رسم الجداول مع الصلاحيات الجديدة
                if (typeof renderProductsTable === 'function') {
                    setTimeout(() => renderProductsTable(), 100);
                }
                
                if (typeof renderDebtsTable === 'function') {
                    setTimeout(() => renderDebtsTable(), 100);
                }
                
                if (typeof renderInvoicesTable === 'function') {
                    setTimeout(() => renderInvoicesTable(), 100);
                }
                
                if (typeof renderInventoryTable === 'function') {
                    setTimeout(() => renderInventoryTable(), 100);
                }
            }

            // تطبيق الصلاحيات على جميع العناصر
            applyPermissionsToElements() {
                // البحث عن جميع العناصر التي لها data-permission
                const elements = document.querySelectorAll('[data-permission]');
                console.log(`🔍 عدد العناصر المحمية: ${elements.length}`);
                
                let hiddenCount = 0;
                let shownCount = 0;
                
                elements.forEach(element => {
                    const permission = element.getAttribute('data-permission');
                    
                    // للمتطلبات المتعددة (مثل: perm1,perm2)
                    const permissions = permission.split(',').map(p => p.trim());
                    
                    // يحتاج جميع الصلاحيات أو واحدة منها؟
                    const requireAll = element.getAttribute('data-require-all') === 'true';
                    
                    let hasAccess = false;
                    if (requireAll) {
                        // يحتاج جميع الصلاحيات
                        hasAccess = permissions.every(perm => this.hasPermission(perm));
                    } else {
                        // يحتاج أي صلاحية واحدة
                        hasAccess = permissions.some(perm => this.hasPermission(perm));
                    }
                    
                    if (hasAccess) {
                        element.style.display = '';
                        element.disabled = false;
                        element.classList.remove('permission-hidden');
                        shownCount++;
                    } else {
                        element.style.display = 'none';
                        element.disabled = true;
                        element.classList.add('permission-hidden');
                        hiddenCount++;
                    }
                });
                
                console.log(`  ✅ عناصر مرئية: ${shownCount}`);
                console.log(`  ❌ عناصر مخفية: ${hiddenCount}`);
            }

            toggleElement(elementId, permission) {
                const element = document.getElementById(elementId);
                if (element) {
                    const hasAccess = this.hasPermission(permission);
                    element.style.display = hasAccess ? '' : 'none';
                    
                    if (!hasAccess) {
                        element.disabled = true;
                    }
                }
            }

            // فحص الصلاحية قبل تنفيذ أي عملية
            checkPermission(permission, showAlert = true) {
                if (!this.currentUser) {
                    if (showAlert) alert('يجب تسجيل الدخول أولاً');
                    console.warn('⚠️ محاولة الوصول بدون تسجيل دخول');
                    return false;
                }

                if (this.currentUser.role === 'admin') {
                    return true;
                }

                const hasAccess = this.hasPermission(permission);
                
                if (!hasAccess) {
                    if (showAlert) {
                        alert('عذراً، ليس لديك صلاحية لتنفيذ هذه العملية');
                    }
                    
                    // تسجيل محاولة الوصول المرفوضة
                    this.logOperation('محاولة وصول مرفوضة', {
                        permission: permission,
                        username: this.currentUser.username
                    });
                    
                    console.warn(`⛔ محاولة وصول مرفوضة: ${permission} من قبل ${this.currentUser.username}`);
                }

                return hasAccess;
            }
            
            // فحص متعدد الصلاحيات (يحتاج جميع الصلاحيات)
            checkMultiplePermissions(permissions, showAlert = true) {
                if (!Array.isArray(permissions)) {
                    permissions = [permissions];
                }
                
                for (const permission of permissions) {
                    if (!this.checkPermission(permission, false)) {
                        if (showAlert) {
                            alert(`عذراً، تحتاج إلى صلاحية: ${permission}`);
                        }
                        return false;
                    }
                }
                
                return true;
            }
            
            // فحص أي صلاحية (يحتاج واحدة فقط من الصلاحيات)
            checkAnyPermission(permissions, showAlert = true) {
                if (!Array.isArray(permissions)) {
                    permissions = [permissions];
                }
                
                for (const permission of permissions) {
                    if (this.checkPermission(permission, false)) {
                        return true;
                    }
                }
                
                if (showAlert) {
                    alert('عذراً، ليس لديك أي من الصلاحيات المطلوبة');
                }
                
                return false;
            }
            
            // فحص صلاحيات القراءة فقط (view only)
            isViewOnly(module) {
                // إذا كان admin، فليس view only
                if (this.currentUser && this.currentUser.role === 'admin') {
                    return false;
                }
                
                // التحقق من الصلاحيات حسب الوحدة
                const viewPermissions = {
                    'products': 'products_view',
                    'debts': 'debts_view',
                    'inventory': 'inventory_view',
                    'sales': 'sales_view'
                };
                
                const editPermissions = {
                    'products': ['products_add', 'products_edit', 'products_delete'],
                    'debts': ['debts_payment', 'debts_delete'],
                    'inventory': ['inventory_add', 'inventory_edit', 'inventory_delete'],
                    'sales': ['pos_sell']
                };
                
                const viewPerm = viewPermissions[module];
                const editPerms = editPermissions[module];
                
                // له صلاحية العرض
                const hasView = this.hasPermission(viewPerm);
                
                // له أي صلاحية تعديل؟
                let hasEdit = false;
                if (editPerms) {
                    hasEdit = editPerms.some(perm => this.hasPermission(perm));
                }
                
                // view only = له صلاحية عرض لكن ليس له صلاحيات تعديل
                return hasView && !hasEdit;
            }

            // الحصول على المستخدم الحالي
            getCurrentUser() {
                return this.currentUser;
            }

            // الحصول على اسم المستخدم الحالي
            getCurrentUsername() {
                return this.currentUser ? this.currentUser.username : 'غير معروف';
            }

            // الحصول على اسم المستخدم الكامل
            getCurrentUserFullName() {
                return this.currentUser ? this.currentUser.name : 'غير معروف';
            }

            // تسجيل عملية (Audit Trail)
            logActivity(activity) {
                const log = {
                    timestamp: new Date().toISOString(),
                    username: this.getCurrentUsername(),
                    fullName: this.getCurrentUserFullName(),
                    role: this.currentUser ? this.currentUser.role : 'unknown',
                    action: activity.action || 'unknown',
                    module: activity.module || 'general',
                    details: activity.details || {},
                    description: activity.description || ''
                };

                // حفظ السجل
                const logs = JSON.parse(localStorage.getItem('activity_logs') || '[]');
                logs.push(log);
                
                // الاحتفاظ بآخر 1000 سجل فقط
                if (logs.length > 1000) {
                    logs.shift();
                }
                
                localStorage.setItem('activity_logs', JSON.stringify(logs));
                
                console.log('📝 تم تسجيل العملية:', log);
                
                return log;
            }

            // الحصول على سجل العمليات
            getActivityLogs(filters = {}) {
                const logs = JSON.parse(localStorage.getItem('activity_logs') || '[]');
                
                if (filters.username) {
                    return logs.filter(log => log.username === filters.username);
                }
                
                if (filters.module) {
                    return logs.filter(log => log.module === filters.module);
                }
                
                if (filters.startDate && filters.endDate) {
                    return logs.filter(log => {
                        const logDate = new Date(log.timestamp);
                        return logDate >= filters.startDate && logDate <= filters.endDate;
                    });
                }
                
                return logs;
            }

            // تحديث أزرار الشريط الجانبي
            updateSidebarButtons() {
                const securityBtn = document.getElementById('securityNavItem');
                const logoutBtn = document.getElementById('logoutNavItem');

                if (this.currentUser) {
                    if (logoutBtn) logoutBtn.style.display = '';
                    
                    if (this.currentUser.role === 'admin') {
                        if (securityBtn) securityBtn.style.display = '';
                    } else {
                        if (securityBtn) securityBtn.style.display = 'none';
                    }
                } else {
                    if (securityBtn) securityBtn.style.display = 'none';
                    if (logoutBtn) logoutBtn.style.display = 'none';
                }
            }
        }

        // إنشاء نظام الأمان العام
        window.securityManager = new SecurityManager();

        // التحقق من تسجيل الدخول عند تحميل الصفحة
        window.addEventListener('DOMContentLoaded', () => {
            // إعادة ضبط مؤقت عدم النشاط عند أي نشاط
            ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
                document.addEventListener(event, () => {
                    if (window.securityManager) {
                        window.securityManager.resetInactivityTimer();
                    }
                }, true);
            });

            // التحقق من حالة تسجيل الدخول
            if (!sessionStorage.getItem('is_logged_in')) {
                window.securityManager.showLoginPage();
            } else {
                window.securityManager.applyPermissions();
                window.securityManager.updateSidebarButtons();
            }
        });

        // تهيئة التطبيق
        async function initApp() {
            try {
                console.log('🚀 بدء تهيئة التطبيق...');
                updateLoaderStatus('جارٍ التحقق من الاتصال...');
                
                // التحقق من الاتصال بالإنترنت
                const isOnline = navigator.onLine;
                console.log('حالة الاتصال:', isOnline ? '✅ متصل' : '⚠️ غير متصل');
                
                // محاولة تهيئة Firebase والمستخدم (فقط إذا كان متصلاً)
                if (isOnline) {
                    try {
                        console.log('محاولة الاتصال بـ Firebase...');
                        updateLoaderStatus('جارٍ الاتصال بالخادم...');
                        await Promise.race([
                            Promise.all([
                                createLocalUserIfNeeded(),
                                checkSubscriptionAndGate(),
                                loadUserDataFromFirebase()
                            ]),
                            new Promise((_, reject) => 
                                setTimeout(() => reject(new Error('timeout')), 5000)
                            )
                        ]);
                        console.log('✅ تم الاتصال بـ Firebase');
                    } catch (error) {
                        console.warn('⚠️ فشل الاتصال بـ Firebase (سيعمل التطبيق بدون اتصال):', error.message);
                        // الاستمرار بدون Firebase
                    }
                } else {
                    console.log('⚠️ لا يوجد اتصال بالإنترنت - العمل بالوضع المحلي');
                }

                // تهيئة Data SDK (محلي - لا يحتاج إنترنت)
                console.log('تهيئة قاعدة البيانات المحلية...');
                updateLoaderStatus('جارٍ تحميل قاعدة البيانات...');
                if (window.dataSdk) {
                    const initResult = await window.dataSdk.init(dataHandler);
                    if (!initResult.isOk) {
                        console.error('❌ فشل في تهيئة قاعدة البيانات');
                        // تم إزالة الإشعار
                        return;
                    }
                    console.log('✅ تم تهيئة قاعدة البيانات المحلية');
                } else {
                    console.error('❌ Data SDK غير موجود!');
                    // تم إزالة الإشعار
                    return;
                }

                // تهيئة Element SDK
                if (window.elementSdk) {
                    await window.elementSdk.init({
                        defaultConfig,
                        onConfigChange: async (config) => {
                            try {
                                // تحديث العناصر فقط إذا كانت موجودة
                                const storeNameEl = document.getElementById('storeName');
                                const taxRateEl = document.getElementById('taxRate');
                                
                                if (storeNameEl) {
                                    storeNameEl.textContent = config.store_name || defaultConfig.store_name;
                                }
                                
                                if (taxRateEl) {
                                    taxRateEl.textContent = config.tax_rate || defaultConfig.tax_rate;
                                }
                                
                                // تحديث معاينة الفاتورة
                                if (typeof updateInvoicePreview === 'function') {
                                    updateInvoicePreview(config);
                                }
                                
                                // تحديث ملخص السلة
                                if (typeof updateCartSummary === 'function') {
                                    updateCartSummary();
                                }
                            } catch (err) {
                                console.warn('⚠️ خطأ في تحديث الإعدادات:', err);
                            }
                        },
                        mapToCapabilities: (config) => ({
                            recolorables: [],
                            borderables: [],
                            fontEditable: undefined,
                            fontSizeable: undefined
                        }),
                        mapToEditPanelValues: (config) => new Map([
                            ['store_name', config.store_name || defaultConfig.store_name],
                            ['store_address', config.store_address || defaultConfig.store_address],
                            ['store_phone', config.store_phone || defaultConfig.store_phone],
                            ['tax_rate', config.tax_rate || defaultConfig.tax_rate]
                        ])
                    });
                }

                // التحقق من أول مرة استخدام
                const isFirstRun = !localStorage.getItem('appInitialized');
                const hasFactoryReset = localStorage.getItem('factoryResetDone') === 'true';
                
                // إضافة بيانات تجريبية فقط إذا كانت أول مرة وليس بعد إعادة ضبط المصنع
                updateLoaderStatus('جارٍ تحميل البيانات...');
                if (!hasFactoryReset) {
                    if (categories.length === 0) {
                        console.log('إضافة فئات تجريبية...');
                        updateLoaderStatus('إضافة بيانات تجريبية...');
                        await addSampleCategories();
                    }
                    
                    if (products.length === 0) {
                        console.log('إضافة منتجات تجريبية...');
                        await addSampleProducts();
                    }
                }
                
                // إصلاح البيانات القديمة
                console.log('فحص وإصلاح البيانات القديمة...');
                updateLoaderStatus('فحص البيانات...');
                await fixOldDebtsData();
                
                // ✅ تحميل الديون من localStorage كنسخة احتياطية
                console.log('تحميل الديون من localStorage...');
                await loadDebtsFromLocalStorage();

                // تحميل إعدادات الطابعة
                console.log('تحميل إعدادات الطابعة...');
                updateLoaderStatus('تحميل الإعدادات...');
                loadPrinterSettings();
                
                // تحميل وتطبيق جميع الإعدادات
                console.log('تحميل الإعدادات...');
                loadAllSettings();

                console.log('إعداد مستمعي الأحداث...');
                setupEventListeners();
                
                console.log('تحديث جميع العروض...');
                updateLoaderStatus('تحديث الواجهة...');
                updateAllViews();
                
                // تحديث الإحصائيات السريعة
                console.log('تحديث الإحصائيات...');
                updateQuickStats();
                
                // تحديث بطاقة معلومات المستخدم والاشتراك (فقط إذا كان متصلاً)
                if (isOnline) {
                    updateUserSubscriptionCard();
                }
                
                // تشغيل الساعة في شريط العنوان
                startTitlebarClock();
                
                // تشغيل الساعة الرقمية
                updateDigitalClock();
                setInterval(updateDigitalClock, 1000);
                
                // تحديث الإحصائيات كل 5 ثواني
                setInterval(updateQuickStats, 5000);
                
                // تحديث بطاقة المستخدم كل دقيقة (فقط إذا كان متصلاً)
                if (isOnline) {
                    setInterval(updateUserSubscriptionCard, 60000);
                }
                
                // رسالة للوضع المحلي
                if (!isOnline) {
                    console.log('⚠️ التطبيق يعمل بالوضع المحلي (بدون اتصال)');
                    // تم إزالة الإشعار
                }
                
                console.log('✅ تم تهيئة التطبيق بنجاح!');
                
                // إخفاء شاشة التحميل
                const loader = document.getElementById('appLoader');
                if (loader) {
                    loader.style.opacity = '0';
                    setTimeout(() => {
                        loader.style.display = 'none';
                    }, 500);
                }
                
                // رسالة ترحيب للمستخدمين الجدد
                if (isFirstRun) {
                    localStorage.setItem('appInitialized', 'true');
                    setTimeout(() => {
                        showWelcomeMessage();
                    }, 1000);
                }
                
            } catch (error) {
                console.error('❌ خطأ في تهيئة التطبيق:', error);
                
                // إخفاء شاشة التحميل حتى في حالة الخطأ
                const loader = document.getElementById('appLoader');
                if (loader) {
                    const statusEl = document.getElementById('loaderStatus');
                    if (statusEl) {
                        statusEl.textContent = 'حدث خطأ في التحميل - يرجى إعادة تشغيل التطبيق';
                        statusEl.style.color = 'var(--danger-color)';
                    }
                }
                
                // تم إزالة الإشعار
            }
        }

        // وظيفة الساعة في شريط العنوان
        function startTitlebarClock() {
            function updateClock() {
                const now = new Date();
                const hours = String(now.getHours()).padStart(2, '0');
                const minutes = String(now.getMinutes()).padStart(2, '0');
                const seconds = String(now.getSeconds()).padStart(2, '0');
                const clockElement = document.getElementById('titlebarClock');
                if (clockElement) {
                    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
                }
            }
            
            updateClock();
            setInterval(updateClock, 1000);
        }

        // وظيفة تحديث الواجهة
        function refreshApp() {
            const btn = event.target.closest('.titlebar-refresh');
            const icon = btn.querySelector('i');
            
            // تأثير الدوران
            icon.style.transform = 'rotate(360deg)';
            btn.disabled = true;
            
            // إعادة تحميل البيانات
            setTimeout(async () => {
                try {
                    await updateAllViews();
                    // تم إزالة الإشعار
                } catch (error) {
                    // تم إزالة الإشعار
                }
                
                icon.style.transform = 'rotate(0deg)';
                btn.disabled = false;
            }, 800);
        }

        // إضافة تصنيفات تجريبية
        async function addSampleCategories() {
            const sampleCategories = [
                { type: 'category', category_id: '1', category_name: 'إلكترونيات', category_icon: 'fas fa-laptop', timestamp: new Date().toISOString() },
                { type: 'category', category_id: '2', category_name: 'إكسسوارات', category_icon: 'fas fa-headphones', timestamp: new Date().toISOString() },
                { type: 'category', category_id: '3', category_name: 'أجهزة ذكية', category_icon: 'fas fa-mobile-alt', timestamp: new Date().toISOString() }
            ];

            if (window.dataSdk) {
                for (const category of sampleCategories) {
                    await window.dataSdk.create(category);
                }
            }
        }

        // إضافة منتجات تجريبية
        async function addSampleProducts() {
            const sampleProducts = [
                { 
                    type: 'product', 
                    product_id: '1', 
                    product_name: 'لابتوب Dell XPS 13', 
                    product_barcode: '1234567890123',
                    product_price_retail: 2500000, 
                    product_price_wholesale: 2300000,
                    product_cost_retail: 2000000, 
                    product_cost_wholesale: 1800000,
                    stock_quantity: 10,
                    min_stock: 5,
                    product_category: '1',
                    supplier: 'شركة التقنية المتقدمة',
                    timestamp: new Date().toISOString() 
                },
                { 
                    type: 'product', 
                    product_id: '2', 
                    product_name: 'هاتف Samsung Galaxy S23', 
                    product_barcode: '2345678901234',
                    product_price_retail: 1200000, 
                    product_price_wholesale: 1100000,
                    product_cost_retail: 900000, 
                    product_cost_wholesale: 800000,
                    stock_quantity: 25,
                    min_stock: 10,
                    product_category: '3',
                    supplier: 'موزع سامسونج',
                    timestamp: new Date().toISOString() 
                },
                { 
                    type: 'product', 
                    product_id: '3', 
                    product_name: 'سماعات Sony WH-1000XM4', 
                    product_barcode: '3456789012345',
                    product_price_retail: 150000, 
                    product_price_wholesale: 140000,
                    product_cost_retail: 100000, 
                    product_cost_wholesale: 90000,
                    stock_quantity: 50,
                    min_stock: 15,
                    product_category: '2',
                    supplier: 'شركة الصوتيات',
                    timestamp: new Date().toISOString() 
                }
            ];

            if (window.dataSdk) {
                for (const product of sampleProducts) {
                    await window.dataSdk.create(product);
                }
            }
        }
        
        // إصلاح البيانات القديمة للديون
        async function fixOldDebtsData() {
            console.log('Checking and fixing old debts data...');
            
            for (const debt of debtsData) {
                let needsUpdate = false;
                const updates = {};
                
                // البحث عن الفاتورة المرتبطة أولاً
                const relatedSale = salesData.find(s => s.invoice_id === debt.invoice_id);
                
                // إصلاح total_amount
                if (!debt.total_amount) {
                    if (debt.final_total) {
                        updates.total_amount = debt.final_total;
                    } else if (relatedSale && relatedSale.final_total) {
                        updates.total_amount = relatedSale.final_total;
                    }
                    if (updates.total_amount) needsUpdate = true;
                }
                
                // إصلاح remaining_amount
                if (debt.remaining_amount === undefined || debt.remaining_amount === null) {
                    const totalAmt = updates.total_amount || debt.total_amount || debt.final_total || 0;
                    updates.remaining_amount = totalAmt;
                    needsUpdate = true;
                }
                
                // إصلاح monthly_amount
                if (!debt.monthly_amount) {
                    const totalAmt = updates.total_amount || debt.total_amount || debt.final_total || 0;
                    const months = debt.installment_months || relatedSale?.installment_months || 1;
                    
                    if (relatedSale && relatedSale.monthly_amount) {
                        updates.monthly_amount = relatedSale.monthly_amount;
                    } else if (totalAmt > 0 && months > 0) {
                        updates.monthly_amount = totalAmt / months;
                    }
                    
                    if (updates.monthly_amount) needsUpdate = true;
                }
                
                // إصلاح installment_months
                if (!debt.installment_months && relatedSale?.installment_months) {
                    updates.installment_months = relatedSale.installment_months;
                    needsUpdate = true;
                }
                
                // إنشاء جدول الأقساط إذا لم يكن موجوداً
                if ((!debt.installments || debt.installments.length === 0) && debt.installment_months > 0) {
                    const monthlyAmt = updates.monthly_amount || debt.monthly_amount || 0;
                    const installments = [];
                    
                    for (let i = 1; i <= debt.installment_months; i++) {
                        installments.push({
                            month: i,
                            amount: monthlyAmt,
                            due_date: new Date(new Date(debt.timestamp).getTime() + (i * 30 * 24 * 60 * 60 * 1000)).toISOString(),
                            status: 'pending',
                            paid_date: null,
                            paid_amount: 0
                        });
                    }
                    
                    updates.installments = installments;
                    needsUpdate = true;
                }
                
                // تحديث البيانات في قاعدة البيانات
                if (needsUpdate && window.dataSdk && (debt.id || debt.__backendId)) {
                    const debtId = debt.id || debt.__backendId;
                    console.log('Updating debt:', debtId, updates);
                    await window.dataSdk.update(debtId, updates);
                    
                    // تحديث الكائن المحلي
                    Object.assign(debt, updates);
                }
            }
            
            // إعادة تحميل البيانات من قاعدة البيانات
            if (window.dataSdk) {
                const allData = await window.dataSdk.query();
                if (allData.isOk) {
                    debtsData = allData.data.filter(item => item.type === 'debt');
                    console.log('Reloaded debts data:', debtsData);
                    
                    // إصلاح بيانات الديون التي قد تكون فاقدة للقيم
                    await fixDebtsData();
                    
                    // تحديث العرض
                    renderDebtsTable();
                    updateStatistics();
                }
            }
        }
        
        // إصلاح بيانات الديون التالفة أو الناقصة
        async function fixDebtsData() {
            console.log('=== Fixing Debts Data ===');
            let fixedCount = 0;
            
            for (let debt of debtsData) {
                let needsUpdate = false;
                const updates = {};
                
                // التحقق من وجود total_amount
                if (!debt.total_amount || debt.total_amount === 0) {
                    // محاولة الحصول عليه من final_total
                    if (debt.final_total) {
                        updates.total_amount = debt.final_total;
                        needsUpdate = true;
                    }
                    // أو من الفاتورة المرتبطة
                    else if (debt.invoice_id) {
                        const relatedSale = salesData.find(s => s.invoice_id === debt.invoice_id);
                        if (relatedSale && relatedSale.final_total) {
                            updates.total_amount = relatedSale.final_total;
                            updates.final_total = relatedSale.final_total;
                            needsUpdate = true;
                        }
                    }
                    // أو من حساب الأقساط
                    else if (debt.monthly_amount && debt.installment_months) {
                        const calculated = debt.monthly_amount * debt.installment_months;
                        updates.total_amount = calculated;
                        updates.final_total = calculated;
                        needsUpdate = true;
                    }
                }
                
                // التحقق من وجود monthly_amount
                if (!debt.monthly_amount || debt.monthly_amount === 0) {
                    if (debt.total_amount && debt.installment_months) {
                        updates.monthly_amount = debt.total_amount / debt.installment_months;
                        needsUpdate = true;
                    }
                }
                
                // التحقق من وجود installments
                if (!debt.installments || debt.installments.length === 0) {
                    if (debt.installment_months && debt.monthly_amount) {
                        const installments = [];
                        const startDate = new Date(debt.timestamp || Date.now());
                        
                        for (let i = 1; i <= debt.installment_months; i++) {
                            const dueDate = new Date(startDate);
                            dueDate.setMonth(dueDate.getMonth() + i);
                            
                            installments.push({
                                month: i,
                                amount: debt.monthly_amount,
                                due_date: dueDate.toISOString(),
                                status: 'pending',
                                paid_date: null,
                                paid_amount: 0
                            });
                        }
                        
                        updates.installments = installments;
                        needsUpdate = true;
                    }
                }
                
                // تحديث السجل إذا لزم الأمر
                if (needsUpdate && (debt.id || debt.__backendId)) {
                    console.log(`Fixing debt for ${debt.customer_name}:`, updates);
                    await window.dataSdk.update(debt.id || debt.__backendId, updates);
                    Object.assign(debt, updates);
                    fixedCount++;
                }
            }
            
            if (fixedCount > 0) {
                console.log(`✅ Fixed ${fixedCount} debt records`);
            } else {
                console.log('✓ All debt records are OK');
            }
            console.log('=======================');
        }

        // تحديث جميع الواجهات
        function updateAllViews() {
            renderProducts();
            renderCategoryFilters();
            renderProductsTable();
            renderInventoryTable();
            renderInvoicesTable();
            renderDebtsTable();
            updateStatistics();
            updateCartCount();
            populateCategorySelects();
            updateQuickStats();
            updateSettingsStats();
            
            // ✅ تحديث صفحة الإيصالات
            if (typeof renderReceiptsTable === 'function') {
                renderReceiptsTable();
            }
        }

        // عرض فلاتر التصنيفات
        function renderCategoryFilters() {
            const filtersContainer = document.getElementById('categoryFilters');
            if (!filtersContainer) return;
            
            const allBtn = `
                <div class="category-btn ${currentCategory === 'all' ? 'active' : ''}" data-category="all">
                    <i class="fas fa-th-large"></i> الكل
                </div>
            `;
            
            const categoryBtns = categories.map(category => `
                <div class="category-btn ${currentCategory === category.category_id ? 'active' : ''}" data-category="${category.category_id}">
                    <i class="${category.category_icon}"></i> ${category.category_name}
                </div>
            `).join('');
            
            filtersContainer.innerHTML = allBtn + categoryBtns;
            
            // إعادة ربط الأحداث
            filtersContainer.querySelectorAll('.category-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    currentCategory = btn.dataset.category;
                    renderProducts();
                });
            });
        }

        // عرض المنتجات في نقطة البيع
        function renderProducts() {
            const grid = document.getElementById('productsGrid');
            if (!grid) return;
            
            const filteredProducts = currentCategory === 'all' 
                ? products 
                : products.filter(p => p.product_category === currentCategory);
            
            // البحث من خانة البحث في نقطة البيع
            const posSearchTerm = document.getElementById('posSearchInput')?.value.toLowerCase() || '';
            const searchedProducts = posSearchTerm 
                ? filteredProducts.filter(p => 
                    p.product_name.toLowerCase().includes(posSearchTerm) ||
                    p.product_barcode?.toLowerCase().includes(posSearchTerm) ||
                    p.supplier?.toLowerCase().includes(posSearchTerm)
                  )
                : filteredProducts;
            
            grid.innerHTML = searchedProducts.map(product => {
                const category = categories.find(c => c.category_id === product.product_category);
                const icon = category ? category.category_icon : 'fas fa-box';
                const stockStatus = product.stock_quantity < product.min_stock ? 'مخزون قليل' : `متوفر (${product.stock_quantity})`;
                const stockClass = product.stock_quantity < product.min_stock ? 'text-warning' : 'text-success';
                
                return `
                    <div class="product-card animate__animated animate__fadeInUp" onclick="addToCart('${product.product_id}')">
                        <div class="product-icon">
                            <i class="${icon}"></i>
                        </div>
                        <div class="product-name">${product.product_name}</div>
                        <div class="product-price">${formatCurrency(product.product_price_retail)}</div>
                        <div class="product-stock ${stockClass}">${stockStatus}</div>
                    </div>
                `;
            }).join('');
        }

        // إضافة منتج للسلة
        function addToCart(productId) {
            // فحص الصلاحية أولاً
            if (window.securityManager && !window.securityManager.checkPermission('pos_add_to_cart')) {
                return;
            }
            
            const product = products.find(p => p.product_id === productId);
            if (!product) return;
            
            if (product.stock_quantity <= 0) {
                // تم إزالة الإشعار
                return;
            }
            
            const existingItem = cart.find(item => item.product_id === productId);
            
            if (existingItem) {
                if (existingItem.quantity >= product.stock_quantity) {
                    // تم إزالة الإشعار
                    return;
                }
                existingItem.quantity += 1;
            } else {
                cart.push({ 
                    product_id: productId,
                    product_name: product.product_name,
                    product_price: product.product_price_retail,
                    quantity: 1 
                });
            }
            
            console.log('➕ Product added to cart:', product.product_name);
            
            renderCart();
            updateCartSummary();
            updateCartCount();
            
            // التأكد من التمرير للأسفل بعد الإضافة
            console.log('⏰ Setting timeout for scroll...');
            setTimeout(() => {
                console.log('⏰ Timeout executed, scrolling...');
                scrollCartToBottom();
            }, 500);
            
            // تأثير بصري
            // تم إزالة الإشعار
        }



        // عرض السلة
        function renderCart() {
            const cartContainer = document.getElementById('cartItems');
            if (!cartContainer) return;
            
            if (cart.length === 0) {
                cartContainer.innerHTML = `
                    <div class="cart-empty">
                        <i class="fas fa-shopping-cart"></i>
                        <p>السلة فارغة</p>
                        <small>اختر المنتجات لإضافتها</small>
                    </div>
                `;
                return;
            }
            
            cartContainer.innerHTML = cart.map(item => {
                const product = products.find(p => p.product_id === item.product_id);
                const category = product ? product.category : 'other';
                
                return `
                <div class="cart-item animate__animated animate__fadeInRight" data-category="${category}">
                    <div class="cart-item-content">
                        <div class="item-header">
                            <div class="item-info">
                                <h4 data-quantity="${item.quantity}">${item.product_name}</h4>
                                <div class="item-price">${formatCurrency(item.product_price)}</div>
                            </div>
                            <button class="remove-btn" onclick="removeFromCart('${item.product_id}')">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                        <div class="quantity-controls">
                            <div class="qty-controls">
                                <button class="qty-btn" onclick="updateQuantity('${item.product_id}', -1)">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="qty-btn" onclick="updateQuantity('${item.product_id}', 1)">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            <div class="item-total">${formatCurrency(item.product_price * item.quantity)}</div>
                        </div>
                    </div>
                </div>
                `;
            }).join('');
            
            console.log('📦 Cart rendered with', cart.length, 'items');
            
            // تمرير تلقائي للأسفل فوراً
            scrollCartToBottom();
            
            // التحقق من وجود محتوى للتمرير وإضافة الكلاس
            setTimeout(() => {
                const hasScroll = cartContainer.scrollHeight > cartContainer.clientHeight;
                if (hasScroll) {
                    cartContainer.classList.add('has-scroll');
                } else {
                    cartContainer.classList.remove('has-scroll');
                }
                
                console.log('🔄 Confirming scroll...');
                // تأكيد التمرير مرة أخرى
                scrollCartToBottom();
            }, 100);
            
            // تمرير إضافي بعد تأخير أطول
            setTimeout(() => {
                console.log('🔄 Final scroll confirmation...');
                scrollCartToBottom();
            }, 300);
        }

        // دالة للتمرير لأسفل السلة - محسّنة
        function scrollCartToBottom() {
            const cartContainer = document.getElementById('cartItems');
            if (!cartContainer) {
                console.log('❌ cartContainer not found');
                return;
            }
            
            console.log('🔄 Scrolling to bottom...');
            console.log('ScrollHeight:', cartContainer.scrollHeight);
            console.log('ClientHeight:', cartContainer.clientHeight);
            
            // تمرير فوري للأسفل
            setTimeout(() => {
                const maxScroll = cartContainer.scrollHeight - cartContainer.clientHeight;
                console.log('MaxScroll:', maxScroll);
                
                if (maxScroll > 0) {
                    cartContainer.scrollTop = maxScroll;
                    console.log('✅ Scrolled to:', cartContainer.scrollTop);
                }
            }, 50);
        }

        // دالة للتمرير لأعلى السلة
        function scrollCartToTop() {
            const cartContainer = document.getElementById('cartItems');
            if (!cartContainer) return;
            
            cartContainer.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // تحديث عداد السلة
        function updateCartCount() {
            const cartCount = document.getElementById('cartCount');
            if (cartCount) {
                const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
                cartCount.textContent = totalItems;
                
                if (totalItems > 0) {
                    cartCount.classList.add('pulse');
                } else {
                    cartCount.classList.remove('pulse');
                }
            }
        }

        // تحديث الكمية
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.product_id === productId);
            const product = products.find(p => p.product_id === productId);
            
            if (item && product) {
                const newQuantity = item.quantity + change;
                
                if (newQuantity <= 0) {
                    removeFromCart(productId);
                } else if (newQuantity > product.stock_quantity) {
                    // تم إزالة الإشعار
                } else {
                    item.quantity = newQuantity;
                    renderCart();
                    updateCartSummary();
                    updateCartCount();
                }
            }
        }

        // حذف من السلة
        function removeFromCart(productId) {
            cart = cart.filter(item => item.product_id !== productId);
            renderCart();
            updateCartSummary();
            updateCartCount();
            // تم إزالة الإشعار
        }

        // تحديث ملخص السلة
        function updateCartSummary() {
            const subtotal = cart.reduce((sum, item) => sum + (item.product_price * item.quantity), 0);
            const discountPercent = parseFloat(document.getElementById('discountInput')?.value) || 0;
            const discountAmount = subtotal * (discountPercent / 100);
            const afterDiscount = subtotal - discountAmount;
            const taxRate = parseFloat(getCurrentTaxRate()) / 100;
            const taxAmount = afterDiscount * taxRate;
            const finalTotal = afterDiscount + taxAmount;
            
            updateElement('subtotal', formatCurrency(subtotal));
            updateElement('discountAmount', formatCurrency(discountAmount));
            updateElement('taxAmount', formatCurrency(taxAmount));
            updateElement('finalTotal', formatCurrency(finalTotal));
            
            // تحديث عدادات السلة في الرأس
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            updateElement('cartItemsCount', totalItems);
            updateElement('cartTotalPrice', formatCurrency(finalTotal));
            
            // تفعيل/تعطيل أزرار الدفع الجديدة
            const cashPaymentBtn = document.getElementById('cashPaymentBtn');
            const installmentPaymentBtn = document.getElementById('installmentPaymentBtn');
            const checkoutBtn = document.getElementById('checkoutBtn');
            
            const isEmpty = cart.length === 0;
            
            if (cashPaymentBtn) {
                cashPaymentBtn.disabled = isEmpty;
            }
            if (installmentPaymentBtn) {
                installmentPaymentBtn.disabled = isEmpty;
            }
            if (checkoutBtn) {
                checkoutBtn.disabled = isEmpty;
            }
        }
        
        // تحديث الإحصائيات السريعة
        function updateQuickStats() {
            // عدد المنتجات
            const totalProducts = products.length;
            updateElement('quickTotalProducts', totalProducts);
            
            // قيمة المخزون (باستخدام سعر التكلفة × الكمية)
            const totalValue = products.reduce((sum, p) => {
                const costPrice = p.product_cost_retail || p.purchase_price || 0;
                const quantity = p.stock_quantity || p.product_quantity || 0;
                return sum + (costPrice * quantity);
            }, 0);
            updateElement('quickTotalValue', formatCurrency(totalValue));
            
            // عدد الديون
            const totalDebts = debtsData.length;
            updateElement('quickDebtsCount', totalDebts);
            
            // عدد المديونين (الأشخاص الفريدين)
            const uniqueDebtors = new Set(debtsData.map(d => d.customer_name)).size;
            updateElement('quickDebtorsCount', uniqueDebtors);
            
            // قيمة الديون الإجمالية - حساب المبلغ المتبقي بدقة
            const totalDebtsValue = debtsData.reduce((sum, d) => {
                // حساب المبلغ المدفوع من الأقساط
                let paidAmount = 0;
                if (d.installments && Array.isArray(d.installments) && d.installments.length > 0) {
                    d.installments.forEach(inst => {
                        if (inst.status === 'paid') {
                            paidAmount += parseFloat(inst.paid_amount || inst.amount || 0);
                        }
                    });
                } else if (d.paid_amount !== undefined && d.paid_amount !== null) {
                    paidAmount = parseFloat(d.paid_amount) || 0;
                }
                
                // حساب المبلغ المتبقي
                const totalAmount = parseFloat(d.total_amount || d.final_total || 0);
                const remainingAmount = totalAmount - paidAmount;
                
                return sum + (remainingAmount > 0 ? remainingAmount : 0);
            }, 0);
            updateElement('quickDebtsValue', formatCurrency(totalDebtsValue));
        }

        // تحديث معلومات المستخدم والاشتراك في البطاقة
        async function updateUserSubscriptionCard() {
            try {
                const uid = localStorage.getItem('app_uid');
                if (!uid) {
                    console.warn('⚠️ لا يوجد UID للمستخدم');
                    return;
                }

                // جلب بيانات المستخدم من Firebase
                const userSnap = await database.ref(`users/${uid}`).once('value');
                if (!userSnap.exists()) {
                    console.warn('⚠️ المستخدم غير موجود في Firebase');
                    return;
                }

                const user = userSnap.val();
                const profile = user.profile || {};
                const subscription = user.subscription;
                const trialUntil = user.trialUntil;
                const now = Date.now();

                // تحديث اسم المستخدم (استخدام UID مختصر)
                const displayName = uid.substring(0, 12) + '...';
                updateElement('userDisplayName', displayName);

                // تحديد نوع وحالة الاشتراك
                let subscriptionType = 'تجريبي';
                let endDate = 0;
                let startDate = profile.createdAt || now;
                let daysLeft = 0;
                let statusColor = '#10b981'; // أخضر للنشط

                if (subscription && subscription.validUntil) {
                    // اشتراك مدفوع
                    endDate = Number(subscription.validUntil);
                    startDate = subscription.activatedAt || startDate;
                    
                    // تحديد نوع الاشتراك
                    if (subscription.type === 'monthly') {
                        subscriptionType = 'شهري';
                    } else if (subscription.type === 'yearly') {
                        subscriptionType = 'سنوي';
                    } else {
                        subscriptionType = subscription.type || 'مخصص';
                    }
                } else if (trialUntil) {
                    // فترة تجريبية
                    endDate = Number(trialUntil);
                    subscriptionType = 'تجريبي';
                }

                // حساب الأيام المتبقية
                if (endDate > 0) {
                    daysLeft = Math.ceil((endDate - now) / (1000 * 60 * 60 * 24));
                }

                // تحديد اللون حسب الأيام المتبقية
                if (daysLeft <= 0) {
                    statusColor = '#ef4444'; // أحمر للمنتهي
                    subscriptionType = 'منتهي';
                } else if (daysLeft <= 7) {
                    statusColor = '#f59e0b'; // برتقالي للقريب من الانتهاء
                } else {
                    statusColor = '#10b981'; // أخضر للنشط
                }

                // تحديث العناصر
                const typeEl = document.getElementById('subscriptionType');
                if (typeEl) {
                    typeEl.textContent = subscriptionType;
                    typeEl.style.color = statusColor;
                    typeEl.style.background = statusColor + '20'; // شفافية 20%
                }

                const daysLeftEl = document.getElementById('subscriptionDaysLeft');
                if (daysLeftEl) {
                    if (daysLeft > 0) {
                        daysLeftEl.textContent = daysLeft + ' يوم';
                        daysLeftEl.style.color = statusColor;
                    } else {
                        daysLeftEl.textContent = 'منتهي';
                        daysLeftEl.style.color = '#ef4444';
                    }
                }

                // تنسيق التواريخ
                const formatDate = (timestamp) => {
                    if (!timestamp) return '--/--/----';
                    const date = new Date(timestamp);
                    return date.toLocaleDateString('ar-IQ', { 
                        year: 'numeric', 
                        month: '2-digit', 
                        day: '2-digit' 
                    });
                };

                updateElement('subscriptionStartDate', formatDate(startDate));
                updateElement('subscriptionEndDate', formatDate(endDate));

                // تحديث صفحة الحساب أيضاً
                updateAccountPage(user, uid, daysLeft, statusColor);

                console.log('✅ تم تحديث بطاقة معلومات المستخدم');

            } catch (error) {
                console.error('❌ خطأ في تحديث بطاقة المستخدم:', error);
            }
        }

        // تحديث صفحة حساب المستخدم
        function updateAccountPage(user, uid, daysLeft, statusColor) {
            try {
                const profile = user.profile || {};
                const subscription = user.subscription;
                const trialUntil = user.trialUntil;
                const now = Date.now();

                // معلومات الحساب
                updateElement('accountUserUID', uid);
                
                const secretEl = document.getElementById('accountUserSecret');
                if (secretEl && profile.secret) {
                    secretEl.textContent = profile.secret;
                    secretEl.setAttribute('data-secret', profile.secret);
                }

                const formatDate = (timestamp) => {
                    if (!timestamp) return '--/--/----';
                    const date = new Date(timestamp);
                    return date.toLocaleDateString('ar-IQ', { 
                        year: 'numeric', 
                        month: '2-digit', 
                        day: '2-digit' 
                    });
                };

                updateElement('accountCreatedDate', formatDate(profile.createdAt));
                updateElement('accountPlatform', profile.deviceInfo?.platform || 'غير معروف');

                // معلومات الاشتراك
                let subscriptionType = 'تجريبي';
                let startDate = profile.createdAt || now;
                let endDate = trialUntil || 0;

                if (subscription && subscription.validUntil) {
                    endDate = Number(subscription.validUntil);
                    startDate = subscription.activatedAt || startDate;
                    
                    if (subscription.type === 'monthly') {
                        subscriptionType = 'شهري';
                    } else if (subscription.type === 'yearly') {
                        subscriptionType = 'سنوي';
                    } else {
                        subscriptionType = subscription.type || 'مخصص';
                    }
                }

                if (daysLeft <= 0) {
                    subscriptionType = 'منتهي';
                }

                updateElement('accountSubscriptionType', subscriptionType);
                updateElement('accountStartDate', formatDate(startDate));
                updateElement('accountEndDate', formatDate(endDate));

                // الأيام المتبقية
                const daysLeftEl = document.getElementById('accountDaysLeft');
                if (daysLeftEl) {
                    if (daysLeft > 0) {
                        daysLeftEl.textContent = daysLeft + ' يوم';
                        daysLeftEl.style.color = statusColor;
                    } else {
                        daysLeftEl.textContent = 'منتهي';
                        daysLeftEl.style.color = '#ef4444';
                    }
                }

                // أيقونة الأيام
                const daysIconEl = document.getElementById('accountDaysIcon');
                if (daysIconEl) {
                    if (daysLeft <= 0) {
                        daysIconEl.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
                    } else if (daysLeft <= 7) {
                        daysIconEl.style.background = 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)';
                    } else {
                        daysIconEl.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
                    }
                }

                // شريط التقدم
                const totalDays = subscription?.type === 'yearly' ? 365 : 30;
                const usedDays = totalDays - daysLeft;
                const progressPercent = Math.min(100, Math.max(0, (usedDays / totalDays) * 100));
                
                updateElement('accountProgressPercent', Math.round(progressPercent) + '%');
                
                const progressBar = document.getElementById('accountProgressBar');
                if (progressBar) {
                    progressBar.style.width = progressPercent + '%';
                    
                    if (progressPercent >= 90) {
                        progressBar.style.background = 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)';
                    } else if (progressPercent >= 70) {
                        progressBar.style.background = 'linear-gradient(90deg, #f59e0b 0%, #d97706 100%)';
                    } else {
                        progressBar.style.background = 'linear-gradient(90deg, #10b981 0%, #059669 100%)';
                    }
                }

            } catch (error) {
                console.error('❌ خطأ في تحديث صفحة الحساب:', error);
            }
        }

        // دالة نسخ النص
        function copyToClipboard(text) {
            if (!text || text === 'جاري التحميل...' || text === '**********') {
                // تم إزالة الإشعار
                return;
            }

            navigator.clipboard.writeText(text).then(() => {
                // تم إزالة الإشعار
            }).catch(err => {
                console.error('خطأ في النسخ:', err);
                // تم إزالة الإشعار
            });
        }
        
        // تحديث إحصائيات صفحة الإعدادات
        function updateSettingsStats() {
                        // الديون المشددة (ديون متأخرة أكثر من 30 يوم)
                        const severeDebts = debtsData.filter(d => {
                            if (!d.installments || d.installments.length === 0) return false;
                            const now = new Date();
                            return d.installments.some(inst => {
                                if (inst.paid) return false;
                                const dueDate = new Date(inst.due_date);
                                return (now - dueDate) > (30 * 24 * 60 * 60 * 1000);
                            });
                        }).length;
                        updateElement('severeDebtsCount', severeDebts);
            // عدد المنتجات
            updateElement('settingsProductCount', products.length);
            
            // عدد التصنيفات
            updateElement('settingsCategoryCount', categories.length);
            
            // عدد الفواتير
            updateElement('settingsInvoiceCount', salesData.length);
            
            // قيمة المبيعات
            const totalSales = salesData.reduce((sum, s) => sum + (s.total_amount || 0), 0);
            updateElement('settingsSalesValue', formatCurrency(totalSales));
            
            // المنتجات النشطة
            const activeProducts = products.filter(p => (p.stock_quantity || 0) > 0).length;
            updateElement('activeProductsCount', activeProducts);
            
            // المنتجات قاربت النفاذ
            const lowStockProducts = products.filter(p => {
                const qty = p.stock_quantity || 0;
                const min = p.min_stock_quantity || 10;
                return qty > 0 && qty <= min;
            }).length;
            updateElement('lowStockCount', lowStockProducts);
            
            // المنتجات نفذت
            const outOfStockProducts = products.filter(p => (p.stock_quantity || 0) === 0).length;
            updateElement('outOfStockCount', outOfStockProducts);
            
            // إجمالي الفواتير
            updateElement('totalInvoicesCount', salesData.length);
            
            // إجمالي المبيعات
            updateElement('totalSalesAmount', formatCurrency(totalSales));
            
            // متوسط قيمة الفاتورة
            const averageInvoice = salesData.length > 0 ? totalSales / salesData.length : 0;
            updateElement('averageInvoice', formatCurrency(averageInvoice));
            
            // عدد المدينين
            const uniqueDebtors = new Set(debtsData.map(d => d.customer_name)).size;
            updateElement('totalDebtorsCount', uniqueDebtors);
            
            // إجمالي الديون - حساب المبلغ المتبقي بدقة
            const totalDebts = debtsData.reduce((sum, d) => {
                // حساب المبلغ المدفوع من الأقساط
                let paidAmount = 0;
                if (d.installments && Array.isArray(d.installments) && d.installments.length > 0) {
                    d.installments.forEach(inst => {
                        if (inst.status === 'paid') {
                            paidAmount += parseFloat(inst.paid_amount || inst.amount || 0);
                        }
                    });
                } else if (d.paid_amount !== undefined && d.paid_amount !== null) {
                    paidAmount = parseFloat(d.paid_amount) || 0;
                }
                
                // حساب المبلغ المتبقي
                const totalAmount = parseFloat(d.total_amount || d.final_total || 0);
                const remainingAmount = totalAmount - paidAmount;
                
                return sum + (remainingAmount > 0 ? remainingAmount : 0);
            }, 0);
            updateElement('totalDebtsAmount', formatCurrency(totalDebts));
            
            // الديون المتأخرة
            const overdueDebts = debtsData.filter(d => {
                if (!d.installments || d.installments.length === 0) return false;
                const now = new Date();
                return d.installments.some(inst => {
                    if (inst.paid) return false;
                    const dueDate = new Date(inst.due_date);
                    return dueDate < now;
                });
            }).length;
            updateElement('overdueDebtsCount', overdueDebts);
            
            // آخر نسخة احتياطية
            const lastBackup = localStorage.getItem('lastBackupDate');
            if (lastBackup) {
                const date = new Date(lastBackup);
                updateElement('lastBackupDate', date.toLocaleDateString('en-GB'));
            }
        }
        
        // تحديث الساعة الرقمية
        function updateDigitalClock() {
            const now = new Date();
            
            // الوقت
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const timeString = `${hours}:${minutes}:${seconds}`;
            updateElement('digitalClockTime', timeString);
            
            // اليوم
            const days = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
            const dayName = days[now.getDay()];
            updateElement('digitalClockDay', dayName);
            
            // التاريخ
            const day = now.getDate();
            const months = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 
                          'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
            const month = months[now.getMonth()];
            const year = now.getFullYear();
            const dateString = `${day} ${month} ${year}`;
            updateElement('digitalClockDate', dateString);
        }

        // إعداد مستمعي الأحداث
        function setupEventListeners() {
            // تبديل الشريط الجانبي
            const sidebarToggle = document.getElementById('sidebarToggle');
            if (sidebarToggle) {
                sidebarToggle.addEventListener('click', toggleSidebar);
            }

            // خصم
            const discountInput = document.getElementById('discountInput');
            if (discountInput) {
                discountInput.addEventListener('input', updateCartSummary);
            }
            
            // البحث
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.addEventListener('input', renderProducts);
            }
            
            // طرق الدفع
            document.querySelectorAll('.payment-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    document.querySelectorAll('.payment-btn').forEach(b => b.classList.remove('selected'));
                    btn.classList.add('selected');
                    selectedPaymentMethod = btn.dataset.method;
                });
            });
            
            // أزرار الدفع الجديدة في السلة
            const cashPaymentBtn = document.getElementById('cashPaymentBtn');
            if (cashPaymentBtn) {
                cashPaymentBtn.addEventListener('click', async () => {
                    console.log('💵 تم النقر على زر الدفع النقدي المباشر');
                    console.log('عدد المنتجات في السلة:', cart.length);
                    
                    if (cart.length === 0) {
                        // تم إزالة الإشعار
                        return;
                    }
                    
                    // فتح نافذة الدفع النقدي الحديثة
                    console.log('✅ فتح نافذة الدفع النقدي الحديثة...');
                    showCashPaymentModal();
                });
            }
            
            const installmentPaymentBtn = document.getElementById('installmentPaymentBtn');
            if (installmentPaymentBtn) {
                installmentPaymentBtn.addEventListener('click', () => {
                    console.log('📅 تم النقر على زر الدفع بالأقساط');
                    console.log('عدد المنتجات في السلة:', cart.length);
                    
                    if (cart.length === 0) {
                        // تم إزالة الإشعار
                        return;
                    }
                    
                    console.log('✅ فتح نافذة الأقساط...');
                    showModal('paymentModal');
                    showInstallmentForm();
                });
            }
            
            // إتمام البيع - الزر القديم (للتوافق)
            const checkoutBtn = document.getElementById('checkoutBtn');
            if (checkoutBtn) {
                checkoutBtn.addEventListener('click', () => {
                    console.log('🛍️ تم النقر على زر إتمام البيع');
                    console.log('عدد المنتجات في السلة:', cart.length);
                    
                    if (cart.length === 0) {
                        // تم إزالة الإشعار
                        return;
                    }
                    
                    console.log('✅ فتح نافذة طرق الدفع...');
                    showModal('paymentModal');
                });
            }

            // نماذج
            const addProductForm = document.getElementById('addProductForm');
            if (addProductForm) {
                addProductForm.addEventListener('submit', handleAddProduct);
            }

            const addCategoryForm = document.getElementById('addCategoryForm');
            if (addCategoryForm) {
                addCategoryForm.addEventListener('submit', handleAddCategory);
            }

            const payDebtForm = document.getElementById('payDebtForm');
            if (payDebtForm) {
                payDebtForm.addEventListener('submit', handlePayDebt);
            }

            // حساب الأقساط
            const installmentInputs = ['installmentMonths', 'additionalAmount', 'downPayment'];
            installmentInputs.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.addEventListener('input', calculateInstallment);
                }
            });
            
            // فلاتر المخزون
            const inventoryCategory = document.getElementById('inventoryCategory');
            const stockStatus = document.getElementById('stockStatus');
            if (inventoryCategory) inventoryCategory.addEventListener('change', renderInventoryTable);
            if (stockStatus) stockStatus.addEventListener('change', renderInventoryTable);
            
            // إخفاء نتائج البحث عند النقر خارجها
            document.addEventListener('click', (e) => {
                // إخفاء نتائج بحث المنتجات
                const searchBox = document.querySelector('.search-box');
                const searchResults = document.getElementById('searchResults');
                if (searchResults && searchBox && !searchBox.contains(e.target)) {
                    searchResults.classList.remove('active');
                }
                
                // إخفاء نتائج بحث العملاء
                const customerSearchWrapper = document.querySelector('.search-customer-wrapper');
                const customerSearchResults = document.getElementById('customerSearchResults');
                if (customerSearchResults && customerSearchWrapper && !customerSearchWrapper.contains(e.target)) {
                    customerSearchResults.classList.remove('active');
                }
            });
        }

        // تبديل الشريط الجانبي
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const toggleBtn = document.getElementById('sidebarToggle');
            
            if (sidebar && toggleBtn) {
                sidebarCollapsed = !sidebarCollapsed;
                
                if (sidebarCollapsed) {
                    sidebar.classList.add('collapsed');
                    toggleBtn.innerHTML = '<i class="fas fa-angle-double-left"></i>';
                } else {
                    sidebar.classList.remove('collapsed');
                    toggleBtn.innerHTML = '<i class="fas fa-angle-double-right"></i>';
                }
            }
        }

        // تبديل الثيم
        function toggleTheme() {
            const body = document.body;
            const themeToggle = document.getElementById('themeToggle');
            
            if (currentTheme === 'dark') {
                body.setAttribute('data-theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                currentTheme = 'light';
            } else {
                body.setAttribute('data-theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                currentTheme = 'dark';
            }
            
            // حفظ الثيم في التخزين المحلي
            localStorage.setItem('theme', currentTheme);
        }

        // الانتقال إلى صفحة بشكل برمجي (بدون event)
        function navigateTo(pageId) {
            // إخفاء جميع الصفحات
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // إظهار الصفحة المحددة
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }
        }

        // عرض صفحة
        function showPage(pageId) {
            console.log('📄 Showing page:', pageId);
            
            // إخفاء جميع الصفحات (الرئيسية والفرعية)
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
                page.style.display = ''; // إزالة inline style
            });
            
            // إظهار الصفحة المحددة
            const targetPage = document.getElementById(pageId);
            if (targetPage) {
                targetPage.style.display = ''; // إزالة inline style
                targetPage.classList.add('active');
                console.log('✅ Page shown:', pageId);
            } else {
                console.error('❌ Page not found:', pageId);
            }
            
            // تحديث التنقل
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            // إضافة active للرابط الحالي
            const activeLink = document.querySelector(`.nav-link[onclick*="'${pageId}'"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
            
            // تطبيق الصلاحيات على العناصر في الصفحة
            if (window.securityManager) {
                setTimeout(() => {
                    window.securityManager.applyPermissionsToElements();
                }, 100);
            }
            
            // تحديث عنوان الصفحة
            const pageTitles = {
                'pos': 'نقطة البيع',
                'products': 'إدارة المنتجات',
                'inventory': 'إدارة المخزن',
                'invoices': 'الفواتير',
                'debts': 'إدارة الديون',
                'payments': 'التسديدات والأقساط',
                'expenses': 'إدارة المصاريف',
                'printer': 'إدارة الطابعة',
                'settings': 'الإعدادات العامة'
            };
            
            const titleElement = document.getElementById('currentPageTitle');
            if (titleElement) {
                titleElement.textContent = pageTitles[pageId] || 'نقطة البيع';
            }
            
            // إجراءات خاصة بالصفحات
            if (pageId === 'printer') {
                // تهيئة صفحة الطابعة
                setTimeout(() => {
                    initPrinterPage();
                }, 100);
            }
            
            // تحديث إحصائيات صفحة الإعدادات
            if (pageId === 'settings') {
                setTimeout(() => {
                    updateSettingsStats();
                }, 100);
            }
        }

        // إظهار نافذة منبثقة
        function showModal(modalId) {
            console.log('🪟 فتح نافذة:', modalId);
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.classList.add('active');
                console.log('✅ تم فتح النافذة بنجاح');
                
                // إعداد خاص لنافذة إضافة التصنيف
                if (modalId === 'addCategoryModal') {
                    renderCategoryIcons();
                }
                
                // إعداد خاص لنافذة الدفع
                if (modalId === 'paymentModal') {
                    // إخفاء نموذج الأقساط
                    const installmentForm = document.getElementById('installmentForm');
                    if (installmentForm) {
                        installmentForm.style.display = 'none';
                    }
                    console.log('💳 جاهز لاختيار طريقة الدفع');
                }
            } else {
                console.error('❌ النافذة غير موجودة:', modalId);
            }
        }

        // إغلاق نافذة منبثقة
        function closeModal(modalId) {
            console.log('🚪 إغلاق نافذة:', modalId);
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.classList.remove('active');
                console.log('✅ تم إغلاق النافذة');
                
                // إعادة تعيين النماذج
                const form = modal.querySelector('form');
                if (form) {
                    form.reset();
                }
                
                // إخفاء نموذج الأقساط عند إغلاق نافذة الدفع
                if (modalId === 'paymentModal') {
                    const installmentForm = document.getElementById('installmentForm');
                    if (installmentForm) {
                        installmentForm.style.display = 'none';
                    }
                }
            } else {
                console.error('❌ النافذة غير موجودة:', modalId);
            }
        }

        // إظهار نافذة إضافة منتج
        function showAddProductModal() {
            showModal('addProductModal');
        }

        // إظهار نافذة إضافة تصنيف
        function showAddCategoryModal() {
            showModal('addCategoryModal');
        }

        // عرض أيقونات التصنيفات
        function renderCategoryIcons() {
            const iconGrid = document.getElementById('categoryIconGrid');
            if (!iconGrid) return;
            
            iconGrid.innerHTML = availableIcons.map(icon => `
                <div class="category-icon-btn" data-icon="${icon}" onclick="selectCategoryIcon('${icon}')">
                    <i class="${icon}"></i>
                </div>
            `).join('');
            
            // تحديد الأيقونة الافتراضية
            selectCategoryIcon('fas fa-box');
        }

        // اختيار أيقونة التصنيف
        function selectCategoryIcon(icon) {
            document.querySelectorAll('.category-icon-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            const selectedBtn = document.querySelector(`[data-icon="${icon}"]`);
            if (selectedBtn) {
                selectedBtn.classList.add('selected');
                document.getElementById('selectedCategoryIcon').value = icon;
            }
        }

        // توليد باركود
        function generateBarcode() {
            const barcodeInput = document.getElementById('productBarcode');
            if (barcodeInput) {
                const barcode = Date.now().toString() + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
                barcodeInput.value = barcode;
            }
        }

        // معالجة إضافة منتج
        async function handleAddProduct(event) {
            event.preventDefault();
            
            // فحص الصلاحية
            if (!window.securityManager.checkPermission('products_add')) {
                return;
            }
            
            if (isLoading) return;
            setLoading(true);
            
            const productData = {
                type: 'product',
                product_id: Date.now().toString(),
                product_name: document.getElementById('productName').value,
                product_barcode: document.getElementById('productBarcode').value || generateBarcodeString(),
                product_cost_retail: parseFloat(document.getElementById('productCostRetail').value),
                product_cost_wholesale: parseFloat(document.getElementById('productCostWholesale').value) || parseFloat(document.getElementById('productCostRetail').value),
                product_price_retail: parseFloat(document.getElementById('productPriceRetail').value),
                product_price_wholesale: parseFloat(document.getElementById('productPriceWholesale').value) || parseFloat(document.getElementById('productPriceRetail').value),
                stock_quantity: parseInt(document.getElementById('productStock').value),
                min_stock: parseInt(document.getElementById('productMinStock').value),
                product_category: document.getElementById('productCategory').value,
                supplier: document.getElementById('productSupplier').value || '',
                timestamp: new Date().toISOString(),
                // معلومات المستخدم
                created_by: window.securityManager.getCurrentUsername(),
                created_by_name: window.securityManager.getCurrentUserFullName(),
                created_at: new Date().toISOString()
            };

            if (window.dataSdk) {
                const result = await window.dataSdk.create(productData);
                if (result.isOk) {
                    // تسجيل العملية
                    window.securityManager.logOperation('إضافة منتج', {
                        productId: productData.product_id,
                        productName: productData.product_name,
                        barcode: productData.product_barcode
                    });
                    
                    closeModal('addProductModal');
                    document.getElementById('addProductForm').reset();
                    // تم إزالة الإشعار
                } else {
                    // تم إزالة الإشعار
                }
            }
            
            setLoading(false);
        }

        // فتح نافذة تعديل المنتج
        function showEditProductModal(productId) {
            const product = products.find(p => p.product_id === productId);
            if (!product) {
                // تم إزالة الإشعار
                return;
            }
            
            // ملء البيانات في النموذج
            document.getElementById('editProductId').value = productId;
            document.getElementById('editProductName').value = product.product_name;
            document.getElementById('editProductBarcode').value = product.product_barcode || '';
            document.getElementById('editProductCategory').value = product.product_category || '';
            document.getElementById('editProductSupplier').value = product.supplier || '';
            document.getElementById('editProductCostRetail').value = product.product_cost_retail;
            document.getElementById('editProductCostWholesale').value = product.product_cost_wholesale || '';
            document.getElementById('editProductPriceRetail').value = product.product_price_retail;
            document.getElementById('editProductPriceWholesale').value = product.product_price_wholesale || '';
            document.getElementById('editProductStock').value = product.stock_quantity;
            document.getElementById('editProductMinStock').value = product.min_stock;
            
            // ملء قائمة التصنيفات
            populateCategorySelects();
            document.getElementById('editProductCategory').value = product.product_category || '';
            
            showModal('editProductModal');
        }

        // معالجة تعديل المنتج
        async function handleEditProduct(event) {
            event.preventDefault();
            
            // فحص الصلاحية
            if (!window.securityManager.checkPermission('products_edit')) {
                return;
            }
            
            if (isLoading) return;
            setLoading(true);
            
            const productId = document.getElementById('editProductId').value;
            const product = products.find(p => p.product_id === productId);
            
            if (!product) {
                // تم إزالة الإشعار
                setLoading(false);
                return;
            }
            
            const updatedData = {
                product_name: document.getElementById('editProductName').value,
                product_barcode: document.getElementById('editProductBarcode').value,
                product_category: document.getElementById('editProductCategory').value,
                supplier: document.getElementById('editProductSupplier').value || '',
                product_cost_retail: parseFloat(document.getElementById('editProductCostRetail').value),
                product_cost_wholesale: parseFloat(document.getElementById('editProductCostWholesale').value) || parseFloat(document.getElementById('editProductCostRetail').value),
                product_price_retail: parseFloat(document.getElementById('editProductPriceRetail').value),
                product_price_wholesale: parseFloat(document.getElementById('editProductPriceWholesale').value) || parseFloat(document.getElementById('editProductPriceRetail').value),
                stock_quantity: parseInt(document.getElementById('editProductStock').value),
                min_stock: parseInt(document.getElementById('editProductMinStock').value),
                // معلومات التعديل
                modified_by: window.securityManager.getCurrentUsername(),
                modified_by_name: window.securityManager.getCurrentUserFullName(),
                modified_at: new Date().toISOString()
            };
            
            if (window.dataSdk && (product.id || product.__backendId)) {
                const updateId = product.id || product.__backendId;
                const result = await window.dataSdk.update(updateId, updatedData);
                
                if (result.isOk) {
                    // تسجيل العملية
                    window.securityManager.logOperation('تعديل منتج', {
                        productId: product.product_id,
                        productName: updatedData.product_name,
                        barcode: updatedData.product_barcode
                    });
                    
                    closeModal('editProductModal');
                    // تم إزالة الإشعار
                } else {
                    // تم إزالة الإشعار
                }
            }
            
            setLoading(false);
        }

        // معالجة إضافة تصنيف
        async function handleAddCategory(event) {
            event.preventDefault();
            
            if (isLoading) return;
            setLoading(true);
            
            const categoryName = document.getElementById('categoryName').value;
            const categoryIcon = document.getElementById('selectedCategoryIcon').value;
            
            // التحقق من البيانات
            if (!categoryName || !categoryName.trim()) {
                // تم إزالة الإشعار
                setLoading(false);
                return;
            }
            
            const categoryData = {
                type: 'category',
                category_id: Date.now().toString(),
                category_name: categoryName.trim(),
                category_icon: categoryIcon || 'fas fa-box',
                timestamp: new Date().toISOString()
            };

            try {
                if (window.dataSdk) {
                    const result = await window.dataSdk.create(categoryData);
                    if (result.isOk) {
                        // إضافة التصنيف للمصفوفة المحلية
                        categories.push(categoryData);
                        
                        // تحديث الواجهة
                        updateAllViews();
                        
                        // إغلاق النافذة وإعادة تعيين النموذج
                        closeModal('addCategoryModal');
                        document.getElementById('addCategoryForm').reset();
                        
                        // تم إزالة الإشعار
                    } else {
                        // تم إزالة الإشعار
                    }
                } else {
                    // تم إزالة الإشعار
                }
            } catch (error) {
                console.error('خطأ في إضافة التصنيف:', error);
                // تم إزالة الإشعار
            }
            
            setLoading(false);
        }

        // توليد باركود كنص
        function generateBarcodeString() {
            return Date.now().toString() + Math.floor(Math.random() * 1000).toString().padStart(3, '0');
        }

        // ملء قوائم التصنيفات
        function populateCategorySelects() {
            const selects = ['productCategory', 'inventoryCategory'];
            
            selects.forEach(selectId => {
                const select = document.getElementById(selectId);
                if (select) {
                    const currentValue = select.value;
                    
                    if (selectId === 'inventoryCategory') {
                        select.innerHTML = '<option value="all">جميع التصنيفات</option>';
                    } else {
                        select.innerHTML = '<option value="">اختر التصنيف</option>';
                    }
                    
                    categories.forEach(category => {
                        const option = document.createElement('option');
                        option.value = category.category_id;
                        option.textContent = category.category_name;
                        select.appendChild(option);
                    });
                    
                    if (currentValue) {
                        select.value = currentValue;
                    }
                }
            });
        }

        // عرض جدول المنتجات
        function renderProductsTable() {
            const tbody = document.getElementById('productsTableBody');
            if (!tbody) return;
            
            // ترتيب البيانات - الأحدث أولاً
            const sortedProducts = [...products].sort((a, b) => {
                const dateA = new Date(a.created_at || a.timestamp || 0);
                const dateB = new Date(b.created_at || b.timestamp || 0);
                return dateB.getTime() - dateA.getTime();
            });
            
            // البحث في المنتجات
            const searchTerm = document.getElementById('productsSearchInput')?.value.toLowerCase() || '';
            const filteredProducts = searchTerm 
                ? sortedProducts.filter(product => 
                    (product.product_name && product.product_name.toLowerCase().includes(searchTerm)) ||
                    (product.product_barcode && product.product_barcode.toLowerCase().includes(searchTerm)) ||
                    (product.supplier && product.supplier.toLowerCase().includes(searchTerm))
                  )
                : sortedProducts;
            
            tbody.innerHTML = filteredProducts.map(product => {
                const category = categories.find(c => c.category_id === product.product_category);
                const categoryName = category ? category.category_name : 'غير محدد';
                const stockClass = product.stock_quantity < product.min_stock ? 'text-warning' : 'text-success';

                // إنشاء أزرار الإجراءات حسب الصلاحيات
                let actionButtons = '';
                
                // زر العرض (متاح للجميع)
                actionButtons += `<button class="action-btn view-btn" onclick="showProductDetails('${product.product_id}')" title="عرض التفاصيل"><i class="fas fa-eye"></i></button>`;
                
                // زر التعديل (يحتاج صلاحية)
                if (window.securityManager && window.securityManager.hasPermission('products_edit')) {
                    actionButtons += `<button class="action-btn edit-btn" onclick="if(window.securityManager.checkPermission('products_edit')) showEditProductModal('${product.product_id}')" title="تعديل المنتج" data-permission="products_edit"><i class="fas fa-edit"></i></button>`;
                }
                
                // زر الحذف (يحتاج صلاحية)
                if (window.securityManager && window.securityManager.hasPermission('products_delete')) {
                    actionButtons += `<button class="action-btn delete-btn" onclick="if(window.securityManager.checkPermission('products_delete')) deleteProduct('${product.product_id}')" title="حذف المنتج" data-permission="products_delete"><i class="fas fa-trash"></i></button>`;
                }

                return `
                    <tr>
                        <td>${product.product_barcode || 'غير محدد'}</td>
                        <td>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <i class="${category ? category.category_icon : 'fas fa-box'}"></i>
                                ${product.product_name}
                            </div>
                        </td>
                        <td>${categoryName}</td>
                        <td>${formatCurrency(product.product_price_retail)}</td>
                        <td>${formatCurrency(product.product_cost_retail)}</td>
                        <td>
                            <span class="${stockClass}">
                                ${product.stock_quantity}
                            </span>
                        </td>
                        <td>
                            ${actionButtons}
                        </td>
                    </tr>
                `;
            }).join('');
        }

        // عرض جدول المخزون
        function renderInventoryTable() {
            const tbody = document.getElementById('inventoryTableBody');
            if (!tbody) return;
            
            const categoryFilter = document.getElementById('inventoryCategory')?.value || 'all';
            const statusFilter = document.getElementById('stockStatus')?.value || 'all';
            const searchTerm = document.getElementById('inventorySearchInput')?.value.toLowerCase() || '';
            
            // ترتيب البيانات - الأحدث أولاً
            let filteredProducts = [...products].sort((a, b) => {
                const dateA = new Date(a.created_at || a.timestamp || 0);
                const dateB = new Date(b.created_at || b.timestamp || 0);
                return dateB.getTime() - dateA.getTime();
            });
            
            // البحث في المخزون
            if (searchTerm) {
                filteredProducts = filteredProducts.filter(product => 
                    (product.product_name && product.product_name.toLowerCase().includes(searchTerm)) ||
                    (product.product_barcode && product.product_barcode.toLowerCase().includes(searchTerm)) ||
                    (product.supplier && product.supplier.toLowerCase().includes(searchTerm))
                );
            }
            
            if (categoryFilter !== 'all') {
                filteredProducts = filteredProducts.filter(p => p.product_category === categoryFilter);
            }
            
            if (statusFilter !== 'all') {
                filteredProducts = filteredProducts.filter(p => {
                    if (statusFilter === 'in-stock') return p.stock_quantity > p.min_stock;
                    if (statusFilter === 'low-stock') return p.stock_quantity <= p.min_stock && p.stock_quantity > 0;
                    if (statusFilter === 'out-of-stock') return p.stock_quantity === 0;
                    return true;
                });
            }
            
            tbody.innerHTML = filteredProducts.map(product => {
                const category = categories.find(c => c.category_id === product.product_category);
                const categoryName = category ? category.category_name : 'غير محدد';
                const totalCost = product.stock_quantity * product.product_cost_retail;
                const totalValue = product.stock_quantity * product.product_price_retail;
                const profit = totalValue - totalCost;
                
                let status = 'متوفر';
                let statusClass = 'text-success';
                
                if (product.stock_quantity === 0) {
                    status = 'نفد المخزون';
                    statusClass = 'text-danger';
                } else if (product.stock_quantity <= product.min_stock) {
                    status = 'مخزون قليل';
                    statusClass = 'text-warning';
                }
                
                return `
                    <tr data-product-id="${product.product_id}">
                        <td>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <i class="${category ? category.category_icon : 'fas fa-box'}"></i>
                                ${product.product_name}
                            </div>
                        </td>
                        <td>${categoryName}</td>
                        <td>${product.stock_quantity}</td>
                        <td>${formatCurrency(totalCost)}</td>
                        <td>${formatCurrency(totalValue)}</td>
                        <td class="text-success">${formatCurrency(profit)}</td>
                        <td>
                            <span class="${statusClass}">${status}</span>
                        </td>
                    </tr>
                `;
            }).join('');
        }

        // عرض جدول الفواتير
        function renderInvoicesTable() {
            const tbody = document.getElementById('invoicesTableBody');
            if (!tbody) return;
            
            // ترتيب البيانات - الأحدث أولاً
            const sortedSales = [...salesData].sort((a, b) => {
                const dateA = new Date(a.timestamp || a.date || a.created_at || 0);
                const dateB = new Date(b.timestamp || b.date || b.created_at || 0);
                return dateB.getTime() - dateA.getTime();
            });
            
            // البحث في الفواتير
            const searchTerm = document.getElementById('invoicesSearchInput')?.value.toLowerCase() || '';
            const filteredSales = searchTerm 
                ? sortedSales.filter(sale => 
                    (sale.invoice_id && sale.invoice_id.toLowerCase().includes(searchTerm)) ||
                    (sale.customer_name && sale.customer_name.toLowerCase().includes(searchTerm)) ||
                    (sale.payment_method && sale.payment_method.toLowerCase().includes(searchTerm)) ||
                    (sale.created_by_name && sale.created_by_name.toLowerCase().includes(searchTerm))
                  )
                : sortedSales;
            
            tbody.innerHTML = filteredSales.map(sale => {
                // تحديد اسم المستخدم الذي أنشأ الفاتورة
                const createdByName = sale.created_by_name || sale.created_by || 'غير معروف';
                const createdByRole = sale.created_by_role || (sale.created_by === 'admin' ? 'مدير' : 'مستخدم');
                
                // إنشاء أزرار الإجراءات
                const isInstallmentInvoice = sale.payment_type === 'أقساط';
                
                let actionButtons = `
                    <button class="action-btn view-btn" onclick="showInvoiceDetails('${sale.invoice_id}')" title="عرض التفاصيل">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn view-btn" onclick="${isInstallmentInvoice ? `printInvoiceFromDetails('${sale.invoice_id}', true)` : `printInvoice('${sale.invoice_id}')`}" title="طباعة">
                        <i class="fas fa-print"></i>
                    </button>
                `;
                
                // إضافة زر الحذف إذا كان لديه الصلاحية
                if (window.securityManager && window.securityManager.hasPermission('invoices_delete')) {
                    actionButtons += `
                        <button class="action-btn delete-btn" 
                                onclick="if(window.securityManager.checkPermission('invoices_delete')) confirmDeleteInvoice('${sale.invoice_id}', '${sale.customer_name || 'عميل نقدي'}')" 
                                title="حذف الفاتورة"
                                data-permission="invoices_delete">
                            <i class="fas fa-trash"></i>
                        </button>
                    `;
                }
                
                return `
                    <tr>
                        <td>${sale.invoice_id}</td>
                        <td>${new Date(sale.timestamp).toLocaleDateString('en-GB')}</td>
                        <td>${sale.customer_name || 'عميل نقدي'}</td>
                        <td>${formatCurrency(sale.final_total)}</td>
                        <td>
                            <span style="display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fas fa-${sale.payment_method === 'نقدي' ? 'money-bill-wave' : 'credit-card'}"></i>
                                ${sale.payment_type || sale.payment_method}
                            </span>
                        </td>
                        <td>
                            <div style="display: flex; align-items: center; gap: 0.3rem;">
                                <i class="fas fa-user" style="color: #666; font-size: 0.9em;"></i>
                                <span style="font-weight: 500;">${createdByName}</span>
                                <span style="color: #999; font-size: 0.85em;">(${createdByRole})</span>
                            </div>
                        </td>
                        <td>
                            ${actionButtons}
                        </td>
                    </tr>
                `;
            }).join('');
        }

        // عرض جدول الديون
        // متغير عام لحفظ حالة الفلتر الحالية
        let currentDebtFilter = 'all';
        
        function renderDebtsTable() {
            const tbody = document.getElementById('debtsTableBody');
            if (!tbody) return;
            
            console.log('Rendering debts:', debtsData);
            console.log('Current filter:', currentDebtFilter);
            
            // ترتيب البيانات - الأحدث أولاً
            const sortedDebts = [...debtsData].sort((a, b) => {
                const dateA = new Date(a.timestamp || a.date || a.created_at || 0);
                const dateB = new Date(b.timestamp || b.date || b.created_at || 0);
                return dateB.getTime() - dateA.getTime();
            });
            
            // البحث في الديون
            const searchTerm = document.getElementById('debtsSearchInput')?.value.toLowerCase() || '';
            let filteredDebts = searchTerm 
                ? sortedDebts.filter(debt => 
                    (debt.customer_name && debt.customer_name.toLowerCase().includes(searchTerm)) ||
                    (debt.customer_phone && debt.customer_phone.toLowerCase().includes(searchTerm)) ||
                    (debt.customer_address && debt.customer_address.toLowerCase().includes(searchTerm))
                  )
                : sortedDebts;
            
            // 🔥 تطبيق فلتر الحالة
            if (currentDebtFilter !== 'all') {
                filteredDebts = filteredDebts.filter(debt => {
                    // حساب حالة الدين
                    let paidAmount = 0;
                    let totalMonths = 0;
                    let paidMonths = 0;
                    
                    if (debt.installments && Array.isArray(debt.installments) && debt.installments.length > 0) {
                        totalMonths = debt.installments.length;
                        debt.installments.forEach(inst => {
                            if (inst.status === 'paid') {
                                paidAmount += parseFloat(inst.paid_amount || inst.amount || 0);
                                paidMonths++;
                            }
                        });
                    } else if (debt.paid_amount !== undefined && debt.paid_amount !== null) {
                        paidAmount = parseFloat(debt.paid_amount) || 0;
                        totalMonths = debt.installment_months || 0;
                    }
                    
                    const totalAmount = debt.total_amount || debt.final_total || 0;
                    const remainingAmount = totalAmount - paidAmount;
                    const isPaid = paidMonths === totalMonths && totalMonths > 0;
                    
                    // حساب التأخير بناءً على الأقساط الفعلية
                    let isOverdue = false;
                    if (debt.installments && Array.isArray(debt.installments) && debt.installments.length > 0) {
                        const unpaidOverdue = debt.installments.filter(inst => {
                            if (inst.status === 'paid') return false;
                            const dueDate = new Date(inst.due_date);
                            return dueDate < new Date();
                        });
                        isOverdue = unpaidOverdue.length > 0;
                    } else {
                        const checkDate = debt.due_date || debt.start_date || debt.date;
                        if (checkDate) {
                            const dueDate = new Date(checkDate);
                            isOverdue = dueDate < new Date() && remainingAmount > 0 && !isPaid;
                        }
                    }
                    
                    // تطبيق الفلتر المناسب
                    if (currentDebtFilter === 'paid') {
                        return isPaid;
                    } else if (currentDebtFilter === 'overdue') {
                        return isOverdue;
                    } else if (currentDebtFilter === 'active') {
                        return !isPaid && !isOverdue;
                    }
                    
                    return true;
                });
            }
            
            console.log('Filtered debts:', filteredDebts.length);
            
            tbody.innerHTML = filteredDebts.map(debt => {
                console.log('Debt data:', debt);
                
                // الحصول على المبلغ الإجمالي
                const totalAmount = debt.total_amount || debt.final_total || 0;
                
                // حساب المبلغ المدفوع من الأقساط
                let paidAmount = 0;
                let paidMonths = 0;
                
                if (debt.installments && Array.isArray(debt.installments) && debt.installments.length > 0) {
                    debt.installments.forEach(inst => {
                        if (inst.status === 'paid') {
                            paidAmount += parseFloat(inst.paid_amount || inst.amount || 0);
                            paidMonths++;
                        }
                    });
                } else if (debt.paid_amount !== undefined && debt.paid_amount !== null) {
                    paidAmount = parseFloat(debt.paid_amount) || 0;
                }
                
                // حساب المبلغ المتبقي
                let remainingAmount = totalAmount - paidAmount;
                if (remainingAmount < 0) remainingAmount = 0;
                
                // الحصول على القسط الشهري
                let monthlyAmount = debt.monthly_amount || 0;
                
                // إذا لم يكن هناك قسط شهري محسوب، احسبه من المبلغ الإجمالي
                if (!monthlyAmount && totalAmount > 0 && debt.installment_months > 0) {
                    monthlyAmount = totalAmount / debt.installment_months;
                }
                
                // حساب عدد الأشهر
                let totalMonths = debt.installment_months || 0;
                if (debt.installments && Array.isArray(debt.installments)) {
                    totalMonths = debt.installments.length;
                }
                
                let isPaid = paidMonths === totalMonths && totalMonths > 0;
                
                // حساب حالة التأخير بناءً على الأقساط الفعلية
                let isOverdue = false;
                if (debt.installments && Array.isArray(debt.installments) && debt.installments.length > 0) {
                    // ابحث عن أقساط غير مدفوعة ومتأخرة
                    const unpaidOverdue = debt.installments.filter(inst => {
                        if (inst.status === 'paid') return false;
                        const dueDate = new Date(inst.due_date);
                        return dueDate < new Date();
                    });
                    isOverdue = unpaidOverdue.length > 0;
                } else {
                    // إذا لم يكن هناك أقساط، استخدم due_date أو start_date
                    const checkDate = debt.due_date || debt.start_date || debt.date;
                    if (checkDate) {
                        const dueDate = new Date(checkDate);
                        isOverdue = dueDate < new Date() && remainingAmount > 0 && !isPaid;
                    }
                }
                
                console.log('Debt:', debt.customer_name, '- Total:', totalAmount, 'Paid:', paidAmount, 'Remaining:', remainingAmount, 'Monthly:', monthlyAmount);
                console.log('Paid months:', paidMonths, '/', totalMonths, 'isPaid:', isPaid, 'isOverdue:', isOverdue);
                
                let status = `${paidMonths}/${totalMonths} شهر`;
                let statusClass = 'debt-status active';
                
                if (isPaid) {
                    status = 'مسدد';
                    statusClass = 'debt-status paid';
                } else if (isOverdue) {
                    status = `متأخر (${paidMonths}/${totalMonths})`;
                    statusClass = 'debt-status overdue';
                }
                
                return `
                    <tr data-debt-id="${debt.id || debt.__backendId}">
                        <td>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fas fa-user"></i>
                                ${debt.customer_name}
                                ${debt.merge_count && debt.merge_count > 0 ? `
                                    <span class="merge-badge" title="تم دمج ${debt.merge_count} ${debt.merge_count === 1 ? 'دين' : 'ديون'} إضافية">
                                        <i class="fas fa-layer-group"></i>
                                        ${debt.merge_count}
                                    </span>
                                ` : ''}
                            </div>
                        </td>
                        <td>${debt.customer_phone}</td>
                        <td>${formatCurrency(paidAmount)}</td>
                        <td>${formatCurrency(remainingAmount)}</td>
                        <td>${formatCurrency(monthlyAmount)}</td>
                        <td>${debt.start_date ? new Date(debt.start_date).toLocaleDateString('en-GB') : (debt.date ? new Date(debt.date).toLocaleDateString('en-GB') : '-')}</td>
                        <td>
                            <span class="${statusClass}">${status}</span>
                        </td>
                        <td>
                            ${window.securityManager && window.securityManager.hasPermission('debts_view_details') ? `
                            <button class="action-btn view-btn" onclick="if(window.securityManager.checkPermission('debts_view_details')) showDebtDetails('${debt.id || debt.__backendId || debt.debt_id}')" title="عرض التفاصيل" data-permission="debts_view_details">
                                <i class="fas fa-eye"></i>
                            </button>
                            ` : ''}
                            ${!isPaid && window.securityManager && window.securityManager.hasPermission('debts_edit') ? `
                            <button class="action-btn edit-btn" onclick="if(window.securityManager.checkPermission('debts_edit')) showEditDebtModal('${debt.id || debt.__backendId || debt.debt_id}')" title="تعديل الدين" data-permission="debts_edit">
                                <i class="fas fa-edit"></i>
                            </button>
                            ` : ''}
                            ${!isPaid && window.securityManager && window.securityManager.hasPermission('debts_payment') ? `
                                <button class="action-btn edit-btn" onclick="if(window.securityManager.checkPermission('debts_payment')) showQuickPayModal('${debt.id || debt.__backendId || debt.debt_id}')" title="تسديد قسط" data-permission="debts_payment">
                                    <i class="fas fa-money-bill-wave"></i>
                                </button>
                            ` : ''}
                            ${window.securityManager && window.securityManager.hasPermission('debts_delete') ? `
                            <button class="action-btn delete-btn" onclick="if(window.securityManager.checkPermission('debts_delete')) confirmDeleteDebt('${debt.id || debt.__backendId || debt.debt_id}', '${debt.customer_name}')" title="حذف الدين" data-permission="debts_delete">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                            ` : ''}
                        </td>
                    </tr>
                `;
            }).join('');
        }
        
        // 🔥 دالة جديدة للفلترة حسب الحالة
        function filterDebtsByStatus(status) {
            console.log('🔍 تطبيق فلتر:', status);
            currentDebtFilter = status;
            
            // تحديث شكل البطاقات لإظهار البطاقة النشطة
            document.querySelectorAll('#debts .stat-card').forEach(card => {
                card.style.transform = 'scale(1)';
                card.style.boxShadow = '';
            });
            
            // إبراز البطاقة المختارة
            const activeCard = event?.currentTarget;
            if (activeCard) {
                activeCard.style.transform = 'scale(1.05)';
                activeCard.style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)';
            }
            
            renderDebtsTable();
            
            // إظهار رسالة توضيحية
            const filterMessages = {
                'all': 'عرض جميع الديون',
                'paid': 'عرض الديون المسددة فقط',
                'overdue': 'عرض الديون المتأخرة فقط',
                'active': 'عرض الديون النشطة فقط'
            };
            
            // تم إزالة الإشعار
        }
        
        // ✅ ==== دوال إدارة الإيصالات ====
        
        // متغير لتخزين الإيصالات المدمجة
        let mergedReceiptsBatches = JSON.parse(localStorage.getItem('mergedReceiptsBatches') || '[]');
        
        // تحديث إحصائيات الإيصالات
        function updateReceiptsStats() {
            const totalReceipts = salesData.length;
            const cashReceipts = salesData.filter(s => s.payment_method === 'نقدي' || s.payment_type === 'نقدي');
            const installmentReceipts = salesData.filter(s => s.payment_method === 'أقساط' || s.payment_type === 'أقساط');
            
            const totalCash = cashReceipts.reduce((sum, s) => sum + (s.final_total || s.total || 0), 0);
            const totalInstallment = installmentReceipts.reduce((sum, s) => sum + (s.final_total || s.total || 0), 0);
            const totalAmount = totalCash + totalInstallment;
            
            const totalReceiptsEl = document.getElementById('totalReceipts');
            const totalCashReceiptsEl = document.getElementById('totalCashReceipts');
            const totalInstallmentReceiptsEl = document.getElementById('totalInstallmentReceipts');
            const totalReceiptsAmountEl = document.getElementById('totalReceiptsAmount');
            
            if (totalReceiptsEl) totalReceiptsEl.textContent = toEnglishDigits(totalReceipts);
            if (totalCashReceiptsEl) totalCashReceiptsEl.textContent = toEnglishDigits(formatCurrency(totalCash));
            if (totalInstallmentReceiptsEl) totalInstallmentReceiptsEl.textContent = toEnglishDigits(formatCurrency(totalInstallment));
            if (totalReceiptsAmountEl) totalReceiptsAmountEl.textContent = toEnglishDigits(formatCurrency(totalAmount));
        }
        
        // عرض جدول الإيصالات
        function renderReceiptsTable() {
            const tableBody = document.getElementById('receiptsTableBody');
            if (!tableBody) return;
            
            // فلترة البيانات
            const searchInput = document.getElementById('receiptsSearchInput');
            const dateFilterSelect = document.getElementById('receiptsDateFilter');
            const typeFilterSelect = document.getElementById('receiptsTypeFilter');
            const userFilterSelect = document.getElementById('receiptsUserFilter');
            
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
            const dateFilter = dateFilterSelect ? dateFilterSelect.value : 'all';
            const typeFilter = typeFilterSelect ? typeFilterSelect.value : 'all';
            const userFilter = userFilterSelect ? userFilterSelect.value : 'all';
            
            let filteredReceipts = [...salesData];
            
            // فلتر البحث
            if (searchTerm) {
                filteredReceipts = filteredReceipts.filter(receipt => {
                    const searchableText = `
                        ${receipt.invoice_id || ''}
                        ${receipt.customer_name || ''}
                        ${receipt.created_by_name || ''}
                    `.toLowerCase();
                    return searchableText.includes(searchTerm);
                });
            }
            
            // فلتر التاريخ
            if (dateFilter !== 'all') {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                filteredReceipts = filteredReceipts.filter(receipt => {
                    const receiptDate = new Date(receipt.timestamp || receipt.created_at || receipt.date);
                    receiptDate.setHours(0, 0, 0, 0);
                    
                    switch(dateFilter) {
                        case 'today':
                            return receiptDate.getTime() === today.getTime();
                        case 'yesterday':
                            const yesterday = new Date(today);
                            yesterday.setDate(yesterday.getDate() - 1);
                            return receiptDate.getTime() === yesterday.getTime();
                        case 'thisWeek':
                            const weekStart = new Date(today);
                            weekStart.setDate(weekStart.getDate() - weekStart.getDay());
                            return receiptDate >= weekStart;
                        case 'thisMonth':
                            return receiptDate.getMonth() === today.getMonth() && 
                                   receiptDate.getFullYear() === today.getFullYear();
                        default:
                            return true;
                    }
                });
            }
            
            // فلتر النوع
            if (typeFilter !== 'all') {
                filteredReceipts = filteredReceipts.filter(receipt => 
                    receipt.payment_method === typeFilter || receipt.payment_type === typeFilter
                );
            }
            
            // فلتر المستخدم
            if (userFilter !== 'all') {
                filteredReceipts = filteredReceipts.filter(receipt => 
                    receipt.created_by === userFilter
                );
            }
            
            // تحديث فلتر المستخدمين
            updateUsersFilter();
            
            // ترتيب عكسي (الأحدث أولاً)
            filteredReceipts.sort((a, b) => {
                const dateA = new Date(a.timestamp || a.created_at || a.date);
                const dateB = new Date(b.timestamp || b.created_at || b.date);
                return dateB - dateA;
            });
            
            // إنشاء HTML
            const html = filteredReceipts.map(receipt => {
                const receiptDate = new Date(receipt.timestamp || receipt.created_at || receipt.date);
                const dateStr = toEnglishDigits(receiptDate.toLocaleDateString('en-GB'));
                const timeStr = toEnglishDigits(receiptDate.toLocaleTimeString('ar-IQ', { hour: '2-digit', minute: '2-digit' }));
                const type = receipt.payment_method || receipt.payment_type || 'نقدي';
                const typeClass = type === 'نقدي' ? 'badge-success' : 'badge-warning';
                const isMerged = receipt.merged_batch_id ? true : false;
                const mergedIcon = isMerged ? '<i class="fas fa-check-circle" style="color: #10b981;"></i>' : '<i class="fas fa-times-circle" style="color: #ef4444;"></i>';
                
                return `
                    <tr>
                        <td><strong>${toEnglishDigits(receipt.invoice_id || 'N/A')}</strong></td>
                        <td>${dateStr}</td>
                        <td>${timeStr}</td>
                        <td>${receipt.customer_name || 'غير محدد'}</td>
                        <td><strong>${toEnglishDigits(formatCurrency(receipt.final_total || receipt.total || 0))}</strong></td>
                        <td><span class="badge ${typeClass}">${type}</span></td>
                        <td>${receipt.created_by_name || receipt.created_by || 'غير محدد'}</td>
                        <td style="text-align: center;">${mergedIcon}</td>
                        <td>
                            <button class="action-btn view-btn" onclick="viewReceiptDetails('${receipt.invoice_id}')" title="عرض التفاصيل">
                                <i class="fas fa-eye"></i>
                            </button>
                            <button class="action-btn edit-btn" onclick="printReceipt('${receipt.invoice_id}')" title="طباعة">
                                <i class="fas fa-print"></i>
                            </button>
                        </td>
                    </tr>
                `;
            }).join('');
            
            tableBody.innerHTML = html || '<tr><td colspan="9" style="text-align: center;">لا توجد إيصالات</td></tr>';
            
            // تحديث الإحصائيات
            updateReceiptsStats();
        }
        
        // تحديث فلتر المستخدمين
        function updateUsersFilter() {
            const userFilter = document.getElementById('receiptsUserFilter');
            if (!userFilter) return;
            
            const users = new Set();
            salesData.forEach(receipt => {
                const user = receipt.created_by || 'unknown';
                const userName = receipt.created_by_name || user;
                users.add(JSON.stringify({id: user, name: userName}));
            });
            
            const currentValue = userFilter.value;
            userFilter.innerHTML = '<option value="all">جميع المستخدمين</option>';
            
            Array.from(users).forEach(userStr => {
                const user = JSON.parse(userStr);
                const userName = user.name === 'unknown' || user.name === user.id ? 'غير محدد' : user.name;
                userFilter.innerHTML += `<option value="${user.id}">${userName}</option>`;
            });
            
            userFilter.value = currentValue;
        }
        
        // فلترة الإيصالات
        function filterReceipts() {
            renderReceiptsTable();
        }
        
        // دمج إيصالات اليوم
        function mergeReceipts() {
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const todayStr = today.toISOString().split('T')[0];
            
            // فلترة إيصالات اليوم
            const todayReceipts = salesData.filter(receipt => {
                const receiptDate = new Date(receipt.timestamp || receipt.created_at || receipt.date);
                receiptDate.setHours(0, 0, 0, 0);
                return receiptDate.getTime() === today.getTime() && !receipt.merged_batch_id;
            });
            
            if (todayReceipts.length === 0) {
                // تم إزالة الإشعار
                return;
            }
            
            // تأكيد الدمج
            if (!confirm(`هل تريد دمج ${toEnglishDigits(todayReceipts.length)} إيصال لليوم الحالي؟`)) {
                return;
            }
            
            // إنشاء معرف فريد للدفعة المدمجة
            const batchId = 'batch_' + Date.now();
            const batchDate = today.toISOString();
            
            // حساب الإحصائيات
            let cashTotal = 0;
            let installmentTotal = 0;
            let cashCount = 0;
            let installmentCount = 0;
            
            // تحديث الإيصالات بمعرف الدفعة
            todayReceipts.forEach(receipt => {
                receipt.merged_batch_id = batchId;
                receipt.merged_date = batchDate;
                
                const total = receipt.final_total || receipt.total || 0;
                if (receipt.payment_method === 'نقدي' || receipt.payment_type === 'نقدي') {
                    cashTotal += total;
                    cashCount++;
                } else {
                    installmentTotal += total;
                    installmentCount++;
                }
            });
            
            // إنشاء كائن الدفعة المدمجة
            const mergedBatch = {
                batch_id: batchId,
                date: batchDate,
                receipts_count: todayReceipts.length,
                cash_total: cashTotal,
                cash_count: cashCount,
                installment_total: installmentTotal,
                installment_count: installmentCount,
                grand_total: cashTotal + installmentTotal,
                created_at: Date.now(),
                created_by: window.securityManager ? window.securityManager.getCurrentUsername() : 'unknown'
            };
            
            // حفظ الدفعة
            mergedReceiptsBatches.push(mergedBatch);
            localStorage.setItem('mergedReceiptsBatches', JSON.stringify(mergedReceiptsBatches));
            
            // حفظ التحديثات في salesData
            if (typeof saveToLocalStorage === 'function') {
                saveToLocalStorage('salesData', salesData);
            }
            
            // تحديث dataSdk إذا كان متاحاً
            if (window.dataSdk) {
                todayReceipts.forEach(async receipt => {
                    try {
                        await window.dataSdk.update(receipt.id || receipt.__backendId, receipt);
                    } catch (error) {
                        console.error('Error updating receipt:', error);
                    }
                });
            }
            
            // تحديث الواجهة
            renderReceiptsTable();
            
            // تم إزالة الإشعار
        }
        
        // عرض تفاصيل إيصال
        function viewReceiptDetails(invoiceId) {
            const receipt = salesData.find(s => s.invoice_id === invoiceId);
            if (!receipt) {
                // تم إزالة الإشعار
                return;
            }
            
            const items = receipt.items ? JSON.parse(receipt.items) : [];
            const itemsHtml = items.map(item => `• ${item.product_name}: ${formatCurrency(item.product_price)} × ${item.quantity}`).join('\n');
            
            alert(`📄 تفاصيل الإيصال\n\n` +
                  `رقم الفاتورة: ${invoiceId}\n` +
                  `التاريخ: ${new Date(receipt.timestamp || receipt.created_at).toLocaleString('en-US')}\n` +
                  `العميل: ${receipt.customer_name || 'غير محدد'}\n` +
                  `المبلغ: ${formatCurrency(receipt.final_total || receipt.total || 0)}\n` +
                  `النوع: ${receipt.payment_method || receipt.payment_type}\n` +
                  `المستخدم: ${receipt.created_by_name || receipt.created_by || 'غير محدد'}\n\n` +
                  `المنتجات:\n${itemsHtml || 'لا توجد منتجات'}`);
        }
        
        // طباعة إيصال
        function printReceipt(invoiceId) {
            const receipt = salesData.find(s => s.invoice_id === invoiceId);
            if (!receipt) {
                // تم إزالة الإشعار
                return;
            }
            
            // استخدام دالة الطباعة الموجودة
            if (typeof printInvoice === 'function') {
                printInvoice(receipt);
            } else {
                // تم إزالة الإشعار
            }
        }

        // تحديث الإحصائيات
        function updateStatistics() {
            // إحصائيات المنتجات
            const totalProducts = products.length;
            const totalValue = products.reduce((sum, p) => sum + (p.stock_quantity * p.product_cost_retail), 0);
            const lowStockItems = products.filter(p => p.stock_quantity <= p.min_stock).length;
            const totalCategories = categories.length;
            
            updateElement('totalProducts', totalProducts);
            updateElement('totalValue', formatCurrency(totalValue));
            updateElement('lowStockItems', lowStockItems);
            updateElement('totalCategories', totalCategories);
            
            // إحصائيات المخزون
            const totalCost = products.reduce((sum, p) => sum + (p.stock_quantity * p.product_cost_retail), 0);
            const totalProfit = products.reduce((sum, p) => sum + (p.stock_quantity * (p.product_price_retail - p.product_cost_retail)), 0);
            const profitMargin = totalCost > 0 ? ((totalProfit / totalCost) * 100).toFixed(1) : 0;
            
            updateElement('totalCost', formatCurrency(totalCost));
            updateElement('totalProfit', formatCurrency(totalProfit));
            updateElement('profitMargin', profitMargin + '%');
            
            // إحصائيات الفواتير
            const totalInvoices = salesData.length;
            const totalSales = salesData.reduce((sum, s) => sum + s.final_total, 0);
            const today = new Date().toDateString();
            const todaySales = salesData
                .filter(s => new Date(s.timestamp).toDateString() === today)
                .reduce((sum, s) => sum + s.final_total, 0);
            
            updateElement('totalInvoices', totalInvoices);
            updateElement('totalSales', formatCurrency(totalSales));
            updateElement('todaySales', formatCurrency(todaySales));
            
            // إحصائيات الديون - حساب المبلغ المتبقي (المتناقص)
            console.log('Calculating debt statistics from:', debtsData);
            const totalDebts = debtsData.reduce((sum, d) => {
                // حساب المبلغ المدفوع من الأقساط
                let paidAmount = 0;
                if (d.installments && Array.isArray(d.installments) && d.installments.length > 0) {
                    d.installments.forEach(inst => {
                        if (inst.status === 'paid') {
                            paidAmount += parseFloat(inst.paid_amount || inst.amount || 0);
                        }
                    });
                } else if (d.paid_amount !== undefined && d.paid_amount !== null) {
                    paidAmount = parseFloat(d.paid_amount) || 0;
                }
                
                // حساب المبلغ المتبقي
                const totalAmount = d.total_amount || d.final_total || 0;
                const remainingAmount = totalAmount - paidAmount;
                
                console.log('Debt:', d.customer_name, 'Total:', totalAmount, 'Paid:', paidAmount, 'Remaining:', remainingAmount);
                return sum + (remainingAmount > 0 ? remainingAmount : 0);
            }, 0);
            console.log('Total remaining debts calculated:', totalDebts);
            const debtCustomers = [...new Set(debtsData.map(d => d.customer_phone))].length;
            const overdueDebts = debtsData.filter(d => {
                // حساب المبلغ المتبقي للتحقق من التأخير
                let paidAmount = 0;
                if (d.installments && Array.isArray(d.installments)) {
                    d.installments.forEach(inst => {
                        if (inst.status === 'paid') {
                            paidAmount += parseFloat(inst.paid_amount || inst.amount || 0);
                        }
                    });
                }
                const totalAmount = d.total_amount || d.final_total || 0;
                const remaining = totalAmount - paidAmount;
                return new Date(d.due_date) < new Date() && remaining > 0;
            }).length;
            
            // حساب الديون المسددة بالكامل (جميع الأقساط مسددة)
            const paidDebts = debtsData.filter(d => {
                // التحقق من الأقساط
                if (d.installments && Array.isArray(d.installments) && d.installments.length > 0) {
                    // مسدد بالكامل = جميع الأقساط مدفوعة
                    return d.installments.every(inst => inst.status === 'paid');
                } else {
                    // إذا لم توجد أقساط، نتحقق من المبلغ المتبقي
                    const remaining = d.remaining_amount !== undefined ? d.remaining_amount : (d.total_amount || d.final_total || 0);
                    return remaining <= 0;
                }
            }).length;
            
            console.log('Debts statistics - Total:', totalDebts, 'Customers:', debtCustomers, 'Overdue:', overdueDebts, 'Paid:', paidDebts);
            
            updateElement('totalDebts', formatCurrency(totalDebts));
            updateElement('debtCustomers', debtCustomers);
            updateElement('overdueDebts', overdueDebts);
            updateElement('paidDebts', paidDebts);
        }

        // إظهار نموذج الأقساط
        function showInstallmentForm() {
            document.getElementById('installmentForm').style.display = 'block';
            calculateInstallment();
        }
        
        // البحث عن العملاء المدينين
        function searchDebtCustomers(query) {
            console.log('🔍 البحث عن عملاء:', query);
            
            const resultsContainer = document.getElementById('customerSearchResults');
            if (!resultsContainer) return;
            
            // إخفاء النتائج إذا كان البحث فارغاً
            if (!query || query.trim().length < 2) {
                resultsContainer.classList.remove('active');
                resultsContainer.innerHTML = '';
                return;
            }
            
            const searchTerm = query.trim().toLowerCase();
            
            // البحث في الديون عن العملاء
            const matchingCustomers = debtsData.filter(debt => {
                const name = (debt.customer_name || '').toLowerCase();
                const phone = (debt.customer_phone || '').toLowerCase();
                
                return name.includes(searchTerm) || phone.includes(searchTerm);
            });
            
            // إزالة التكرارات (نفس العميل قد يكون له عدة ديون)
            const uniqueCustomers = [];
            const seenPhones = new Set();
            
            matchingCustomers.forEach(debt => {
                const phone = debt.customer_phone || debt.customer_name;
                if (!seenPhones.has(phone)) {
                    seenPhones.add(phone);
                    
                    // حساب إجمالي ديون هذا العميل
                    const customerDebts = debtsData.filter(d => 
                        d.customer_phone === debt.customer_phone || 
                        (d.customer_name === debt.customer_name && !d.customer_phone)
                    );
                    
                    const totalRemaining = customerDebts.reduce((sum, d) => {
                        const totalAmount = parseFloat(d.total_amount || d.final_total || 0);
                        const paidAmount = parseFloat(d.paid_amount || 0);
                        const remaining = totalAmount - paidAmount;
                        return sum + (remaining > 0 ? remaining : 0);
                    }, 0);
                    
                    uniqueCustomers.push({
                        name: debt.customer_name || 'غير محدد',
                        phone: debt.customer_phone || '',
                        address: debt.customer_address || '',
                        totalRemaining: totalRemaining,
                        debtsCount: customerDebts.length
                    });
                }
            });
            
            console.log('📊 عدد النتائج:', uniqueCustomers.length);
            
            // عرض النتائج
            if (uniqueCustomers.length === 0) {
                resultsContainer.innerHTML = `
                    <div class="customer-search-empty">
                        <i class="fas fa-search"></i>
                        <p>لا توجد نتائج مطابقة</p>
                    </div>
                `;
                resultsContainer.classList.add('active');
            } else {
                resultsContainer.innerHTML = uniqueCustomers.map(customer => `
                    <div class="customer-search-item" onclick="selectExistingCustomer('${escapeHtml(customer.name)}', '${escapeHtml(customer.phone)}', '${escapeHtml(customer.address)}')">
                        <div class="customer-search-name">
                            <i class="fas fa-user"></i>
                            ${customer.name}
                        </div>
                        <div class="customer-search-info">
                            <span>
                                <i class="fas fa-phone"></i>
                                ${customer.phone || 'لا يوجد'}
                            </span>
                            ${customer.address ? `
                            <span>
                                <i class="fas fa-map-marker-alt"></i>
                                ${customer.address}
                            </span>
                            ` : ''}
                        </div>
                        <div class="customer-search-debt">
                            <i class="fas fa-exclamation-circle"></i>
                            المتبقي: ${formatCurrency(customer.totalRemaining)}
                            (${customer.debtsCount} ${customer.debtsCount === 1 ? 'دين' : 'ديون'})
                        </div>
                    </div>
                `).join('');
                resultsContainer.classList.add('active');
            }
        }
        
        // اختيار عميل موجود
        function selectExistingCustomer(name, phone, address) {
            console.log('✅ تم اختيار العميل:', { name, phone, address });
            
            // ملء الحقول
            const customerNameInput = document.getElementById('customerName');
            const customerPhoneInput = document.getElementById('customerPhone');
            const customerAddressInput = document.getElementById('customerAddress');
            const searchInput = document.getElementById('searchExistingCustomer');
            
            if (customerNameInput) customerNameInput.value = name;
            if (customerPhoneInput) customerPhoneInput.value = phone;
            if (customerAddressInput) customerAddressInput.value = address;
            if (searchInput) searchInput.value = '';
            
            // إخفاء نتائج البحث
            const resultsContainer = document.getElementById('customerSearchResults');
            if (resultsContainer) {
                resultsContainer.classList.remove('active');
                resultsContainer.innerHTML = '';
            }
            
            // تم إزالة الإشعار
        }
        
        // دالة مساعدة لتجنب XSS
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        // حساب الأقساط
        function calculateInstallment() {
            const subtotal = cart.reduce((sum, item) => sum + (item.product_price * item.quantity), 0);
            const discountPercent = parseFloat(document.getElementById('discountInput')?.value) || 0;
            const discountAmount = subtotal * (discountPercent / 100);
            const afterDiscount = subtotal - discountAmount;
            const taxRate = parseFloat(getCurrentTaxRate()) / 100;
            const taxAmount = afterDiscount * taxRate;
            const originalAmount = afterDiscount + taxAmount;
            
            const months = parseInt(document.getElementById('installmentMonths')?.value) || 12;
            const additionalAmount = parseFloat(document.getElementById('additionalAmount')?.value) || 0;
            const downPayment = parseFloat(document.getElementById('downPayment')?.value) || 0;
            
            // حساب المبلغ الإجمالي قبل خصم الدفعة المقدمة
            const totalBeforeDown = originalAmount + additionalAmount;
            
            // المبلغ المتبقي بعد خصم الدفعة المقدمة
            const remainingAmount = totalBeforeDown - downPayment;
            
            // القسط الشهري = المبلغ المتبقي / عدد الأشهر
            const monthlyPayment = remainingAmount > 0 ? remainingAmount / months : 0;
            
            updateElement('originalAmount', formatCurrency(originalAmount));
            updateElement('addedProfit', formatCurrency(additionalAmount));
            updateElement('totalInstallmentAmount', formatCurrency(totalBeforeDown));
            updateElement('monthlyPayment', formatCurrency(monthlyPayment));
            
            // عرض/إخفاء الدفعة المقدمة
            const downPaymentRow = document.getElementById('downPaymentRow');
            if (downPayment > 0) {
                downPaymentRow.style.display = 'flex';
                updateElement('downPaymentDisplay', formatCurrency(downPayment));
            } else {
                downPaymentRow.style.display = 'none';
            }
        }

        // تبديل وضع التحكم المتقدم
        function toggleAdvancedEditMode() {
            const checkbox = document.getElementById('advancedEditMode');
            const advancedFields = document.getElementById('advancedEditFields');
            
            if (checkbox.checked) {
                console.log('✅ تفعيل وضع التحكم المتقدم في الأقساط');
                advancedFields.style.display = 'block';
                
                // تعبئة القيم الحالية في الحقول المتقدمة
                const subtotal = cart.reduce((sum, item) => sum + (item.product_price * item.quantity), 0);
                const discountPercent = parseFloat(document.getElementById('discountInput')?.value) || 0;
                const discountAmount = subtotal * (discountPercent / 100);
                const afterDiscount = subtotal - discountAmount;
                const taxRate = parseFloat(getCurrentTaxRate()) / 100;
                const taxAmount = afterDiscount * taxRate;
                const originalAmount = afterDiscount + taxAmount;
                
                const additionalAmount = parseFloat(document.getElementById('additionalAmount')?.value) || 0;
                const downPayment = parseFloat(document.getElementById('downPayment')?.value) || 0;
                const totalBeforeDown = originalAmount + additionalAmount;
                const remainingAmount = totalBeforeDown - downPayment;
                const months = parseInt(document.getElementById('installmentMonths')?.value) || 12;
                const monthlyPayment = remainingAmount > 0 ? remainingAmount / months : 0;
                
                // تعيين القيم في الحقول (كقيم افتراضية - placeholder)
                document.getElementById('customOriginalAmount').placeholder = formatNumber(originalAmount);
                document.getElementById('customTotalAmount').placeholder = formatNumber(totalBeforeDown);
                document.getElementById('customMonthlyAmount').placeholder = formatNumber(monthlyPayment);
                
                // تخزين القيم الأصلية
                window.installmentOriginalValues = {
                    originalAmount,
                    totalAmount: totalBeforeDown,
                    monthlyAmount: monthlyPayment,
                    months
                };
            } else {
                console.log('❌ إلغاء وضع التحكم المتقدم');
                advancedFields.style.display = 'none';
                
                // مسح قيم الحقول المتقدمة
                document.getElementById('customOriginalAmount').value = '';
                document.getElementById('customTotalAmount').value = '';
                document.getElementById('customMonthlyAmount').value = '';
                
                // إعادة حساب القيم الافتراضية
                calculateInstallment();
            }
        }
        
        // إعادة حساب من المبلغ الأصلي
        function recalculateFromOriginal() {
            const customOriginal = parseFloat(document.getElementById('customOriginalAmount').value);
            if (!customOriginal || customOriginal <= 0) {
                // إذا كان فارغاً، استخدم الحساب العادي
                calculateInstallment();
                return;
            }
            
            console.log('🔄 إعادة حساب من المبلغ الأصلي:', customOriginal);
            
            const additionalAmount = parseFloat(document.getElementById('additionalAmount')?.value) || 0;
            const downPayment = parseFloat(document.getElementById('downPayment')?.value) || 0;
            const months = parseInt(document.getElementById('installmentMonths')?.value) || 12;
            
            // حساب المبلغ الإجمالي
            const totalAmount = customOriginal + additionalAmount;
            
            // حساب المبلغ المتبقي
            const remainingAmount = totalAmount - downPayment;
            
            // حساب القسط الشهري
            const monthlyAmount = remainingAmount > 0 ? remainingAmount / months : 0;
            
            // تحديث العرض
            updateElement('originalAmount', formatCurrency(customOriginal));
            updateElement('addedProfit', formatCurrency(additionalAmount));
            updateElement('totalInstallmentAmount', formatCurrency(totalAmount));
            updateElement('monthlyPayment', formatCurrency(monthlyAmount));
            
            // تحديث الحقول الأخرى
            document.getElementById('customTotalAmount').value = '';
            document.getElementById('customTotalAmount').placeholder = formatNumber(totalAmount);
            document.getElementById('customMonthlyAmount').value = '';
            document.getElementById('customMonthlyAmount').placeholder = formatNumber(monthlyAmount);
            
            // عرض/إخفاء الدفعة المقدمة
            const downPaymentRow = document.getElementById('downPaymentRow');
            if (downPayment > 0) {
                downPaymentRow.style.display = 'flex';
                updateElement('downPaymentDisplay', formatCurrency(downPayment));
            } else {
                downPaymentRow.style.display = 'none';
            }
            
            // تخزين القيم للاستخدام عند الحفظ
            window.customInstallmentValues = {
                originalAmount: customOriginal,
                totalAmount,
                monthlyAmount,
                remainingAmount
            };
        }
        
        // إعادة حساب من المبلغ الإجمالي
        function recalculateFromTotal() {
            const customTotal = parseFloat(document.getElementById('customTotalAmount').value);
            if (!customTotal || customTotal <= 0) {
                calculateInstallment();
                return;
            }
            
            console.log('🔄 إعادة حساب من المبلغ الإجمالي:', customTotal);
            
            const downPayment = parseFloat(document.getElementById('downPayment')?.value) || 0;
            const months = parseInt(document.getElementById('installmentMonths')?.value) || 12;
            const additionalAmount = parseFloat(document.getElementById('additionalAmount')?.value) || 0;
            
            // حساب المبلغ الأصلي (عكسي)
            const originalAmount = customTotal - additionalAmount;
            
            // حساب المبلغ المتبقي
            const remainingAmount = customTotal - downPayment;
            
            // حساب القسط الشهري
            const monthlyAmount = remainingAmount > 0 ? remainingAmount / months : 0;
            
            // تحديث العرض
            updateElement('originalAmount', formatCurrency(originalAmount));
            updateElement('addedProfit', formatCurrency(additionalAmount));
            updateElement('totalInstallmentAmount', formatCurrency(customTotal));
            updateElement('monthlyPayment', formatCurrency(monthlyAmount));
            
            // تحديث الحقول الأخرى
            document.getElementById('customOriginalAmount').value = '';
            document.getElementById('customOriginalAmount').placeholder = formatNumber(originalAmount);
            document.getElementById('customMonthlyAmount').value = '';
            document.getElementById('customMonthlyAmount').placeholder = formatNumber(monthlyAmount);
            
            // عرض/إخفاء الدفعة المقدمة
            const downPaymentRow = document.getElementById('downPaymentRow');
            if (downPayment > 0) {
                downPaymentRow.style.display = 'flex';
                updateElement('downPaymentDisplay', formatCurrency(downPayment));
            } else {
                downPaymentRow.style.display = 'none';
            }
            
            // تخزين القيم للاستخدام عند الحفظ
            window.customInstallmentValues = {
                originalAmount,
                totalAmount: customTotal,
                monthlyAmount,
                remainingAmount
            };
        }
        
        // إعادة حساب من القسط الشهري
        function recalculateFromMonthly() {
            const customMonthly = parseFloat(document.getElementById('customMonthlyAmount').value);
            if (!customMonthly || customMonthly <= 0) {
                calculateInstallment();
                return;
            }
            
            console.log('🔄 إعادة حساب من القسط الشهري:', customMonthly);
            
            const downPayment = parseFloat(document.getElementById('downPayment')?.value) || 0;
            const additionalAmount = parseFloat(document.getElementById('additionalAmount')?.value) || 0;
            
            // حساب المبلغ الأصلي من السلة
            const cartTotal = cart.reduce((sum, item) => sum + (item.product_price * item.quantity), 0);
            const originalAmount = cartTotal;
            
            // حساب المبلغ الإجمالي
            const totalAmount = originalAmount + additionalAmount;
            
            // حساب المبلغ المتبقي بعد الدفعة المقدمة
            const remainingAmount = totalAmount - downPayment;
            
            // حساب عدد الأشهر المطلوبة بناءً على القسط الشهري
            const calculatedMonths = Math.ceil(remainingAmount / customMonthly);
            
            console.log('📊 الحسابات:');
            console.log('  المبلغ الأصلي:', originalAmount);
            console.log('  المبلغ الإضافي:', additionalAmount);
            console.log('  الإجمالي:', totalAmount);
            console.log('  الدفعة المقدمة:', downPayment);
            console.log('  المتبقي:', remainingAmount);
            console.log('  القسط الشهري:', customMonthly);
            console.log('  عدد الأشهر المحسوب:', calculatedMonths);
            
            // تحديث حقل عدد الأشهر
            document.getElementById('installmentMonths').value = calculatedMonths;
            
            // تحديث العرض
            updateElement('originalAmount', formatCurrency(originalAmount));
            updateElement('addedProfit', formatCurrency(additionalAmount));
            updateElement('totalInstallmentAmount', formatCurrency(totalAmount));
            updateElement('monthlyPayment', formatCurrency(customMonthly));
            
            // تحديث الحقول الأخرى
            document.getElementById('customOriginalAmount').value = '';
            document.getElementById('customOriginalAmount').placeholder = formatNumber(originalAmount);
            document.getElementById('customTotalAmount').value = '';
            document.getElementById('customTotalAmount').placeholder = formatNumber(totalAmount);
            
            // عرض/إخفاء الدفعة المقدمة
            const downPaymentRow = document.getElementById('downPaymentRow');
            if (downPayment > 0) {
                downPaymentRow.style.display = 'flex';
                updateElement('downPaymentDisplay', formatCurrency(downPayment));
            } else {
                downPaymentRow.style.display = 'none';
            }
            
            // تخزين القيم للاستخدام عند الحفظ
            window.customInstallmentValues = {
                originalAmount,
                totalAmount,
                monthlyAmount: customMonthly,
                remainingAmount,
                installmentMonths: calculatedMonths
            };
            
            // إظهار رسالة توضيحية
            // تم إزالة الإشعار
        }
        
        // دالة مساعدة لتنسيق الأرقام بدون عملة
        function formatNumber(num) {
            if (isNaN(num) || num === null || num === undefined) return '0';
            return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }

        // معالجة الدفع النقدي
        async function processCashPayment(customFinalAmount = null) {
            console.log('🛒 بدء معالجة الدفع النقدي...');
            console.log('عدد المنتجات في السلة:', cart.length);
            console.log('المبلغ المخصص:', customFinalAmount);
            
            if (cart.length === 0) {
                // تم إزالة الإشعار
                return;
            }
            
            // حفظ المبلغ المخصص مؤقتاً إذا كان موجوداً
            if (customFinalAmount !== null && customFinalAmount > 0) {
                window.customCashAmount = customFinalAmount;
            }
            
            const success = await processPayment('نقدي', 'نقدي');
            
            if (success) {
                console.log('✅ تم إتمام الدفع النقدي بنجاح');
                // طباعة صامتة بعد الدفع النقدي فقط
                if (window.lastSaleInvoiceId) {
                    printInvoice(window.lastSaleInvoiceId, true);
                }
                closeModal('paymentModal');
                resetInstallmentForm();
                
                // مسح المبلغ المخصص
                window.customCashAmount = null;
            } else {
                console.log('❌ فشل الدفع النقدي');
            }
        }

        // عرض نافذة الدفع النقدي
        function showCashPaymentModal() {
            console.log('🪟 فتح نافذة الدفع النقدي الحديثة');
            
            if (cart.length === 0) {
                // تم إزالة الإشعار
                return;
            }
            
            // حساب المبلغ الإجمالي
            const subtotal = cart.reduce((sum, item) => sum + (item.product_price * item.quantity), 0);
            const discountPercent = parseFloat(document.getElementById('discountInput')?.value) || 0;
            const discountAmount = subtotal * (discountPercent / 100);
            const afterDiscount = subtotal - discountAmount;
            const taxRate = parseFloat(getCurrentTaxRate()) / 100;
            const taxAmount = afterDiscount * taxRate;
            const finalTotal = afterDiscount + taxAmount;
            
            // تحديث البيانات في النافذة
            document.getElementById('cashModalItemCount').textContent = cart.length;
            document.getElementById('cashModalOriginalTotal').textContent = formatCurrency(finalTotal);
            document.getElementById('cashModalFinalAmount').textContent = formatCurrency(finalTotal);
            document.getElementById('cashModalFinalPrice').value = '';
            
            // إخفاء عرض الفرق
            document.getElementById('cashPriceDifferenceDisplay').style.display = 'none';
            
            // حفظ المبلغ الأصلي
            window.cashModalOriginalAmount = finalTotal;
            
            // عرض النافذة
            showModal('cashPaymentModal');
        }
        
        // تحديث معاينة الدفع النقدي
        function updateCashPaymentPreview() {
            const finalPriceInput = document.getElementById('cashModalFinalPrice');
            const finalPriceValue = parseFloat(finalPriceInput.value) || 0;
            const originalAmount = window.cashModalOriginalAmount || 0;
            
            const differenceDisplay = document.getElementById('cashPriceDifferenceDisplay');
            const differenceLabel = document.getElementById('cashDifferenceLabel');
            const differenceAmount = document.getElementById('cashDifferenceAmount');
            const finalAmountDisplay = document.getElementById('cashModalFinalAmount');
            
            if (finalPriceValue > 0) {
                // حساب الفرق
                const difference = finalPriceValue - originalAmount;
                
                // عرض المبلغ النهائي
                finalAmountDisplay.textContent = formatCurrency(finalPriceValue);
                
                // عرض الفرق
                differenceDisplay.style.display = 'block';
                
                if (difference > 0) {
                    // زيادة
                    differenceDisplay.style.background = 'rgba(244, 67, 54, 0.1)';
                    differenceDisplay.style.border = '2px solid rgba(244, 67, 54, 0.3)';
                    differenceLabel.innerHTML = '<i class="fas fa-arrow-up"></i> زيادة:';
                    differenceLabel.style.color = 'var(--danger-color)';
                    differenceAmount.textContent = formatCurrency(difference);
                    differenceAmount.style.color = 'var(--danger-color)';
                } else if (difference < 0) {
                    // خصم
                    differenceDisplay.style.background = 'rgba(76, 175, 80, 0.1)';
                    differenceDisplay.style.border = '2px solid rgba(76, 175, 80, 0.3)';
                    differenceLabel.innerHTML = '<i class="fas fa-arrow-down"></i> خصم:';
                    differenceLabel.style.color = 'var(--success-color)';
                    differenceAmount.textContent = formatCurrency(Math.abs(difference));
                    differenceAmount.style.color = 'var(--success-color)';
                } else {
                    // لا يوجد فرق
                    differenceDisplay.style.display = 'none';
                }
            } else {
                // استخدام المبلغ الأصلي
                finalAmountDisplay.textContent = formatCurrency(originalAmount);
                differenceDisplay.style.display = 'none';
            }
        }
        
        // إغلاق نافذة الدفع النقدي
        function closeCashPaymentModal() {
            closeModal('cashPaymentModal');
            // إعادة تعيين القيم
            document.getElementById('cashModalFinalPrice').value = '';
            document.getElementById('cashPriceDifferenceDisplay').style.display = 'none';
        }
        
        // تأكيد الدفع النقدي
        async function confirmCashPayment() {
            const finalPriceInput = document.getElementById('cashModalFinalPrice');
            const finalPriceValue = parseFloat(finalPriceInput.value) || 0;
            const originalAmount = window.cashModalOriginalAmount || 0;
            
            console.log('✅ تأكيد الدفع النقدي');
            console.log('المبلغ الأصلي:', originalAmount);
            console.log('المبلغ المخصص:', finalPriceValue);
            
            // إغلاق النافذة
            closeCashPaymentModal();
            
            // معالجة الدفع مع المبلغ المخصص إذا كان موجوداً
            if (finalPriceValue > 0) {
                await processCashPayment(finalPriceValue);
            } else {
                await processCashPayment(null);
            }
        }


        // معالجة دفع الأقساط
        async function processInstallmentPayment() {
            console.log('🛒 بدء معالجة الدفع بالأقساط...');
            console.log('عدد المنتجات في السلة:', cart.length);
            
            if (cart.length === 0) {
                // تم إزالة الإشعار
                return;
            }
            
            const customerName = document.getElementById('customerName').value.trim();
            const customerPhone = document.getElementById('customerPhone').value.trim();
            
            if (!customerName || !customerPhone) {
                // تم إزالة الإشعار
                return;
            }
            
            const customerAddress = document.getElementById('customerAddress')?.value.trim() || '';
            let newInstallmentMonths = parseInt(document.getElementById('installmentMonths')?.value) || 12;
            const additionalAmount = parseFloat(document.getElementById('additionalAmount')?.value) || 0;
            const downPayment = parseFloat(document.getElementById('downPayment')?.value) || 0;
            const installmentStartDate = document.getElementById('installmentStartDate')?.value || null;
            
            // التحقق من وجود قيم مخصصة من وضع التحكم المتقدم
            let newTotalAmount, newRemainingAmount, newMonthlyAmount, finalTotal;
            
            if (window.customInstallmentValues && 
                window.customInstallmentValues.totalAmount > 0 && 
                window.customInstallmentValues.monthlyAmount > 0) {
                console.log('✅ استخدام القيم المخصصة من وضع التحكم المتقدم');
                console.log('القيم المخصصة:', window.customInstallmentValues);
                
                finalTotal = window.customInstallmentValues.originalAmount || 0;
                newTotalAmount = window.customInstallmentValues.totalAmount;
                newRemainingAmount = window.customInstallmentValues.remainingAmount;
                newMonthlyAmount = window.customInstallmentValues.monthlyAmount;
                
                // استخدام عدد الأشهر المحسوب من القيم المخصصة إذا كان موجوداً
                if (window.customInstallmentValues.installmentMonths) {
                    newInstallmentMonths = window.customInstallmentValues.installmentMonths;
                    console.log('📅 استخدام عدد الأشهر المحسوب:', newInstallmentMonths);
                }
                
                // مسح القيم المخصصة بعد الاستخدام
                window.customInstallmentValues = null;
            } else {
                console.log('📊 حساب القيم من السلة (الوضع العادي)');
                
                // حساب المبلغ الإجمالي والقسط الشهري مباشرة من السلة
                const subtotal = cart.reduce((sum, item) => sum + (item.product_price * item.quantity), 0);
                const discountPercent = parseFloat(document.getElementById('discountInput')?.value) || 0;
                const discountAmount = subtotal * (discountPercent / 100);
                const afterDiscount = subtotal - discountAmount;
                const taxRate = parseFloat(getCurrentTaxRate()) / 100;
                const taxAmount = afterDiscount * taxRate;
                finalTotal = afterDiscount + taxAmount;

                // توزيع المبلغ الإضافي تلقائياً على المنتجات
                if (additionalAmount > 0 && cart.length > 0) {
                    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
                    const perUnitDiff = additionalAmount / totalQuantity;
                    let distributed = 0;
                    cart.forEach((item, idx) => {
                        let addForThis = perUnitDiff * item.quantity;
                        if (idx === cart.length - 1) {
                            addForThis += additionalAmount - (perUnitDiff * totalQuantity);
                        }
                        item.product_price = Math.round((item.product_price + addForThis / item.quantity));
                        distributed += addForThis;
                    });
                }

                // المبلغ الإجمالي = المبلغ النهائي + المبلغ الإضافي
                newTotalAmount = finalTotal + additionalAmount;
                // المبلغ المتبقي بعد الدفعة المقدمة
                newRemainingAmount = newTotalAmount - downPayment;
                // القسط الشهري = المبلغ المتبقي / عدد الأشهر
                newMonthlyAmount = newRemainingAmount / newInstallmentMonths;
            }
            
            console.log('بيانات العميل:', { customerName, customerPhone, customerAddress });
            console.log('بيانات الأقساط الجديدة:', { 
                finalTotal,
                additionalAmount,
                downPayment,
                newTotalAmount, 
                newRemainingAmount,
                newMonthlyAmount, 
                newInstallmentMonths
            });
            
            // التحقق من صحة البيانات
            if (isNaN(newTotalAmount) || newTotalAmount <= 0) {
                // تم إزالة الإشعار
                return;
            }
            
            if (isNaN(newMonthlyAmount) || newMonthlyAmount <= 0) {
                // تم إزالة الإشعار
                return;
            }
            
            // البحث عن دين موجود لهذا العميل
            const existingDebt = debtsData.find(debt => 
                debt.customer_phone === customerPhone && 
                debt.status === 'نشط'
            );
            
            if (existingDebt) {
                console.log('📋 تم العثور على دين موجود للعميل - سيتم الدمج');
                console.log('الدين الحالي:', existingDebt);
                // تأكيد الدمج
                const confirmMerge = confirm(
                    `لدى العميل "${customerName}" دين موجود بالفعل.\n\n` +
                    `المبلغ المتبقي الحالي: ${formatCurrency(existingDebt.remaining_amount || 0)}\n` +
                    `الأشهر المتبقية: ${getUnpaidInstallmentsCount(existingDebt)} شهر\n\n` +
                    `هل تريد إضافة الدين الجديد إلى حسابه الحالي؟\n` +
                    `(سيتم دمج الديون في سجل واحد)`
                );
                if (!confirmMerge) {
                    // تم إزالة الإشعار
                    return;
                }
                // دمج الدين الجديد مع الدين الموجود
                const success = await mergeDebtToExisting(
                    existingDebt,
                    {
                        newTotalAmount,
                        newRemainingAmount,
                        newMonthlyAmount,
                        newInstallmentMonths,
                        additionalAmount,
                        downPayment,
                        customerAddress,
                        cart: [...cart],
                        finalTotal: newTotalAmount - downPayment, // 🔥 المبلغ النهائي الصحيح (بعد الإضافة والخصم)
                        originalSubtotal: finalTotal, // المبلغ الأصلي للمنتجات
                        start_date: installmentStartDate
                    }
                );
                // ملاحظة: window.lastSaleInvoiceId تم تعيينه داخل mergeDebtToExisting بالفاتورة الجديدة
                // لا نستبدله هنا بالفاتورة القديمة
                if (success) {
                    // ✅ فقط طباعة فاتورة التقسيط بعد البيع (بدون إيصال تسديد)
                    if (window.lastSaleInvoiceId) {
                        printInstallmentInvoice(window.lastSaleInvoiceId, true, {
                            customer_name: customerName,
                            customer_phone: customerPhone,
                            customer_address: customerAddress,
                            installment_months: newInstallmentMonths,
                            monthly_amount: newMonthlyAmount,
                            down_payment: downPayment,
                            additional_amount: additionalAmount,
                            remaining_amount: newRemainingAmount,
                            // إضافة المنتجات الجديدة والمبالغ الجديدة
                            new_items: [...cart],
                            new_subtotal: cart.reduce((sum, item) => sum + (item.product_price * item.quantity), 0),
                            new_final_total: newTotalAmount - downPayment // 🔥 المبلغ النهائي الصحيح (بعد الإضافة والخصم)
                        });
                    }
                    closeModal('paymentModal');
                    resetInstallmentForm();
                } else {
                    console.log('❌ فشل دمج الدين');
                }
            } else {
                console.log('📝 إنشاء دين جديد للعميل');
                // إنشاء دين جديد
                const success = await processPayment('أقساط', 'أقساط', {
                    customer_name: customerName,
                    customer_phone: customerPhone,
                    customer_address: customerAddress,
                    installment_months: newInstallmentMonths,
                    additional_amount: additionalAmount,
                    down_payment: downPayment,
                    monthly_amount: newMonthlyAmount,
                    total_amount: newTotalAmount,
                    remaining_amount: newRemainingAmount,
                    start_date: installmentStartDate,
                    advanced_control_used: window.customInstallmentValues ? true : false,
                    debt_date: new Date().toISOString()
                });
                // تحديث معرف الفاتورة الأخيرة بعد كل عملية بيع أقساط
                if (Array.isArray(salesData) && salesData.length > 0) {
                    // ابحث عن آخر فاتورة أقساط تم إنشاؤها لهذا العميل
                    const lastInstallmentSale = salesData.filter(s => s.customer_phone === customerPhone && s.payment_type === 'أقساط').sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
                    if (lastInstallmentSale && lastInstallmentSale.invoice_id) {
                        window.lastSaleInvoiceId = lastInstallmentSale.invoice_id;
                    }
                }
                if (success) {
                    // ✅ فقط طباعة فاتورة التقسيط بعد البيع (بدون إيصال تسديد)
                    if (window.lastSaleInvoiceId) {
                        printInstallmentInvoice(window.lastSaleInvoiceId, true, {
                            customer_name: customerName,
                            customer_phone: customerPhone,
                            customer_address: customerAddress,
                            installment_months: newInstallmentMonths,
                            monthly_amount: newMonthlyAmount,
                            down_payment: downPayment,
                            additional_amount: additionalAmount,
                            remaining_amount: newRemainingAmount
                        });
                    }
                    console.log('✅ تم إتمام الدفع بالأقساط بنجاح');
                    closeModal('paymentModal');
                    resetInstallmentForm();
                } else {
                    console.log('❌ فشل الدفع بالأقساط');
                }
            }
// طباعة فاتورة تقسيط مفصلة (نطاق عام)
function printInstallmentInvoice(invoiceId, silent = false, extraData = {}) {
    window.printInstallmentInvoice = printInstallmentInvoice;
    (async () => {
        const settings = JSON.parse(localStorage.getItem('printerSettings') || '{}');
        let sale = null;
        let foundSource = '';
        console.log('🖨️ بدء طباعة فاتورة الأقساط:', invoiceId);
        console.log('📦 بيانات إضافية:', extraData);

        // 1. جلب من salesData
        if (typeof salesData !== 'undefined' && Array.isArray(salesData)) {
            sale = salesData.find(s => s.invoice_id === invoiceId);
            if (sale) foundSource = 'salesData';
        }
        // 2. جلب من window.dataSdk (متزامن أو غير متزامن)
        if ((!sale || !sale.items) && window.dataSdk && typeof window.dataSdk.getAll === 'function') {
            let allSales = [];
            try {
                const result = window.dataSdk.getAll();
                if (result && typeof result.then === 'function') {
                    allSales = await result;
                } else {
                    allSales = result;
                }
            } catch {}
            if (Array.isArray(allSales)) {
                const found = allSales.find(s => s.invoice_id === invoiceId);
                if (found) { sale = found; foundSource = 'dataSdk'; }
            }
        }
        // 3. جلب من window.invoicesDB (واجهة قاعدة البيانات)
        if ((!sale || !sale.items) && window.invoicesDB && typeof window.invoicesDB.getById === 'function') {
            try {
                const invoice = await window.invoicesDB.getById(invoiceId);
                if (invoice) { sale = invoice; foundSource = 'invoicesDB'; }
            } catch {}
        }
        // 4. جلب من extraData (إذا احتوى على كل شيء)
        if (!sale && extraData && extraData.items && extraData.final_total) {
            sale = { ...extraData, invoice_id: invoiceId };
            foundSource = 'extraData';
        }
        if (!sale) {
            console.error('❌ الفاتورة غير موجودة في أي مصدر:', invoiceId);
            // تم إزالة الإشعار
            return;
        }
        console.log('✅ تم العثور على الفاتورة من:', foundSource, sale);

        // تأكد من أن items مصفوفة
        if (typeof sale.items === 'string') {
            try { sale.items = JSON.parse(sale.items); } catch { sale.items = []; }
        }
        if (!Array.isArray(sale.items)) sale.items = [];

        // دمج بيانات extraData فوق بيانات sale (الأولوية للأحدث)
        if (extraData && typeof extraData === 'object') {
            for (const key of Object.keys(extraData)) {
                if (extraData[key] !== undefined && extraData[key] !== null && extraData[key] !== '') {
                    sale[key] = extraData[key];
                }
            }
        }

        // تحقق من الحقول الأساسية
        const requiredFields = ['customer_name','installment_months','monthly_amount','final_total'];
        for (const field of requiredFields) {
            if (!sale[field]) {
                console.warn('⚠️ الحقل ناقص للطباعة:', field, sale);
            }
        }

        // توليد HTML الفاتورة
        const receiptContent = generateInstallmentInvoiceReceipt(sale, settings);
        const printHtml = `<!DOCTYPE html><html dir="rtl" lang="ar"><head><meta charset="UTF-8"><title>فاتورة تقسيط ${sale.invoice_id}</title><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet"><style>* { margin: 0; padding: 0; box-sizing: border-box; } body { font-family: 'Cairo', sans-serif; direction: rtl; background: white; } @media print { body { margin: 0; } @page { margin: 0; } }</style></head><body>${receiptContent}</body></html>`;

        // إجبار الطباعة الصامتة دائمًا
        if (typeof window.safePrintInvoice === 'function') {
            window.safePrintInvoice(printHtml, {
                silent: true,
                pageSize: 'A4',
                printBackground: true
            });
            // تم إزالة الإشعار
        } else {
            // fallback: نافذة طباعة عادية
            const printWindow = window.open('', '_blank');
            printWindow.document.write(printHtml);
            printWindow.document.close();
            printWindow.focus();
            setTimeout(() => { printWindow.print(); }, 500);
            // تم إزالة الإشعار
        }
        if (typeof updatePrintStats === 'function') updatePrintStats();
    })();
}
// تعريف الدالة في window مرة واحدة فقط بعد الدالة
if (typeof window !== 'undefined') {
  window.printInstallmentInvoice = printInstallmentInvoice;
}
        // توليد محتوى فاتورة التقسيط
        function generateInstallmentInvoiceReceipt(sale, settings) {
            // استخراج التاريخ والساعة - عربي مع أرقام إنجليزية
            const saleDate = new Date(sale.timestamp || sale.created_at || Date.now());
            
            const dateOptions = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                weekday: 'long'
            };
            const dateStrArabic = saleDate.toLocaleDateString('ar-IQ', dateOptions);
            const dateStr = toEnglishDigits(dateStrArabic);
            
            const timeOptions = { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: true
            };
            const timeStrArabic = saleDate.toLocaleTimeString('ar-IQ', timeOptions);
            const timeStr = toEnglishDigits(timeStrArabic);
            
            // استخراج تفاصيل الأقساط من installment_details أو من مستوى الفاتورة
            const installmentDetails = sale.installment_details || {};
            const originalSubtotal = installmentDetails.original_subtotal || sale.subtotal || 0;
            const additionalAmount = installmentDetails.additional_amount || sale.additional_amount || 0;
            const downPayment = installmentDetails.down_payment || sale.down_payment || 0;
            const totalBeforeDiscount = originalSubtotal + additionalAmount;
            
            // حساب المبلغ الإجمالي النهائي
            let finalTotal = originalSubtotal; // البداية من المبلغ الأصلي
            if (additionalAmount > 0) finalTotal += additionalAmount; // إضافة المبلغ الإضافي
            if (downPayment > 0) finalTotal -= downPayment; // خصم الدفعة المقدمة
            
            const remainingAmount = installmentDetails.remaining_amount || sale.remaining_amount || (totalBeforeDiscount - downPayment);
            const monthlyAmount = installmentDetails.monthly_amount || sale.monthly_amount || 0;
            const installmentMonths = installmentDetails.installment_months || sale.installment_months || 0;
            const startDate = installmentDetails.start_date || sale.start_date || null;
            const advancedControlUsed = installmentDetails.advanced_control_used || installmentDetails.custom_values_used || false;
            
            let html = `<div style="width:210mm;min-height:297mm;margin:0 auto;padding:12mm 10mm;font-family:'Cairo',sans-serif;background:#fff;color:#222;line-height:1.4;font-size:11px;box-sizing:border-box;">
            
            <!-- الهيدر المحسّن -->
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px;padding-bottom:6px;border-bottom:2px solid #6366f1;">
                <!-- اليسار: اسم المحل -->
                <div style="flex:0 0 35%;">
                    <h1 style="margin:0;font-size:1.3rem;font-weight:bold;color:#2d3748;">${settings?.store_name || 'يعقوب للاجهزه الكهربائيه'}</h1>
                </div>
                <!-- اليمين: العنوان والهاتف -->
                <div style="flex:0 0 60%;text-align:left;">
                    <div style="font-size:0.95rem;color:#374151;font-weight:600;margin-bottom:2px;">${settings?.store_address || 'باب الهاشميه قرب مدرسه الكرار'}</div>
                    <div style="font-size:0.9rem;color:#6366f1;font-weight:600;">📞 ${settings?.store_phone || '07803092185'}</div>
                </div>
            </div>
            
            <!-- عنوان الفاتورة ومعلوماتها -->
            <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:6px;padding:6px 10px;margin-bottom:8px;color:#fff;">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                    <div>
                        <div style="font-size:1.05rem;font-weight:bold;">📋 فاتورة تقسيط</div>
                        <div style="font-size:0.85rem;opacity:0.95;">رقم: ${toEnglishDigits(sale.invoice_id || '')}</div>
                    </div>
                    <div style="text-align:left;font-size:0.85rem;">
                        <div>📅 ${dateStr}</div>
                        <div>🕐 ${timeStr}</div>
                    </div>
                </div>
            </div>
            
            <!-- معلومات العميل - صف واحد -->
            <div style="background:#f8fafc;border-radius:6px;padding:6px 8px;margin-bottom:8px;border:1px solid #e2e8f0;">
                <div style="font-weight:bold;color:#1e293b;margin-bottom:4px;font-size:0.95rem;">👤 معلومات العميل</div>
                <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;font-size:0.9rem;">
                    <div><strong>الاسم:</strong> ${sale.customer_name || ''}</div>
                    <div><strong>الهاتف:</strong> ${sale.customer_phone || ''}</div>
                    <div><strong>العنوان:</strong> ${sale.customer_address || ''}</div>
                </div>
            </div>
            
            <!-- تفاصيل الأقساط - مضغوط -->
            <div style="background:#f0f9ff;border-radius:6px;padding:6px 8px;margin-bottom:8px;border:1px solid #bae6fd;">
                <div style="font-weight:bold;color:#0c4a6e;margin-bottom:4px;font-size:0.95rem;">💳 تفاصيل الأقساط</div>
                <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;font-size:0.85rem;">
                    <div style="background:#dbeafe;padding:4px;border-radius:4px;text-align:center;">
                        <div style="font-weight:600;color:#1e40af;font-size:0.8rem;">المبلغ الأصلي</div>
                        <div style="font-weight:bold;color:#1e3a8a;">${toEnglishDigits(originalSubtotal.toLocaleString('en'))}</div>
                    </div>
                    ${additionalAmount > 0 ? `<div style="background:#fce7f3;padding:4px;border-radius:4px;text-align:center;">
                        <div style="font-weight:600;color:#9f1239;font-size:0.8rem;">مبلغ إضافي</div>
                        <div style="font-weight:bold;color:#be123c;">${toEnglishDigits(additionalAmount.toLocaleString('en'))}</div>
                    </div>` : ''}
                    ${downPayment > 0 ? `<div style="background:#d1fae5;padding:4px;border-radius:4px;text-align:center;">
                        <div style="font-weight:600;color:#065f46;font-size:0.8rem;">دفعة مقدمة</div>
                        <div style="font-weight:bold;color:#047857;">${toEnglishDigits(downPayment.toLocaleString('en'))}</div>
                    </div>` : ''}
                    <div style="background:#fee2e2;padding:4px;border-radius:4px;text-align:center;">
                        <div style="font-weight:600;color:#7f1d1d;font-size:0.8rem;">المتبقي</div>
                        <div style="font-weight:bold;color:#991b1b;">${toEnglishDigits(remainingAmount.toLocaleString('en'))}</div>
                    </div>
                    <div style="background:#fef3c7;padding:4px;border-radius:4px;text-align:center;">
                        <div style="font-weight:600;color:#78350f;font-size:0.8rem;">عدد الأشهر</div>
                        <div style="font-weight:bold;color:#92400e;">${toEnglishDigits(installmentMonths)}</div>
                    </div>
                    <div style="background:#ffedd5;padding:4px;border-radius:4px;text-align:center;">
                        <div style="font-weight:600;color:#7c2d12;font-size:0.8rem;">القسط الشهري</div>
                        <div style="font-weight:bold;color:#9a3412;">${toEnglishDigits(monthlyAmount.toLocaleString('en'))}</div>
                    </div>
                    ${startDate ? `<div style="background:#e0e7ff;padding:4px;border-radius:4px;text-align:center;">
                        <div style="font-weight:600;color:#3730a3;font-size:0.8rem;">تاريخ البداية</div>
                        <div style="font-weight:bold;color:#4338ca;font-size:0.8rem;">${toEnglishDigits(new Date(startDate).toLocaleDateString('ar-IQ', { day: 'numeric', month: 'long', year: 'numeric' }))}</div>
                    </div>` : ''}
                    ${advancedControlUsed ? `<div style="background:#ede9fe;padding:4px;border-radius:4px;text-align:center;grid-column:1/-1;">
                        <div style="font-weight:600;color:#5b21b6;font-size:0.8rem;">⚙️ تحكم متقدم</div>
                    </div>` : ''}
                </div>
            </div>
            
            <!-- جدول المنتجات - مضغوط -->
            <div style="margin-bottom:8px;">
                <table style="width:100%;border-collapse:collapse;font-size:0.9rem;border:1px solid #e5e7eb;">
                <thead>
                    <tr style="background:#6366f1;color:#fff;">
                        <th style="padding:4px 6px;width:6%;text-align:center;border:1px solid rgba(255,255,255,0.2);">#</th>
                        <th style="padding:4px 6px;width:44%;text-align:right;border:1px solid rgba(255,255,255,0.2);">المنتج</th>
                        <th style="padding:4px 6px;width:12%;text-align:center;border:1px solid rgba(255,255,255,0.2);">الكمية</th>
                        <th style="padding:4px 6px;width:18%;text-align:center;border:1px solid rgba(255,255,255,0.2);">السعر</th>
                        <th style="padding:4px 6px;width:20%;text-align:center;border:1px solid rgba(255,255,255,0.2);">الإجمالي</th>
                    </tr>
                </thead>
                <tbody>`;
            
            let items = sale.items;
            if (typeof items === 'string') {
                try { items = JSON.parse(items); } catch { items = []; }
            }
            
            items.forEach((item, index) => {
                const name = item.product_name || item.name || '—';
                const price = item.product_price || item.price || 0;
                const qty = item.quantity || 1;
                const total = price * qty;
                html += `<tr style="background:${index%2===0?'#fff':'#f9fafb'};">
                    <td style="padding:4px 6px;text-align:center;border:1px solid #e5e7eb;font-weight:600;">${toEnglishDigits(index+1)}</td>
                    <td style="padding:4px 6px;text-align:right;border:1px solid #e5e7eb;">${name}</td>
                    <td style="padding:4px 6px;text-align:center;border:1px solid #e5e7eb;font-weight:600;">${toEnglishDigits(qty)}</td>
                    <td style="padding:4px 6px;text-align:center;border:1px solid #e5e7eb;font-weight:600;">${toEnglishDigits(price.toLocaleString('en'))}</td>
                    <td style="padding:4px 6px;text-align:center;border:1px solid #e5e7eb;font-weight:bold;color:#10b981;">${toEnglishDigits(total.toLocaleString('en'))}</td>
                </tr>`;
            });
            
            html += `</tbody></table></div>
            
            <!-- ملخص المبالغ - مضغوط -->
            <div style="background:#fef3c7;border-radius:6px;padding:6px 8px;margin-bottom:8px;border:1px solid #fde68a;">
                <div style="font-weight:bold;color:#78350f;margin-bottom:4px;font-size:0.95rem;">💰 ملخص المبالغ</div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;font-size:0.9rem;">
                    <div style="display:flex;justify-content:space-between;padding:3px 6px;background:#e0f2fe;border-radius:4px;">
                        <span>المجموع الجزئي:</span>
                        <strong>${toEnglishDigits(originalSubtotal.toLocaleString('en'))}</strong>
                    </div>
                    ${additionalAmount > 0 ? `<div style="display:flex;justify-content:space-between;padding:3px 6px;background:#fce7f3;border-radius:4px;">
                        <span>مبلغ إضافي:</span>
                        <strong style="color:#be123c;">+${toEnglishDigits(additionalAmount.toLocaleString('en'))}</strong>
                    </div>` : ''}
                    ${downPayment > 0 ? `<div style="display:flex;justify-content:space-between;padding:3px 6px;background:#d1fae5;border-radius:4px;">
                        <span>دفعة مقدمة:</span>
                        <strong style="color:#047857;">-${toEnglishDigits(downPayment.toLocaleString('en'))}</strong>
                    </div>` : ''}
                    <div style="grid-column:1/-1;display:flex;justify-content:space-between;padding:6px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:4px;color:#fff;">
                        <span style="font-size:1rem;font-weight:bold;">💵 الإجمالي النهائي:</span>
                        <strong style="font-size:1.1rem;">${toEnglishDigits(finalTotal.toLocaleString('en'))} دينار</strong>
                    </div>
                </div>
            </div>
            
            <!-- ملاحظات مضغوطة -->
            <div style="background:#fffbeb;border-radius:6px;padding:6px 8px;margin-bottom:8px;border:1px solid #fbbf24;">
                <div style="font-weight:bold;color:#b91c1c;margin-bottom:4px;font-size:0.9rem;">⚠️ ملاحظات هامة</div>
                <ol style="font-size:0.8rem;padding-right:18px;margin:0;line-height:1.5;">
                    <li>المبلغ الموجود هو وصل أمانة</li>
                    <li>السعر محمي 24 ساعة</li>
                    <li>المباع لا يرجع ولا يبدل</li>
                    <li>الخطأ والسهو مرجوع للطرفين</li>
                    <li>الشركة المصنعة مسؤولة عن الضمان</li>
                    <li>كسر الشاشة غير داخل بالضمان</li>
                    <li style="margin-top:4px;">
                        <div style="background:#e0f2fe;padding:4px 6px;border-radius:4px;border:1px solid #bae6fd;">
                            <strong style="color:#0c4a6e;">👨‍🔧 الصيانة:</strong> حمزه ابو حوراء - صيانة السبالت
                            <div style="direction:ltr;text-align:left;font-weight:bold;color:#0c4a6e;margin-top:2px;">
                                📱 <span style="letter-spacing:1px;">+964 785 570 6118</span>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
            
            <!-- التوقيعات -->
            <div style="display:flex;justify-content:space-between;gap:30px;margin-top:10px;">
                <div style="flex:1;text-align:center;">
                    <div style="font-size:0.9rem;font-weight:bold;margin-bottom:15px;">✍️ توقيع البائع</div>
                    <div style="border-bottom:1px dashed #9ca3af;"></div>
                </div>
                <div style="flex:1;text-align:center;">
                    <div style="font-size:0.9rem;font-weight:bold;margin-bottom:15px;">✍️ توقيع العميل</div>
                    <div style="border-bottom:1px dashed #9ca3af;"></div>
                </div>
            </div>
            
            <!-- الختام -->
            <div style="text-align:center;margin-top:10px;padding-top:6px;border-top:2px solid #e5e7eb;">
                <p style="margin:2px 0;font-size:0.95rem;font-weight:bold;color:#6366f1;">🌟 شكراً لتعاملكم معنا 🌟</p>
                <p style="margin:2px 0;font-size:0.85rem;color:#6b7280;">نتطلع لخدمتكم مرة أخرى</p>
            </div>
            </div>`;
            return html;
        }
         }
        
        // دمج الدين الجديد مع الدين الموجود
        async function mergeDebtToExisting(existingDebt, newDebtData) {
            console.log('🔗 بدء عملية دمج الديون...');
            
            try {
                setLoading(true);
                
                // حفظ الفاتورة الجديدة أولاً
                const subtotal = cart.reduce((sum, item) => sum + (item.product_price * item.quantity), 0);
                const discountPercent = parseFloat(document.getElementById('discountInput')?.value) || 0;
                const discountAmount = subtotal * (discountPercent / 100);
                const afterDiscount = subtotal - discountAmount;
                const taxRate = parseFloat(getCurrentTaxRate()) / 100;
                const taxAmount = afterDiscount * taxRate;
                
                // Always use a deep copy of the latest cart for the new sale
                const latestCart = Array.isArray(newDebtData.cart) ? JSON.parse(JSON.stringify(newDebtData.cart)) : (Array.isArray(cart) ? JSON.parse(JSON.stringify(cart)) : []);
                
                // 🔥 حساب المبلغ النهائي الصحيح للفاتورة
                // يجب أن يكون = المبلغ الأصلي + الإضافي - المقدمة
                const correctFinalTotal = newDebtData.finalTotal || (newDebtData.newTotalAmount - newDebtData.downPayment);
                
                const saleData = {
                    type: 'sale',
                    invoice_id: 'INV-' + Date.now(),
                    items: JSON.stringify(latestCart),
                    subtotal: subtotal,
                    tax: taxAmount,
                    discount: discountAmount,
                    final_total: correctFinalTotal, // 🔥 المبلغ النهائي الصحيح
                    payment_method: 'أقساط',
                    payment_type: 'أقساط',
                    timestamp: new Date().toISOString(),
                    customer_name: existingDebt.customer_name,
                    customer_phone: existingDebt.customer_phone,
                    customer_address: newDebtData.customerAddress || existingDebt.customer_address,
                    linked_debt_id: existingDebt.id || existingDebt.invoice_id,
                    // 🔥 حفظ تفاصيل الأقساط الكاملة
                    installment_months: newDebtData.newInstallmentMonths,
                    monthly_amount: newDebtData.newMonthlyAmount,
                    additional_amount: newDebtData.additionalAmount || 0,
                    down_payment: newDebtData.downPayment || 0,
                    remaining_amount: newDebtData.newRemainingAmount,
                    start_date: newDebtData.start_date,
                    // معلومات المستخدم الذي أنشأ الفاتورة
                    created_by: window.securityManager ? window.securityManager.getCurrentUsername() : 'unknown',
                    created_by_name: window.securityManager ? window.securityManager.getCurrentUserFullName() : 'غير معروف',
                    created_by_role: window.securityManager && window.securityManager.currentUser ? window.securityManager.currentUser.role : 'unknown',
                    created_at: new Date().toISOString()
                };
                
                console.log('💾 حفظ الفاتورة الجديدة...');
                const saleResult = await window.dataSdk.create(saleData);
                let newInvoiceId = saleData.invoice_id;
                if (!saleResult.isOk) {
                    // تم إزالة الإشعار
                    setLoading(false);
                    return false;
                }
                // Ensure the new invoice id is available for printing
                window.lastSaleInvoiceId = newInvoiceId;
                console.log('✅ تم حفظ الفاتورة:', newInvoiceId);
                
                // تحديث المخزون
                console.log('📦 تحديث المخزون...');
                await updateProductStock();
                
                // حساب الأقساط المتبقية غير المسددة
                const unpaidInstallments = (existingDebt.installments || []).filter(
                    inst => inst.status === 'pending'
                );
                
                console.log('📊 الأقساط غير المسددة:', unpaidInstallments.length);
                
                // حساب المبلغ المتبقي الحالي
                const currentRemainingAmount = parseFloat(existingDebt.remaining_amount) || 0;
                
                // إضافة المبلغ الجديد
                const mergedTotalAmount = parseFloat(existingDebt.total_amount) + newDebtData.newTotalAmount;
                const mergedRemainingAmount = currentRemainingAmount + newDebtData.newRemainingAmount;
                
                // القسط الشهري القديم (من الأقساط المتبقية)
                const oldMonthlyAmount = unpaidInstallments.length > 0 
                    ? parseFloat(unpaidInstallments[0].amount) 
                    : parseFloat(existingDebt.monthly_amount) || 0;
                
                // القسط الشهري الجديد (من الدين الجديد)
                const newMonthlyAmount = newDebtData.newMonthlyAmount;
                
                // عدد الأشهر التي سيتم دمج الأقساط فيها (الأقل بين القديم والجديد)
                const overlappingMonths = Math.min(unpaidInstallments.length, newDebtData.newInstallmentMonths);
                
                // عدد الأشهر الإضافية (من الدين الأطول)
                const remainingOldMonths = unpaidInstallments.length - overlappingMonths;
                const remainingNewMonths = newDebtData.newInstallmentMonths - overlappingMonths;
                
                console.log('🧮 الحسابات المدمجة (نظام الإضافة):');
                console.log('  المبلغ الإجمالي القديم:', existingDebt.total_amount);
                console.log('  المبلغ الإجمالي الجديد:', newDebtData.newTotalAmount);
                console.log('  المبلغ الإجمالي المدمج:', mergedTotalAmount);
                console.log('  المبلغ المتبقي الحالي:', currentRemainingAmount);
                console.log('  المبلغ المتبقي الجديد:', newDebtData.newRemainingAmount);
                console.log('  المبلغ المتبقي المدمج:', mergedRemainingAmount);
                console.log('  القسط الشهري القديم:', oldMonthlyAmount);
                console.log('  القسط الشهري الجديد:', newMonthlyAmount);
                console.log('  الأشهر المتبقية القديمة:', unpaidInstallments.length);
                console.log('  الأشهر الجديدة:', newDebtData.newInstallmentMonths);
                console.log('  الأشهر المتداخلة (قسط مزدوج):', overlappingMonths);
                console.log('  الأشهر الإضافية من القديم:', remainingOldMonths);
                console.log('  الأشهر الإضافية من الجديد:', remainingNewMonths);
                
                // حساب إجمالي عدد الأشهر
                const totalMonths = overlappingMonths + Math.max(remainingOldMonths, remainingNewMonths);
                
                // إنشاء جدول الأقساط المدمج (نظام الإضافة)
                const mergedInstallments = [];
                
                // 1. الأقساط المسددة السابقة (للسجل التاريخي)
                const paidInstallments = (existingDebt.installments || []).filter(
                    inst => inst.status === 'paid'
                );
                
                mergedInstallments.push(...paidInstallments);
                
                let monthCounter = paidInstallments.length + 1;
                
                // 2. الأشهر المتداخلة (قسط قديم + قسط جديد)
                for (let i = 0; i < overlappingMonths; i++) {
                    const oldInstallment = unpaidInstallments[i];
                    const dueDate = oldInstallment.due_date || new Date(Date.now() + (monthCounter * 30 * 24 * 60 * 60 * 1000)).toISOString();
                    
                    mergedInstallments.push({
                        month: monthCounter,
                        amount: oldMonthlyAmount + newMonthlyAmount, // ✅ إضافة القسطين
                        old_amount: oldMonthlyAmount,
                        new_amount: newMonthlyAmount,
                        due_date: dueDate,
                        status: 'pending',
                        paid_date: null,
                        paid_amount: 0,
                        installment_type: 'merged', // قسط مدمج
                        merge_info: `${formatCurrency(oldMonthlyAmount)} + ${formatCurrency(newMonthlyAmount)}`,
                        added_at: new Date().toISOString()
                    });
                    
                    monthCounter++;
                }
                
                // 3. الأشهر الإضافية من الدين القديم (إن وجدت)
                for (let i = overlappingMonths; i < unpaidInstallments.length; i++) {
                    const oldInstallment = unpaidInstallments[i];
                    const dueDate = oldInstallment.due_date || new Date(Date.now() + (monthCounter * 30 * 24 * 60 * 60 * 1000)).toISOString();
                    
                    mergedInstallments.push({
                        month: monthCounter,
                        amount: oldMonthlyAmount, // ✅ القسط القديم فقط
                        due_date: dueDate,
                        status: 'pending',
                        paid_date: null,
                        paid_amount: 0,
                        installment_type: 'old_only', // من الدين القديم فقط
                        original_debt: 'موجود',
                        added_at: new Date().toISOString()
                    });
                    
                    monthCounter++;
                }
                
                // 4. الأشهر الإضافية من الدين الجديد (إن وجدت)
                for (let i = overlappingMonths; i < newDebtData.newInstallmentMonths; i++) {
                    const dueDate = new Date(Date.now() + (monthCounter * 30 * 24 * 60 * 60 * 1000));
                    
                    mergedInstallments.push({
                        month: monthCounter,
                        amount: newMonthlyAmount, // ✅ القسط الجديد فقط
                        due_date: dueDate.toISOString(),
                        status: 'pending',
                        paid_date: null,
                        paid_amount: 0,
                        installment_type: 'new_only', // من الدين الجديد فقط
                        original_debt: 'جديد',
                        added_at: new Date().toISOString()
                    });
                    
                    monthCounter++;
                }
                
                console.log('📋 جدول الأقساط المدمج:');
                console.log('  الأقساط المسددة:', paidInstallments.length);
                console.log('  الأقساط المدمجة (قديم+جديد):', overlappingMonths);
                console.log('  الأقساط القديمة فقط:', remainingOldMonths);
                console.log('  الأقساط الجديدة فقط:', remainingNewMonths);
                console.log('  إجمالي الأقساط:', mergedInstallments.length);
                
                // إنشاء سجل الفواتير المرتبطة
                const linkedInvoices = Array.isArray(existingDebt.linked_invoices) ? [...existingDebt.linked_invoices] : [existingDebt.invoice_id];
                if (!linkedInvoices.includes(newInvoiceId)) linkedInvoices.push(newInvoiceId);
                
                // تحديث الدين الموجود
                const updatedDebtData = {
                    total_amount: mergedTotalAmount,
                    final_total: mergedTotalAmount,
                    remaining_amount: mergedRemainingAmount,
                    paid_amount: parseFloat(existingDebt.paid_amount) + newDebtData.downPayment,
                    monthly_amount: oldMonthlyAmount, // القسط القديم الأصلي (للمرجع)
                    new_monthly_amount: newMonthlyAmount, // القسط الجديد المضاف
                    installment_months: totalMonths,
                    additional_amount: parseFloat(existingDebt.additional_amount) + newDebtData.additionalAmount,
                    installments: mergedInstallments,
                    customer_address: newDebtData.customerAddress || existingDebt.customer_address,
                    linked_invoices: linkedInvoices,
                    last_updated: new Date().toISOString(),
                    merge_count: (existingDebt.merge_count || 0) + 1,
                    merge_method: 'addition' // طريقة الإضافة (وليس التوحيد)
                };
                
                console.log('💾 تحديث سجل الدين...');
                const updateResult = await window.dataSdk.update(existingDebt.id, updatedDebtData);
                
                if (updateResult.isOk) {
                    console.log('✅ تم دمج الدين بنجاح');
                    
                    // رسالة توضيحية مفصلة
                    let message = `تم إضافة الدين الجديد بنجاح!\n\n`;
                    message += `📊 التفاصيل:\n`;
                    message += `المبلغ المتبقي الكلي: ${formatCurrency(mergedRemainingAmount)}\n`;
                    message += `إجمالي الأشهر: ${totalMonths} شهر\n\n`;
                    
                    if (overlappingMonths > 0) {
                        const mergedAmount = oldMonthlyAmount + newMonthlyAmount;
                        message += `💰 الأشهر ${paidInstallments.length + 1}-${paidInstallments.length + overlappingMonths}:\n`;
                        message += `   ${formatCurrency(oldMonthlyAmount)} + ${formatCurrency(newMonthlyAmount)} = ${formatCurrency(mergedAmount)}\n\n`;
                    }
                    
                    if (remainingOldMonths > 0) {
                        message += `💰 الأشهر ${paidInstallments.length + overlappingMonths + 1}-${paidInstallments.length + overlappingMonths + remainingOldMonths}:\n`;
                        message += `   ${formatCurrency(oldMonthlyAmount)} (الدين القديم فقط)\n\n`;
                    }
                    
                    if (remainingNewMonths > 0) {
                        const startMonth = paidInstallments.length + overlappingMonths + remainingOldMonths + 1;
                        message += `💰 الأشهر ${startMonth}-${startMonth + remainingNewMonths - 1}:\n`;
                        message += `   ${formatCurrency(newMonthlyAmount)} (الدين الجديد فقط)\n`;
                    }
                    
                    showSuccessMessage(message);
                    
                    clearCart();
                    updateQuickStats();
                    setLoading(false);
                    return true;
                } else {
                    console.error('❌ فشل في تحديث الدين');
                    // تم إزالة الإشعار
                    setLoading(false);
                    return false;
                }
                
            } catch (error) {
                console.error('❌ خطأ في دمج الديون:', error);
                // تم إزالة الإشعار
                setLoading(false);
                return false;
            }
        }
        
        // حساب عدد الأقساط غير المسددة
        function getUnpaidInstallmentsCount(debt) {
            if (!debt.installments || !Array.isArray(debt.installments)) {
                return debt.installment_months || 0;
            }
            return debt.installments.filter(inst => inst.status === 'pending').length;
        }
        
        // إعادة تعيين نموذج الأقساط
        function resetInstallmentForm() {
            const installmentForm = document.getElementById('installmentForm');
            if (installmentForm) {
                installmentForm.style.display = 'none';
            }
            
            // مسح حقول العميل
            const customerName = document.getElementById('customerName');
            const customerPhone = document.getElementById('customerPhone');
            const customerAddress = document.getElementById('customerAddress');
            const additionalAmount = document.getElementById('additionalAmount');
            const downPayment = document.getElementById('downPayment');
            const installmentMonths = document.getElementById('installmentMonths');
            
            if (customerName) customerName.value = '';
            if (customerPhone) customerPhone.value = '';
            if (customerAddress) customerAddress.value = '';
            if (additionalAmount) additionalAmount.value = '0';
            if (downPayment) downPayment.value = '0';
            if (installmentMonths) installmentMonths.value = '12';
            
            // مسح حقول التحكم المتقدم
            const advancedEditMode = document.getElementById('advancedEditMode');
            const customOriginalAmount = document.getElementById('customOriginalAmount');
            const customTotalAmount = document.getElementById('customTotalAmount');
            const customMonthlyAmount = document.getElementById('customMonthlyAmount');
            const advancedEditFields = document.getElementById('advancedEditFields');
            
            if (advancedEditMode) advancedEditMode.checked = false;
            if (customOriginalAmount) customOriginalAmount.value = '';
            if (customTotalAmount) customTotalAmount.value = '';
            if (customMonthlyAmount) customMonthlyAmount.value = '';
            if (advancedEditFields) advancedEditFields.style.display = 'none';
            
            // مسح القيم المخصصة المحفوظة
            window.customInstallmentValues = null;
            
            console.log('🔄 تم إعادة تعيين نموذج الأقساط بالكامل');
        }

        // معالجة الدفع
        async function processPayment(paymentMethod, paymentType, extraData = {}) {
            console.log('💰 بدء معالجة الدفع...');
            console.log('طريقة الدفع:', paymentMethod);
            console.log('نوع الدفع:', paymentType);
            console.log('السلة:', cart);
            
            if (cart.length === 0) {
                console.error('❌ السلة فارغة!');
                // تم إزالة الإشعار
                return false;
            }
            
            if (isLoading) {
                console.warn('⚠️ العملية قيد التنفيذ بالفعل');
                return false;
            }
            
            setLoading(true);
            
            try {
                const subtotal = cart.reduce((sum, item) => sum + (item.product_price * item.quantity), 0);
                const discountPercent = parseFloat(document.getElementById('discountInput')?.value) || 0;
                const discountAmount = subtotal * (discountPercent / 100);
                const afterDiscount = subtotal - discountAmount;
                const taxRate = parseFloat(getCurrentTaxRate()) / 100;
                const taxAmount = afterDiscount * taxRate;
                let finalTotal = afterDiscount + taxAmount;
                let additionalDiscount = 0;

                // --- توزيع المبلغ الإضافي على المنتجات ---
                let priceDifference = 0;
                let shouldDistribute = false;
                let newFinalTotal = finalTotal;
                if (window.customCashAmount && window.customCashAmount > 0 && paymentType === 'نقدي') {
                    // بيع نقدي مع تعديل السعر النهائي
                    const originalTotal = finalTotal;
                    newFinalTotal = window.customCashAmount;
                    priceDifference = newFinalTotal - originalTotal;
                    additionalDiscount = originalTotal - newFinalTotal;
                    shouldDistribute = priceDifference !== 0;
                    finalTotal = newFinalTotal;
                } else if (paymentType === 'أقساط') {
                    // بيع تقسيط مع إضافة أو تعديل المبلغ
                    const additionalAmount = parseFloat(extraData.additional_amount) || 0;
                    const downPayment = parseFloat(extraData.down_payment) || 0;
                    newFinalTotal = finalTotal + additionalAmount - downPayment;
                    priceDifference = newFinalTotal - finalTotal;
                    shouldDistribute = priceDifference !== 0;
                    finalTotal = newFinalTotal;
                }

                if (shouldDistribute && cart.length > 0) {
                    // توزيع الفرق على المنتجات بالتساوي
                    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
                    const perUnitDiff = priceDifference / totalQuantity;
                    let distributed = 0;
                    cart.forEach((item, idx) => {
                        // توزيع الفرق على كل وحدة
                        let addForThis = perUnitDiff * item.quantity;
                        // في آخر منتج، عالج الفروقات الناتجة عن الكسور
                        if (idx === cart.length - 1) {
                            addForThis += priceDifference - (perUnitDiff * totalQuantity);
                        }
                        item.product_price = Math.round((item.product_price + addForThis / item.quantity));
                        distributed += addForThis;
                    });
                }

                console.log('📊 الحسابات:');
                console.log('  المجموع الفرعي:', subtotal);
                console.log('  الخصم:', discountAmount);
                console.log('  الخصم الإضافي:', additionalDiscount);
                console.log('  الضريبة:', taxAmount);
                console.log('  المجموع النهائي:', finalTotal);

                const saleData = {
                    type: 'sale',
                    invoice_id: 'INV-' + Date.now(),
                    items: JSON.stringify(cart),
                    subtotal: subtotal,
                    tax: taxAmount,
                    discount: discountAmount,
                    additional_discount: additionalDiscount,
                    final_total: finalTotal, // 🔥 هذا الآن يحتوي على المبلغ الصحيح بعد الإضافة والدفعة المقدمة
                    payment_method: paymentMethod,
                    payment_type: paymentType,
                    timestamp: new Date().toISOString(),
                    // معلومات المستخدم الذي أنشأ الفاتورة
                    created_by: window.securityManager ? window.securityManager.getCurrentUsername() : 'unknown',
                    created_by_name: window.securityManager ? window.securityManager.getCurrentUserFullName() : 'غير معروف',
                    created_by_role: window.securityManager && window.securityManager.currentUser ? window.securityManager.currentUser.role : 'unknown',
                    created_at: new Date().toISOString(),
                    // حفظ تفاصيل البيع بالأقساط الكاملة - محدث
                    installment_details: paymentType === 'أقساط' ? {
                        // المبالغ الأساسية
                        original_subtotal: subtotal,
                        original_total: subtotal + taxAmount - discountAmount, // المبلغ قبل الإضافة والدفعة
                        total_amount: extraData.total_amount || (subtotal + taxAmount - discountAmount + (extraData.additional_amount || 0)),
                        additional_amount: extraData.additional_amount || 0,
                        down_payment: extraData.down_payment || 0,
                        remaining_amount: extraData.remaining_amount || 0,
                        
                        // معلومات الأقساط
                        installment_months: extraData.installment_months || 0,
                        monthly_amount: extraData.monthly_amount || 0,
                        start_date: extraData.start_date || null,
                        debt_date: extraData.debt_date || null,
                        
                        // معلومات التحكم المتقدم
                        advanced_control_used: extraData.advanced_control_used || false,
                        custom_values_used: window.customInstallmentValues ? true : false,
                        
                        // معلومات العميل
                        customer_name: extraData.customer_name || '',
                        customer_phone: extraData.customer_phone || '',
                        customer_address: extraData.customer_address || '',
                        
                        // الطابع الزمني
                        created_at: new Date().toISOString(),
                        updated_at: new Date().toISOString()
                    } : null,
                    // معلومات العميل على مستوى الفاتورة (للبيع بالأقساط)
                    customer_name: paymentType === 'أقساط' ? extraData.customer_name : undefined,
                    customer_phone: paymentType === 'أقساط' ? extraData.customer_phone : undefined,
                    customer_address: paymentType === 'أقساط' ? extraData.customer_address : undefined,
                    installment_months: paymentType === 'أقساط' ? extraData.installment_months : undefined,
                    monthly_amount: paymentType === 'أقساط' ? extraData.monthly_amount : undefined,
                    additional_amount: paymentType === 'أقساط' ? extraData.additional_amount : undefined,
                    down_payment: paymentType === 'أقساط' ? extraData.down_payment : undefined,
                    remaining_amount: paymentType === 'أقساط' ? extraData.remaining_amount : undefined,
                    start_date: paymentType === 'أقساط' ? extraData.start_date : undefined,
                    ...extraData
                };

                console.log('📄 بيانات البيع:', saleData);

                if (window.dataSdk) {
                    console.log('💾 حفظ البيع في قاعدة البيانات...');
                    const result = await window.dataSdk.create(saleData);

                    if (result.isOk) {
                        console.log('✅ تم حفظ البيع بنجاح');

                        // مزامنة البيع مع Firestore
                        if (window.syncSaleToFirestore) {
                            const saleWithId = { ...saleData, id: result.id };
                            window.syncSaleToFirestore(saleWithId).catch(e => console.warn('⚠️ فشل مزامنة البيع:', e));
                        }

                        // تحديث المخزون
                        console.log('📦 تحديث المخزون...');
                        await updateProductStock();
                        console.log('✅ تم تحديث المخزون');

                        // إنشاء دين إذا كان الدفع بالأقساط
                        if (paymentType === 'أقساط') {
                            console.log('💳 إنشاء سجل دين...');
                            console.log('=== Creating Debt Record ===');
                            console.log('finalTotal:', finalTotal);
                            console.log('extraData:', extraData);

                            // استخدام البيانات من extraData (تم حسابها في processInstallmentPayment)
                            const totalAmount = parseFloat(extraData.total_amount) || parseFloat(finalTotal) || 0;
                            const monthlyAmount = parseFloat(extraData.monthly_amount) || 0;
                            const installmentMonths = parseInt(extraData.installment_months) || 1;
                            const remainingAmount = parseFloat(extraData.remaining_amount) || totalAmount;
                            const downPayment = parseFloat(extraData.down_payment) || 0;
                            const additionalAmount = parseFloat(extraData.additional_amount) || 0;

                            console.log('Parsed values:');
                            console.log('  totalAmount:', totalAmount);
                            console.log('  monthlyAmount:', monthlyAmount);
                            console.log('  installmentMonths:', installmentMonths);
                            console.log('  remainingAmount:', remainingAmount);
                            console.log('  downPayment:', downPayment);
                            console.log('  additionalAmount:', additionalAmount);

                            // التحقق من صحة البيانات
                            if (totalAmount === 0 || monthlyAmount === 0 || installmentMonths === 0) {
                                console.error('❌ Invalid debt data!');
                                console.error('  totalAmount:', totalAmount);
                                console.error('  monthlyAmount:', monthlyAmount);
                                console.error('  installmentMonths:', installmentMonths);
                                // تم إزالة الإشعار
                                setLoading(false);
                                return false;
                            }

                            // إنشاء جدول الأقساط
                            const installments = [];
                            // استخدام تاريخ بداية الأقساط إذا كان موجوداً، وإلا استخدم التاريخ الحالي
                            const startDate = extraData.start_date ? new Date(extraData.start_date) : new Date();
                            
                            for (let i = 1; i <= installmentMonths; i++) {
                                const dueDate = new Date(startDate);
                                dueDate.setMonth(dueDate.getMonth() + (i - 1));
                                installments.push({
                                    month: i,
                                    amount: monthlyAmount,
                                    due_date: dueDate.toISOString(),
                                    status: 'pending',
                                    paid_date: null,
                                    paid_amount: 0
                                });
                            }

                            const debtData = {
                                type: 'debt',
                                invoice_id: saleData.invoice_id,
                                customer_name: extraData.customer_name || 'غير محدد',
                                customer_phone: extraData.customer_phone || '',
                                customer_address: extraData.customer_address || '',
                                total_amount: totalAmount,
                                final_total: finalTotal, // 🔥 استخدام المبلغ النهائي الصحيح
                                remaining_amount: remainingAmount,
                                paid_amount: downPayment,
                                monthly_amount: monthlyAmount,
                                installment_months: installmentMonths,
                                additional_amount: additionalAmount,
                                down_payment: downPayment,
                                installments: installments,
                                start_date: extraData.start_date || null,
                                due_date: installments[0].due_date,
                                status: 'نشط',
                                timestamp: extraData.debt_date ? new Date(extraData.debt_date).toISOString() : new Date().toISOString(),
                                created_at: extraData.debt_date ? new Date(extraData.debt_date).toISOString() : new Date().toISOString()
                            };

                            console.log('✅ Final debt data to be saved:', debtData);
                            console.log('Installments array:', installments);

                            const savedDebt = await window.dataSdk.create(debtData);
                            console.log('✅ Debt saved successfully:', savedDebt);

                            // مزامنة الدين مع Firestore
                            if (window.syncDebtToFirestore && savedDebt.isOk) {
                                const debtWithId = { ...debtData, id: savedDebt.id };
                                window.syncDebtToFirestore(debtWithId).catch(e => console.warn('⚠️ فشل مزامنة الدين:', e));
                            }

                            console.log('=========================');
                        }

                        console.log('🎉 إظهار رسالة النجاح...');
                        showSuccessMessage('تم إتمام البيع بنجاح!');

                        console.log('🛒 إفراغ السلة...');
                        clearCart();
                        console.log('✅ تم إفراغ السلة');

                        console.log('📊 تحديث الإحصائيات...');
                        updateQuickStats();

                        // حفظ معرف آخر فاتورة تم إنشاؤها للطباعة لاحقاً
                        window.lastSaleInvoiceId = saleData.invoice_id;

                        setLoading(false);
                        console.log('✅ تم إتمام العملية بنجاح');
                        return true;

                    } else {
                        console.error('❌ فشل في حفظ البيع:', result);
                        // تم إزالة الإشعار
                        setLoading(false);
                        return false;
                    }
                } else {
                    console.error('❌ dataSdk غير متوفر');
                    // تم إزالة الإشعار
                    setLoading(false);
                    return false;
                }

            } catch (error) {
                console.error('❌ خطأ في معالجة الدفع:', error);
                // تم إزالة الإشعار
                setLoading(false);
                return false;
            }
        }

        // تحديث مخزون المنتجات
        async function updateProductStock() {
            for (const item of cart) {
                const product = products.find(p => p.product_id === item.product_id);
                if (product && window.dataSdk && product.id) {
                    const newQuantity = (product.stock_quantity || product.product_quantity || 0) - item.quantity;
                    await window.dataSdk.update(product.id, { 
                        stock_quantity: newQuantity,
                        product_quantity: newQuantity
                    });
                    
                    // تحديث في المصفوفة المحلية أيضاً
                    product.stock_quantity = newQuantity;
                    product.product_quantity = newQuantity;
                }
            }
            
            // 🔥 فحص فوري للإشعارات بعد تحديث المخزون
            if (window.NotificationsSystemV4 && window.NotificationsSystemV4.engine) {
                setTimeout(() => {
                    console.log('🔍 فحص فوري للإشعارات بعد البيع...');
                    window.NotificationsSystemV4.engine.performCheck();
                }, 1000);
            }
        }

        // حذف منتج
        async function deleteProduct(productId) {
            // فحص الصلاحية
            if (!window.securityManager.checkPermission('products_delete')) {
                return;
            }
            
            const product = products.find(p => p.product_id === productId);
            
            if (!product) {
                // تم إزالة الإشعار
                return;
            }
            
            // تأكيد الحذف
            if (!confirm(`هل أنت متأكد من حذف المنتج: ${product.product_name}؟`)) {
                return;
            }
            
            if (window.dataSdk && product.id) {
                const result = await window.dataSdk.delete(product.id);
                if (result.isOk) {
                    // تسجيل العملية
                    window.securityManager.logOperation('حذف منتج', {
                        productId: product.product_id,
                        productName: product.product_name,
                        barcode: product.product_barcode
                    });
                    
                    // تم إزالة الإشعار
                    updateQuickStats();
                } else {
                    // تم إزالة الإشعار
                }
            } else {
                // تم إزالة الإشعار
            }
        }

        // إظهار تفاصيل المنتج
        function showProductDetails(productId) {
            const product = products.find(p => p.product_id === productId);
            const category = categories.find(c => c.category_id === product.product_category);
            
            if (product) {
                const content = `
                    <div class="detail-row">
                        <span class="detail-label">اسم المنتج:</span>
                        <span class="detail-value">${product.product_name}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">الباركود:</span>
                        <span class="detail-value">${product.product_barcode || 'غير محدد'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">التصنيف:</span>
                        <span class="detail-value">${category ? category.category_name : 'غير محدد'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">المورد:</span>
                        <span class="detail-value">${product.supplier || 'غير محدد'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">سعر التكلفة (مفرد):</span>
                        <span class="detail-value">${formatCurrency(product.product_cost_retail)}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">سعر البيع (مفرد):</span>
                        <span class="detail-value">${formatCurrency(product.product_price_retail)}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">الكمية الحالية:</span>
                        <span class="detail-value">${product.stock_quantity}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">الحد الأدنى للمخزون:</span>
                        <span class="detail-value">${product.min_stock}</span>
                    </div>
                `;
                
                document.getElementById('productDetailsContent').innerHTML = content;
                showModal('productDetailsModal');
            }
        }

        // Helper functions
        function copyToClipboard(text) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(() => {
                    // تم إزالة الإشعار
                }).catch(err => {
                    console.error('فشل النسخ:', err);
                });
            } else {
                // طريقة بديلة للمتصفحات القديمة
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand('copy');
                    // تم إزالة الإشعار
                } catch (err) {
                    console.error('فشل النسخ:', err);
                }
                document.body.removeChild(textarea);
            }
        }

        function formatCurrency(amount) {
            // التعامل مع القيم غير الصحيحة
            const num = parseFloat(amount) || 0;
            // Always show numbers in English
            return toEnglishDigits(new Intl.NumberFormat('en-US', {
                style: 'decimal',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(num)) + ' دينار';
        }

        function updateElement(id, value) {
            const element = document.getElementById(id);
            if (element) {
                // Always show numbers in English
                if (typeof value === 'number' || (typeof value === 'string' && /[0-9٠-٩]/.test(value))) {
                    element.textContent = toEnglishDigits(value);
                } else {
                    element.textContent = value;
                }
            }
        }

        function getCurrentTaxRate() {
            return document.getElementById('taxRate')?.textContent || '0';
        }

        function setLoading(loading) {
            isLoading = loading;
        }

        function clearCart() {
            console.log('🧹 إفراغ السلة...');
            console.log('المنتجات قبل الإفراغ:', cart.length);
            
            cart = [];
            
            console.log('المنتجات بعد الإفراغ:', cart.length);
            console.log('📋 تحديث عرض السلة...');
            
            renderCart();
            updateCartSummary();
            updateCartCount();
            
            // تعطيل زر إتمام البيع
            const checkoutBtn = document.getElementById('checkoutBtn');
            if (checkoutBtn) {
                checkoutBtn.disabled = true;
                console.log('🔒 تم تعطيل زر إتمام البيع');
            }
            
            // إعادة تعيين الخصم
            const discountInput = document.getElementById('discountInput');
            if (discountInput) {
                discountInput.value = '0';
            }
            
            console.log('✅ تم إفراغ السلة بنجاح');
        }

        function showSuccessMessage(message) {
            const successMsg = document.getElementById('successMessage');
            if (successMsg) {
                successMsg.style.display = 'block';
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 3000);
            }
        }

        function showWelcomeMessage() {
            const welcomeHTML = `
                <div class="welcome-overlay">
                    <div class="welcome-card">
                        <div class="welcome-header">
                            <h2>🎉 أهلاً بك في نظام نقاط البيع</h2>
                        </div>
                        <div class="welcome-body">
                            <p>✨ نظام متكامل لإدارة المبيعات والمخزون</p>
                            <div class="welcome-features">
                                <div class="welcome-feature">
                                    <span>📦</span>
                                    <p>إدارة المنتجات والمخزون</p>
                                </div>
                                <div class="welcome-feature">
                                    <span>💰</span>
                                    <p>متابعة المبيعات والفواتير</p>
                                </div>
                                <div class="welcome-feature">
                                    <span>👥</span>
                                    <p>إدارة الزبائن والديون</p>
                                </div>
                                <div class="welcome-feature">
                                    <span>📊</span>
                                    <p>تقارير مفصلة وإحصائيات</p>
                                </div>
                                <div class="welcome-feature">
                                    <span>🎨</span>
                                    <p>12 ثيم مع تخصيص الألوان</p>
                                </div>
                                <div class="welcome-feature">
                                    <span>🌐</span>
                                    <p>دعم ثلاث لغات</p>
                                </div>
                            </div>
                            <p class="welcome-note">💡 تم تحميل بيانات تجريبية للبدء</p>
                            <p class="welcome-hint">يمكنك حذفها من الإعدادات → إعادة ضبط المصنع</p>
                        </div>
                        <div class="welcome-footer">
                            <button class="welcome-btn" onclick="closeWelcome()">ابدأ الآن</button>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', welcomeHTML);
        }
        
        function closeWelcome() {
            const overlay = document.querySelector('.welcome-overlay');
            if (overlay) {
                overlay.classList.add('fade-out');
                setTimeout(() => overlay.remove(), 300);
            }
        }
        
        // معالجة البحث الشامل
        function handleGlobalSearch(event) {
            const searchTerm = event.target.value.trim().toLowerCase();
            const searchResults = document.getElementById('searchResults');
            
            if (searchTerm.length === 0) {
                searchResults.classList.remove('active');
                return;
            }
            
            if (searchTerm.length < 2) {
                return;
            }
            
            // البحث في جميع البيانات
            const results = {
                products: [],
                sales: [],
                debts: [],
                categories: []
            };
            
            // البحث في المنتجات
            products.forEach(product => {
                if ((product.name && product.name.toLowerCase().includes(searchTerm)) ||
                    (product.barcode && product.barcode.toLowerCase().includes(searchTerm)) ||
                    (product.supplier && product.supplier.toLowerCase().includes(searchTerm))) {
                    results.products.push(product);
                }
            });
            
            // البحث في الفواتير
            salesData.forEach(sale => {
                if ((sale.invoice_id && sale.invoice_id.toLowerCase().includes(searchTerm)) ||
                    (sale.customer_name && sale.customer_name.toLowerCase().includes(searchTerm)) ||
                    (sale.payment_method && sale.payment_method.toLowerCase().includes(searchTerm))) {
                    results.sales.push(sale);
                }
            });
            
            // البحث في الديون
            debtsData.forEach(debt => {
                if ((debt.customer_name && debt.customer_name.toLowerCase().includes(searchTerm)) ||
                    (debt.customer_phone && debt.customer_phone.toLowerCase().includes(searchTerm)) ||
                    (debt.customer_address && debt.customer_address.toLowerCase().includes(searchTerm))) {
                    results.debts.push(debt);
                }
            });
            
            // البحث في التصنيفات
            categories.forEach(category => {
                if (category.name && category.name.toLowerCase().includes(searchTerm)) {
                    results.categories.push(category);
                }
            });
            
            // عرض النتائج
            renderSearchResults(results, searchTerm);
        }
        
        // عرض نتائج البحث
        function renderSearchResults(results, searchTerm) {
            const searchResults = document.getElementById('searchResults');
            let html = '';
            
            const totalResults = results.products.length + results.sales.length + 
                               results.debts.length + results.categories.length;
            
            if (totalResults === 0) {
                html = `
                    <div class="search-empty">
                        <i class="fas fa-search-minus"></i>
                        <p>لا توجد نتائج للبحث عن "<strong>${searchTerm}</strong>"</p>
                        <small style="opacity: 0.7; margin-top: 0.5rem; display: block;">جرب كلمات مختلفة أو تأكد من الإملاء</small>
                    </div>
                `;
            } else {
                // عنوان النتائج
                html += `
                    <div class="search-header">
                        <span><i class="fas fa-search"></i> نتائج البحث</span>
                        <span class="search-total">${totalResults} نتيجة</span>
                    </div>
                `;
                
                // نتائج المنتجات
                if (results.products.length > 0) {
                    html += '<div class="search-category">';
                    html += `
                        <div class="search-category-title">
                            <i class="fas fa-box"></i>
                            <span>المنتجات</span>
                            <span class="count">${results.products.length}</span>
                        </div>
                    `;
                    results.products.slice(0, 5).forEach(product => {
                        const stockStatus = product.stock_quantity <= product.min_stock ? 
                            '<span class="search-result-badge" style="background: #fee; color: #c33;">مخزون منخفض</span>' : '';
                        html += `
                            <div class="search-result-item" onclick="goToProductDetails('${product.product_id}')">
                                <div class="search-result-icon">
                                    <i class="fas fa-box"></i>
                                </div>
                                <div class="search-result-info">
                                    <div class="search-result-title">${product.name}</div>
                                    <div class="search-result-subtitle">
                                        <span><i class="fas fa-barcode"></i> ${product.barcode || 'بدون باركود'}</span>
                                        <span><i class="fas fa-tag"></i> ${formatCurrency(product.selling_price)}</span>
                                        <span><i class="fas fa-boxes"></i> ${product.stock_quantity} قطعة</span>
                                        ${stockStatus}
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                    if (results.products.length > 5) {
                        html += `<div style="padding: 0.75rem 1.25rem; text-align: center; color: var(--theme-text-secondary); font-size: 0.85rem;">و ${results.products.length - 5} نتائج أخرى...</div>`;
                    }
                    html += '</div>';
                }
                
                // نتائج الفواتير
                if (results.sales.length > 0) {
                    html += '<div class="search-category">';
                    html += `
                        <div class="search-category-title">
                            <i class="fas fa-receipt"></i>
                            <span>الفواتير</span>
                            <span class="count">${results.sales.length}</span>
                        </div>
                    `;
                    results.sales.slice(0, 5).forEach(sale => {
                        const paymentBadge = sale.payment_method === 'نقدي' ? 
                            '<span class="search-result-badge" style="background: #e6ffe6; color: #2d7a2d;">نقدي</span>' : 
                            '<span class="search-result-badge" style="background: #fff4e6; color: #b36200;">قسط</span>';
                        html += `
                            <div class="search-result-item" onclick="goToInvoiceDetails('${sale.sale_id}')">
                                <div class="search-result-icon" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">
                                    <i class="fas fa-receipt"></i>
                                </div>
                                <div class="search-result-info">
                                    <div class="search-result-title">فاتورة #${sale.invoice_id || sale.sale_id.substring(0, 8)}</div>
                                    <div class="search-result-subtitle">
                                        <span><i class="fas fa-user"></i> ${sale.customer_name || 'زبون عام'}</span>
                                        <span><i class="fas fa-money-bill"></i> ${formatCurrency(sale.total_amount)}</span>
                                        <span><i class="fas fa-calendar"></i> ${new Date(sale.sale_date).toLocaleDateString('ar-EG')}</span>
                                        ${paymentBadge}
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                    if (results.sales.length > 5) {
                        html += `<div style="padding: 0.75rem 1.25rem; text-align: center; color: var(--theme-text-secondary); font-size: 0.85rem;">و ${results.sales.length - 5} فاتورة أخرى...</div>`;
                    }
                    html += '</div>';
                }
                
                // نتائج الديون
                if (results.debts.length > 0) {
                    html += '<div class="search-category">';
                    html += `
                        <div class="search-category-title">
                            <i class="fas fa-money-bill-wave"></i>
                            <span>الديون</span>
                            <span class="count">${results.debts.length}</span>
                        </div>
                    `;
                    results.debts.slice(0, 5).forEach(debt => {
                        const isOverdue = debt.due_date && new Date(debt.due_date) < new Date();
                        const statusBadge = debt.remaining_amount <= 0 ? 
                            '<span class="search-result-badge" style="background: #e6ffe6; color: #2d7a2d;">مسدد</span>' :
                            isOverdue ? 
                            '<span class="search-result-badge" style="background: #ffe6e6; color: #c33;">متأخر</span>' :
                            '<span class="search-result-badge" style="background: #fff4e6; color: #b36200;">نشط</span>';
                        html += `
                            <div class="search-result-item" onclick="goToDebtDetails('${debt.debt_id}')">
                                <div class="search-result-icon" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">
                                    <i class="fas fa-money-bill-wave"></i>
                                </div>
                                <div class="search-result-info">
                                    <div class="search-result-title">${debt.customer_name}</div>
                                    <div class="search-result-subtitle">
                                        <span><i class="fas fa-phone"></i> ${debt.customer_phone || 'بدون هاتف'}</span>
                                        <span><i class="fas fa-dollar-sign"></i> ${formatCurrency(debt.remaining_amount)} متبقي</span>
                                        ${statusBadge}
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                    if (results.debts.length > 5) {
                        html += `<div style="padding: 0.75rem 1.25rem; text-align: center; color: var(--theme-text-secondary); font-size: 0.85rem;">و ${results.debts.length - 5} دين آخر...</div>`;
                    }
                    html += '</div>';
                }
                
                // نتائج التصنيفات
                if (results.categories.length > 0) {
                    html += '<div class="search-category">';
                    html += `
                        <div class="search-category-title">
                            <i class="fas fa-tags"></i>
                            <span>التصنيفات</span>
                            <span class="count">${results.categories.length}</span>
                        </div>
                    `;
                    results.categories.slice(0, 3).forEach(category => {
                        const categoryProducts = products.filter(p => p.category_id === category.category_id);
                        html += `
                            <div class="search-result-item" onclick="goToCategory('${category.category_id}')">
                                <div class="search-result-icon" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">
                                    <i class="${category.icon || 'fas fa-tag'}"></i>
                                </div>
                                <div class="search-result-info">
                                    <div class="search-result-title">${category.name}</div>
                                    <div class="search-result-subtitle">
                                        <span><i class="fas fa-box"></i> ${categoryProducts.length} منتج</span>
                                        <span>${category.description || 'تصنيف منتجات'}</span>
                                    </div>
                                </div>
                            </div>
                        `;
                    });
                    if (results.categories.length > 3) {
                        html += `<div style="padding: 0.75rem 1.25rem; text-align: center; color: var(--theme-text-secondary); font-size: 0.85rem;">و ${results.categories.length - 3} تصنيفات أخرى...</div>`;
                    }
                    html += '</div>';
                }
            }
            
            searchResults.innerHTML = html;
            searchResults.classList.add('active');
        }
        
        // الانتقال إلى تفاصيل المنتج من نتائج البحث
        function goToProductDetails(productId) {
            hideSearchResults();
            navigateTo('products');
            setTimeout(() => showProductDetails(productId), 100);
        }
        
        // الانتقال إلى تفاصيل الفاتورة من نتائج البحث
        function goToInvoiceDetails(saleId) {
            hideSearchResults();
            navigateTo('invoices');
            setTimeout(() => showInvoiceDetails(saleId), 100);
        }
        
        // الانتقال إلى تفاصيل الدين من نتائج البحث
        function goToDebtDetails(debtId) {
            hideSearchResults();
            navigateTo('debts');
            setTimeout(() => showDebtDetails(debtId), 100);
        }
        
        // الانتقال إلى التصنيف من نتائج البحث
        function goToCategory(categoryId) {
            hideSearchResults();
            navigateTo('pos');
            currentCategory = categoryId;
            renderProducts();
            // تحديث الفلتر النشط
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.category === categoryId) {
                    btn.classList.add('active');
                }
            });
        }
        
        // إخفاء نتائج البحث
        function hideSearchResults() {
            const searchResults = document.getElementById('searchResults');
            searchResults.classList.remove('active');
            document.getElementById('globalSearchInput').value = '';
        }


        function updateInvoicePreview(config) {
            if (!config) return; // حماية من config فارغ
            
            const elements = {
                'previewStoreName': config.store_name,
                'previewStoreAddress': config.store_address,
                'previewStorePhone': config.store_phone
            };
            
            Object.entries(elements).forEach(([id, value]) => {
                updateElement(id, value);
            });
        }

        // عرض تفاصيل الفاتورة
        function showInvoiceDetails(invoiceId) {
            const sale = salesData.find(s => s.invoice_id === invoiceId);
            if (!sale) {
                // تم إزالة الإشعار
                return;
            }
            
            const content = document.getElementById('invoiceDetailsContent');
            if (!content) return;
            
            // التأكد من أن items مصفوفة
            let items = [];
            if (sale.items && Array.isArray(sale.items)) {
                items = sale.items;
            } else if (typeof sale.items === 'string') {
                try {
                    items = JSON.parse(sale.items);
                } catch (e) {
                    items = [];
                }
            }
            
            const itemsHTML = items.length > 0 ? items.map(item => {
                const price = item.product_price || item.price || 0;
                const quantity = item.quantity || 1;
                const total = quantity * price;
                return `
                <tr>
                    <td>${item.product_name || item.name || 'منتج'}</td>
                    <td style="text-align: center;">${quantity}</td>
                    <td>${formatCurrency(price)}</td>
                    <td style="font-weight: bold; color: var(--primary-color);">${formatCurrency(total)}</td>
                </tr>
                `;
            }).join('') : '<tr><td colspan="4" style="text-align: center; padding: 20px; color: var(--theme-text-secondary);">لا توجد منتجات</td></tr>';
            
            // استخراج تفاصيل الأقساط
            const installmentDetails = sale.installment_details || {};
            const originalSubtotal = installmentDetails.original_subtotal || sale.subtotal || 0;
            const additionalAmount = installmentDetails.additional_amount || sale.additional_amount || 0;
            const downPayment = installmentDetails.down_payment || sale.down_payment || 0;
            const remainingAmount = installmentDetails.remaining_amount || sale.remaining_amount || 0;
            const monthlyAmount = installmentDetails.monthly_amount || sale.monthly_amount || 0;
            const installmentMonths = installmentDetails.installment_months || sale.installment_months || 0;
            const startDate = installmentDetails.start_date || sale.start_date || null;
            const advancedControlUsed = installmentDetails.advanced_control_used || installmentDetails.custom_values_used || false;
            
            content.innerHTML = `
                <div style="padding: 20px;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
                        <div style="background: var(--theme-bg-secondary); padding: 15px; border-radius: 8px;">
                            <div style="color: var(--theme-text-secondary); font-size: 14px; margin-bottom: 5px;">رقم الفاتورة</div>
                            <div style="font-size: 18px; font-weight: bold;">${sale.invoice_id}</div>
                        </div>
                        <div style="background: var(--theme-bg-secondary); padding: 15px; border-radius: 8px;">
                            <div style="color: var(--theme-text-secondary); font-size: 14px; margin-bottom: 5px;">التاريخ</div>
                            <div style="font-size: 16px; font-weight: 500;">${new Date(sale.timestamp).toLocaleString('en-US')}</div>
                        </div>
                        <div style="background: var(--theme-bg-secondary); padding: 15px; border-radius: 8px;">
                            <div style="color: var(--theme-text-secondary); font-size: 14px; margin-bottom: 5px;">اسم العميل</div>
                            <div style="font-size: 16px; font-weight: 500;">${sale.customer_name || 'عميل نقدي'}</div>
                        </div>
                        <div style="background: var(--theme-bg-secondary); padding: 15px; border-radius: 8px;">
                            <div style="color: var(--theme-text-secondary); font-size: 14px; margin-bottom: 5px;">طريقة الدفع</div>
                            <div style="font-size: 16px; font-weight: 500;">
                                <i class="fas fa-${sale.payment_method === 'نقدي' ? 'money-bill-wave' : 'credit-card'}"></i>
                                ${sale.payment_type || sale.payment_method}
                            </div>
                        </div>
                    </div>
                    
                    ${sale.customer_phone ? `
                    <div style="background: var(--theme-bg-secondary); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                        <div style="color: var(--theme-text-secondary); font-size: 14px; margin-bottom: 5px;">رقم الهاتف</div>
                        <div style="font-size: 16px; font-weight: 500;">${sale.customer_phone}</div>
                    </div>
                    ` : ''}
                    
                    ${sale.customer_address ? `
                    <div style="background: var(--theme-bg-secondary); padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                        <div style="color: var(--theme-text-secondary); font-size: 14px; margin-bottom: 5px;">العنوان</div>
                        <div style="font-size: 16px; font-weight: 500;">${sale.customer_address}</div>
                    </div>
                    ` : ''}
                    
                    ${sale.payment_type === 'أقساط' ? `
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                        <h4 style="margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px;">
                            <i class="fas fa-calendar-alt"></i> تفاصيل الأقساط الكاملة
                        </h4>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px;">
                            <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 8px;">
                                <div style="font-size: 12px; opacity: 0.9; margin-bottom: 4px;">💵 المبلغ الأصلي</div>
                                <div style="font-size: 18px; font-weight: bold;">${formatCurrency(originalSubtotal)}</div>
                            </div>
                            ${additionalAmount > 0 ? `
                            <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 8px;">
                                <div style="font-size: 12px; opacity: 0.9; margin-bottom: 4px;">➕ مبلغ إضافي</div>
                                <div style="font-size: 18px; font-weight: bold;">${formatCurrency(additionalAmount)}</div>
                            </div>
                            ` : ''}
                            ${downPayment > 0 ? `
                            <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 8px;">
                                <div style="font-size: 12px; opacity: 0.9; margin-bottom: 4px;">💵 دفعة مقدمة</div>
                                <div style="font-size: 18px; font-weight: bold;">${formatCurrency(downPayment)}</div>
                            </div>
                            ` : ''}
                            <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 8px;">
                                <div style="font-size: 12px; opacity: 0.9; margin-bottom: 4px;">💳 المبلغ المتبقي</div>
                                <div style="font-size: 18px; font-weight: bold;">${formatCurrency(remainingAmount)}</div>
                            </div>
                            <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 8px;">
                                <div style="font-size: 12px; opacity: 0.9; margin-bottom: 4px;">📅 عدد الأشهر</div>
                                <div style="font-size: 18px; font-weight: bold;">${installmentMonths} شهر</div>
                            </div>
                            <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 8px;">
                                <div style="font-size: 12px; opacity: 0.9; margin-bottom: 4px;">📊 القسط الشهري</div>
                                <div style="font-size: 18px; font-weight: bold;">${formatCurrency(monthlyAmount)}</div>
                            </div>
                            ${startDate ? `
                            <div style="background: rgba(255,255,255,0.2); padding: 12px; border-radius: 8px;">
                                <div style="font-size: 12px; opacity: 0.9; margin-bottom: 4px;">📆 تاريخ البداية</div>
                                <div style="font-size: 16px; font-weight: bold;">${new Date(startDate).toLocaleDateString('en-GB')}</div>
                            </div>
                            ` : ''}
                            ${advancedControlUsed ? `
                            <div style="background: rgba(139, 92, 246, 0.3); padding: 12px; border-radius: 8px; grid-column: 1/-1; text-align: center;">
                                <div style="font-size: 14px; font-weight: bold;"><i class="fas fa-cog"></i> تم استخدام التحكم المتقدم</div>
                            </div>
                            ` : ''}
                        </div>
                    </div>
                    ` : ''}
                    
                    <h4 style="margin: 20px 0 10px 0; color: var(--primary-color);"><i class="fas fa-shopping-cart"></i> المنتجات</h4>
                    <div style="overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr style="background: var(--theme-bg-secondary);">
                                    <th style="padding: 10px; text-align: right; border-bottom: 2px solid var(--primary-color);">المنتج</th>
                                    <th style="padding: 10px; text-align: center; border-bottom: 2px solid var(--primary-color);">الكمية</th>
                                    <th style="padding: 10px; text-align: right; border-bottom: 2px solid var(--primary-color);">السعر</th>
                                    <th style="padding: 10px; text-align: right; border-bottom: 2px solid var(--primary-color);">الإجمالي</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${itemsHTML || '<tr><td colspan="4" style="text-align: center; padding: 20px; color: var(--theme-text-secondary);">لا توجد منتجات</td></tr>'}
                            </tbody>
                        </table>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background: var(--theme-bg-secondary); border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <span>المجموع الفرعي:</span>
                            <span style="font-weight: bold;">${formatCurrency(sale.subtotal || 0)}</span>
                        </div>
                        ${additionalAmount > 0 && sale.payment_type === 'أقساط' ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px; color: #be123c;">
                            <span>مبلغ إضافي:</span>
                            <span style="font-weight: bold;">+${formatCurrency(additionalAmount)}</span>
                        </div>
                        ` : ''}
                        ${downPayment > 0 && sale.payment_type === 'أقساط' ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px; color: var(--success-color);">
                            <span>دفعة مقدمة:</span>
                            <span style="font-weight: bold;">-${formatCurrency(downPayment)}</span>
                        </div>
                        ` : ''}
                        ${(sale.discount_amount || sale.discount) ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px; color: var(--success-color);">
                            <span>الخصم:</span>
                            <span style="font-weight: bold;">-${formatCurrency(sale.discount_amount || sale.discount || 0)}</span>
                        </div>
                        ` : ''}
                        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                            <span>الضريبة:</span>
                            <span style="font-weight: bold;">${formatCurrency(sale.tax_amount || sale.tax || 0)}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding-top: 10px; border-top: 2px solid var(--primary-color); font-size: 20px; font-weight: bold; color: var(--primary-color);">
                            <span>الإجمالي النهائي:</span>
                            <span>${formatCurrency(sale.final_total || 0)}</span>
                        </div>
                    </div>
                    
                    <div style="margin-top: 20px; text-align: center;">
                        <button class="btn btn-primary" onclick="printInvoiceFromDetails('${sale.invoice_id}', ${sale.payment_type === 'أقساط' ? 'true' : 'false'})">
                            <i class="fas fa-print"></i> طباعة الفاتورة
                        </button>
                        <button class="btn btn-secondary" onclick="closeModal('invoiceDetailsModal')" style="margin-right: 10px;">
                            <i class="fas fa-times"></i> إغلاق
                        </button>
                    </div>
                </div>
            `;
            
            showModal('invoiceDetailsModal');
        }
        
        // دالة طباعة الفاتورة من صفحة التفاصيل
        function printInvoiceFromDetails(invoiceId, isInstallment) {
            console.log('🖨️ محاولة الطباعة من التفاصيل:', invoiceId, 'أقساط:', isInstallment);
            if (isInstallment) {
                let sale = null;
                if (typeof salesData !== 'undefined' && Array.isArray(salesData)) {
                    sale = salesData.find(s => s.invoice_id === invoiceId);
                }
                // جلب من window.dataSdk إذا لم توجد في salesData
                if (!sale && window.dataSdk && typeof window.dataSdk.getAll === 'function') {
                    const allSales = window.dataSdk.getAll();
                    sale = allSales.find(s => s.invoice_id === invoiceId);
                }
                if (!sale) {
                    console.error('❌ لم يتم العثور على الفاتورة:', invoiceId);
                    // تم إزالة الإشعار
                    return;
                }
                console.log('✅ تم العثور على فاتورة الأقساط:', sale);
                printInstallmentInvoice(invoiceId, true, sale); // طباعة صامتة
            } else {
                console.log('✅ طباعة فاتورة نقدية:', invoiceId);
                printInvoice(invoiceId, true); // طباعة صامتة
            }
        }

        // ========================================
        // نظام إدارة الطباعة المتقدم
        // ========================================

        // إعدادات الطابعة الافتراضية
        const defaultPrinterSettings = {
            printerType: 'default',
            printMode: 'preview',
            paperSize: '80mm',
            storeTitleSize: 24,
            storeInfoSize: 14,
            invoiceTextSize: 13,
            tableTextSize: 12,
            totalTextSize: 16,
            footerTextSize: 11,
            lineHeight: 1.4,
            sidePadding: 15,
            topBottomPadding: 15,
            borderStyle: 'dashed',
            borderWidth: 1,
            titleAlign: 'center',
            showLogo: false,
            showDateTime: true,
            showInvoiceNumber: true,
            showProductsTable: true,
            showFooter: true,
            customFooter: 'شكراً لزيارتكم\nنتطلع لخدمتكم مرة أخرى'
        };

        // تحميل إعدادات الطابعة عند بدء التطبيق
        function loadPrinterSettings() {
            const saved = localStorage.getItem('printerSettings');
            const settings = saved ? JSON.parse(saved) : defaultPrinterSettings;
            
            // تطبيق الإعدادات على العناصر
            if (document.getElementById('printerType')) {
                document.getElementById('printerType').value = settings.printerType || 'default';
                document.getElementById('paperSize').value = settings.paperSize || '80mm';
                
                // إعدادات الخطوط
                document.getElementById('storeTitleSize').value = settings.storeTitleSize || 24;
                document.getElementById('storeTitleSizeValue').textContent = settings.storeTitleSize || 24;
                
                document.getElementById('storeInfoSize').value = settings.storeInfoSize || 14;
                document.getElementById('storeInfoSizeValue').textContent = settings.storeInfoSize || 14;
                
                document.getElementById('invoiceTextSize').value = settings.invoiceTextSize || 13;
                document.getElementById('invoiceTextSizeValue').textContent = settings.invoiceTextSize || 13;
                
                document.getElementById('tableTextSize').value = settings.tableTextSize || 12;
                document.getElementById('tableTextSizeValue').textContent = settings.tableTextSize || 12;
                
                document.getElementById('totalTextSize').value = settings.totalTextSize || 16;
                document.getElementById('totalTextSizeValue').textContent = settings.totalTextSize || 16;
                
                document.getElementById('footerTextSize').value = settings.footerTextSize || 11;
                document.getElementById('footerTextSizeValue').textContent = settings.footerTextSize || 11;
                
                // إعدادات التنسيق
                document.getElementById('lineHeight').value = settings.lineHeight || 1.4;
                document.getElementById('lineHeightValue').textContent = settings.lineHeight || 1.4;
                
                document.getElementById('sidePadding').value = settings.sidePadding || 15;
                document.getElementById('sidePaddingValue').textContent = settings.sidePadding || 15;
                
                document.getElementById('topBottomPadding').value = settings.topBottomPadding || 15;
                document.getElementById('topBottomPaddingValue').textContent = settings.topBottomPadding || 15;
                
                document.getElementById('borderStyle').value = settings.borderStyle || 'dashed';
                document.getElementById('borderWidth').value = settings.borderWidth || 1;
                document.getElementById('borderWidthValue').textContent = settings.borderWidth || 1;
                
                document.getElementById('titleAlign').value = settings.titleAlign || 'center';
                
                // الخيارات الإضافية
                document.getElementById('showLogo').checked = settings.showLogo || false;
                document.getElementById('showDateTime').checked = settings.showDateTime !== false;
                document.getElementById('showInvoiceNumber').checked = settings.showInvoiceNumber !== false;
                document.getElementById('showProductsTable').checked = settings.showProductsTable !== false;
                document.getElementById('showFooter').checked = settings.showFooter !== false;
                document.getElementById('customFooter').value = settings.customFooter || '';
                
                // وضع الطباعة
                const printMode = settings.printMode || 'preview';
                document.querySelector(`input[name="printMode"][value="${printMode}"]`).checked = true;
                
                // تحديث إحصائيات الطابعة
                updatePrinterStats();
            }
            
            return settings;
        }

        // حفظ إعدادات الطابعة
        function savePrinterSettings() {
            const settings = {
                printerType: document.getElementById('printerType').value,
                printMode: document.querySelector('input[name="printMode"]:checked').value,
                paperSize: document.getElementById('paperSize').value,
                storeTitleSize: parseInt(document.getElementById('storeTitleSize').value),
                storeInfoSize: parseInt(document.getElementById('storeInfoSize').value),
                invoiceTextSize: parseInt(document.getElementById('invoiceTextSize').value),
                tableTextSize: parseInt(document.getElementById('tableTextSize').value),
                totalTextSize: parseInt(document.getElementById('totalTextSize').value),
                footerTextSize: parseInt(document.getElementById('footerTextSize').value),
                lineHeight: parseFloat(document.getElementById('lineHeight').value),
                sidePadding: parseInt(document.getElementById('sidePadding').value),
                topBottomPadding: parseInt(document.getElementById('topBottomPadding').value),
                borderStyle: document.getElementById('borderStyle').value,
                borderWidth: parseInt(document.getElementById('borderWidth').value),
                titleAlign: document.getElementById('titleAlign').value,
                showLogo: document.getElementById('showLogo').checked,
                showDateTime: document.getElementById('showDateTime').checked,
                showInvoiceNumber: document.getElementById('showInvoiceNumber').checked,
                showProductsTable: document.getElementById('showProductsTable').checked,
                showFooter: document.getElementById('showFooter').checked,
                customFooter: document.getElementById('customFooter').value
            };
            
            localStorage.setItem('printerSettings', JSON.stringify(settings));
            // تم إزالة الإشعار
            updatePrinterStats();
        }

        // استعادة الإعدادات الافتراضية
        function resetPrinterSettings() {
            if (confirm('هل أنت متأكد من استعادة الإعدادات الافتراضية؟')) {
                localStorage.setItem('printerSettings', JSON.stringify(defaultPrinterSettings));
                loadPrinterSettings();
                updatePreview();
                // تم إزالة الإشعار
            }
        }

        // تحديث إحصائيات الطابعة
        function updatePrinterStats() {
            const settings = JSON.parse(localStorage.getItem('printerSettings') || '{}');
            const printerTypeNames = {
                'default': 'عادية',
                'thermal': 'حرارية 80mm',
                'thermal-58': 'حرارية 58mm'
            };
            
            if (document.getElementById('activePrinterType')) {
                document.getElementById('activePrinterType').textContent = 
                    printerTypeNames[settings.printerType] || 'عادية';
            }
            if (document.getElementById('activePaperSize')) {
                document.getElementById('activePaperSize').textContent = settings.paperSize || '80mm';
            }
        }

        // تحديث المعاينة المباشرة
        function updatePreview() {
            const settings = {
                printerType: document.getElementById('printerType')?.value || 'default',
                paperSize: document.getElementById('paperSize')?.value || '80mm',
                storeTitleSize: parseInt(document.getElementById('storeTitleSize')?.value || 24),
                storeInfoSize: parseInt(document.getElementById('storeInfoSize')?.value || 14),
                invoiceTextSize: parseInt(document.getElementById('invoiceTextSize')?.value || 13),
                tableTextSize: parseInt(document.getElementById('tableTextSize')?.value || 12),
                totalTextSize: parseInt(document.getElementById('totalTextSize')?.value || 16),
                footerTextSize: parseInt(document.getElementById('footerTextSize')?.value || 11),
                lineHeight: parseFloat(document.getElementById('lineHeight')?.value || 1.4),
                sidePadding: parseInt(document.getElementById('sidePadding')?.value || 15),
                topBottomPadding: parseInt(document.getElementById('topBottomPadding')?.value || 15),
                borderStyle: document.getElementById('borderStyle')?.value || 'dashed',
                borderWidth: parseInt(document.getElementById('borderWidth')?.value || 1),
                titleAlign: document.getElementById('titleAlign')?.value || 'center',
                showLogo: document.getElementById('showLogo')?.checked || false,
                showDateTime: document.getElementById('showDateTime')?.checked !== false,
                showInvoiceNumber: document.getElementById('showInvoiceNumber')?.checked !== false,
                showProductsTable: document.getElementById('showProductsTable')?.checked !== false,
                showFooter: document.getElementById('showFooter')?.checked !== false,
                customFooter: document.getElementById('customFooter')?.value || ''
            };
            
            const preview = document.getElementById('receiptPreview');
            if (!preview) return;
            
            // تحديد عرض الإيصال بناءً على حجم الورق
            let receiptWidth = '80mm';
            if (settings.paperSize === '58mm' || settings.printerType === 'thermal-58') {
                receiptWidth = '58mm';
            } else if (settings.paperSize === 'A4') {
                receiptWidth = '210mm';
            } else if (settings.paperSize === 'A5') {
                receiptWidth = '148mm';
            }
            
            // الحصول على معلومات المتجر
            const storeName = localStorage.getItem('storeName') || 'متجر التقنية الحديثة';
            const storeAddress = localStorage.getItem('storeAddress') || 'بغداد - المنصور';
            const storePhone = localStorage.getItem('storePhone') || '07803092185';
            
            // تاريخ ووقت الفاتورة
            const now = new Date();
            const dateStr = now.toLocaleDateString('en-GB');
            const timeStr = now.toLocaleTimeString('ar-IQ', { hour: '2-digit', minute: '2-digit' });
            
            // بناء HTML الإيصال
            let receiptHTML = `
                <div style="
                    width: ${receiptWidth};
                    padding: ${settings.topBottomPadding}px ${settings.sidePadding}px;
                    font-family: 'Cairo', sans-serif;
                    line-height: ${settings.lineHeight};
                    font-size: ${settings.invoiceTextSize}px;
                ">
            `;
            
            // الشعار (إذا كان مفعلاً)
            if (settings.showLogo) {
                // استخدم نفس مسار اللوجو كما في إدارة الطابعة
                let logoSrc = document.getElementById('storeLogo')?.value?.trim() || 'yaqoub_logo.png';
                // إذا كان المسار base64 أو اسم ملف
                if (!logoSrc.startsWith('data:') && !logoSrc.startsWith('http') && !logoSrc.startsWith('./') && !logoSrc.startsWith('/')) {
                    logoSrc = './' + logoSrc;
                }
                receiptHTML += `
                    <div style="text-align: ${settings.titleAlign}; margin-bottom: 10px;">
                        <img src="${logoSrc}" alt="Logo" style="max-width:90px;max-height:90px;display:inline-block;vertical-align:middle;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.08);margin-bottom:8px;" />
                    </div>
                `;
            }
            
            // عنوان المتجر
            receiptHTML += `
                <div style="text-align: ${settings.titleAlign}; margin-bottom: 15px;">
                    <h2 style="
                        margin: 0 0 8px 0;
                        font-size: ${settings.storeTitleSize}px;
                        font-weight: bold;
                    ">${storeName}</h2>
                    <p style="margin: 4px 0; font-size: ${settings.storeInfoSize}px;">${storeAddress}</p>
                    <p style="margin: 4px 0; font-size: ${settings.storeInfoSize}px;">📞 ${storePhone}</p>
                </div>
            `;
            
            // خط فاصل علوي
            receiptHTML += `
                <div style="
                    border-top: ${settings.borderWidth}px ${settings.borderStyle} #000;
                    margin: 15px 0;
                "></div>
            `;
            
            // معلومات الفاتورة
            receiptHTML += `<div style="margin: 10px 0; font-size: ${settings.invoiceTextSize}px;">`;
            
            if (settings.showInvoiceNumber) {
                receiptHTML += `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span>رقم الفاتورة:</span>
                        <span style="font-weight: bold;">INV-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}</span>
                    </div>
                `;
            }
            
            if (settings.showDateTime) {
                receiptHTML += `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span>التاريخ:</span>
                        <span>${dateStr}</span>
                    </div>
                    <div style="display: flex; justify-content: space-between;">
                        <span>الوقت:</span>
                        <span>${timeStr}</span>
                    </div>
                `;
            }
            
            receiptHTML += `</div>`;
            
            // خط فاصل
            receiptHTML += `
                <div style="
                    border-top: ${settings.borderWidth}px ${settings.borderStyle} #000;
                    margin: 15px 0;
                "></div>
            `;
            
            // جدول المنتجات
            if (settings.showProductsTable) {
                receiptHTML += `
                    <table style="
                        width: 100%;
                        border-collapse: collapse;
                        font-size: ${settings.tableTextSize}px;
                        margin: 10px 0;
                    ">
                        <thead>
                            <tr style="border-bottom: ${settings.borderWidth}px solid #000;">
                                <th style="text-align: right; padding: 5px 0; font-weight: bold;">المنتج</th>
                                <th style="text-align: center; padding: 5px 0; font-weight: bold;">الكمية</th>
                                <th style="text-align: left; padding: 5px 0; font-weight: bold;">السعر</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="padding: 8px 0; border-bottom: 1px dotted #ccc;">منتج تجريبي 1</td>
                                <td style="text-align: center; padding: 8px 0; border-bottom: 1px dotted #ccc;">2</td>
                                <td style="text-align: left; padding: 8px 0; border-bottom: 1px dotted #ccc;">20,000</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; border-bottom: 1px dotted #ccc;">منتج تجريبي 2</td>
                                <td style="text-align: center; padding: 8px 0; border-bottom: 1px dotted #ccc;">1</td>
                                <td style="text-align: left; padding: 8px 0; border-bottom: 1px dotted #ccc;">15,000</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0;">منتج تجريبي 3</td>
                                <td style="text-align: center; padding: 8px 0;">3</td>
                                <td style="text-align: left; padding: 8px 0;">45,000</td>
                            </tr>
                        </tbody>
                    </table>
                `;
            }
            
            // خط فاصل
            receiptHTML += `
                <div style="
                    border-top: ${settings.borderWidth}px ${settings.borderStyle} #000;
                    margin: 15px 0;
                "></div>
            `;
            
            // الإجمالي
            receiptHTML += `
                <div style="
                    font-size: ${settings.totalTextSize}px;
                    font-weight: bold;
                    margin: 15px 0;
                ">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span>المجموع الجزئي:</span>
                        <span>80,000 دينار</span>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <span>الخصم:</span>
                        <span style="color: #10b981;">- 5,000 دينار</span>
                    </div>
                    <div style="
                        display: flex;
                        justify-content: space-between;
                        padding-top: 8px;
                        border-top: 2px solid #000;
                    ">
                        <span>الإجمالي النهائي:</span>
                        <span>75,000 دينار</span>
                    </div>
                </div>
            `;
            
            // التذييل
            if (settings.showFooter) {
                const footerText = settings.customFooter || 'شكراً لزيارتكم\nنتطلع لخدمتكم مرة أخرى';
                const footerLines = footerText.split('\n');
                
                receiptHTML += `
                    <div style="
                        text-align: center;
                        margin-top: 20px;
                        font-size: ${settings.footerTextSize}px;
                        color: #666;
                    ">
                `;
                
                footerLines.forEach(line => {
                    receiptHTML += `<p style="margin: 4px 0;">${line}</p>`;
                });
                
                receiptHTML += `
                        <p style="margin-top: 10px;">━━━━━━━━━━━━━━━━━</p>
                    </div>
                `;
            }
            
            receiptHTML += `</div>`;
            
            preview.innerHTML = receiptHTML;
        }

        // طباعة فاتورة فعلية
        function printInvoice(invoiceId, silent = false) {
            const settings = JSON.parse(localStorage.getItem('printerSettings') || '{}');
            // ابحث عن الفاتورة في قاعدة البيانات أو من salesData
            let sale = null;
            // Always fetch the latest sale from both memory and persistent storage
            if (typeof salesData !== 'undefined' && Array.isArray(salesData)) {
                sale = salesData.find(s => s.invoice_id === invoiceId);
            }
            if (window.dataSdk && window.dataSdk.getAll) {
                const allSales = window.dataSdk.getAll();
                // Prefer the most recent sale with this invoice_id
                const found = allSales.find(s => s.invoice_id === invoiceId);
                if (found) sale = found;
            }
            if (!sale) {
                // تم إزالة الإشعار
                return;
            }
            // Always parse items to ensure latest products are shown
            if (typeof sale.items === 'string') {
                try { sale.items = JSON.parse(sale.items); } catch { sale.items = []; }
            }
            
            // استخدام القوالب الجديدة حسب نوع البيع
            let receiptContent;
            const paymentMethod = sale.payment_method || sale.payment_type || '';
            const isInstallment = paymentMethod === 'أقساط' || paymentMethod === 'تقسيط' || sale.installment_months > 0;
            
            // استخدام القوالب الجديدة من ملف yaqoub-invoice-templates.js
            if (isInstallment) {
                // فاتورة تقسيط
                receiptContent = typeof window.generateYaqoubInstallmentReceipt === 'function'
                    ? window.generateYaqoubInstallmentReceipt(sale, settings)
                    : generateInstallmentInvoiceReceipt(sale, settings); // fallback
            } else {
                // فاتورة نقد
                receiptContent = typeof window.generateYaqoubCashReceipt === 'function'
                    ? window.generateYaqoubCashReceipt(sale, settings)
                    : generateInvoiceReceipt(sale, settings); // fallback
            }
            
            // جلب اسم الطابعة الافتراضية من الإعدادات
            let printerName = '';
            try {
                const printerSettings = JSON.parse(localStorage.getItem('printerSettings') || '{}');
                printerName = printerSettings.selectedPrinter || printerSettings.printerName || '';
            } catch {}

            // طباعة آمنة تضمن تحديث الفاتورة دائماً
            if (typeof window.safePrintInvoice === 'function') {
                window.safePrintInvoice(receiptContent, {
                    silent: true,
                    pageSize: 'A4',
                    printBackground: true,
                    printerName: printerName
                });
            } else {
                // فتح نافذة طباعة
                const printWindow = window.open('', '_blank');
                printWindow.document.write(receiptContent);
                printWindow.document.close();
                printWindow.focus();
                setTimeout(() => {
                    printWindow.print();
                }, 500);
            }
            
            // تحديث إحصائيات الطباعة
            if (typeof updatePrintStats === 'function') updatePrintStats();
            // تم إزالة الإشعار
        }

        // توليد محتوى إيصال الفاتورة (نسخة إنجليزية - اتجاه LTR)
        function generateInvoiceReceipt(sale, settings) {
                    // دالة مساعدة لتحويل الأرقام العربية إلى إنجليزية
                    // استخدم الدالة العامة toEnglishDigits
            // بيانات المتجر بالعربية
            const storeName = 'معرض يعقوب للأجهزة الكهربائية';
            const storeAddress = 'باب الهاشمية قرب مدرسة الكرار';
            const storePhone = localStorage.getItem('storePhone') || '07803092185';

            // قالب A4 دائمًا
            let receiptWidth = '210mm';

            // إصلاح التاريخ والوقت - عرض بالعربية
            let saleDate = sale.date ? new Date(sale.date) : (sale.timestamp ? new Date(sale.timestamp) : new Date());
            if (typeof saleDate === 'string') saleDate = new Date(saleDate);
            
            // التاريخ بالعربية مع أرقام إنجليزية
            const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
            const dateStrArabic = saleDate.toLocaleDateString('ar-IQ', dateOptions);
            const dateStr = toEnglishDigits(dateStrArabic); // تحويل الأرقام للإنجليزية
            
            // الوقت بالعربية مع أرقام إنجليزية
            const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
            const timeStrArabic = saleDate.toLocaleTimeString('ar-IQ', timeOptions);
            const timeStr = toEnglishDigits(timeStrArabic); // تحويل الأرقام للإنجليزية

            let html = `
            <div style="
                width: ${receiptWidth};
                margin: 0 auto;
                padding: 32px 32px;
                font-family: 'Cairo', sans-serif;
                background: #fff;
                color: #222;
                border: 1px solid #e5e7eb;
                border-radius: 12px;
                box-shadow: 0 4px 24px rgba(0,0,0,0.08);
                line-height: 1.7;
                font-size: 18px;
                direction: rtl;
                text-align: right;
            ">
            `;

            // رأس الفاتورة
            html += `
            <div style="text-align: center; margin-bottom: 24px; direction: rtl;">
                <h1 style="margin: 0 0 8px 0; font-size: 2.5rem; font-weight: bold; color: #2d3748; letter-spacing: 2px;">${storeName}</h1>
                <div style="font-size: 1.2rem; color: #374151; margin-bottom: 4px;">${storeAddress}</div>
                <div style="font-size: 1.1rem; color: #6366f1;">📞 ${storePhone}</div>
                <div style="width:100%;text-align:center;margin:12px 0 0 0;">
                                <img src="${(function(){
                                    let logoSrc = document.getElementById('storeLogo')?.value?.trim() || 'yaqoub_logo.png';
                                    if (!logoSrc.startsWith('data:') && !logoSrc.startsWith('http') && !logoSrc.startsWith('./') && !logoSrc.startsWith('/')) {
                                        logoSrc = './' + logoSrc;
                                    }
                                    return logoSrc;
                                })()}" alt="Logo" style="max-width:120px;max-height:120px;display:inline-block;vertical-align:middle;border-radius:16px;box-shadow:0 2px 8px rgba(0,0,0,0.08);margin-bottom:8px;" />
                </div>
            </div>
            <div style="border-top: 2px solid #6366f1; margin: 24px 0 16px 0;"></div>
            `;

            // معلومات الفاتورة - بالعربية
            html += `
            <div style="display: flex; justify-content: flex-start; gap: 48px; margin-bottom: 18px; font-size: 1.1rem; direction: rtl;">
                <div><b>رقم الفاتورة:</b> ${toEnglishDigits(sale.invoice_id)}</div>
                <div><b>التاريخ:</b> ${dateStr}</div>
                <div><b>الوقت:</b> ${timeStr}</div>
            </div>
            <div style="border-top: 1px dashed #bbb; margin: 18px 0 18px 0;"></div>
            `;

            // جدول المنتجات
            let items = sale.items;
            if (typeof items === 'string') {
            try {
                items = JSON.parse(items);
            } catch {
                items = [];
            }
            }
            if (items && items.length > 0) {
            html += `
                <table style="width: 100%; border-collapse: collapse; font-size: 1.1rem; margin: 18px 0; background: #f9fafb; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03); direction: rtl;">
                <thead>
                    <tr style="background: #6366f1; color: #fff;">
                    <th style="padding: 12px 0;">#</th>
                    <th style="padding: 12px 0;">اسم المنتج</th>
                    <th style="padding: 12px 0;">الكمية</th>
                    <th style="padding: 12px 0;">سعر الوحدة</th>
                    <th style="padding: 12px 0;">الإجمالي</th>
                    </tr>
                </thead>
                <tbody>
            `;
            items.forEach((item, index) => {
                const name = item.product_name || item.name || '—';
                const price = item.product_price || item.price || 0;
                html += `
                <tr style="background: ${index % 2 === 0 ? '#fff' : '#f3f4f6'}; text-align: center; direction: rtl;">
                    <td style="padding: 10px 0;">${toEnglishDigits(index + 1)}</td>
                    <td style="padding: 10px 0; text-align: right;">${name}</td>
                    <td style="padding: 10px 0;">${toEnglishDigits(item.quantity)}</td>
                    <td style="padding: 10px 0;">${toEnglishDigits(price.toLocaleString('en'))}</td>
                    <td style="padding: 10px 0; font-weight: bold; color: #10b981;">${toEnglishDigits((price * item.quantity).toLocaleString('en'))}</td>
                </tr>
                `;
            });
            html += `</tbody></table>`;
            }

            html += `<div style="border-top: 2px solid #6366f1; margin: 24px 0 16px 0;"></div>`;

            // الإجمالي بالعربية مع الخصم الإضافي
            const additionalDiscount = sale.additional_discount || 0;
            const totalDiscount = (sale.discount || 0) + additionalDiscount;
            
            html += `
            <div style="font-size: 1.3rem; font-weight: bold; margin: 32px 0 12px 0; text-align: right; direction: rtl;">
                <div style="display: flex; justify-content: flex-start; gap: 48px; margin-bottom: 10px;">
                <div><span style="color:#374151;">المجموع الجزئي:</span> <span>${toEnglishDigits((sale.total_amount || 0).toLocaleString('en'))}</span></div>
                ${sale.discount ? `<div><span style="color:#374151;">الخصم:</span> <span style="color: #10b981;">- ${toEnglishDigits(sale.discount.toLocaleString('en'))}</span></div>` : ''}
                ${additionalDiscount > 0 ? `<div><span style="color:#374151;">خصم إضافي:</span> <span style="color: #10b981;">- ${toEnglishDigits(additionalDiscount.toLocaleString('en'))}</span></div>` : ''}
                </div>
                ${totalDiscount > 0 ? `<div style="display: flex; justify-content: flex-start; gap: 48px; margin-bottom: 10px; padding: 8px; background: #f0fdf4; border-radius: 6px;">
                    <div><span style="color:#15803d;">إجمالي الخصم:</span> <span style="color: #15803d; font-weight: bold;">- ${toEnglishDigits(totalDiscount.toLocaleString('en'))}</span></div>
                </div>` : ''}
                <div style="display: flex; justify-content: flex-start; gap: 48px; border-top: 2px solid #6366f1; padding-top: 12px; margin-top: 8px;">
                <div><span style="color:#2d3748;">الإجمالي النهائي:</span> <span style="color:#e11d48; font-size:1.5rem;">${toEnglishDigits((sale.final_total || sale.total_amount || 0).toLocaleString('en'))}</span></div>
                </div>
            </div>
            `;

            // الملاحظات
            const notes = [
                'المبلغ الموجود في الإجمالي النهائي<br>هو وصل أمانة عليكم.',
                'السعر محمي لمدة 24 ساعة من وقت الشراء.',
                'المباع لا يرجع ولا يبدل.',
                'الخطأ والسهو مرجوع للطرفين.',
                'الشركة المصنعة هي المسؤولة عن الضمان وليس شركتنا.',
                'كسر الشاشة أو كسر المنتج غير داخل بالضمان.',
                'مسؤول صيانة وتنصيب السبالت: حمزه أبو حوراء - هاتف: <span dir="ltr" style="unicode-bidi: embed;">+964 785 570 6118</span> <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Iraq.svg" alt="Iraq Flag" style="height: 1em; vertical-align: middle; margin-right: 4px;" />'
            ];
            html += `
            <div style="margin-top:28px; padding:16px 12px; background:#fffbe7; border-radius:8px; border:1px solid #ffe082;">
                <div style="font-size:1.05rem; font-weight:bold; color:#c62828; margin-bottom:6px; text-align:right; direction:rtl;">ملاحظات هامة:</div>
                <ol style="font-size:1rem; padding-right:22px; margin:0; text-align:right; direction:rtl;">
                ${notes.map(n => `<li>${toEnglishDigits(n)}</li>`).join('')}
                </ol>
            </div>
            `;

            // التذييل بالعربية
            html += `<div style="text-align: center; margin-top: 40px; font-size: 1.1rem; color: #666; direction: rtl;">
            <p style="margin: 4px 0;">شكراً لتعاملكم مع معرض يعقوب للأجهزة الكهربائية</p>
            <p style="margin: 4px 0;">نتطلع لخدمتكم مرة أخرى</p>
            <p style="margin-top: 18px; color: #6366f1; font-size: 1.2rem;">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
            </div>`;
            html += `</div>`;
            return html;
        }

        // ==========================================
        // دوال إدارة الطابعة المحدثة
        // ==========================================

        // تحديث قائمة الطابعات المتصلة
        async function refreshPrintersList() {
            const container = document.getElementById('connectedPrintersList');
            if (!container) return;
            
            container.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                    <i class="fas fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                    <p>جاري البحث عن الطابعات...</p>
                </div>
            `;
            
            try {
                // الحصول على قائمة الطابعات من النظام
                let printers = [];
                
                if (window.electronAPI && window.electronAPI.getPrinters) {
                    printers = await window.electronAPI.getPrinters();
                } else {
                    // محاكاة قائمة طابعات للتجربة (للمتصفح)
                    printers = [
                        { name: 'الطابعة الافتراضية', isDefault: true, status: 'ready' },
                        { name: 'Microsoft Print to PDF', isDefault: false, status: 'ready' }
                    ];
                }
                
                if (printers.length === 0) {
                    container.innerHTML = `
                        <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                            <i class="fas fa-exclamation-circle" style="font-size: 2rem; margin-bottom: 1rem; color: #f59e0b;"></i>
                            <p>لم يتم العثور على طابعات متصلة</p>
                        </div>
                    `;
                    return;
                }
                
                // عرض قائمة الطابعات
                let html = '<div style="display: grid; gap: 1rem;">';
                
                printers.forEach((printer, index) => {
                    const isDefault = printer.isDefault;
                    const status = printer.status === 'ready' || printer.status === 'idle' ? 'جاهزة' : 'غير جاهزة';
                    const statusColor = printer.status === 'ready' || printer.status === 'idle' ? '#10b981' : '#ef4444';
                    
                    html += `
                        <div style="
                            padding: 1rem;
                            background: var(--bg-secondary);
                            border-radius: 8px;
                            border: 2px solid ${isDefault ? '#6366f1' : 'var(--border-color)'};
                            display: flex;
                            align-items: center;
                            gap: 1rem;
                        ">
                            <div style="
                                width: 40px;
                                height: 40px;
                                background: ${isDefault ? '#6366f1' : '#64748b'};
                                border-radius: 50%;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                color: white;
                            ">
                                <i class="fas fa-print"></i>
                            </div>
                            <div style="flex: 1;">
                                <div style="font-weight: 600; margin-bottom: 0.25rem;">
                                    ${printer.name}
                                    ${isDefault ? '<span style="color: #6366f1; font-size: 0.75rem; margin-right: 0.5rem;">(افتراضية)</span>' : ''}
                                </div>
                                <div style="font-size: 0.875rem; color: var(--text-secondary);">
                                    الحالة: <span style="color: ${statusColor};">${status}</span>
                                </div>
                            </div>
                            <button 
                                onclick="selectPrinter('${printer.name.replace(/'/g, "\\'")}')"
                                style="
                                    padding: 0.5rem 1rem;
                                    background: #6366f1;
                                    color: white;
                                    border: none;
                                    border-radius: 6px;
                                    cursor: pointer;
                                    font-size: 0.875rem;
                                "
                            >
                                اختيار
                            </button>
                        </div>
                    `;
                });
                
                html += '</div>';
                container.innerHTML = html;
                
                // تحديث قائمة الطابعات في الإعدادات
                const select = document.getElementById('selectedPrinter');
                if (select) {
                    select.innerHTML = '<option value="">الطابعة الافتراضية</option>';
                    printers.forEach(printer => {
                        const option = document.createElement('option');
                        option.value = printer.name;
                        option.textContent = printer.name + (printer.isDefault ? ' (افتراضية)' : '');
                        if (printer.isDefault) option.selected = true;
                        select.appendChild(option);
                    });
                }
                
            } catch (error) {
                console.error('خطأ في تحديث قائمة الطابعات:', error);
                container.innerHTML = `
                    <div style="text-align: center; padding: 2rem; color: #ef4444;">
                        <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem;"></i>
                        <p>حدث خطأ في البحث عن الطابعات</p>
                    </div>
                `;
            }
        }

        // اختيار طابعة
        function selectPrinter(printerName) {
            const select = document.getElementById('selectedPrinter');
            if (select) {
                select.value = printerName;
                // تم إزالة الإشعار
            }
        }

        // تحديث معاينة الإيصال
        function updateReceiptPreview() {
            const templateType = document.getElementById('receiptTemplate')?.value || 'cash';
            const printerType = document.getElementById('printerType')?.value || 'a4';
            
            // الإعدادات
            const settings = {
                templateType: templateType,
                printerType: printerType,
                storeTitleSize: parseInt(document.getElementById('storeTitleSize')?.value || 24),
                storeInfoSize: parseInt(document.getElementById('storeInfoSize')?.value || 14),
                invoiceTextSize: parseInt(document.getElementById('invoiceTextSize')?.value || 13),
                tableTextSize: parseInt(document.getElementById('tableTextSize')?.value || 12),
                totalTextSize: parseInt(document.getElementById('totalTextSize')?.value || 16),
                lineHeight: parseFloat(document.getElementById('lineHeight')?.value || 1.4),
                sidePadding: parseInt(document.getElementById('sidePadding')?.value || 15),
                showDateTime: document.getElementById('showDateTime')?.checked !== false,
                showInvoiceNumber: document.getElementById('showInvoiceNumber')?.checked !== false,
                customFooter: document.getElementById('customFooter')?.value || ''
            };
            
            // بيانات تجريبية للفاتورة
            const sampleInvoice = {
                invoice_id: 'INV-' + Math.floor(Math.random() * 10000),
                timestamp: new Date().toISOString(),
                customer_name: templateType === 'installment' ? 'محمد أحمد علي' : 'عميل نقدي',
                customer_phone: templateType === 'installment' ? '07803092185' : '',
                customer_address: templateType === 'installment' ? 'بغداد - المنصور' : '',
                items: [
                    { product_name: 'ثلاجة سامسونج', quantity: 1, price: 800000, total: 800000 },
                    { product_name: 'غسالة LG', quantity: 1, price: 600000, total: 600000 }
                ],
                subtotal: 1400000,
                discount: 50000,
                tax: 0,
                final_total: 1350000,
                payment_method: templateType === 'installment' ? 'تقسيط' : 'نقدي'
            };
            
            // إذا كان تقسيط، إضافة بيانات الأقساط
            if (templateType === 'installment') {
                sampleInvoice.installment_months = 12;
                sampleInvoice.down_payment = 350000;
                sampleInvoice.monthly_amount = 83334;
                sampleInvoice.remaining_amount = 1000000;
                sampleInvoice.installments = [];
                
                // توليد جدول الأقساط
                for (let i = 1; i <= 12; i++) {
                    const dueDate = new Date();
                    dueDate.setMonth(dueDate.getMonth() + i);
                    sampleInvoice.installments.push({
                        month: i,
                        due_date: dueDate.toISOString().split('T')[0],
                        amount: 83334,
                        status: i <= 3 ? 'paid' : 'pending'
                    });
                }
            }
            
            // توليد HTML الإيصال
            let receiptHTML;
            if (templateType === 'cash') {
                receiptHTML = generateCashReceiptPreview(sampleInvoice, settings);
            } else {
                receiptHTML = generateInstallmentReceiptPreview(sampleInvoice, settings);
            }
            
            // عرض المعاينة
            const preview = document.getElementById('receiptPreview');
            if (preview) {
                preview.innerHTML = receiptHTML;
            }
            
            // تحديث الإحصائيات
            if (document.getElementById('activeTemplateType')) {
                document.getElementById('activeTemplateType').textContent = 
                    templateType === 'cash' ? 'نقدي' : 'تقسيط';
            }
            if (document.getElementById('activePrinterType')) {
                const typeNames = {
                    'a4': 'A4',
                    'thermal-80': 'حراري 80mm',
                    'thermal-58': 'حراري 58mm'
                };
                document.getElementById('activePrinterType').textContent = typeNames[printerType] || 'A4';
            }
        }

        // توليد HTML لمعاينة إيصال نقدي
        function generateCashReceiptPreview(sale, settings) {
            // استخدام القالب الجديد
            if (typeof window.generateYaqoubCashReceipt === 'function') {
                return window.generateYaqoubCashReceipt(sale, settings);
            }
            
            // Fallback للقالب القديم
            const storeName = localStorage.getItem('storeName') || 'متجر يعقوب بالأجهزة الكهربائية';
            const storeAddress = localStorage.getItem('storeAddress') || 'باب الهاشمية قرب مدرسة الكرار';
            const storePhone = localStorage.getItem('storePhone') || '07803092185';
            
            // تحديد عرض الإيصال
            let receiptWidth = '210mm'; // A4
            if (settings.printerType === 'thermal-80') {
                receiptWidth = '80mm';
            } else if (settings.printerType === 'thermal-58') {
                receiptWidth = '58mm';
            }
            
            // التاريخ والوقت - عربي مع أرقام إنجليزية
            const saleDate = new Date(sale.timestamp);
            const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
            const dateStrArabic = saleDate.toLocaleDateString('ar-IQ', dateOptions);
            const dateStr = toEnglishDigits(dateStrArabic);
            
            const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
            const timeStrArabic = saleDate.toLocaleTimeString('ar-IQ', timeOptions);
            const timeStr = toEnglishDigits(timeStrArabic);
            
            return `
                <div style="
                    width: ${receiptWidth};
                    padding: ${settings.sidePadding}px;
                    font-family: 'Cairo', 'Segoe UI', Arial, sans-serif;
                    line-height: ${settings.lineHeight};
                    font-size: ${settings.invoiceTextSize}px;
                    color: black;
                    background: white;
                ">
                    <!-- عنوان المتجر -->
                    <div style="text-align: center; margin-bottom: 15px;">
                        <h2 style="margin: 0 0 8px 0; font-size: ${settings.storeTitleSize}px; font-weight: bold;">
                            ${storeName}
                        </h2>
                        <p style="margin: 4px 0; font-size: ${settings.storeInfoSize}px;">${storeAddress}</p>
                        <p style="margin: 4px 0; font-size: ${settings.storeInfoSize}px;">📞 ${storePhone}</p>
                    </div>
                    
                    <!-- خط فاصل -->
                    <div style="border-top: 2px dashed #000; margin: 15px 0;"></div>
                    
                    <!-- معلومات الفاتورة -->
                    <div style="margin: 10px 0; font-size: ${settings.invoiceTextSize}px;">
                        ${settings.showInvoiceNumber ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="font-weight: 600;">رقم الفاتورة:</span>
                            <span style="font-weight: bold;">${sale.invoice_id}</span>
                        </div>` : ''}
                        ${settings.showDateTime ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span>التاريخ:</span>
                            <span>${dateStr}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span>الوقت:</span>
                            <span>${timeStr}</span>
                        </div>` : ''}
                        <div style="display: flex; justify-content: space-between; margin-top: 5px;">
                            <span>العميل:</span>
                            <span style="font-weight: 600;">${sale.customer_name || 'عميل نقدي'}</span>
                        </div>
                    </div>
                    
                    <!-- خط فاصل -->
                    <div style="border-top: 2px dashed #000; margin: 15px 0;"></div>
                    
                    <!-- جدول المنتجات -->
                    <table style="width: 100%; border-collapse: collapse; font-size: ${settings.tableTextSize}px; margin: 10px 0;">
                        <thead>
                            <tr style="border-bottom: 1px solid #000;">
                                <th style="text-align: right; padding: 5px 0;">الصنف</th>
                                <th style="text-align: center; padding: 5px 5px;">الكمية</th>
                                <th style="text-align: left; padding: 5px 0;">السعر</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Array.isArray(sale.items) ? sale.items.map(item => `
                                <tr>
                                    <td style="text-align: right; padding: 8px 0;">${item.product_name || item.name}</td>
                                    <td style="text-align: center; padding: 8px 5px;">${item.quantity}</td>
                                    <td style="text-align: left; padding: 8px 0;">${formatCurrency(item.total || (item.quantity * item.price))}</td>
                                </tr>
                            `).join('') : ''}
                        </tbody>
                    </table>
                    
                    <!-- خط فاصل -->
                    <div style="border-top: 2px dashed #000; margin: 15px 0;"></div>
                    
                    <!-- الإجماليات -->
                    <div style="font-size: ${settings.totalTextSize}px; margin: 10px 0;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span>المجموع الفرعي:</span>
                            <span>${formatCurrency(sale.subtotal || 0)}</span>
                        </div>
                        ${sale.discount > 0 ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px; color: #10b981;">
                            <span>الخصم:</span>
                            <span>-${formatCurrency(sale.discount)}</span>
                        </div>` : ''}
                        <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: ${settings.totalTextSize + 2}px; margin-top: 10px; padding-top: 10px; border-top: 2px solid #000;">
                            <span>الإجمالي:</span>
                            <span>${formatCurrency(sale.final_total || 0)}</span>
                        </div>
                    </div>
                    
                    ${settings.customFooter ? `
                    <!-- خط فاصل -->
                    <div style="border-top: 2px dashed #000; margin: 15px 0;"></div>
                    
                    <!-- التذييل -->
                    <div style="text-align: center; font-size: ${settings.storeInfoSize - 1}px; color: #666; margin-top: 15px;">
                        ${settings.customFooter}
                    </div>` : ''}
                </div>
            `;
        }

        // توليد HTML لمعاينة إيصال تقسيط
        function generateInstallmentReceiptPreview(sale, settings) {
            // استخدام القالب الجديد
            if (typeof window.generateYaqoubInstallmentReceipt === 'function') {
                return window.generateYaqoubInstallmentReceipt(sale, settings);
            }
            
            // Fallback للقالب القديم
            const storeName = localStorage.getItem('storeName') || 'متجر يعقوب بالأجهزة الكهربائية';
            const storeAddress = localStorage.getItem('storeAddress') || 'باب الهاشمية قرب مدرسة الكرار';
            const storePhone = localStorage.getItem('storePhone') || '07803092185';
            
            // تحديد عرض الإيصال
            let receiptWidth = '210mm'; // A4
            if (settings.printerType === 'thermal-80') {
                receiptWidth = '80mm';
            } else if (settings.printerType === 'thermal-58') {
                receiptWidth = '58mm';
            }
            
            // التاريخ - عربي مع أرقام إنجليزية
            const saleDate = new Date(sale.timestamp);
            const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
            const dateStrArabic = saleDate.toLocaleDateString('ar-IQ', dateOptions);
            const dateStr = toEnglishDigits(dateStrArabic);
            
            return `
                <div style="
                    width: ${receiptWidth};
                    padding: ${settings.sidePadding}px;
                    font-family: 'Cairo', 'Segoe UI', Arial, sans-serif;
                    line-height: ${settings.lineHeight};
                    font-size: ${settings.invoiceTextSize}px;
                    color: black;
                    background: white;
                ">
                    <!-- عنوان المتجر -->
                    <div style="text-align: center; margin-bottom: 15px;">
                        <h2 style="margin: 0 0 8px 0; font-size: ${settings.storeTitleSize}px; font-weight: bold;">
                            ${storeName}
                        </h2>
                        <p style="margin: 4px 0; font-size: ${settings.storeInfoSize}px;">${storeAddress}</p>
                        <p style="margin: 4px 0; font-size: ${settings.storeInfoSize}px;">📞 ${storePhone}</p>
                    </div>
                    
                    <!-- خط فاصل -->
                    <div style="border-top: 2px dashed #000; margin: 15px 0;"></div>
                    
                    <!-- نوع الفاتورة -->
                    <div style="text-align: center; background: #ffe4e6; padding: 8px; margin-bottom: 10px; border-radius: 4px;">
                        <strong style="color: #dc2626; font-size: ${settings.invoiceTextSize + 1}px;">فاتورة تقسيط</strong>
                    </div>
                    
                    <!-- معلومات الفاتورة والعميل -->
                    <div style="margin: 10px 0; font-size: ${settings.invoiceTextSize}px;">
                        ${settings.showInvoiceNumber ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span style="font-weight: 600;">رقم الفاتورة:</span>
                            <span style="font-weight: bold;">${sale.invoice_id}</span>
                        </div>` : ''}
                        ${settings.showDateTime ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span>التاريخ:</span>
                            <span>${dateStr}</span>
                        </div>` : ''}
                        <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
                            <span>العميل:</span>
                            <span style="font-weight: 600;">${sale.customer_name}</span>
                        </div>
                        ${sale.customer_phone ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 3px;">
                            <span>الهاتف:</span>
                            <span>${sale.customer_phone}</span>
                        </div>` : ''}
                        ${sale.customer_address ? `
                        <div style="display: flex; justify-content: space-between;">
                            <span>العنوان:</span>
                            <span>${sale.customer_address}</span>
                        </div>` : ''}
                    </div>
                    
                    <!-- خط فاصل -->
                    <div style="border-top: 2px dashed #000; margin: 15px 0;"></div>
                    
                    <!-- جدول المنتجات -->
                    <table style="width: 100%; border-collapse: collapse; font-size: ${settings.tableTextSize}px; margin: 10px 0;">
                        <thead>
                            <tr style="border-bottom: 1px solid #000;">
                                <th style="text-align: right; padding: 5px 0;">الصنف</th>
                                <th style="text-align: center; padding: 5px 5px;">الكمية</th>
                                <th style="text-align: left; padding: 5px 0;">المبلغ</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${Array.isArray(sale.items) ? sale.items.map(item => `
                                <tr>
                                    <td style="text-align: right; padding: 8px 0;">${item.product_name || item.name}</td>
                                    <td style="text-align: center; padding: 8px 5px;">${item.quantity}</td>
                                    <td style="text-align: left; padding: 8px 0;">${formatCurrency(item.total || (item.quantity * item.price))}</td>
                                </tr>
                            `).join('') : ''}
                        </tbody>
                    </table>
                    
                    <!-- خط فاصل -->
                    <div style="border-top: 2px dashed #000; margin: 15px 0;"></div>
                    
                    <!-- ملخص التقسيط -->
                    <div style="background: #f0f9ff; padding: 10px; border-radius: 4px; margin: 10px 0; font-size: ${settings.invoiceTextSize}px;">
                        <div style="text-align: center; font-weight: bold; margin-bottom: 8px; color: #0284c7;">
                            ملخص التقسيط
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span>إجمالي المبلغ:</span>
                            <span style="font-weight: bold;">${formatCurrency(sale.final_total || 0)}</span>
                        </div>
                        ${sale.down_payment > 0 ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px; color: #10b981;">
                            <span>الدفعة الأولى:</span>
                            <span style="font-weight: bold;">${formatCurrency(sale.down_payment)}</span>
                        </div>` : ''}
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px; padding-top: 5px; border-top: 1px dashed #0284c7;">
                            <span>المبلغ المتبقي:</span>
                            <span style="font-weight: bold;">${formatCurrency(sale.remaining_amount || sale.final_total)}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                            <span>عدد الأقساط:</span>
                            <span style="font-weight: bold;">${sale.installment_months} شهر</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 8px; background: white; border-radius: 4px; margin-top: 8px;">
                            <span style="color: #0284c7; font-weight: bold;">القسط الشهري:</span>
                            <span style="font-weight: bold; color: #0284c7; font-size: ${settings.totalTextSize}px;">${formatCurrency(sale.monthly_amount)}</span>
                        </div>
                    </div>
                    
                    <!-- خط فاصل -->
                    <div style="border-top: 2px dashed #000; margin: 15px 0;"></div>
                    
                    <!-- جدول الأقساط -->
                    <div style="margin: 15px 0;">
                        <div style="text-align: center; font-weight: bold; margin-bottom: 10px; font-size: ${settings.invoiceTextSize + 1}px;">
                            جدول الأقساط
                        </div>
                        <table style="width: 100%; border-collapse: collapse; font-size: ${settings.tableTextSize - 1}px;">
                            <thead>
                                <tr style="background: #f3f4f6; border-bottom: 1px solid #000;">
                                    <th style="padding: 6px 4px; text-align: center;">الشهر</th>
                                    <th style="padding: 6px 4px; text-align: center;">الاستحقاق</th>
                                    <th style="padding: 6px 4px; text-align: center;">المبلغ</th>
                                    <th style="padding: 6px 4px; text-align: center;">الحالة</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${Array.isArray(sale.installments) ? sale.installments.slice(0, 6).map(inst => `
                                    <tr style="border-bottom: 1px solid #e5e7eb;">
                                        <td style="padding: 6px 4px; text-align: center;">${inst.month}</td>
                                        <td style="padding: 6px 4px; text-align: center;">${new Date(inst.due_date).toLocaleDateString('ar-IQ', {month: 'numeric', day: 'numeric'})}</td>
                                        <td style="padding: 6px 4px; text-align: center;">${formatCurrency(inst.amount)}</td>
                                        <td style="padding: 6px 4px; text-align: center;">
                                            <span style="color: ${inst.status === 'paid' ? '#10b981' : '#ef4444'}; font-weight: bold;">
                                                ${inst.status === 'paid' ? '✓' : '✗'}
                                            </span>
                                        </td>
                                    </tr>
                                `).join('') : ''}
                                ${sale.installments && sale.installments.length > 6 ? `
                                    <tr>
                                        <td colspan="4" style="padding: 6px; text-align: center; color: #6b7280; font-style: italic;">
                                            ... وباقي الأقساط
                                        </td>
                                    </tr>
                                ` : ''}
                            </tbody>
                        </table>
                    </div>
                    
                    <!-- خط فاصل -->
                    <div style="border-top: 2px dashed #000; margin: 15px 0;"></div>
                    
                    <!-- ملاحظات مهمة -->
                    <div style="background: #fef3c7; padding: 10px; border-radius: 4px; font-size: ${settings.tableTextSize}px; margin-top: 10px;">
                        <div style="font-weight: bold; margin-bottom: 5px; color: #d97706;">⚠️ ملاحظات مهمة:</div>
                        <ul style="margin: 5px 0; padding-right: 20px;">
                            <li>يجب تسديد القسط في موعده المحدد</li>
                            <li>التأخير في السداد يترتب عليه غرامة</li>
                            <li>الاحتفاظ بهذه الفاتورة للمراجعة</li>
                        </ul>
                    </div>
                    
                    ${settings.customFooter ? `
                    <!-- خط فاصل -->
                    <div style="border-top: 2px dashed #000; margin: 15px 0;"></div>
                    
                    <!-- التذييل -->
                    <div style="text-align: center; font-size: ${settings.storeInfoSize - 1}px; color: #666; margin-top: 15px;">
                        ${settings.customFooter}
                    </div>` : ''}
                    
                    <!-- توقيع العميل -->
                    <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #ccc;">
                        <div style="display: flex; justify-content: space-between; font-size: ${settings.tableTextSize}px;">
                            <div style="text-align: center;">
                                <div style="border-top: 1px solid #000; width: 150px; margin-bottom: 5px;"></div>
                                <div>توقيع العميل</div>
                            </div>
                            <div style="text-align: center;">
                                <div style="border-top: 1px solid #000; width: 150px; margin-bottom: 5px;"></div>
                                <div>توقيع البائع</div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        // حفظ إعدادات الطابعة
        function savePrinterSettings() {
            const settings = {
                receiptTemplate: document.getElementById('receiptTemplate')?.value || 'cash',
                selectedPrinter: document.getElementById('selectedPrinter')?.value || '',
                printerType: document.getElementById('printerType')?.value || 'a4',
                storeTitleSize: parseInt(document.getElementById('storeTitleSize')?.value || 24),
                storeInfoSize: parseInt(document.getElementById('storeInfoSize')?.value || 14),
                invoiceTextSize: parseInt(document.getElementById('invoiceTextSize')?.value || 13),
                tableTextSize: parseInt(document.getElementById('tableTextSize')?.value || 12),
                totalTextSize: parseInt(document.getElementById('totalTextSize')?.value || 16),
                lineHeight: parseFloat(document.getElementById('lineHeight')?.value || 1.4),
                sidePadding: parseInt(document.getElementById('sidePadding')?.value || 15),
                showDateTime: document.getElementById('showDateTime')?.checked !== false,
                showInvoiceNumber: document.getElementById('showInvoiceNumber')?.checked !== false,
                customFooter: document.getElementById('customFooter')?.value || '',
                // معلومات المتجر
                store_name: document.getElementById('storeName')?.value || 'معرض يعقوب للأجهزة الكهربائية',
                store_address: document.getElementById('storeAddress')?.value || 'باب الهاشمية قرب مدرسة الكرار',
                store_phone: document.getElementById('storePhone')?.value || '07803092185',
                store_logo: document.getElementById('storeLogo')?.value || 'yaqoub_logo.png',
                show_logo: document.getElementById('showLogo')?.checked !== false,
                // الملاحظات
                note1: document.getElementById('note1')?.value || '',
                note2: document.getElementById('note2')?.value || '',
                note3: document.getElementById('note3')?.value || '',
                note4: document.getElementById('note4')?.value || '',
                note5: document.getElementById('note5')?.value || '',
                note6: document.getElementById('note6')?.value || '',
                // معلومات الصيانة
                maintenance_name: document.getElementById('maintenanceName')?.value || 'حمزه ابو حوراء',
                maintenance_service: document.getElementById('maintenanceService')?.value || 'صيانة السبالت',
                maintenance_phone: document.getElementById('maintenancePhone')?.value || '+964 785 570 6118',
                show_maintenance: document.getElementById('showMaintenance')?.checked !== false
            };
            
            localStorage.setItem('printerSettings', JSON.stringify(settings));
            // حفظ في localStorage للوصول السريع
            localStorage.setItem('storeName', settings.store_name);
            localStorage.setItem('storeAddress', settings.store_address);
            localStorage.setItem('storePhone', settings.store_phone);
            
            // تم إزالة الإشعار
            
            console.log('✅ تم حفظ إعدادات الطابعة:', settings);
        }

        // تحميل إعدادات الطابعة
        function loadPrinterSettings() {
            try {
                const settings = JSON.parse(localStorage.getItem('printerSettings') || '{}');
                
                if (document.getElementById('receiptTemplate')) document.getElementById('receiptTemplate').value = settings.receiptTemplate || 'cash';
                if (document.getElementById('selectedPrinter')) document.getElementById('selectedPrinter').value = settings.selectedPrinter || '';
                if (document.getElementById('printerType')) document.getElementById('printerType').value = settings.printerType || 'a4';
                if (document.getElementById('storeTitleSize')) document.getElementById('storeTitleSize').value = settings.storeTitleSize || 24;
                if (document.getElementById('storeInfoSize')) document.getElementById('storeInfoSize').value = settings.storeInfoSize || 14;
                if (document.getElementById('invoiceTextSize')) document.getElementById('invoiceTextSize').value = settings.invoiceTextSize || 13;
                if (document.getElementById('tableTextSize')) document.getElementById('tableTextSize').value = settings.tableTextSize || 12;
                if (document.getElementById('totalTextSize')) document.getElementById('totalTextSize').value = settings.totalTextSize || 16;
                if (document.getElementById('lineHeight')) document.getElementById('lineHeight').value = settings.lineHeight || 1.4;
                if (document.getElementById('sidePadding')) document.getElementById('sidePadding').value = settings.sidePadding || 15;
                if (document.getElementById('showDateTime')) document.getElementById('showDateTime').checked = settings.showDateTime !== false;
                if (document.getElementById('showInvoiceNumber')) document.getElementById('showInvoiceNumber').checked = settings.showInvoiceNumber !== false;
                if (document.getElementById('customFooter')) document.getElementById('customFooter').value = settings.customFooter || '';
                
                // تحميل معلومات المتجر
                if (document.getElementById('storeName')) document.getElementById('storeName').value = settings.store_name || 'معرض يعقوب للأجهزة الكهربائية';
                if (document.getElementById('storeAddress')) document.getElementById('storeAddress').value = settings.store_address || 'باب الهاشمية قرب مدرسة الكرار';
                if (document.getElementById('storePhone')) document.getElementById('storePhone').value = settings.store_phone || '07803092185';
                if (document.getElementById('storeLogo')) document.getElementById('storeLogo').value = settings.store_logo || 'yaqoub_logo.png';
                if (document.getElementById('showLogo')) document.getElementById('showLogo').checked = settings.show_logo !== false;
                
                // تحميل الملاحظات
                if (document.getElementById('note1')) document.getElementById('note1').value = settings.note1 || 'المبلغ الموجود هو وصل أمانة';
                if (document.getElementById('note2')) document.getElementById('note2').value = settings.note2 || 'السعر محمي 24 ساعة';
                if (document.getElementById('note3')) document.getElementById('note3').value = settings.note3 || 'المباع لا يرجع ولا يبدل';
                if (document.getElementById('note4')) document.getElementById('note4').value = settings.note4 || 'الخطأ والسهو مرجوع للطرفين';
                if (document.getElementById('note5')) document.getElementById('note5').value = settings.note5 || 'الشركة المصنعة مسؤولة عن الضمان';
                if (document.getElementById('note6')) document.getElementById('note6').value = settings.note6 || 'كسر الشاشة غير داخل بالضمان';
                
                // تحميل معلومات الصيانة
                if (document.getElementById('maintenanceName')) document.getElementById('maintenanceName').value = settings.maintenance_name || 'حمزه ابو حوراء';
                if (document.getElementById('maintenanceService')) document.getElementById('maintenanceService').value = settings.maintenance_service || 'صيانة السبالت';
                if (document.getElementById('maintenancePhone')) document.getElementById('maintenancePhone').value = settings.maintenance_phone || '+964 785 570 6118';
                if (document.getElementById('showMaintenance')) document.getElementById('showMaintenance').checked = settings.show_maintenance !== false;
                
                // تحديث القيم المعروضة
                if (document.getElementById('storeTitleSizeValue')) document.getElementById('storeTitleSizeValue').textContent = settings.storeTitleSize || 24;
                if (document.getElementById('storeInfoSizeValue')) document.getElementById('storeInfoSizeValue').textContent = settings.storeInfoSize || 14;
                if (document.getElementById('invoiceTextSizeValue')) document.getElementById('invoiceTextSizeValue').textContent = settings.invoiceTextSize || 13;
                if (document.getElementById('tableTextSizeValue')) document.getElementById('tableTextSizeValue').textContent = settings.tableTextSize || 12;
                if (document.getElementById('totalTextSizeValue')) document.getElementById('totalTextSizeValue').textContent = settings.totalTextSize || 16;
                if (document.getElementById('lineHeightValue')) document.getElementById('lineHeightValue').textContent = settings.lineHeight || 1.4;
                if (document.getElementById('sidePaddingValue')) document.getElementById('sidePaddingValue').textContent = settings.sidePadding || 15;
                
                console.log('✅ تم تحميل إعدادات الطابعة');
            } catch (error) {
                console.error('❌ خطأ في تحميل إعدادات الطابعة:', error);
            }
        }

        // استعادة الإعدادات الافتراضية
        function resetPrinterSettings() {
            if (confirm('هل أنت متأكد من استعادة الإعدادات الافتراضية؟')) {
                const defaultSettings = {
                    receiptTemplate: 'cash',
                    selectedPrinter: '',
                    printerType: 'a4',
                    storeTitleSize: 24,
                    storeInfoSize: 14,
                    invoiceTextSize: 13,
                    tableTextSize: 12,
                    totalTextSize: 16,
                    lineHeight: 1.4,
                    sidePadding: 15,
                    showDateTime: true,
                    showInvoiceNumber: true,
                    customFooter: ''
                };
                
                localStorage.setItem('printerSettings', JSON.stringify(defaultSettings));
                loadPrinterSettings();
                updateReceiptPreview();
                // تم إزالة الإشعار
            }
        }

        // طباعة تجريبية
        function testPrintReceipt() {
            const templateType = document.getElementById('receiptTemplate')?.value || 'cash';
            const settings = JSON.parse(localStorage.getItem('printerSettings') || '{}');
            
            // تحديث settings بالقيم الحالية
            settings.templateType = templateType;
            settings.printerType = document.getElementById('printerType')?.value || 'a4';
            settings.storeTitleSize = parseInt(document.getElementById('storeTitleSize')?.value || 24);
            settings.storeInfoSize = parseInt(document.getElementById('storeInfoSize')?.value || 14);
            settings.invoiceTextSize = parseInt(document.getElementById('invoiceTextSize')?.value || 13);
            settings.tableTextSize = parseInt(document.getElementById('tableTextSize')?.value || 12);
            settings.totalTextSize = parseInt(document.getElementById('totalTextSize')?.value || 16);
            settings.lineHeight = parseFloat(document.getElementById('lineHeight')?.value || 1.4);
            settings.sidePadding = parseInt(document.getElementById('sidePadding')?.value || 15);
            settings.showDateTime = document.getElementById('showDateTime')?.checked !== false;
            settings.showInvoiceNumber = document.getElementById('showInvoiceNumber')?.checked !== false;
            settings.customFooter = document.getElementById('customFooter')?.value || '';
            
            // بيانات تجريبية
            const testInvoice = {
                invoice_id: 'TEST-' + Date.now(),
                timestamp: new Date().toISOString(),
                customer_name: templateType === 'installment' ? 'عميل تجريبي' : 'عميل نقدي',
                customer_phone: templateType === 'installment' ? '07900000000' : '',
                customer_address: templateType === 'installment' ? 'بغداد' : '',
                items: [
                    { product_name: 'منتج تجريبي 1', quantity: 2, price: 50000, total: 100000 },
                    { product_name: 'منتج تجريبي 2', quantity: 1, price: 75000, total: 75000 }
                ],
                subtotal: 175000,
                discount: 5000,
                final_total: 170000,
                payment_method: templateType === 'installment' ? 'تقسيط' : 'نقدي'
            };
            
            // إضافة بيانات التقسيط إذا لزم الأمر
            if (templateType === 'installment') {
                testInvoice.installment_months = 6;
                testInvoice.down_payment = 50000;
                testInvoice.monthly_amount = 20000;
                testInvoice.remaining_amount = 120000;
                testInvoice.installments = [];
                
                for (let i = 1; i <= 6; i++) {
                    const dueDate = new Date();
                    dueDate.setMonth(dueDate.getMonth() + i);
                    testInvoice.installments.push({
                        month: i,
                        due_date: dueDate.toISOString().split('T')[0],
                        amount: 20000,
                        status: 'pending'
                    });
                }
            }
            
            // توليد HTML الإيصال
            const receiptHTML = templateType === 'cash' 
                ? generateCashReceiptPreview(testInvoice, settings)
                : generateInstallmentReceiptPreview(testInvoice, settings);
            
            // فتح نافذة طباعة
            const printWindow = window.open('', '_blank');
            printWindow.document.write(`
                <!DOCTYPE html>
                <html dir="rtl" lang="ar">
                <head>
                    <meta charset="UTF-8">
                    <title>طباعة تجريبية</title>
                    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
                    <style>
                        * { margin: 0; padding: 0; box-sizing: border-box; }
                        body { font-family: 'Cairo', sans-serif; }
                        @media print {
                            body { margin: 0; }
                            @page { margin: 0; }
                        }
                    </style>
                </head>
                <body>
                    ${receiptHTML}
                </body>
                </html>
            `);
            
            printWindow.document.close();
            printWindow.focus();
            
            // طباعة بعد تحميل المحتوى
            setTimeout(() => {
                printWindow.print();
            }, 500);
            
            // تم إزالة الإشعار
        }

        // تهيئة صفحة إدارة الطابعة عند التحميل
        function initPrinterPage() {
            // تحميل الإعدادات المحفوظة
            loadPrinterSettings();
            
            // تحديث قائمة الطابعات
            refreshPrintersList();
            
            // تحديث المعاينة
            updateReceiptPreview();
            
            // تحديث إحصائيات الطباعة
            const totalPrints = parseInt(localStorage.getItem('totalPrints') || '0');
            const todayPrints = parseInt(localStorage.getItem('todayPrints') || '0');
            
            if (document.getElementById('totalPrints')) {
                document.getElementById('totalPrints').textContent = totalPrints;
            }
            if (document.getElementById('todayPrints')) {
                document.getElementById('todayPrints').textContent = todayPrints;
            }
            
            console.log('✅ تم تهيئة صفحة إدارة الطابعة');
        }

        // ==========================================
        // نهاية دوال إدارة الطابعة
        // ==========================================

        // تأكيد حذف الفاتورة
        function confirmDeleteInvoice(invoiceId, customerName) {
            // فحص الصلاحية
            if (!window.securityManager.checkPermission('invoices_delete')) {
                return;
            }
            
            const confirmed = confirm(`هل أنت متأكد من حذف الفاتورة؟\n\nرقم الفاتورة: ${invoiceId}\nالعميل: ${customerName}\n\n⚠️ تحذير: هذا الإجراء لا يمكن التراجع عنه!`);
            
            if (confirmed) {
                deleteInvoice(invoiceId);
            }
        }

        // حذف الفاتورة
        async function deleteInvoice(invoiceId) {
            // فحص الصلاحية مرة أخرى
            if (!window.securityManager.checkPermission('invoices_delete')) {
                return;
            }
            
            try {
                // البحث عن الفاتورة
                const saleIndex = salesData.findIndex(s => s.invoice_id === invoiceId);
                
                if (saleIndex === -1) {
                    // تم إزالة الإشعار
                    return;
                }
                
                const sale = salesData[saleIndex];
                
                // استرجاع كميات المنتجات
                let items = [];
                if (typeof sale.items === 'string') {
                    try {
                        items = JSON.parse(sale.items);
                    } catch (e) {
                        items = sale.items || [];
                    }
                } else {
                    items = sale.items || [];
                }
                
                // إعادة الكميات للمخزون
                if (Array.isArray(items)) {
                    for (const item of items) {
                        const product = products.find(p => p.product_id === item.product_id);
                        if (product) {
                            product.stock_quantity = (product.stock_quantity || 0) + (item.quantity || 0);
                            
                            // تحديث في قاعدة البيانات
                            if (window.dataSdk && (product.id || product.__backendId)) {
                                const updateId = product.id || product.__backendId;
                                await window.dataSdk.update(updateId, {
                                    stock_quantity: product.stock_quantity
                                });
                            }
                        }
                    }
                }
                
                // حذف من قاعدة البيانات
                if (window.dataSdk && (sale.id || sale.__backendId)) {
                    const deleteId = sale.id || sale.__backendId;
                    await window.dataSdk.delete(deleteId);
                }
                
                // حذف من الذاكرة
                salesData.splice(saleIndex, 1);
                
                // تسجيل العملية
                window.securityManager.logOperation('حذف فاتورة', {
                    invoiceId: invoiceId,
                    customerName: sale.customer_name || 'عميل نقدي',
                    totalAmount: sale.final_total
                });
                
                // تحديث الواجهة
                renderInvoicesTable();
                updateStatistics();
                
                // تم إزالة الإشعار
                
            } catch (error) {
                console.error('خطأ في حذف الفاتورة:', error);
                // تم إزالة الإشعار
            }
        }

        // تحديث إحصائيات الطباعة
        function updatePrintStats() {
            let totalPrints = parseInt(localStorage.getItem('totalPrints') || '0');
            totalPrints++;
            localStorage.setItem('totalPrints', totalPrints);
            
            const today = new Date().toDateString();
            const lastPrintDate = localStorage.getItem('lastPrintDate');
            let todayPrints = parseInt(localStorage.getItem('todayPrints') || '0');
            
            if (lastPrintDate !== today) {
                todayPrints = 1;
                localStorage.setItem('lastPrintDate', today);
            } else {
                todayPrints++;
            }
            localStorage.setItem('todayPrints', todayPrints);
            
            if (document.getElementById('totalPrints')) {
                document.getElementById('totalPrints').textContent = totalPrints;
            }
            if (document.getElementById('todayPrints')) {
                document.getElementById('todayPrints').textContent = todayPrints;
            }
        }

        function showDebtDetails(debtId) {
            console.log('=== Show Debt Details ===');
            console.log('Looking for debt ID:', debtId);
            console.log('Available debts:', debtsData);
            
            const debt = debtsData.find(d => 
                d.id == debtId || 
                d.__backendId == debtId || 
                d.debt_id == debtId
            );
            
            if (!debt) {
                console.log('❌ Debt not found!');
                console.log('Searched ID:', debtId);
                console.log('Available debt IDs:', debtsData.map(d => ({
                    id: d.id,
                    __backendId: d.__backendId,
                    debt_id: d.debt_id
                })));
                // تم إزالة الإشعار
                return;
            }
            
            console.log('✅ Found debt:', debt);
            console.log('Debt properties:');
            console.log('  - total_amount:', debt.total_amount);
            console.log('  - final_total:', debt.final_total);
            console.log('  - remaining_amount:', debt.remaining_amount);
            console.log('  - paid_amount:', debt.paid_amount);
            console.log('  - monthly_amount:', debt.monthly_amount);
            console.log('  - installment_months:', debt.installment_months);
            console.log('  - installments:', debt.installments);
            console.log('  - invoice_id:', debt.invoice_id);
            
            // حفظ معرف الدين الحالي
            window.currentDebtId = debtId;
            window.currentDebt = debt;
            
            // الانتقال إلى صفحة تفاصيل الدين
            navigateTo('debtDetailsPage');
            
            // البحث عن الفاتورة المرتبطة
            const relatedSale = salesData.find(s => s.invoice_id === debt.invoice_id);
            console.log('Related sale:', relatedSale);
            
            // عرض معلومات العميل
            renderDebtCustomerInfo(debt);
            
            // عرض ملخص الدين
            renderDebtSummary(debt);
            
            // عرض تفاصيل الفاتورة
            renderDebtInvoiceDetails(relatedSale);
            
            // عرض جدول الأقساط
            renderInstallmentsTable(debt, relatedSale);
            
            // عرض سجل التسديدات
            renderPaymentsHistory(debt);
            
            console.log('======================');
        }
        
        // عرض معلومات العميل
        function renderDebtCustomerInfo(debt) {
            const container = document.getElementById('debtCustomerInfo');
            if (!container) return;
            
            // حساب عدد الأشهر المسددة والمتبقية
            let paidMonths = 0;
            let remainingMonths = 0;
            let isPaid = false;
            
            if (debt.installments && Array.isArray(debt.installments) && debt.installments.length > 0) {
                paidMonths = debt.installments.filter(inst => inst.status === 'paid').length;
                remainingMonths = debt.installments.length - paidMonths;
                isPaid = remainingMonths === 0;
            } else {
                // إذا لم توجد أقساط، نستخدم الطريقة القديمة
                const remainingAmount = debt.remaining_amount !== undefined ? debt.remaining_amount : (debt.total_amount || debt.final_total || 0);
                isPaid = remainingAmount <= 0;
                remainingMonths = isPaid ? 0 : (debt.installment_months || 0);
            }
            
            const isOverdue = new Date(debt.due_date) < new Date() && !isPaid;
            
            console.log('Customer info - Paid months:', paidMonths, 'Remaining:', remainingMonths, 'isPaid:', isPaid);
            
            let statusColor = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            let statusText = `${paidMonths} من ${debt.installment_months || 0} شهر`;
            let statusIcon = 'clock';
            
            if (isPaid) {
                statusColor = 'var(--success-gradient)';
                statusText = 'مسدد بالكامل';
                statusIcon = 'check-double';
            } else if (isOverdue) {
                statusColor = 'var(--danger-gradient)';
                statusText = `متأخر - ${paidMonths}/${debt.installment_months || 0} شهر`;
                statusIcon = 'exclamation-triangle';
            }
            
            container.innerHTML = `
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-user"></i></div>
                    <div class="stat-label">اسم العميل</div>
                    <div class="stat-value" style="font-size: 1.5rem;">${debt.customer_name}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-phone"></i></div>
                    <div class="stat-label">رقم الهاتف</div>
                    <div class="stat-value" style="font-size: 1.5rem;">${debt.customer_phone}</div>
                </div>
                <div class="stat-card" style="background: ${statusColor}; color: white;">
                    <div class="stat-icon"><i class="fas fa-${statusIcon}"></i></div>
                    <div class="stat-label">الحالة</div>
                    <div class="stat-value">${statusText}</div>
                </div>
            `;
        }
        
        // عرض ملخص الدين
        function renderDebtSummary(debt) {
            const container = document.getElementById('debtSummaryCard');
            if (!container) {
                console.error('❌ debtSummaryCard container not found!');
                return;
            }
            
            console.log('=== Rendering Debt Summary ===');
            console.log('Raw debt object:', JSON.stringify(debt, null, 2));
            console.log('Debt.total_amount:', debt.total_amount, typeof debt.total_amount);
            console.log('Debt.final_total:', debt.final_total, typeof debt.final_total);
            console.log('Debt.remaining_amount:', debt.remaining_amount, typeof debt.remaining_amount);
            console.log('Debt.paid_amount:', debt.paid_amount, typeof debt.paid_amount);
            console.log('Debt.installments:', debt.installments);
            console.log('Debt.invoice_id:', debt.invoice_id);
            console.log('Debt.linked_invoices:', debt.linked_invoices);
            
            // 🔥 إصلاح جديد: حساب المبلغ الإجمالي من جميع الفواتير المرتبطة
            let totalAmount = 0;
            
            // المحاولة 1: من جميع الفواتير المرتبطة (الأولوية الأولى)
            if (debt.linked_invoices && Array.isArray(debt.linked_invoices) && debt.linked_invoices.length > 0) {
                console.log('🔍 حساب من الفواتير المرتبطة:', debt.linked_invoices);
                
                debt.linked_invoices.forEach(invoiceId => {
                    const relatedSale = salesData.find(s => s.invoice_id === invoiceId);
                    if (relatedSale && relatedSale.final_total) {
                        const invoiceTotal = parseFloat(relatedSale.final_total);
                        totalAmount += invoiceTotal;
                        console.log(`  ✓ فاتورة ${invoiceId}: ${invoiceTotal}`);
                    }
                });
                
                console.log('✓ إجمالي من جميع الفواتير المرتبطة:', totalAmount);
            }
            // المحاولة 2: من الفاتورة الأساسية فقط
            else if (debt.invoice_id) {
                const relatedSale = salesData.find(s => s.invoice_id === debt.invoice_id);
                if (relatedSale && relatedSale.final_total) {
                    totalAmount = parseFloat(relatedSale.final_total);
                    console.log('✓ Got total from main invoice:', totalAmount);
                }
            }
            
            // المحاولة 3: من حقل final_total في الدين
            if (!totalAmount && debt.final_total !== undefined && debt.final_total !== null) {
                totalAmount = parseFloat(debt.final_total);
                console.log('✓ Got total from debt.final_total:', totalAmount);
            }
            
            // المحاولة 4: من حقل total_amount في الدين
            if (!totalAmount && debt.total_amount !== undefined && debt.total_amount !== null) {
                totalAmount = parseFloat(debt.total_amount);
                console.log('✓ Got total from debt.total_amount:', totalAmount);
            }
            
            // المحاولة 5: من حقل remaining_amount (إذا لم يكن مدفوع شيء)
            if (!totalAmount && debt.remaining_amount !== undefined && debt.remaining_amount !== null) {
                totalAmount = parseFloat(debt.remaining_amount);
                console.log('✓ Got total from debt.remaining_amount:', totalAmount);
            }
            
            // المحاولة 6: حساب من الأقساط
            if (!totalAmount && debt.installments && Array.isArray(debt.installments) && debt.installments.length > 0) {
                totalAmount = debt.installments.reduce((sum, inst) => sum + parseFloat(inst.amount || 0), 0);
                console.log('✓ Calculated total from installments:', totalAmount);
            }
            
            // المحاولة 7: من القسط الشهري × عدد الأشهر
            if (!totalAmount && debt.monthly_amount && debt.installment_months) {
                totalAmount = parseFloat(debt.monthly_amount) * parseInt(debt.installment_months);
                console.log('✓ Calculated total from monthly × months:', totalAmount);
            }
            
            console.log('Final totalAmount:', totalAmount);
            
            // حساب المبلغ المدفوع من الأقساط
            let paidAmount = 0;
            let paidMonths = 0;
            
            console.log('=== Calculating Paid Amount ===');
            console.log('Installments array:', debt.installments);
            console.log('Is array?', Array.isArray(debt.installments));
            console.log('Length:', debt.installments?.length);
            
            if (debt.installments && Array.isArray(debt.installments) && debt.installments.length > 0) {
                console.log('Calculating from installments:');
                debt.installments.forEach((inst, index) => {
                    console.log(`  Installment ${index + 1}:`, JSON.stringify(inst, null, 2));
                    console.log(`    Status: "${inst.status}" (type: ${typeof inst.status})`);
                    console.log(`    Paid amount: ${inst.paid_amount} (type: ${typeof inst.paid_amount})`);
                    console.log(`    Amount: ${inst.amount} (type: ${typeof inst.amount})`);
                    
                    if (inst.status === 'paid') {
                        const instAmount = parseFloat(inst.paid_amount || inst.amount || 0);
                        console.log(`    ✓ PAID - Adding amount: ${instAmount}`);
                        paidAmount += instAmount;
                        paidMonths++;
                    } else {
                        console.log(`    ✗ NOT PAID - Status is "${inst.status}"`);
                    }
                });
            } else if (debt.paid_amount !== undefined && debt.paid_amount !== null) {
                paidAmount = parseFloat(debt.paid_amount) || 0;
                console.log('Using debt.paid_amount:', paidAmount);
            } else {
                console.log('⚠️ No installments found and no paid_amount field!');
            }
            
            console.log('=== Paid Amount Calculation Complete ===');
            console.log('Total Paid Amount:', paidAmount);
            console.log('Paid Months:', paidMonths);
            
            console.log('Final calculations:');
            console.log('  Total Amount:', totalAmount);
            console.log('  Paid Amount:', paidAmount);
            console.log('  Paid Months:', paidMonths);
            
            // التأكد من صحة الأرقام
            totalAmount = parseFloat(totalAmount) || 0;
            paidAmount = parseFloat(paidAmount) || 0;
            
            // حساب المبلغ المتبقي
            let remainingAmount = totalAmount - paidAmount;
            
            // التأكد من أن المبلغ المتبقي لا يكون سالب
            if (remainingAmount < 0) remainingAmount = 0;
            
            // حساب النسبة المئوية مع حماية من القسمة على صفر
            let percentage = 0;
            if (totalAmount > 0 && !isNaN(totalAmount) && !isNaN(paidAmount)) {
                percentage = ((paidAmount / totalAmount) * 100).toFixed(1);
            }
            
            console.log('Summary Results:');
            console.log('  Total:', totalAmount);
            console.log('  Paid:', paidAmount);
            console.log('  Remaining:', remainingAmount);
            console.log('  Percentage:', percentage + '%');
            
            if (totalAmount === 0) {
                console.warn('⚠️ WARNING: Total amount is 0! This will cause display issues.');
                console.log('Debt object keys:', Object.keys(debt));
                console.log('All debt values:', debt);
            }
            
            console.log('==========================');
            
            container.innerHTML = `
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                    <div>
                        <div style="color: var(--theme-text-secondary); font-size: var(--font-size-base); margin-bottom: 5px;">المبلغ الإجمالي</div>
                        <div style="font-size: 24px; font-weight: bold; color: var(--primary-color);">${formatCurrency(totalAmount)}</div>
                    </div>
                    <div>
                        <div style="color: var(--theme-text-secondary); font-size: var(--font-size-base); margin-bottom: 5px;">المبلغ المدفوع</div>
                        <div style="font-size: 24px; font-weight: bold; color: var(--success-color);">${formatCurrency(paidAmount)}</div>
                    </div>
                    <div>
                        <div style="color: var(--theme-text-secondary); font-size: var(--font-size-base); margin-bottom: 5px;">المبلغ المتبقي</div>
                        <div style="font-size: 24px; font-weight: bold; color: var(--danger-color);">${formatCurrency(remainingAmount)}</div>
                    </div>
                    <div>
                        <div style="color: var(--theme-text-secondary); font-size: var(--font-size-base); margin-bottom: 5px;">نسبة السداد</div>
                        <div style="font-size: 24px; font-weight: bold;">${percentage}%</div>
                        <div style="width: 100%; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; margin-top: 10px; overflow: hidden;">
                            <div style="width: ${percentage}%; height: 100%; background: var(--success-gradient); transition: width 0.3s ease;"></div>
                        </div>
                    </div>
                </div>
            `;
        }
        
        // عرض تفاصيل الفاتورة
        function renderDebtInvoiceDetails(relatedSale) {
            const container = document.getElementById('debtInvoiceDetails');
            if (!container) return;
            
            const debt = window.currentDebt;
            
            // جمع جميع الفواتير المرتبطة
            const invoiceIds = debt.linked_invoices || [debt.invoice_id];
            console.log('📋 الفواتير المرتبطة:', invoiceIds);
            
            // البحث عن جميع الفواتير
            const allInvoices = invoiceIds.map(invoiceId => {
                const sale = salesData.find(s => s.invoice_id === invoiceId);
                return sale;
            }).filter(sale => sale); // إزالة القيم الفارغة
            
            console.log('✅ الفواتير التي تم العثور عليها:', allInvoices.length);
            
            if (allInvoices.length === 0) {
                container.innerHTML = '<p style="text-align: center; color: var(--theme-text-secondary); padding: 20px;">لا توجد فواتير مرتبطة</p>';
                return;
            }
            
            // بناء HTML لكل فاتورة
            const invoicesHTML = allInvoices.map((sale, index) => {
                // التأكد من أن items مصفوفة
                let items = [];
                if (sale.items && Array.isArray(sale.items)) {
                    items = sale.items;
                } else if (typeof sale.items === 'string') {
                    try {
                        items = JSON.parse(sale.items);
                    } catch (e) {
                        items = [];
                    }
                }
                
                const itemsHTML = items.length > 0 ? items.map(item => {
                    const price = item.product_price || item.price || 0;
                    const quantity = item.quantity || 1;
                    const total = quantity * price;
                    return `
                    <tr>
                        <td>
                            <div style="display: flex; align-items: center; gap: 0.5rem;">
                                <i class="fas fa-box"></i>
                                ${item.product_name || item.name || 'منتج'}
                            </div>
                        </td>
                        <td style="text-align: center;">${quantity}</td>
                        <td>${formatCurrency(price)}</td>
                        <td style="font-weight: bold; color: var(--primary-color);">${formatCurrency(total)}</td>
                    </tr>
                    `;
                }).join('') : '<tr><td colspan="4" style="text-align: center; padding: 20px; color: var(--theme-text-secondary);">لا توجد منتجات</td></tr>';
                
                const isFirst = index === 0;
                const badgeColor = isFirst ? 'var(--primary-color)' : 'var(--warning-color)';
                const badgeText = isFirst ? 'الفاتورة الأصلية' : `فاتورة مضافة #${index}`;
                
                return `
                <div class="invoice-card" style="background: var(--theme-bg-secondary); padding: 20px; border-radius: 12px; margin-bottom: 20px; border: 2px solid ${badgeColor};">
                    <!-- شارة الفاتورة -->
                    <div style="display: inline-block; background: ${badgeColor}; color: white; padding: 0.4rem 1rem; border-radius: 20px; font-size: 0.85rem; font-weight: 600; margin-bottom: 15px;">
                        <i class="fas ${isFirst ? 'fa-file-invoice' : 'fa-plus-circle'}"></i>
                        ${badgeText}
                    </div>
                    
                    <!-- معلومات الفاتورة -->
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
                        <div>
                            <div style="color: var(--theme-text-secondary); font-size: var(--font-size-sm);">
                                <i class="fas fa-hashtag"></i> رقم الفاتورة
                            </div>
                            <div style="font-size: var(--font-size-lg); font-weight: bold; margin-top: 5px; color: ${badgeColor};">
                                ${sale.invoice_id}
                            </div>
                        </div>
                        <div>
                            <div style="color: var(--theme-text-secondary); font-size: var(--font-size-sm);">
                                <i class="fas fa-calendar"></i> تاريخ الفاتورة
                            </div>
                            <div style="font-size: var(--font-size-base); font-weight: 600; margin-top: 5px;">
                                ${new Date(sale.timestamp).toLocaleDateString('ar-IQ', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                            <div style="font-size: var(--font-size-sm); color: var(--theme-text-secondary);">
                                ${new Date(sale.timestamp).toLocaleTimeString('ar-IQ')}
                            </div>
                        </div>
                        <div>
                            <div style="color: var(--theme-text-secondary); font-size: var(--font-size-sm);">
                                <i class="fas fa-credit-card"></i> طريقة الدفع
                            </div>
                            <div style="font-size: var(--font-size-base); font-weight: 500; margin-top: 5px;">
                                <i class="fas fa-calendar-alt"></i> ${sale.payment_type || 'أقساط'}
                            </div>
                        </div>
                    </div>
                    
                    <!-- جدول المنتجات -->
                    <div class="table-container" style="margin-top: 15px;">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>المنتج</th>
                                    <th style="text-align: center;">الكمية</th>
                                    <th>السعر</th>
                                    <th>الإجمالي</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${itemsHTML}
                            </tbody>
                        </table>
                    </div>
                    
                    <!-- ملخص الفاتورة -->
                    <div style="margin-top: 15px; padding: 15px; background: var(--theme-bg-card); border-radius: 8px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="color: var(--theme-text-secondary);">المجموع الفرعي:</span>
                            <span style="font-weight: 600;">${formatCurrency(sale.subtotal || 0)}</span>
                        </div>
                        ${(sale.discount_amount || sale.discount) ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: var(--success-color);">
                            <span>الخصم:</span>
                            <span style="font-weight: 600;">-${formatCurrency(sale.discount_amount || sale.discount || 0)}</span>
                        </div>
                        ` : ''}
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="color: var(--theme-text-secondary);">الضريبة:</span>
                            <span style="font-weight: 600;">${formatCurrency(sale.tax_amount || sale.tax || 0)}</span>
                        </div>
                        ${sale.additional_amount ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: var(--warning-color);">
                            <span>المبلغ الإضافي:</span>
                            <span style="font-weight: 600;">+${formatCurrency(sale.additional_amount)}</span>
                        </div>
                        ` : ''}
                        ${sale.down_payment ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px; color: var(--success-color);">
                            <span>الدفعة المقدمة:</span>
                            <span style="font-weight: 600;">${formatCurrency(sale.down_payment)}</span>
                        </div>
                        ` : ''}
                        ${sale.installment_months ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="color: var(--theme-text-secondary);">عدد الأقساط:</span>
                            <span style="font-weight: 600;">${sale.installment_months} شهر</span>
                        </div>
                        ` : ''}
                        ${sale.monthly_amount ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="color: var(--theme-text-secondary);">القسط الشهري:</span>
                            <span style="font-weight: 600;">${formatCurrency(sale.monthly_amount)}</span>
                        </div>
                        ` : ''}
                        ${sale.start_date ? `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="color: var(--theme-text-secondary);">تاريخ بداية الأقساط:</span>
                            <span style="font-weight: 600;">${new Date(sale.start_date).toLocaleDateString('en-GB')}</span>
                        </div>
                        ` : ''}
                        ${sale.installment_details?.advanced_control_used || sale.installment_details?.custom_values_used ? `
                        <div style="display: flex; align-items: center; gap: 8px; margin-top: 12px; padding: 10px; background: rgba(139, 92, 246, 0.1); border-radius: 6px; border: 1px solid rgba(139, 92, 246, 0.3);">
                            <i class="fas fa-cog" style="color: #8b5cf6;"></i>
                            <span style="color: #8b5cf6; font-weight: 600; font-size: 0.9rem;">تم استخدام التحكم المتقدم في الأقساط</span>
                        </div>
                        ` : ''}
                        <div style="display: flex; justify-content: space-between; padding-top: 10px; border-top: 2px solid ${badgeColor}; font-size: var(--font-size-lg); font-weight: bold; color: ${badgeColor};">
                            <span>الإجمالي:</span>
                            <span>${formatCurrency(sale.final_total || 0)}</span>
                        </div>
                    </div>
                </div>
                `;
            }).join('');
            
            // حساب الإجمالي الكلي لجميع الفواتير
            const grandTotal = allInvoices.reduce((sum, sale) => sum + (parseFloat(sale.final_total) || 0), 0);
            
            container.innerHTML = `
                <!-- عنوان القسم -->
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
                    <h3 style="margin: 0; display: flex; align-items: center; gap: 0.75rem;">
                        <i class="fas fa-file-invoice-dollar" style="color: var(--primary-color);"></i>
                        تفاصيل الفواتير
                        <span style="background: var(--primary-color); color: white; padding: 0.25rem 0.75rem; border-radius: 20px; font-size: 0.8rem;">
                            ${allInvoices.length} ${allInvoices.length === 1 ? 'فاتورة' : 'فواتير'}
                        </span>
                    </h3>
                </div>
                
                <!-- جميع الفواتير -->
                ${invoicesHTML}
                
                <!-- الإجمالي الكلي (إذا كان هناك أكثر من فاتورة) -->
                ${allInvoices.length > 1 ? `
                <div style="background: linear-gradient(135deg, var(--primary-color), var(--secondary-color)); padding: 20px; border-radius: 12px; color: white; margin-top: 20px;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <div style="font-size: var(--font-size-sm); opacity: 0.9; margin-bottom: 5px;">
                                <i class="fas fa-calculator"></i> الإجمالي الكلي لجميع الفواتير
                            </div>
                            <div style="font-size: var(--font-size-3xl); font-weight: bold;">
                                ${formatCurrency(grandTotal)}
                            </div>
                        </div>
                        <div style="font-size: 3rem; opacity: 0.3;">
                            <i class="fas fa-receipt"></i>
                        </div>
                    </div>
                </div>
                ` : ''}
            `;
        }
        
        // عرض جدول الأقساط
        function renderInstallmentsTable(debt, relatedSale) {
            const tbody = document.getElementById('installmentsTableBody');
            if (!tbody) {
                console.error('❌ installmentsTableBody not found!');
                return;
            }
            
            console.log('=== Rendering Installments Table ===');
            console.log('Debt:', debt);
            console.log('Related Sale:', relatedSale);
            
            // الحصول على عدد الأشهر
            const months = parseInt(debt.installment_months || relatedSale?.installment_months || 12);
            console.log('Total months:', months);
            
            // الحصول على القسط الشهري
            let monthlyAmount = parseFloat(debt.monthly_amount || relatedSale?.monthly_amount || 0);
            console.log('Monthly amount from debt:', monthlyAmount);
            
            // الحصول على المبلغ الإجمالي
            let totalAmount = parseFloat(debt.total_amount || debt.final_total || relatedSale?.final_total || debt.remaining_amount || 0);
            console.log('Total amount:', totalAmount);
            
            // إذا كان monthlyAmount يساوي 0، احسبه من المبلغ الإجمالي
            if (monthlyAmount === 0 && totalAmount > 0 && months > 0) {
                monthlyAmount = totalAmount / months;
                console.log('Calculated monthly amount:', monthlyAmount);
            }
            
            // إذا كان totalAmount يساوي 0، احسبه من القسط الشهري
            if (totalAmount === 0 && monthlyAmount > 0 && months > 0) {
                totalAmount = monthlyAmount * months;
                console.log('Calculated total amount:', totalAmount);
            }
            
            console.log('Final values - Months:', months, 'Monthly:', monthlyAmount, 'Total:', totalAmount);
            
            // الحصول على مصفوفة الأقساط أو إنشاؤها
            let installments = [];
            
            if (debt.installments && Array.isArray(debt.installments) && debt.installments.length > 0) {
                installments = debt.installments;
                console.log('✓ Using existing installments:', installments);
            } else {
                // إنشاء مصفوفة الأقساط
                console.log('Creating new installments array');
                const startDate = new Date(debt.timestamp || relatedSale?.timestamp || Date.now());
                
                for (let i = 0; i < months; i++) {
                    const dueDate = new Date(startDate);
                    dueDate.setMonth(dueDate.getMonth() + i + 1);
                    
                    installments.push({
                        month: i + 1,
                        due_date: dueDate.toISOString(),
                        amount: monthlyAmount,
                        status: 'pending',
                        paid_date: null,
                        paid_amount: 0
                    });
                }
                console.log('✓ Created installments:', installments);
            }
            
            if (installments.length === 0) {
                console.warn('⚠️ No installments to display!');
                tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 20px; color: var(--theme-text-secondary);">لا توجد أقساط</td></tr>';
                return;
            }
            
            const now = new Date();
            tbody.innerHTML = installments.map(inst => buildInstallmentRowWithCarryforward(inst, debt)).join('');

            // إضافة ملخص المبالغ المرحلة إذا وجد
            const summaryContainer = document.getElementById('carryforwardSummaryContainer');
            if (summaryContainer) {
                const carryforwardSummary = createCarryforwardSummary(debt);
                summaryContainer.innerHTML = carryforwardSummary;
            }

            console.log('✅ Installments table rendered successfully');
            console.log('=====================================');
        }
        
        // عرض سجل التسديدات
        function renderPaymentsHistory(debt) {
            const tbody = document.getElementById('paymentsHistoryBody');
            if (!tbody) return;
            
            const payments = debt.payments || [];
            
            if (payments.length === 0) {
                tbody.innerHTML = '<tr><td colspan="4" style="text-align: center; padding: 20px; color: var(--theme-text-secondary);">لا توجد تسديدات حتى الآن</td></tr>';
                return;
            }
            
            tbody.innerHTML = payments.map(payment => {
                // ملاحظة تلقائية للدفع الجزئي
                let autoNote = payment.notes || '';
                if (payment.payment_type === 'partial' && payment.difference > 0) {
                    autoNote = `تم دفع جزء من القسط (${formatCurrency(payment.amount)})، المتبقي (${formatCurrency(payment.difference)}) تم ترحيله إلى الشهر القادم.`;
                }
                return `
                    <tr>
                        <td>${new Date(payment.date).toLocaleString('en-US')}</td>
                        <td style="font-weight: bold; color: var(--success-color);">${formatCurrency(payment.amount)}</td>
                        <td><strong>الشهر ${payment.month}</strong></td>
                        <td>${autoNote}</td>
                    </tr>
                `;
            }).join('');
        }

        // ================================================================
        // دوال مساعدة جديدة لنظام الترحيل
        // ================================================================

        /**
         * حساب إجمالي المبالغ المرحلة في دين معين
         */
        function getTotalCarryforward(debt) {
            if (!debt.installments) return 0;
            return debt.installments.reduce((total, inst) => {
                return total + (inst.carryforward_amount || 0);
            }, 0);
        }

        /**
         * الحصول على معلومات القسط مع الترحيل
         */
        function getInstallmentWithCarryforward(installment) {
            const original = installment.original_amount || installment.amount;
            const carryforward = installment.carryforward_received || 0;
            return {
                original: original,
                carryforward: carryforward,
                total: original + carryforward,
                hasCarryforward: carryforward > 0
            };
        }

        /**
         * بناء HTML لصف قسط واحد مع معلومات الترحيل
         */
        function buildInstallmentRowWithCarryforward(inst, debt) {
            const dueDate = inst.due_date ? new Date(inst.due_date).toLocaleDateString('ar-IQ') : '-';
            const paidDate = inst.paid_date ? new Date(inst.paid_date).toLocaleDateString('ar-IQ') : '-';
            // معلومات الترحيل
            const hasCarryforward = (inst.carryforward_received || 0) > 0;
            const carryforwardInfo = hasCarryforward 
                ? `<div style="color: #f59e0b; font-size: 0.85em; margin-top: 4px;">
                     <i class="fas fa-arrow-left"></i> 
                     مرحل من الشهر ${inst.carryforward_from_month}: 
                     ${(inst.carryforward_received || 0).toLocaleString('en')} د.ع
                   </div>` 
                : '';
            // المبلغ الأصلي (قبل الترحيل)
            const originalAmount = inst.original_amount || inst.amount;
            const displayAmount = hasCarryforward 
                ? `<div>
                     <div style="font-weight: bold;">${inst.amount.toLocaleString('en')} د.ع</div>
                     <div style="color: #6b7280; font-size: 0.85em;">
                       الأصلي: ${originalAmount.toLocaleString('en')} د.ع
                     </div>
                   </div>`
                : `${inst.amount.toLocaleString('en')} د.ع`;
            // الحالة مع التفاصيل
            let statusHtml = '';
            if (inst.status === 'paid') {
                statusHtml = `<span class="installment-status paid">✓ مسدد</span>`;
            } else if (inst.status === 'partially_paid') {
                const remaining = inst.amount - (inst.paid_amount || 0);
                statusHtml = `<span class="installment-status partially_paid">⚠️ دفع جزئي</span>
                              <div style="font-size: 0.85em; color: #dc2626; margin-top: 4px;">
                                متبقي: ${remaining.toLocaleString('en')} د.ع
                              </div>`;
            } else {
                const now = new Date();
                const due = new Date(inst.due_date);
                const isOverdue = due < now;
                statusHtml = isOverdue 
                    ? `<span class="installment-status overdue">⏰ متأخر</span>` 
                    : `<span class="installment-status pending">⏳ معلق</span>`;
            }
            return `
                <tr>
                    <td>${inst.month}</td>
                    <td>${displayAmount}${carryforwardInfo}</td>
                    <td>${dueDate}</td>
                    <td>${statusHtml}</td>
                    <td>${paidDate}</td>
                    <td>
                        ${inst.status !== 'paid' 
                            ? `<button class="action-btn" onclick="payInstallment('${debt.id}', ${inst.month})" 
                                title="تسديد القسط">
                                <i class="fas fa-money-bill-wave"></i> تسديد
                               </button>`
                            : `<span style="color: #10b981;">✓ تم الدفع</span>`
                        }
                    </td>
                </tr>
            `;
        }

        /**
         * إنشاء ملخص للمبالغ المرحلة في الدين
         */
        function createCarryforwardSummary(debt) {
            if (!debt.installments) return '';
            const totalCarryforward = getTotalCarryforward(debt);
            if (totalCarryforward === 0) return '';
            const carryforwardInstallments = debt.installments.filter(
                inst => (inst.carryforward_received || 0) > 0
            );
            if (carryforwardInstallments.length === 0) return '';
            let summaryHtml = `
                <div class="carryforward-info">
                    <div style="font-weight: bold; margin-bottom: 8px;">
                        <i class="fas fa-info-circle"></i> معلومات المبالغ المرحلة
                    </div>
                    <div style="margin-bottom: 8px;">
                        إجمالي المبالغ المرحلة: <strong>${totalCarryforward.toLocaleString('en')} د.ع</strong>
                    </div>
                    <div style="font-size: 0.9em;">
                        الأقساط المتأثرة: ${carryforwardInstallments.map(inst => 
                            `الشهر ${inst.month} (${(inst.carryforward_received || 0).toLocaleString('en')} د.ع)`
                        ).join(', ')}
                    </div>
                </div>
            `;
            return summaryHtml;
        }

        // فتح نافذة تسديد قسط شهري
        function payInstallment(debtId, monthNumber) {
            const debt = debtsData.find(d => 
                d.id == debtId || 
                d.__backendId == debtId || 
                d.debt_id == debtId
            );
            
            if (!debt) {
                // تم إزالة الإشعار
                return;
            }
            
            // تهيئة الأقساط إذا لم تكن موجودة
            const relatedSale = salesData.find(s => s.invoice_id === debt.invoice_id);
            
            if (!debt.installments || debt.installments.length === 0) {
                const months = debt.installment_months || relatedSale?.installment_months || 12;
                let monthlyAmount = parseFloat(debt.monthly_amount || relatedSale?.monthly_amount || 0);
                
                // إذا كان monthlyAmount يساوي 0، احسبه من المبلغ الإجمالي
                if (monthlyAmount === 0) {
                    const totalAmount = parseFloat(debt.total_amount || debt.final_total || debt.remaining_amount || relatedSale?.final_total || 0);
                    monthlyAmount = totalAmount / months;
                }
                
                console.log('Creating installments - Months:', months, 'Monthly Amount:', monthlyAmount);
                
                debt.installments = [];
                const startDate = new Date(debt.timestamp || relatedSale?.timestamp || Date.now());
                for (let i = 0; i < months; i++) {
                    const dueDate = new Date(startDate);
                    dueDate.setMonth(dueDate.getMonth() + i + 1);
                    
                    debt.installments.push({
                        month: i + 1,
                        due_date: dueDate.toISOString(),
                        amount: monthlyAmount,
                        status: 'pending',
                        paid_date: null,
                        paid_amount: 0
                    });
                }
                
                console.log('✅ Created installments:', debt.installments);
            }
            
            // العثور على القسط
            const installment = debt.installments.find(inst => inst.month === monthNumber);
            if (!installment) {
                // تم إزالة الإشعار
                return;
            }
            
            if (installment.status === 'paid') {
                // تم إزالة الإشعار
                return;
            }
            
            console.log('Installment to pay:', installment);
            console.log('Installment amount:', installment.amount);
            
            // حفظ بيانات القسط الحالي
            currentInstallmentDebtId = debtId;
            currentInstallmentMonth = monthNumber;
            
            // الحصول على المبلغ الشهري مع fallback options
            let monthlyAmount = parseFloat(installment.amount) || 0;
            
            // إذا كان المبلغ 0، حاول الحصول عليه من مصادر أخرى
            if (monthlyAmount === 0) {
                monthlyAmount = parseFloat(debt.monthly_amount) || 0;
                console.log('Got amount from debt.monthly_amount:', monthlyAmount);
            }
            
            // إذا لا يزال 0، احسبه من المبلغ الإجمالي
            if (monthlyAmount === 0) {
                const totalAmount = parseFloat(debt.total_amount || debt.final_total) || 0;
                const months = parseInt(debt.installment_months) || debt.installments.length || 1;
                monthlyAmount = totalAmount / months;
                console.log('Calculated from total:', totalAmount, '/', months, '=', monthlyAmount);
            }
            
            console.log('Final monthly amount:', monthlyAmount);
            
            // ملء بيانات النافذة المنبثقة
            document.getElementById('installmentMonthDisplay').value = `الشهر ${monthNumber}`;
            const amountValue = Math.round(monthlyAmount); // تقريب للعدد الصحيح
            const amountInput = document.getElementById('installmentAmountInput');
            amountInput.value = amountValue;
            document.getElementById('installmentNotes').value = '';
            
            console.log('✅ Amount field filled with:', amountValue);
            
            // فتح النافذة المنبثقة
            showModal('payInstallmentModal');
            
            // تركيز على حقل المبلغ بعد فتح النافذة لتسهيل التعديل
            setTimeout(() => {
                if (amountInput) {
                    amountInput.focus();
                    amountInput.select(); // تحديد النص لتسهيل الكتابة فوقه
                }
            }, 300);
        }
        
        // معالجة تسديد القسط الشهري
        async function handlePayInstallment(event) {
            event.preventDefault();
            
            const paidAmountInput = document.getElementById('installmentAmountInput').value;
            const paidAmount = parseFloat(paidAmountInput) || 0;
            const notes = document.getElementById('installmentNotes').value.trim();
            
            if (paidAmount <= 0) {
                // تم إزالة الإشعار
                return;
            }
            
            const debt = debtsData.find(d => 
                d.id == currentInstallmentDebtId || 
                d.__backendId == currentInstallmentDebtId || 
                d.debt_id == currentInstallmentDebtId
            );
            
            if (!debt) {
                // تم إزالة الإشعار
                return;
            }
            
            // العثور على القسط
            const installment = debt.installments.find(inst => inst.month === currentInstallmentMonth);
            if (!installment) {
                // تم إزالة الإشعار
                return;
            }
            
            console.log('=== Processing Installment Payment with Carryforward ===');
            console.log('Month:', currentInstallmentMonth);
            console.log('Original installment amount:', installment.amount);
            console.log('Paid amount:', paidAmount);
            
            // 🆕 حساب الفرق (المبلغ المتبقي من هذا القسط)
            const originalAmount = parseFloat(installment.amount) || 0;
            const difference = originalAmount - paidAmount;
            
            console.log('Difference (to carryforward):', difference);
            
            // تحديث القسط الحالي بالمبلغ المدفوع
            installment.paid_date = new Date().toISOString();
            installment.paid_amount = paidAmount;
            
            // 🆕 تحديد حالة القسط بناءً على المبلغ المدفوع
            if (paidAmount >= originalAmount) {
                // دفع كامل أو أكثر
                installment.status = 'paid';
                installment.carryforward_amount = 0;
            } else {
                // دفع جزئي
                installment.status = 'partially_paid'; // 🆕 حالة جديدة
                installment.carryforward_amount = difference;
                
                console.log('⚠️ Partial payment detected - Carryforward:', difference);
                
                // 🆕 ترحيل المبلغ المتبقي إلى الأقساط التالية
                if (difference > 0) {
                    const nextInstallments = debt.installments.filter(
                        inst => inst.month > currentInstallmentMonth && inst.status !== 'paid'
                    );
                    
                    if (nextInstallments.length > 0) {
                        // إضافة المبلغ المتبقي إلى القسط التالي مباشرة
                        const nextInstallment = nextInstallments[0];
                        const nextOriginalAmount = parseFloat(nextInstallment.original_amount || nextInstallment.amount);
                        
                        // 🆕 حفظ المبلغ الأصلي إذا لم يكن محفوظاً
                        if (!nextInstallment.original_amount) {
                            nextInstallment.original_amount = nextInstallment.amount;
                        }
                        
                        // 🆕 إضافة الفرق إلى القسط التالي
                        nextInstallment.amount = nextOriginalAmount + difference;
                        nextInstallment.carryforward_from_month = currentInstallmentMonth;
                        nextInstallment.carryforward_received = difference;
                        
                        console.log(`✅ Carryforward added to month ${nextInstallment.month}:`);
                        console.log(`   - Original amount: ${nextOriginalAmount}`);
                        console.log(`   - Carryforward: ${difference}`);
                        console.log(`   - New amount: ${nextInstallment.amount}`);
                    }
                }
            }
            
            // إضافة السجل للتسديدات
            if (!debt.payments) {
                debt.payments = [];
            }
            
            // 🆕 إضافة معلومات أكثر تفصيلاً للسجل
            const paymentRecord = {
                date: new Date().toISOString(),
                amount: paidAmount,
                month: currentInstallmentMonth,
                original_amount: originalAmount,
                difference: difference,
                payment_type: paidAmount >= originalAmount ? 'full' : 'partial',
                notes: notes || `تسديد القسط الشهري رقم ${currentInstallmentMonth}`
            };
            
            debt.payments.push(paymentRecord);
            console.log('Payment record added:', paymentRecord);
            
            // تحديث المبلغ المتبقي والمبلغ المدفوع
            const totalAmount = debt.total_amount || debt.final_total || 0;
            const currentPaid = debt.paid_amount || 0;
            debt.paid_amount = currentPaid + paidAmount;
            
            const currentRemaining = debt.remaining_amount !== undefined ? debt.remaining_amount : totalAmount;
            debt.remaining_amount = currentRemaining - paidAmount;
            if (debt.remaining_amount < 0) debt.remaining_amount = 0;
            
            // 🆕 تحديث الحالة بشكل أدق
            const allFullyPaid = debt.installments.every(inst => inst.status === 'paid');
            const anyPartiallyPaid = debt.installments.some(inst => inst.status === 'partially_paid');
            
            if (allFullyPaid) {
                debt.status = 'مسدد';
            } else if (anyPartiallyPaid) {
                debt.status = 'نشط - دفع جزئي';
            } else {
                debt.status = 'نشط';
            }
            
            console.log('Payment processed - Paid:', debt.paid_amount, 'Remaining:', debt.remaining_amount);
            console.log('Debt status:', debt.status);
            
            // حفظ في قاعدة البيانات
            if (window.dataSdk && debt.id) {
                const updateData = {
                    installments: debt.installments,
                    payments: debt.payments,
                    remaining_amount: debt.remaining_amount,
                    paid_amount: debt.paid_amount,
                    total_amount: totalAmount,
                    status: debt.status
                };
                
                console.log('=== Saving to database ===');
                console.log('Debt ID:', debt.id);
                console.log('Update data:', JSON.stringify(updateData, null, 2));
                
                await window.dataSdk.update(debt.id, updateData);
                console.log('✅ Successfully saved to database');
                
                // إعادة تحميل البيانات
                const allData = await window.dataSdk.query();
                if (allData.isOk) {
                    debtsData = allData.data.filter(item => item.type === 'debt');
                    updateStatistics();
                    updateQuickStats();
                }
            }
            
            // طباعة إيصال تسديد القسط
            try {
                let storeSettings = {};
                try {
                    storeSettings = JSON.parse(localStorage.getItem('storeSettings') || '{}');
                } catch {}
                
                const receiptHtml = generateInstallmentPaymentReceipt({
                    debt,
                    paidInstallment: installment,
                    storeSettings
                });
                
                const printHtml = `<!DOCTYPE html><html dir="rtl" lang="ar"><head><meta charset="UTF-8"><title>إيصال تسديد قسط</title><link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet"><style>@media print { body { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; } }</style></head><body>${receiptHtml}</body></html>`;
                
                if (window.electronAPI && window.electronAPI.printInvoiceHtml) {
                    await window.electronAPI.printInvoiceHtml(printHtml, {
                        silent: true, 
                        pageSize: 'A4', 
                        printBackground: true, 
                        margins: { top: 10, bottom: 10, left: 10, right: 10 }
                    });
                } else {
                    const win = window.open('', '_blank');
                    win.document.write(printHtml);
                    win.print();
                }
            } catch (err) {
                console.error('خطأ في طباعة إيصال التسديد:', err);
            }

            // إغلاق النافذة المنبثقة
            closeModal('payInstallmentModal');
            
            // تحديث العرض
            showDebtDetails(currentInstallmentDebtId);
        }
        
        // فتح نافذة تسديد سريع من صفحة إدارة الديون
        function showQuickPayModal(debtId) {
            const debt = debtsData.find(d => 
                d.id == debtId || 
                d.__backendId == debtId || 
                d.debt_id == debtId
            );
            
            if (!debt) {
                // تم إزالة الإشعار
                return;
            }
            
            // البحث عن أول قسط غير مدفوع
            let nextUnpaidInstallment = null;
            let nextUnpaidMonth = null;
            
            if (debt.installments && Array.isArray(debt.installments) && debt.installments.length > 0) {
                for (let inst of debt.installments) {
                    if (inst.status !== 'paid') {
                        nextUnpaidInstallment = inst;
                        nextUnpaidMonth = inst.month;
                        break;
                    }
                }
            }
            
            if (!nextUnpaidInstallment) {
                // تم إزالة الإشعار
                return;
            }
            
            // فتح نافذة التسديد للقسط غير المدفوع
            payInstallment(debtId, nextUnpaidMonth);
        }
        
        // تأكيد حذف الدين
        function confirmDeleteDebt(debtId, customerName) {
            // حفظ معرف الدين
            debtToDelete = debtId;
            
            // عرض اسم العميل في النافذة
            document.getElementById('deleteDebtCustomerName').textContent = customerName;
            
            // فتح نافذة التأكيد
            showModal('confirmDeleteModal');
        }
        
        // تنفيذ حذف الدين بعد التأكيد
        function executeDeleteDebt() {
            if (debtToDelete) {
                closeModal('confirmDeleteModal');
                deleteDebt(debtToDelete);
                debtToDelete = null;
            }
        }
        
        // حذف الدين
        async function deleteDebt(debtId) {
            try {
                const debt = debtsData.find(d => 
                    d.id == debtId || 
                    d.__backendId == debtId || 
                    d.debt_id == debtId
                );
                
                if (!debt) {
                    // تم إزالة الإشعار
                    return;
                }
                
                // حذف من قاعدة البيانات
                if (window.dataSdk && (debt.id || debt.__backendId)) {
                    const deleteId = debt.id || debt.__backendId;
                    const result = await window.dataSdk.delete(deleteId);
                    
                    if (result.isOk) {
                        // إعادة تحميل البيانات
                        const allData = await window.dataSdk.query();
                        if (allData.isOk) {
                            debtsData = allData.data.filter(item => item.type === 'debt');
                            
                            // تحديث الواجهة
                            renderDebtsTable();
                            updateStatistics();
                            updateQuickStats();
                            
                            // تم إزالة الإشعار
                        }
                    } else {
                        // تم إزالة الإشعار
                    }
                } else {
                    // تم إزالة الإشعار
                }
            } catch (error) {
                console.error('Error deleting debt:', error);
                // تم إزالة الإشعار
            }
        }
        
        // دالة البحث السريع في نقطة البيع
        function filterPOSProducts() {
            renderProducts();
        }
        
        // دالة البحث في الفواتير
        function filterInvoices() {
            renderInvoicesTable();
        }
        
        // دالة البحث في المنتجات
        function filterProducts() {
            renderProductsTable();
        }
        
        // دالة البحث في المخزون
        function filterInventory() {
            renderInventoryTable();
        }
        
        // دالة البحث في الديون
        function filterDebts() {
            renderDebtsTable();
        }
        
        // ✅ دالة عرض إيصال مبيعات اليوم
        function showTodaySalesReport() {
            const today = new Date();
            const todayStr = today.toISOString().split('T')[0];
            
            // فلترة المبيعات لليوم الحالي
            const todaySales = salesData.filter(sale => {
                const saleDate = sale.timestamp || sale.created_at || sale.date;
                if (!saleDate) return false;
                const saleDateStr = new Date(saleDate).toISOString().split('T')[0];
                return saleDateStr === todayStr;
            });
            
            // حساب مبيعات نقدي وأقساط
            let cashTotal = 0;
            let installmentTotal = 0;
            let cashCount = 0;
            let installmentCount = 0;
            
            todaySales.forEach(sale => {
                const total = sale.final_total || sale.total || 0;
                if (sale.payment_method === 'نقدي' || sale.payment_type === 'نقدي') {
                    cashTotal += total;
                    cashCount++;
                } else if (sale.payment_method === 'أقساط' || sale.payment_type === 'أقساط') {
                    installmentTotal += total;
                    installmentCount++;
                }
            });
            
            const grandTotal = cashTotal + installmentTotal;
            
            // إنشاء HTML للإيصال
            const dateStr = toEnglishDigits(today.toLocaleDateString('en-GB'));
            const timeStr = toEnglishDigits(today.toLocaleTimeString('ar-IQ', { hour: '2-digit', minute: '2-digit' }));
            const dayName = today.toLocaleDateString('ar-IQ', { weekday: 'long' });
            
            // الحصول على إعدادات المتجر
            const savedSettings = localStorage.getItem('storeSettings');
            let storeName = 'معرض يعقوب';
            let storeAddress = 'باب الهاشمية';
            let storePhone = '07803092185';
            
            if (savedSettings) {
                const settings = JSON.parse(savedSettings);
                storeName = settings.storeName || storeName;
                storeAddress = settings.storeAddress || storeAddress;
                storePhone = settings.storePhone || storePhone;
            }
            
            const html = `<!DOCTYPE html>
<html dir="rtl" lang="ar">
<head>
<meta charset="UTF-8">
<title>إيصال مبيعات اليوم</title>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { 
    font-family: 'Cairo', sans-serif; 
    font-size: 11px; 
    line-height: 1.3;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
}
.page { 
    width: 210mm; 
    max-width: 100%; 
    margin: 0; 
    padding: 8mm;
    page-break-after: always;
    background: #fff;
}
.header { 
    text-align: center; 
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
    color: #fff; 
    padding: 12px; 
    border-radius: 8px;
    margin-bottom: 10px;
}
.header h1 { font-size: 20px; margin-bottom: 5px; }
.header .info { font-size: 10px; }
.date-info { 
    background: #f8f9fa; 
    padding: 10px; 
    border-radius: 6px; 
    margin-bottom: 10px;
    text-align: center;
    border: 2px solid #dee2e6;
}
.date-info .day { font-size: 14px; font-weight: 700; color: #667eea; margin-bottom: 3px; }
.date-info .date { font-size: 12px; color: #6c757d; }
.sales-grid { 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 10px; 
    margin-bottom: 10px; 
}
.sales-card { 
    padding: 12px; 
    border-radius: 8px; 
    text-align: center; 
    border: 2px solid;
}
.sales-card.cash { 
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%); 
    border-color: #11998e;
    color: #fff;
}
.sales-card.installment { 
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); 
    border-color: #f093fb;
    color: #fff;
}
.sales-card .label { font-size: 10px; opacity: 0.9; margin-bottom: 5px; }
.sales-card .amount { font-size: 18px; font-weight: 900; margin-bottom: 3px; }
.sales-card .count { font-size: 9px; opacity: 0.85; }
.total-box { 
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
    color: #fff; 
    padding: 15px; 
    border-radius: 8px;
    text-align: center;
    margin-bottom: 10px;
}
.total-box .label { font-size: 12px; opacity: 0.9; margin-bottom: 5px; }
.total-box .amount { font-size: 24px; font-weight: 900; }
.footer { 
    text-align: center; 
    background: #f8f9fa; 
    padding: 10px; 
    border-radius: 6px;
    border: 2px solid #dee2e6;
    font-size: 9px;
    color: #6c757d;
}
@media print {
    body { margin: 0; }
    .page { margin: 0; padding: 8mm; }
}
</style>
</head>
<body>
<div class="page">
    <div class="header">
        <h1>📊 إيصال مبيعات اليوم</h1>
        <div class="info"><strong>${storeName}</strong> • ${storeAddress} • ${storePhone}</div>
    </div>
    
    <div class="date-info">
        <div class="day">${dayName}</div>
        <div class="date">${dateStr} - ${timeStr}</div>
    </div>
    
    <div class="sales-grid">
        <div class="sales-card cash">
            <div class="label">💵 مبيعات نقدي</div>
            <div class="amount">${toEnglishDigits(cashTotal.toLocaleString('en'))}</div>
            <div class="count">${toEnglishDigits(cashCount)} عملية</div>
        </div>
        
        <div class="sales-card installment">
            <div class="label">📅 مبيعات أقساط</div>
            <div class="amount">${toEnglishDigits(installmentTotal.toLocaleString('en'))}</div>
            <div class="count">${toEnglishDigits(installmentCount)} عملية</div>
        </div>
    </div>
    
    <div class="total-box">
        <div class="label">💰 إجمالي الدخل في الكاشير</div>
        <div class="amount">${toEnglishDigits(grandTotal.toLocaleString('en'))} د.ع</div>
    </div>
    
    <div class="footer">
        <div style="font-weight:700;margin-bottom:3px;">نظام كاش برو - Digital Creativity</div>
        <div>تم الطباعة في: ${dateStr} - ${timeStr}</div>
    </div>
</div>
</body>
</html>`;
            
            // فتح نافذة للطباعة
            const printWindow = window.open('', '_blank');
            if (printWindow) {
                printWindow.document.write(html);
                printWindow.document.close();
                setTimeout(() => {
                    printWindow.print();
                }, 500);
            } else {
                // تم إزالة الإشعار
            }
        }
        
        function showPayDebtModal(debtId) {
            console.log('Show pay debt modal:', debtId);
        }

        function handlePayDebt(event) {
            event.preventDefault();
            console.log('Handle pay debt');
        }

        // التنقل إلى صفحات الإعدادات الفرعية
        function showSettingsPage(pageName) {
            // إخفاء جميع الصفحات الرئيسية
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
                page.style.display = ''; // إزالة inline style
            });
            
            // إظهار الصفحة المطلوبة
            const targetPage = document.getElementById(`settings-${pageName}`);
            if (targetPage) {
                targetPage.style.display = ''; // إزالة inline style
                targetPage.classList.add('active');
                setTimeout(() => {
                    targetPage.classList.add('animate__animated', 'animate__fadeIn');
                }, 10);
            }
        }

        // حفظ إعدادات المتجر
        function saveStoreSettings() {
            const storeSettings = {
                storeName: document.getElementById('settingsStoreName')?.value || '',
                ownerName: document.getElementById('settingsOwnerName')?.value || '',
                commercialReg: document.getElementById('settingsCommercialReg')?.value || '',
                taxNumber: document.getElementById('settingsTaxNumber')?.value || '',
                address: document.getElementById('settingsStoreAddress')?.value || '',
                phone1: document.getElementById('settingsStorePhone1')?.value || '',
                phone2: document.getElementById('settingsStorePhone2')?.value || '',
                email: document.getElementById('settingsStoreEmail')?.value || '',
                whatsapp: document.getElementById('settingsWhatsapp')?.value || '',
                website: document.getElementById('settingsWebsite')?.value || '',
                taxRate: parseFloat(document.getElementById('settingsTaxRate')?.value) || 0,
                currency: document.getElementById('settingsDefaultCurrency')?.value || 'IQD',
                minDebtAmount: parseFloat(document.getElementById('settingsMinDebtAmount')?.value) || 0,
                openTime: document.getElementById('settingsOpenTime')?.value || '09:00',
                closeTime: document.getElementById('settingsCloseTime')?.value || '22:00',
                closedFriday: document.getElementById('closedFriday')?.checked || false,
                closedSaturday: document.getElementById('closedSaturday')?.checked || false
            };

            // معالجة رفع الشعار
            const logoInput = document.getElementById('settingsStoreLogo');
            if (logoInput && logoInput.files && logoInput.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    storeSettings.logo = e.target.result;
                    localStorage.setItem('storeSettings', JSON.stringify(storeSettings));
                    applyStoreSettings(storeSettings);
                    // تم إزالة الإشعار
                };
                reader.readAsDataURL(logoInput.files[0]);
            } else {
                const savedSettings = JSON.parse(localStorage.getItem('storeSettings') || '{}');
                if (savedSettings.logo) {
                    storeSettings.logo = savedSettings.logo;
                }
                localStorage.setItem('storeSettings', JSON.stringify(storeSettings));
                applyStoreSettings(storeSettings);
                // تم إزالة الإشعار
            }
        }

        // تطبيق إعدادات المتجر على التطبيق
        function applyStoreSettings(settings) {
            // تطبيق اسم المتجر في جميع الأماكن
            document.querySelectorAll('.store-name-display').forEach(el => {
                el.textContent = settings.storeName || 'المتجر';
            });
            
            // تطبيق الشعار
            if (settings.logo) {
                document.querySelectorAll('.store-logo').forEach(img => {
                    img.src = settings.logo;
                });
            }
            
            // تطبيق العملة الافتراضية
            window.currentCurrency = settings.currency || 'IQD';
            
            // تطبيق نسبة الضريبة
            window.defaultTaxRate = settings.taxRate || 0;
            
            // تطبيق الحد الأدنى للدين
            window.minDebtAmount = settings.minDebtAmount || 0;
        }

        // تحميل إعدادات المتجر
        function loadStoreSettings() {
            const savedSettings = localStorage.getItem('storeSettings');
            if (savedSettings) {
                const settings = JSON.parse(savedSettings);
                
                if (document.getElementById('settingsStoreName')) document.getElementById('settingsStoreName').value = settings.storeName || '';
                if (document.getElementById('settingsOwnerName')) document.getElementById('settingsOwnerName').value = settings.ownerName || '';
                if (document.getElementById('settingsCommercialReg')) document.getElementById('settingsCommercialReg').value = settings.commercialReg || '';
                if (document.getElementById('settingsTaxNumber')) document.getElementById('settingsTaxNumber').value = settings.taxNumber || '';
                if (document.getElementById('settingsStoreAddress')) document.getElementById('settingsStoreAddress').value = settings.address || '';
                if (document.getElementById('settingsStorePhone1')) document.getElementById('settingsStorePhone1').value = settings.phone1 || '';
                if (document.getElementById('settingsStorePhone2')) document.getElementById('settingsStorePhone2').value = settings.phone2 || '';
                if (document.getElementById('settingsStoreEmail')) document.getElementById('settingsStoreEmail').value = settings.email || '';
                if (document.getElementById('settingsWhatsapp')) document.getElementById('settingsWhatsapp').value = settings.whatsapp || '';
                if (document.getElementById('settingsWebsite')) document.getElementById('settingsWebsite').value = settings.website || '';
                if (document.getElementById('settingsTaxRate')) document.getElementById('settingsTaxRate').value = settings.taxRate || 0;
                if (document.getElementById('settingsDefaultCurrency')) document.getElementById('settingsDefaultCurrency').value = settings.currency || 'IQD';
                if (document.getElementById('settingsMinDebtAmount')) document.getElementById('settingsMinDebtAmount').value = settings.minDebtAmount || 0;
                if (document.getElementById('settingsOpenTime')) document.getElementById('settingsOpenTime').value = settings.openTime || '09:00';
                if (document.getElementById('settingsCloseTime')) document.getElementById('settingsCloseTime').value = settings.closeTime || '22:00';
                if (document.getElementById('closedFriday')) document.getElementById('closedFriday').checked = settings.closedFriday || false;
                if (document.getElementById('closedSaturday')) document.getElementById('closedSaturday').checked = settings.closedSaturday || false;
                
                // تطبيق الإعدادات على التطبيق
                applyStoreSettings(settings);
            }
        }

        // حفظ إعدادات النظام
        function saveSystemSettings() {
            const systemSettings = {
                theme: document.getElementById('themeSelect')?.value || 'dark',
                colorScheme: document.getElementById('colorSchemeSelect')?.value || 'default',
                fontSize: document.getElementById('fontSizeSelect')?.value || 'medium',
                compactMode: document.getElementById('compactModeCheck')?.checked || false,
                language: document.getElementById('languageSelect')?.value || 'ar',
                dateFormat: document.getElementById('dateFormatSelect')?.value || 'DD/MM/YYYY',
                timeFormat: document.getElementById('timeFormatSelect')?.value || '12',
                itemsPerPage: document.getElementById('itemsPerPageSelect')?.value || 25,
                animations: document.getElementById('animationsCheck')?.checked !== false,
                autosave: document.getElementById('autosaveCheck')?.checked !== false,
                barcodeSound: document.getElementById('barcodeSound')?.checked !== false,
                autoPrint: document.getElementById('autoPrint')?.checked || false,
                clearCartAfterSale: document.getElementById('clearCartAfterSale')?.checked !== false
            };

            localStorage.setItem('systemSettings', JSON.stringify(systemSettings));
            
            // تطبيق الإعدادات فوراً
            applySystemSettings(systemSettings);
            
            // تم إزالة الإشعار
        }

        // تطبيق إعدادات النظام
        function applySystemSettings(settings) {
            console.log('⚙️ تطبيق إعدادات النظام:', settings);
            
            // تطبيق الثيم
            applyTheme(settings.theme || 'dark');
            
            // تطبيق مجموعة الألوان
            if (settings.colorScheme) {
                const colors = colorSchemes[settings.colorScheme] || colorSchemes.default;
                applyCustomColors(colors);
            } else {
                // تطبيق الألوان المخصصة المحفوظة
                const savedColors = localStorage.getItem('customColors');
                if (savedColors) {
                    applyCustomColors(JSON.parse(savedColors));
                }
            }
            
            // تطبيق حجم الخط
            applyFontSize(settings.fontSize || 'medium');
            
            // تطبيق اللغة
            applyLanguage(settings.language || 'ar');
            
            // تطبيق الوضع المضغوط
            if (settings.compactMode) {
                document.body.classList.add('compact-mode');
                console.log('📦 تم تفعيل الوضع المضغوط');
            } else {
                document.body.classList.remove('compact-mode');
                console.log('📦 تم تعطيل الوضع المضغوط');
            }
            
            // تطبيق الرسوم المتحركة
            if (!settings.animations) {
                document.body.classList.add('no-animations');
                console.log('🎬 تم تعطيل الرسوم المتحركة');
            } else {
                document.body.classList.remove('no-animations');
                console.log('🎬 تم تفعيل الرسوم المتحركة');
            }
            
            console.log('✅ تم تطبيق جميع إعدادات النظام بنجاح');
        }

        // تطبيق الثيم
        function applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('currentTheme', theme);
            
            // تحديث الخلفية
            const animatedBg = document.querySelector('.animated-bg');
            if (animatedBg) {
                if (theme === 'light') {
                    animatedBg.style.background = 'var(--theme-bg-primary)';
                } else {
                    animatedBg.style.background = 'var(--theme-bg-primary)';
                }
            }
            
            console.log('🎨 تم تطبيق الثيم:', theme);
        }

        // وظيفة تغيير الثيم من القائمة
        function changeTheme(theme) {
            applyTheme(theme);
            
            const themeNames = {
                'dark': '🌙 الداكن الكلاسيكي',
                'light': '☀️ الفاتح الكلاسيكي',
                'blue-dark': '🔵 الأزرق الداكن',
                'green-dark': '💚 الأخضر الداكن',
                'orange-dark': '🧡 البرتقالي الداكن',
                'purple-dark': '💜 البنفسجي الداكن',
                'red-dark': '❤️ الأحمر الداكن',
                'cyan-light': '🩵 السماوي الفاتح',
                'gold-light': '🟡 الذهبي الفاتح',
                'pink-light': '🌸 الوردي الفاتح',
                'olive': '🟢 الزيتوني',
                'royal-blue': '🔴 الأزرق الملكي'
            };
            
            const themeName = themeNames[theme] || theme;
            // تم إزالة الإشعار
        }

        // وظيفة التبديل السريع بين الثيمات
        function toggleThemeQuick() {
            const themes = [
                'dark', 'light', 'blue-dark', 'green-dark', 'orange-dark', 
                'purple-dark', 'red-dark', 'cyan-light', 'gold-light', 
                'pink-light', 'olive', 'royal-blue'
            ];
            
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const currentIndex = themes.indexOf(currentTheme);
            const nextIndex = (currentIndex + 1) % themes.length;
            const nextTheme = themes[nextIndex];
            
            changeTheme(nextTheme);
            
            // تحديث القائمة المنسدلة إذا كانت موجودة
            const themeSelect = document.getElementById('themeSelect');
            if (themeSelect) {
                themeSelect.value = nextTheme;
            }
        }

        // مجموعات الألوان المحددة مسبقاً
        const colorSchemes = {
            default: {
                primary: '#6366f1',
                secondary: '#8b5cf6',
                success: '#10b981',
                warning: '#f59e0b',
                danger: '#ef4444',
                info: '#3b82f6'
            },
            blue: {
                primary: '#3b82f6',
                secondary: '#2563eb',
                success: '#10b981',
                warning: '#f59e0b',
                danger: '#ef4444',
                info: '#0ea5e9'
            },
            green: {
                primary: '#10b981',
                secondary: '#059669',
                success: '#22c55e',
                warning: '#f59e0b',
                danger: '#ef4444',
                info: '#3b82f6'
            },
            orange: {
                primary: '#f97316',
                secondary: '#ea580c',
                success: '#10b981',
                warning: '#fb923c',
                danger: '#ef4444',
                info: '#3b82f6'
            },
            red: {
                primary: '#ef4444',
                secondary: '#dc2626',
                success: '#10b981',
                warning: '#f59e0b',
                danger: '#f87171',
                info: '#3b82f6'
            },
            purple: {
                primary: '#a855f7',
                secondary: '#9333ea',
                success: '#10b981',
                warning: '#f59e0b',
                danger: '#ef4444',
                info: '#3b82f6'
            },
            cyan: {
                primary: '#06b6d4',
                secondary: '#0891b2',
                success: '#10b981',
                warning: '#f59e0b',
                danger: '#ef4444',
                info: '#0ea5e9'
            },
            amber: {
                primary: '#f59e0b',
                secondary: '#d97706',
                success: '#10b981',
                warning: '#fbbf24',
                danger: '#ef4444',
                info: '#3b82f6'
            },
            teal: {
                primary: '#14b8a6',
                secondary: '#0d9488',
                success: '#10b981',
                warning: '#f59e0b',
                danger: '#ef4444',
                info: '#3b82f6'
            }
        };

        // معاينة مجموعة الألوان
        function previewColorScheme(scheme) {
            const colors = colorSchemes[scheme] || colorSchemes.default;
            applyCustomColors(colors);
            // تم إزالة الإشعار
        }

        // تطبيق الألوان المخصصة
        function applyCustomColors(colors) {
            const root = document.documentElement;
            
            root.style.setProperty('--primary-color', colors.primary);
            root.style.setProperty('--secondary-color', colors.secondary);
            root.style.setProperty('--success-color', colors.success);
            root.style.setProperty('--warning-color', colors.warning);
            root.style.setProperty('--danger-color', colors.danger);
            root.style.setProperty('--info-color', colors.info);
            
            // تحديث التدرجات
            root.style.setProperty('--primary-gradient', `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`);
            root.style.setProperty('--success-gradient', `linear-gradient(135deg, ${colors.success} 0%, ${adjustColor(colors.success, -20)} 100%)`);
            root.style.setProperty('--warning-gradient', `linear-gradient(135deg, ${colors.warning} 0%, ${adjustColor(colors.warning, -20)} 100%)`);
            root.style.setProperty('--danger-gradient', `linear-gradient(135deg, ${colors.danger} 0%, ${adjustColor(colors.danger, -20)} 100%)`);
            
            // تحديث حقول الألوان
            updateColorInputs(colors);
            
            // حفظ في localStorage
            localStorage.setItem('customColors', JSON.stringify(colors));
            
            console.log('🎨 تم تطبيق الألوان المخصصة:', colors);
        }

        // تحديث حقول إدخال الألوان
        function updateColorInputs(colors) {
            if (document.getElementById('primaryColorPicker')) {
                document.getElementById('primaryColorPicker').value = colors.primary;
                document.getElementById('primaryColorInput').value = colors.primary;
            }
            if (document.getElementById('secondaryColorPicker')) {
                document.getElementById('secondaryColorPicker').value = colors.secondary;
                document.getElementById('secondaryColorInput').value = colors.secondary;
            }
            if (document.getElementById('successColorPicker')) {
                document.getElementById('successColorPicker').value = colors.success;
                document.getElementById('successColorInput').value = colors.success;
            }
            if (document.getElementById('warningColorPicker')) {
                document.getElementById('warningColorPicker').value = colors.warning;
                document.getElementById('warningColorInput').value = colors.warning;
            }
            if (document.getElementById('dangerColorPicker')) {
                document.getElementById('dangerColorPicker').value = colors.danger;
                document.getElementById('dangerColorInput').value = colors.danger;
            }
            if (document.getElementById('infoColorPicker')) {
                document.getElementById('infoColorPicker').value = colors.info;
                document.getElementById('infoColorInput').value = colors.info;
            }
        }

        // وظيفة مساعدة لتعديل سطوع اللون
        function adjustColor(color, amount) {
            const num = parseInt(color.replace('#', ''), 16);
            const r = Math.max(0, Math.min(255, (num >> 16) + amount));
            const g = Math.max(0, Math.min(255, ((num >> 8) & 0x00FF) + amount));
            const b = Math.max(0, Math.min(255, (num & 0x0000FF) + amount));
            return '#' + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
        }

        // إعادة تعيين الألوان الافتراضية
        function resetDefaultColors() {
            if (confirm('هل تريد استعادة الألوان الافتراضية؟')) {
                applyCustomColors(colorSchemes.default);
                const colorSchemeSelect = document.getElementById('colorSchemeSelect');
                if (colorSchemeSelect) colorSchemeSelect.value = 'default';
                // تم إزالة الإشعار
            }
        }

        // إعداد معالجات تغيير الألوان
        function setupColorPickers() {
            // اللون الرئيسي
            ['primaryColorPicker', 'primaryColorInput'].forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.addEventListener('change', function() {
                        const value = this.value;
                        document.getElementById('primaryColorPicker').value = value;
                        document.getElementById('primaryColorInput').value = value;
                        updateSingleColor('primary', value);
                    });
                }
            });

            // اللون الثانوي
            ['secondaryColorPicker', 'secondaryColorInput'].forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.addEventListener('change', function() {
                        const value = this.value;
                        document.getElementById('secondaryColorPicker').value = value;
                        document.getElementById('secondaryColorInput').value = value;
                        updateSingleColor('secondary', value);
                    });
                }
            });

            // لون النجاح
            ['successColorPicker', 'successColorInput'].forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.addEventListener('change', function() {
                        const value = this.value;
                        document.getElementById('successColorPicker').value = value;
                        document.getElementById('successColorInput').value = value;
                        updateSingleColor('success', value);
                    });
                }
            });

            // لون التحذير
            ['warningColorPicker', 'warningColorInput'].forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.addEventListener('change', function() {
                        const value = this.value;
                        document.getElementById('warningColorPicker').value = value;
                        document.getElementById('warningColorInput').value = value;
                        updateSingleColor('warning', value);
                    });
                }
            });

            // لون الخطر
            ['dangerColorPicker', 'dangerColorInput'].forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.addEventListener('change', function() {
                        const value = this.value;
                        document.getElementById('dangerColorPicker').value = value;
                        document.getElementById('dangerColorInput').value = value;
                        updateSingleColor('danger', value);
                    });
                }
            });

            // لون المعلومات
            ['infoColorPicker', 'infoColorInput'].forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    element.addEventListener('change', function() {
                        const value = this.value;
                        document.getElementById('infoColorPicker').value = value;
                        document.getElementById('infoColorInput').value = value;
                        updateSingleColor('info', value);
                    });
                }
            });
        }

        // تحديث لون واحد
        function updateSingleColor(colorType, value) {
            const root = document.documentElement;
            root.style.setProperty(`--${colorType}-color`, value);
            
            // حفظ في localStorage
            const savedColors = JSON.parse(localStorage.getItem('customColors') || '{}');
            savedColors[colorType] = value;
            localStorage.setItem('customColors', JSON.stringify(savedColors));
        }

        // تطبيق حجم الخط
        function applyFontSize(size) {
            const root = document.documentElement;
            switch(size) {
                case 'small':
                    root.style.fontSize = '13px';
                    break;
                case 'large':
                    root.style.fontSize = '17px';
                    break;
                default: // medium
                    root.style.fontSize = '15px';
            }
            console.log('📐 تم تطبيق حجم الخط:', size);
        }

        // تطبيق اللغة
        function applyLanguage(lang) {
            // حفظ اللغة الحالية
            localStorage.setItem('currentLanguage', lang);
            
            // تطبيق الاتجاه
            if (lang === 'ar' || lang === 'ku') {
                document.documentElement.setAttribute('dir', 'rtl');
                document.body.classList.add('rtl');
                document.body.classList.remove('ltr');
            } else {
                document.documentElement.setAttribute('dir', 'ltr');
                document.body.classList.add('ltr');
                document.body.classList.remove('rtl');
            }
            
            // تحديث النصوص حسب اللغة
            updateUILanguage(lang);
        }

        // تحديث نصوص الواجهة
        function updateUILanguage(lang) {
            const translations = {
                ar: {
                    // القوائم الرئيسية
                    pos: 'نقطة البيع',
                    products: 'إدارة المنتجات',
                    inventory: 'إدارة المخزن',
                    invoices: 'الفواتير',
                    debts: 'إدارة الديون',
                    printer: 'إدارة الطابعة',
                    settings: 'الإعدادات العامة',
                    
                    // نقطة البيع
                    search: 'بحث عن منتج...',
                    total: 'الإجمالي',
                    discount: 'الخصم',
                    finalTotal: 'المبلغ النهائي',
                    checkout: 'إتمام البيع',
                    clearCart: 'مسح السلة',
                    cart: 'سلة التسوق',
                    addToCart: 'إضافة للسلة',
                    
                    // الأزرار
                    save: 'حفظ',
                    cancel: 'إلغاء',
                    delete: 'حذف',
                    edit: 'تعديل',
                    add: 'إضافة',
                    back: 'رجوع',
                    
                    // الحقول
                    name: 'الاسم',
                    price: 'السعر',
                    quantity: 'الكمية',
                    category: 'الفئة',
                    barcode: 'الباركود',
                    description: 'الوصف'
                },
                en: {
                    // Main Menus
                    pos: 'Point of Sale',
                    products: 'Products Management',
                    inventory: 'Inventory Management',
                    invoices: 'Invoices',
                    debts: 'Debts Management',
                    printer: 'Printer Settings',
                    settings: 'General Settings',
                    
                    // Point of Sale
                    search: 'Search for product...',
                    total: 'Total',
                    discount: 'Discount',
                    finalTotal: 'Final Total',
                    checkout: 'Checkout',
                    clearCart: 'Clear Cart',
                    cart: 'Shopping Cart',
                    addToCart: 'Add to Cart',
                    
                    // Buttons
                    save: 'Save',
                    cancel: 'Cancel',
                    delete: 'Delete',
                    edit: 'Edit',
                    add: 'Add',
                    back: 'Back',
                    
                    // Fields
                    name: 'Name',
                    price: 'Price',
                    quantity: 'Quantity',
                    category: 'Category',
                    barcode: 'Barcode',
                    description: 'Description'
                },
                ku: {
                    // لیستی سەرەکی
                    pos: 'خاڵی فرۆشتن',
                    products: 'بەڕێوەبردنی بەرهەمەکان',
                    inventory: 'بەڕێوەبردنی کۆگا',
                    invoices: 'وەسڵەکان',
                    debts: 'بەڕێوەبردنی قەرزەکان',
                    printer: 'ڕێکخستنی چاپکەر',
                    settings: 'ڕێکخستنەکانی گشتی',
                    
                    // خاڵی فرۆشتن
                    search: 'گەڕان بۆ بەرهەم...',
                    total: 'کۆی گشتی',
                    discount: 'داشکاندن',
                    finalTotal: 'کۆی کۆتایی',
                    checkout: 'تەواوکردنی فرۆشتن',
                    clearCart: 'سڕینەوەی سەبەتە',
                    cart: 'سەبەتەی کڕین',
                    addToCart: 'زیادکردن بۆ سەبەتە',
                    
                    // دوگمەکان
                    save: 'پاشەکەوتکردن',
                    cancel: 'هەڵوەشاندنەوە',
                    delete: 'سڕینەوە',
                    edit: 'دەستکاریکردن',
                    add: 'زیادکردن',
                    back: 'گەڕانەوە',
                    
                    // خانەکان
                    name: 'ناو',
                    price: 'نرخ',
                    quantity: 'بڕ',
                    category: 'جۆر',
                    barcode: 'بارکۆد',
                    description: 'وەسف'
                }
            };
            
            const texts = translations[lang] || translations.ar;
            
            // تحديث عنوان الصفحة الحالي
            const titleElement = document.getElementById('currentPageTitle');
            if (titleElement) {
                const currentPage = document.querySelector('.page.active')?.id;
                if (currentPage && texts[currentPage]) {
                    titleElement.textContent = texts[currentPage];
                }
            }
            
            // تحديث نصوص القوائم الجانبية
            document.querySelectorAll('.nav-link').forEach(link => {
                const onclick = link.getAttribute('onclick');
                if (onclick) {
                    const pageMatch = onclick.match(/showPage\('([^']+)'\)/);
                    if (pageMatch && texts[pageMatch[1]]) {
                        const span = link.querySelector('span');
                        if (span) span.textContent = texts[pageMatch[1]];
                    }
                }
            });
            
            // تحديث placeholder حقل البحث
            const searchInput = document.getElementById('productSearchInput');
            if (searchInput && texts.search) {
                searchInput.placeholder = texts.search;
            }
            
            // تحديث نصوص الأزرار الشائعة
            document.querySelectorAll('button').forEach(btn => {
                const text = btn.textContent.trim();
                if (text.includes('حفظ') || text.includes('Save')) {
                    const icon = btn.querySelector('i');
                    btn.innerHTML = '';
                    if (icon) btn.appendChild(icon.cloneNode(true));
                    btn.appendChild(document.createTextNode(' ' + texts.save));
                } else if (text.includes('إلغاء') || text.includes('Cancel')) {
                    const icon = btn.querySelector('i');
                    btn.innerHTML = '';
                    if (icon) btn.appendChild(icon.cloneNode(true));
                    btn.appendChild(document.createTextNode(' ' + texts.cancel));
                }
            });
            
            console.log('🌐 تم تطبيق اللغة:', lang);
        }


        // حفظ إعدادات الطباعة
        function savePrintingSettings() {
            const printingSettings = {
                defaultPrinter: document.getElementById('defaultPrinterSelect')?.value || '',
                paperSize: document.getElementById('paperSizeSelect')?.value || '80mm',
                fontSize: document.getElementById('invoiceFontSize')?.value || 'medium',
                showLogo: document.getElementById('showLogoOnInvoice')?.checked !== false,
                showBarcode: document.getElementById('showBarcodeOnInvoice')?.checked !== false,
                showTax: document.getElementById('showTaxOnInvoice')?.checked !== false,
                footerNote: document.getElementById('invoiceFooterNote')?.value || '',
                autoPrint: document.getElementById('autoPrintInvoice')?.checked || false,
                printCopies: document.getElementById('printCopies')?.checked || false,
                openCashDrawer: document.getElementById('openCashDrawer')?.checked || false
            };

            localStorage.setItem('printingSettings', JSON.stringify(printingSettings));
            
            // تطبيق إعدادات الطباعة
            applyPrintingSettings(printingSettings);
            
            // تم إزالة الإشعار
        }

        // تطبيق إعدادات الطباعة
        function applyPrintingSettings(settings) {
            // حفظ الإعدادات في متغيرات عامة
            window.printingSettings = settings;
        }

        // حفظ إعدادات الأمان
        function saveSecuritySettings() {
            const securitySettings = {
                passwordEnabled: document.getElementById('enablePassword')?.checked || false,
                requirePasswordForDelete: document.getElementById('requirePasswordForDelete')?.checked !== false,
                requirePasswordForReports: document.getElementById('requirePasswordForReports')?.checked || false,
                requirePasswordForSettings: document.getElementById('requirePasswordForSettings')?.checked !== false,
                activityLogEnabled: document.getElementById('enableActivityLog')?.checked !== false,
                logRetentionPeriod: document.getElementById('logRetentionPeriod')?.value || 90
            };

            localStorage.setItem('securitySettings', JSON.stringify(securitySettings));
            
            // تطبيق إعدادات الأمان
            applySecuritySettings(securitySettings);
            
            // تم إزالة الإشعار
        }

        // تطبيق إعدادات الأمان
        function applySecuritySettings(settings) {
            // حفظ الإعدادات في متغيرات عامة
            window.securitySettings = settings;
        }

        // حفظ إعدادات النسخ الاحتياطي
        function saveBackupSettings() {
            const backupSettings = {
                autoBackupEnabled: document.getElementById('autoBackupEnabled')?.checked || false,
                frequency: document.getElementById('autoBackupFrequency')?.value || 'daily',
                location: document.getElementById('backupLocation')?.value || ''
            };

            localStorage.setItem('backupSettings', JSON.stringify(backupSettings));
            // تم إزالة الإشعار
        }

        // إنشاء نسخة احتياطية كاملة
        async function createFullBackup() {
            try {
                const backupData = {
                    version: '1.0.0',
                    timestamp: new Date().toISOString(),
                    date: new Date().toLocaleString('en-US'),
                    type: 'full',
                    data: {
                        products: products || [],
                        categories: categories || [],
                        suppliers: suppliers || [],
                        sales: salesData || [],
                        debts: debtsData || [],
                        settings: {
                            store: JSON.parse(localStorage.getItem('storeSettings') || '{}'),
                            system: JSON.parse(localStorage.getItem('systemSettings') || '{}'),
                            printing: JSON.parse(localStorage.getItem('printingSettings') || '{}'),
                            security: JSON.parse(localStorage.getItem('securitySettings') || '{}'),
                            backup: JSON.parse(localStorage.getItem('backupSettings') || '{}')
                        }
                    },
                    stats: {
                        totalProducts: (products || []).length,
                        totalCategories: (categories || []).length,
                        totalSuppliers: (suppliers || []).length,
                        totalSales: (salesData || []).length,
                        totalDebts: (debtsData || []).length
                    }
                };

                const dataStr = JSON.stringify(backupData, null, 2);
                const fileName = `نسخة_احتياطية_كاملة_${new Date().toISOString().split('T')[0]}_${Date.now()}.json`;
                
                // محاولة استخدام Electron API إذا كان متوفراً
                if (window.electronAPI && window.electronAPI.saveFile) {
                    const backupSettings = JSON.parse(localStorage.getItem('backupSettings') || '{}');
                    const result = await window.electronAPI.saveFile({
                        defaultPath: backupSettings.location || '',
                        fileName: fileName,
                        content: dataStr
                    });
                    
                    if (result.success) {
                        // تم إزالة الإشعار
                    } else {
                        throw new Error('Failed to save via Electron');
                    }
                } else {
                    // استخدام طريقة المتصفح العادية
                    const dataBlob = new Blob([dataStr], {type: 'application/json'});
                    const url = URL.createObjectURL(dataBlob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = fileName;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                    
                    // تم إزالة الإشعار
                }
                
                console.log('📦 تم إنشاء نسخة احتياطية:', backupData.stats);
            } catch (error) {
                console.error('❌ خطأ في إنشاء النسخة الاحتياطية:', error);
                // تم إزالة الإشعار
            }
        }

        // نسخ البيانات فقط
        function createDataBackup() {
            try {
                const backupData = {
                    version: '1.0.0',
                    timestamp: new Date().toISOString(),
                    date: new Date().toLocaleString('en-US'),
                    type: 'data',
                    data: {
                        products: products || [],
                        categories: categories || [],
                        suppliers: suppliers || [],
                        sales: salesData || [],
                        debts: debtsData || []
                    },
                    stats: {
                        totalProducts: (products || []).length,
                        totalSales: (salesData || []).length,
                        totalDebts: (debtsData || []).length
                    }
                };

                const dataStr = JSON.stringify(backupData, null, 2);
                const dataBlob = new Blob([dataStr], {type: 'application/json'});
                const url = URL.createObjectURL(dataBlob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `نسخة_بيانات_${new Date().toISOString().split('T')[0]}_${Date.now()}.json`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);

                // تم إزالة الإشعار
                console.log('📦 تم نسخ البيانات:', backupData.stats);
            } catch (error) {
                console.error('❌ خطأ في نسخ البيانات:', error);
                // تم إزالة الإشعار
            }
        }

        // نسخ الإعدادات فقط
        function createSettingsBackup() {
            try {
                const backupData = {
                    version: '1.0.0',
                    timestamp: new Date().toISOString(),
                    date: new Date().toLocaleString('en-US'),
                    type: 'settings',
                    data: {
                        store: JSON.parse(localStorage.getItem('storeSettings') || '{}'),
                        system: JSON.parse(localStorage.getItem('systemSettings') || '{}'),
                        printing: JSON.parse(localStorage.getItem('printingSettings') || '{}'),
                        security: JSON.parse(localStorage.getItem('securitySettings') || '{}'),
                        backup: JSON.parse(localStorage.getItem('backupSettings') || '{}')
                    }
                };

                const dataStr = JSON.stringify(backupData, null, 2);
                const dataBlob = new Blob([dataStr], {type: 'application/json'});
                const url = URL.createObjectURL(dataBlob);
                const link = document.createElement('a');
                link.href = url;
                link.download = `نسخة_إعدادات_${new Date().toISOString().split('T')[0]}_${Date.now()}.json`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);

                // تم إزالة الإشعار
                console.log('📦 تم نسخ الإعدادات');
            } catch (error) {
                console.error('❌ خطأ في نسخ الإعدادات:', error);
                // تم إزالة الإشعار
            }
        }

        // استعادة نسخة احتياطية
        function handleBackupRestore(event) {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = async function(e) {
                try {
                    const backupData = JSON.parse(e.target.result);
                    if (!confirm('هل أنت متأكد من استعادة هذه النسخة؟ سيتم استبدال جميع البيانات الحالية!')) return;

                    // 1. استعادة localStorage
                    if (backupData.localStorage) {
                        localStorage.clear();
                        for (const key in backupData.localStorage) {
                            try { localStorage.setItem(key, backupData.localStorage[key]); } catch (e) {}
                        }
                    }

                    // 2. استعادة إعدادات elementSdk
                    if (backupData.elementConfig && window.elementSdk && typeof window.elementSdk.importConfig === 'function') {
                        await window.elementSdk.importConfig(JSON.stringify(backupData.elementConfig));
                    }

                    // 3. استعادة بيانات indexedDB (dataSdk)
                    if (backupData.indexedDB && window.dataSdk && typeof window.dataSdk.importData === 'function') {
                        // حدد نوع النسخة: كاملة أم انتقائية
                        let dataArr = [];
                        if (backupData.indexedDB.all) {
                            dataArr = backupData.indexedDB.all;
                        } else {
                            // انتقائية: دمج كل ما هو موجود
                            ['products','invoices','debts','payments'].forEach(type => {
                                if (Array.isArray(backupData.indexedDB[type])) dataArr = dataArr.concat(backupData.indexedDB[type]);
                            });
                        }
                        if (dataArr.length > 0) {
                            await window.dataSdk.clearAll();
                            await window.dataSdk.importData(JSON.stringify(dataArr));
                        }
                    }

                    // تم إزالة الإشعار
                    setTimeout(() => location.reload(), 1500);
                } catch (error) {
                    // تم إزالة الإشعار
                    console.error(error);
                }
            };
            reader.readAsText(file);
        }

        // إعادة ضبط المصنع - حذف شامل لجميع البيانات
        async function confirmFactoryReset() {
            const confirmText = '⚠️ تحذير خطير جداً!\n\n' +
                               '━━━━━━━━━━━━━━━━━━━━━━\n' +
                               '🗑️ سيتم حذف:\n' +
                               '• جميع المنتجات والفئات\n' +
                               '• جميع الموردين\n' +
                               '• جميع المبيعات والفواتير\n' +
                               '• جميع الديون والأقساط\n' +
                               '• جميع الإعدادات والتخصيصات\n' +
                               '• سلة التسوق والمسودات\n' +
                               '━━━━━━━━━━━━━━━━━━━━━━\n' +
                               '✅ سيتم الاحتفاظ بـ:\n' +
                               '• بيانات تسجيل الدخول (UID + Secret)\n' +
                               '• حالة الاشتراك\n' +
                               '━━━━━━━━━━━━━━━━━━━━━━\n\n' +
                               '⚠️ لا يمكن التراجع عن هذه العملية!\n\n' +
                               'هل أنت متأكد 100% من المتابعة؟';
            
            if (!confirm(confirmText)) return;
            if (!confirm('⚠️ تأكيد ثاني:\n\nهل أنت متأكد تماماً من حذف كل البيانات؟\nسيصبح الكاشير فارغاً تماماً!')) return;
            if (!confirm('⚠️ تأكيد نهائي:\n\nآخر فرصة للتراجع!\nاضغط موافق لحذف كل شيء الآن!')) return;
            
            try {
                // تم إزالة الإشعار
                
                // حفظ بيانات الحساب قبل الحذف
                const savedUID = localStorage.getItem('app_uid');
                const savedSecret = localStorage.getItem('app_secret');
                
                if (!savedUID) {
                    throw new Error('لا يوجد معرف مستخدم! تأكد من تسجيل الدخول أولاً.');
                }
                
                console.log('💾 حفظ بيانات الحساب: UID موجود');
                
                // 1. حذف جميع البيانات من Firebase (مع Timeout)
                const isOnline = navigator.onLine;
                console.log('حالة الاتصال:', isOnline ? '✅ متصل' : '⚠️ غير متصل');
                
                if (isOnline && window.database) {
                    console.log('🗑️ بدء حذف البيانات من Firebase...');
                    
                    try {
                        // إضافة timeout للحذف من Firebase (5 ثواني)
                        await Promise.race([
                            (async () => {
                                // إنشاء مصفوفة من وعود الحذف
                                const deletePromises = [
                                    database.ref(`users/${savedUID}/products`).remove(),
                                    database.ref(`users/${savedUID}/sales`).remove(),
                                    database.ref(`users/${savedUID}/debts`).remove(),
                                    database.ref(`users/${savedUID}/activities`).remove(),
                                    database.ref(`users/${savedUID}/suppliers`).remove(),
                                    database.ref(`users/${savedUID}/categories`).remove(),
                                    database.ref(`users/${savedUID}/settings`).remove()
                                ];
                                
                                // انتظار جميع عمليات الحذف
                                await Promise.all(deletePromises);
                                
                                console.log('✅ تم حذف جميع البيانات من Firebase بنجاح');
                                // تم إزالة الإشعار
                            })(),
                            new Promise((_, reject) => 
                                setTimeout(() => reject(new Error('timeout')), 5000)
                            )
                        ]);
                        
                    } catch (firebaseError) {
                        if (firebaseError.message === 'timeout') {
                            console.warn('⚠️ انتهت مهلة الحذف من Firebase - الاستمرار بالحذف المحلي');
                            // تم إزالة الإشعار
                        } else {
                            console.error('❌ خطأ في حذف البيانات من Firebase:', firebaseError);
                            // تم إزالة الإشعار
                        }
                        // نستمر في الحذف المحلي حتى لو فشل Firebase
                    }
                } else {
                    if (!isOnline) {
                        console.warn('⚠️ لا يوجد اتصال بالإنترنت - سيتم الحذف المحلي فقط');
                        // تم إزالة الإشعار
                    } else {
                        console.warn('⚠️ Firebase غير متاح - سيتم الحذف المحلي فقط');
                    }
                }
                
                // 2. حذف جميع البيانات من المتغيرات العامة
                console.log('🗑️ حذف البيانات من المتغيرات...');
                products = [];
                categories = [];
                suppliers = [];
                salesData = [];
                debtsData = [];
                cart = [];
                cartItems = [];
                
                // 3. حذف **جميع** مفاتيح LocalStorage ما عدا بيانات الحساب
                console.log('🗑️ تنظيف LocalStorage بالكامل...');
                const keysToKeep = ['app_uid', 'app_secret'];
                
                // حذف كل مفتاح ما عدا المحفوظات
                Object.keys(localStorage).forEach(key => {
                    if (!keysToKeep.includes(key)) {
                        console.log(`   ├─ حذف: ${key}`);
                        localStorage.removeItem(key);
                    }
                });
                
                // إعادة تعيين بيانات الحساب للتأكيد
                if (savedUID) localStorage.setItem('app_uid', savedUID);
                if (savedSecret) localStorage.setItem('app_secret', savedSecret);
                
                // حفظ المصفوفات الفارغة بشكل صريح
                localStorage.setItem('products', '[]');
                localStorage.setItem('categories', '[]');
                localStorage.setItem('suppliers', '[]');
                localStorage.setItem('salesData', '[]');
                localStorage.setItem('debtsData', '[]');
                localStorage.setItem('cartItems', '[]');
                localStorage.setItem('cart', '[]');
                
                // إضافة علامة أن التطبيق تم تهيئته (لمنع إضافة بيانات تجريبية)
                localStorage.setItem('appInitialized', 'true');
                localStorage.setItem('factoryResetDone', 'true');
                
                console.log('✅ تم تنظيف LocalStorage مع الحفاظ على بيانات الحساب');
                
                // 4. حذف **جميع** قواعد البيانات IndexedDB بشكل شامل
                console.log('🗑️ حذف جميع قواعد البيانات IndexedDB...');
                
                try {
                    // الحصول على قائمة جميع قواعد البيانات
                    if (indexedDB.databases) {
                        const allDatabases = await indexedDB.databases();
                        console.log(`📋 تم العثور على ${allDatabases.length} قاعدة بيانات`);
                        
                        for (const db of allDatabases) {
                            if (db.name) {
                                console.log(`   ├─ حذف قاعدة البيانات: ${db.name}`);
                                await new Promise((resolve) => {
                                    const deleteRequest = indexedDB.deleteDatabase(db.name);
                                    
                                    // إضافة timeout لعملية الحذف (3 ثواني لكل قاعدة بيانات)
                                    const timeout = setTimeout(() => {
                                        console.warn(`   ⚠️ timeout: ${db.name}`);
                                        resolve();
                                    }, 3000);
                                    
                                    deleteRequest.onsuccess = () => {
                                        clearTimeout(timeout);
                                        console.log(`   ✅ تم حذف: ${db.name}`);
                                        resolve();
                                    };
                                    deleteRequest.onerror = () => {
                                        clearTimeout(timeout);
                                        console.warn(`   ⚠️ خطأ في حذف: ${db.name}`);
                                        resolve();
                                    };
                                    deleteRequest.onblocked = () => {
                                        clearTimeout(timeout);
                                        console.warn(`   ⚠️ محجوب: ${db.name}`);
                                        resolve();
                                    };
                                });
                            }
                        }
                    } else {
                        // خطة بديلة: حذف قواعد البيانات المعروفة
                        const knownDatabases = [
                            'POSSystemDB', 'POSDatabase', 'posDB', 'productsDB', 'salesDB', 'debtsDB', 
                            'categoriesDB', 'suppliersDB', 'cashierDB', 'invoicesDB',
                            'localforage', 'firebaseLocalStorageDb', '_pouch_', 'PouchDB'
                        ];
                        
                        for (const dbName of knownDatabases) {
                            await new Promise((resolve) => {
                                const deleteRequest = indexedDB.deleteDatabase(dbName);
                                
                                // إضافة timeout
                                const timeout = setTimeout(() => resolve(), 3000);
                                
                                deleteRequest.onsuccess = () => {
                                    clearTimeout(timeout);
                                    console.log(`   ✅ تم حذف: ${dbName}`);
                                    resolve();
                                };
                                deleteRequest.onerror = () => {
                                    clearTimeout(timeout);
                                    resolve();
                                };
                                deleteRequest.onblocked = () => {
                                    clearTimeout(timeout);
                                    resolve();
                                };
                            });
                        }
                    }
                    
                    console.log('✅ تم حذف جميع قواعد بيانات IndexedDB');
                    
                } catch (error) {
                    console.warn('⚠️ خطأ في حذف IndexedDB:', error);
                    
                    // محاولة بديلة: حذف القواعد المعروفة
                    const databases = ['POSSystemDB', 'POSDatabase', 'posDB', 'productsDB', 'salesDB', 'debtsDB', 'categoriesDB', 'suppliersDB'];
                    
                    for (const dbName of databases) {
                        try {
                            await new Promise((resolve) => {
                                const deleteRequest = indexedDB.deleteDatabase(dbName);
                                
                                // timeout لكل قاعدة بيانات
                                const timeout = setTimeout(() => resolve(), 3000);
                                
                                deleteRequest.onsuccess = () => {
                                    clearTimeout(timeout);
                                    console.log(`✅ تم حذف: ${dbName}`);
                                    resolve();
                                };
                                deleteRequest.onerror = () => {
                                    clearTimeout(timeout);
                                    console.warn(`⚠️ خطأ في حذف ${dbName}`);
                                    resolve();
                                };
                                deleteRequest.onblocked = () => {
                                    console.warn(`⚠️ ${dbName} محجوب`);
                                    resolve();
                                };
                            });
                        } catch (error) {
                            console.warn(`⚠️ استثناء في حذف ${dbName}:`, error);
                        }
                    }
                }
                
                // 5. حذف SessionStorage
                console.log('🗑️ حذف SessionStorage...');
                sessionStorage.clear();
                
                // 6. حذف Cache API
                console.log('🗑️ حذف Cache...');
                if ('caches' in window) {
                    try {
                        const cacheNames = await caches.keys();
                        await Promise.all(cacheNames.map(name => caches.delete(name)));
                        console.log('✅ تم حذف Cache');
                    } catch (error) {
                        console.warn('⚠️ خطأ في حذف Cache:', error);
                    }
                }
                
                // 7. تنظيف DOM والواجهة بالكامل
                console.log('🗑️ تنظيف الواجهة بالكامل...');
                
                // تنظيف جميع حقول الإدخال
                document.querySelectorAll('input[type="text"], input[type="search"], input[type="number"]').forEach(input => {
                    if (input.id !== 'app_uid' && input.id !== 'app_secret') {
                        input.value = '';
                    }
                });
                
                // تنظيف السلة
                const cartSection = document.querySelector('.cart-items');
                if (cartSection) cartSection.innerHTML = '';
                
                // تنظيف قائمة المنتجات
                const productsGrid = document.querySelector('.products-grid');
                if (productsGrid) productsGrid.innerHTML = '';
                
                // تنظيف الإجمالي
                const totalEl = document.getElementById('totalPrice');
                if (totalEl) totalEl.textContent = '0';
                
                // تحديث جميع العدادات إلى صفر
                document.querySelectorAll('[id$="Count"]').forEach(el => {
                    el.textContent = '0';
                });
                
                console.log('✅ تم حذف جميع البيانات بنجاح!');
                console.log('✅ تم الحفاظ على بيانات الحساب والاشتراك');
                
                // تم إزالة الإشعار
                
                // رسالة تأكيد نهائية
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                alert('✅ تم حذف جميع البيانات بنجاح!\n\n' +
                      '━━━━━━━━━━━━━━━━━━━━━━\n' +
                      '🗑️ تم حذف:\n' +
                      '• جميع المنتجات والفئات (المستوردة والمحلية)\n' +
                      '• جميع المبيعات والفواتير\n' +
                      '• جميع الديون والأقساط\n' +
                      '• جميع الإعدادات المخصصة\n\n' +
                      '✅ تم الحفاظ على:\n' +
                      '• حسابك وبيانات الاشتراك\n' +
                      '━━━━━━━━━━━━━━━━━━━━━━\n\n' +
                      '🔄 سيتم إعادة تشغيل التطبيق الآن');
                
                // إعادة تحميل الصفحة
                window.location.href = window.location.href.split('?')[0];
                location.reload(true);
                
            } catch (error) {
                console.error('❌ خطأ في إعادة ضبط المصنع:', error);
                // تم إزالة الإشعار
                alert('❌ حدث خطأ أثناء إعادة ضبط المصنع:\n\n' + 
                      error.message + '\n\n' +
                      'يرجى المحاولة مرة أخرى أو التواصل مع الدعم الفني');
            }
        }

        // مسح البيانات التجريبية فقط
        async function clearSampleData() {
            if (confirm('🧹 مسح البيانات التجريبية\n\nهل تريد حذف جميع البيانات التجريبية والبدء بتطبيق نظيف؟\n\n✅ سيتم الاحتفاظ بالإعدادات وبيانات الحساب')) {
                try {
                    // تم إزالة الإشعار
                    
                    // حفظ بيانات الحساب
                    const savedUID = localStorage.getItem('app_uid');
                    const savedSecret = localStorage.getItem('app_secret');
                    
                    // حذف البيانات من Firebase (مع Timeout)
                    const isOnline = navigator.onLine;
                    
                    if (isOnline && savedUID && window.database) {
                        console.log('🗑️ حذف البيانات من Firebase...');
                        
                        try {
                            // إضافة timeout للحذف من Firebase (5 ثواني)
                            await Promise.race([
                                (async () => {
                                    await database.ref(`users/${savedUID}/products`).remove();
                                    await database.ref(`users/${savedUID}/sales`).remove();
                                    await database.ref(`users/${savedUID}/debts`).remove();
                                    await database.ref(`users/${savedUID}/activities`).remove();
                                    await database.ref(`users/${savedUID}/suppliers`).remove();
                                    await database.ref(`users/${savedUID}/categories`).remove();
                                    console.log('✅ تم حذف البيانات من Firebase');
                                })(),
                                new Promise((_, reject) => 
                                    setTimeout(() => reject(new Error('timeout')), 5000)
                                )
                            ]);
                        } catch (error) {
                            if (error.message === 'timeout') {
                                console.warn('⚠️ انتهت مهلة الحذف من Firebase');
                            } else {
                                console.error('❌ خطأ في حذف البيانات من Firebase:', error);
                            }
                            // الاستمرار بالحذف المحلي
                        }
                    } else {
                        if (!isOnline) {
                            console.warn('⚠️ لا يوجد اتصال - سيتم الحذف المحلي فقط');
                        }
                    }
                    
                    // حذف البيانات التجريبية من المتغيرات
                    products = [];
                    categories = [];
                    suppliers = [];
                    salesData = [];
                    debtsData = [];
                    cartItems = [];
                    
                    // حفظ البيانات الفارغة في LocalStorage
                    localStorage.setItem('products', JSON.stringify([]));
                    localStorage.setItem('categories', JSON.stringify([]));
                    localStorage.setItem('suppliers', JSON.stringify([]));
                    localStorage.setItem('salesData', JSON.stringify([]));
                    localStorage.setItem('debtsData', JSON.stringify([]));
                    localStorage.setItem('cartItems', JSON.stringify([]));
                    
                    // تحديث الواجهة
                    updateAllViews();
                    renderCart();
                    
                    console.log('✅ تم مسح جميع البيانات التجريبية');
                    // تم إزالة الإشعار
                    
                    setTimeout(() => {
                        alert('✅ تم مسح البيانات بنجاح!\n\n' +
                              '📝 التطبيق الآن نظيف وجاهز للاستخدام\n' +
                              '⚙️ تم الاحتفاظ بجميع الإعدادات وبيانات الحساب');
                        location.reload();
                    }, 1000);
                    
                } catch (error) {
                    console.error('❌ خطأ في مسح البيانات:', error);
                    // تم إزالة الإشعار
                }
            }
        }

        // دوال إضافية
        function refreshPrinters() {
            // تم إزالة الإشعار
            // هنا يمكن إضافة كود للحصول على قائمة الطابعات من النظام
        }

        async function chooseBackupLocation() {
            if (window.electronAPI && window.electronAPI.selectDirectory) {
                const result = await window.electronAPI.selectDirectory();
                if (result && !result.canceled) {
                    const locationInput = document.getElementById('backupLocation');
                    if (locationInput) {
                        locationInput.value = result.filePaths[0];
                        // تم إزالة الإشعار
                    }
                }
            } else {
                // في حالة عدم توفر Electron API
                const locationInput = document.getElementById('backupLocation');
                if (locationInput) {
                    const path = prompt('أدخل مسار المجلد للنسخ الاحتياطي:', locationInput.value || 'C:\\Backups');
                    if (path) {
                        locationInput.value = path;
                        // تم إزالة الإشعار
                    }
                }
            }
        }

        function printTestPage() {
            // تم إزالة الإشعار
            window.print();
        }

        function changePassword() {
            const current = document.getElementById('currentPassword')?.value;
            const newPass = document.getElementById('newPassword')?.value;
            const confirm = document.getElementById('confirmPassword')?.value;

            if (!current || !newPass || !confirm) {
                // تم إزالة الإشعار
                return;
            }

            if (newPass !== confirm) {
                // تم إزالة الإشعار
                return;
            }

            // حفظ كلمة المرور (يجب تشفيرها في التطبيق الحقيقي)
            localStorage.setItem('appPassword', newPass);
            // تم إزالة الإشعار
            
            document.getElementById('currentPassword').value = '';
            document.getElementById('newPassword').value = '';
            document.getElementById('confirmPassword').value = '';
        }

        function viewActivityLog() {
            // تم إزالة الإشعار
            // هنا يمكن إضافة صفحة عرض سجل النشاطات
        }

        // معالج رفع الشعار مع معاينة
        function setupLogoPreview() {
            const logoInput = document.getElementById('settingsStoreLogo');
            if (logoInput) {
                logoInput.addEventListener('change', function(e) {
                    const file = e.target.files[0];
                    if (file && file.type.startsWith('image/')) {
                        const reader = new FileReader();
                        reader.onload = function(event) {
                            // إنشاء معاينة
                            let preview = document.querySelector('.logo-preview');
                            if (!preview) {
                                preview = document.createElement('div');
                                preview.className = 'logo-preview';
                                preview.style.cssText = 'margin-top: 1rem; padding: 1rem; background: var(--theme-bg-hover); border-radius: 8px; text-align: center;';
                                logoInput.parentElement.appendChild(preview);
                            }
                            preview.innerHTML = `
                                <img src="${event.target.result}" style="max-width: 200px; max-height: 100px; border-radius: 8px;">
                                <p style="margin-top: 0.5rem; font-size: 0.875rem; color: var(--success-color);">
                                    <i class="fas fa-check-circle"></i> تم تحميل الشعار بنجاح
                                </p>
                            `;
                        };
                        reader.readAsDataURL(file);
                    }
                });
            }
        }

        // تفعيل/إلغاء تفعيل حقول كلمة المرور
        document.addEventListener('DOMContentLoaded', async () => {
            const enablePasswordCheck = document.getElementById('enablePassword');
            const passwordFields = document.getElementById('passwordFields');
            
            if (enablePasswordCheck && passwordFields) {
                enablePasswordCheck.addEventListener('change', function() {
                    passwordFields.style.display = this.checked ? 'block' : 'none';
                });
            }

            // تحميل وتطبيق جميع الإعدادات المحفوظة
            loadAllSettings();
            
            // تفعيل معاينة الشعار
            setupLogoPreview();
            
            // إعداد منتقيات الألوان
            setupColorPickers();
            
            // إصلاح بيانات الديون تلقائياً عند تحميل الصفحة
            if (typeof fixDebtsData === 'function' && debtsData && debtsData.length > 0) {
                console.log('🔧 Running automatic debt data repair...');
                await fixDebtsData();
            }
        });

        // تحميل جميع الإعدادات
        function loadAllSettings() {
            loadStoreSettings();
            loadSystemSettings();
            loadPrintingSettings();
            loadSecuritySettings();
            loadBackupSettings();
        }

        // تحميل إعدادات النظام
        function loadSystemSettings() {
            const savedSettings = localStorage.getItem('systemSettings');
            if (savedSettings) {
                const settings = JSON.parse(savedSettings);
                
                // تحميل القيم في النماذج
                if (document.getElementById('themeSelect')) document.getElementById('themeSelect').value = settings.theme || 'dark';
                if (document.getElementById('colorSchemeSelect')) document.getElementById('colorSchemeSelect').value = settings.colorScheme || 'default';
                if (document.getElementById('fontSizeSelect')) document.getElementById('fontSizeSelect').value = settings.fontSize || 'medium';
                if (document.getElementById('compactModeCheck')) document.getElementById('compactModeCheck').checked = settings.compactMode || false;
                if (document.getElementById('languageSelect')) document.getElementById('languageSelect').value = settings.language || 'ar';
                if (document.getElementById('dateFormatSelect')) document.getElementById('dateFormatSelect').value = settings.dateFormat || 'DD/MM/YYYY';
                if (document.getElementById('timeFormatSelect')) document.getElementById('timeFormatSelect').value = settings.timeFormat || '12';
                if (document.getElementById('itemsPerPageSelect')) document.getElementById('itemsPerPageSelect').value = settings.itemsPerPage || 25;
                if (document.getElementById('animationsCheck')) document.getElementById('animationsCheck').checked = settings.animations !== false;
                if (document.getElementById('autosaveCheck')) document.getElementById('autosaveCheck').checked = settings.autosave !== false;
                if (document.getElementById('barcodeSound')) document.getElementById('barcodeSound').checked = settings.barcodeSound !== false;
                if (document.getElementById('autoPrint')) document.getElementById('autoPrint').checked = settings.autoPrint || false;
                if (document.getElementById('clearCartAfterSale')) document.getElementById('clearCartAfterSale').checked = settings.clearCartAfterSale !== false;
                
                // تطبيق الإعدادات على التطبيق
                applySystemSettings(settings);
            }
        }


        // تحميل إعدادات الطباعة
        function loadPrintingSettings() {
            const savedSettings = localStorage.getItem('printingSettings');
            if (savedSettings) {
                const settings = JSON.parse(savedSettings);
                
                if (document.getElementById('defaultPrinterSelect')) document.getElementById('defaultPrinterSelect').value = settings.defaultPrinter || '';
                if (document.getElementById('paperSizeSelect')) document.getElementById('paperSizeSelect').value = settings.paperSize || '80mm';
                if (document.getElementById('invoiceFontSize')) document.getElementById('invoiceFontSize').value = settings.fontSize || 'medium';
                if (document.getElementById('showLogoOnInvoice')) document.getElementById('showLogoOnInvoice').checked = settings.showLogo !== false;
                if (document.getElementById('showBarcodeOnInvoice')) document.getElementById('showBarcodeOnInvoice').checked = settings.showBarcode !== false;
                if (document.getElementById('showTaxOnInvoice')) document.getElementById('showTaxOnInvoice').checked = settings.showTax !== false;
                if (document.getElementById('invoiceFooterNote')) document.getElementById('invoiceFooterNote').value = settings.footerNote || '';
                if (document.getElementById('autoPrintInvoice')) document.getElementById('autoPrintInvoice').checked = settings.autoPrint || false;
                if (document.getElementById('printCopies')) document.getElementById('printCopies').checked = settings.printCopies || false;
                if (document.getElementById('openCashDrawer')) document.getElementById('openCashDrawer').checked = settings.openCashDrawer || false;
                
                // تطبيق الإعدادات
                applyPrintingSettings(settings);
            }
        }

        // تحميل إعدادات الأمان
        function loadSecuritySettings() {
            const savedSettings = localStorage.getItem('securitySettings');
            if (savedSettings) {
                const settings = JSON.parse(savedSettings);
                
                if (document.getElementById('enablePassword')) document.getElementById('enablePassword').checked = settings.passwordEnabled || false;
                if (document.getElementById('requirePasswordForDelete')) document.getElementById('requirePasswordForDelete').checked = settings.requirePasswordForDelete !== false;
                if (document.getElementById('requirePasswordForReports')) document.getElementById('requirePasswordForReports').checked = settings.requirePasswordForReports || false;
                if (document.getElementById('requirePasswordForSettings')) document.getElementById('requirePasswordForSettings').checked = settings.requirePasswordForSettings !== false;
                if (document.getElementById('enableActivityLog')) document.getElementById('enableActivityLog').checked = settings.activityLogEnabled !== false;
                if (document.getElementById('logRetentionPeriod')) document.getElementById('logRetentionPeriod').value = settings.logRetentionPeriod || 90;
                
                // إظهار/إخفاء حقول كلمة المرور
                const passwordFields = document.getElementById('passwordFields');
                if (passwordFields) {
                    passwordFields.style.display = settings.passwordEnabled ? 'block' : 'none';
                }
                
                // تطبيق الإعدادات
                applySecuritySettings(settings);
            }
        }

        // تحميل إعدادات النسخ الاحتياطي
        function loadBackupSettings() {
            const savedSettings = localStorage.getItem('backupSettings');
            if (savedSettings) {
                const settings = JSON.parse(savedSettings);
                
                if (document.getElementById('autoBackupEnabled')) document.getElementById('autoBackupEnabled').checked = settings.autoBackupEnabled || false;
                if (document.getElementById('autoBackupFrequency')) document.getElementById('autoBackupFrequency').value = settings.frequency || 'daily';
                if (document.getElementById('backupLocation')) document.getElementById('backupLocation').value = settings.location || '';
            }
        }

        // دوال التوافقية للنسخ الاحتياطي القديمة
        function createBackup() {
            createFullBackup();
        }

        function restoreBackup() {
            document.getElementById('backupFileInput')?.click();
        }

        function resetSystem() {
            confirmFactoryReset();
        }

        // تصدير البيانات
        async function exportData(type, format) {
            let data = [];
            let filename = '';
            
            // تحديد البيانات حسب النوع
            switch(type) {
                case 'products':
                    data = products;
                    filename = 'المنتجات';
                    break;
                case 'inventory':
                    data = products;
                    filename = 'المخزون';
                    break;
                case 'invoices':
                    data = salesData;
                    filename = 'الفواتير';
                    break;
                case 'debts':
                    data = debtsData;
                    filename = 'الديون';
                    break;
                default:
                    // تم إزالة الإشعار
                    return;
            }
            
            if (data.length === 0) {
                // تم إزالة الإشعار
                return;
            }
            
            try {
                switch(format) {
                    case 'json':
                        exportToJSON(data, filename);
                        break;
                    case 'excel':
                        exportToExcel(data, filename, type);
                        break;
                    case 'pdf':
                        exportToPDF(data, filename, type);
                        break;
                    default:
                        // تم إزالة الإشعار
                }
            } catch (error) {
                console.error('خطأ في التصدير:', error);
                // تم إزالة الإشعار
            }
        }
        
        // تصدير إلى JSON
        function exportToJSON(data, filename) {
            const jsonStr = JSON.stringify(data, null, 2);
            const blob = new Blob([jsonStr], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `${filename}_${new Date().toISOString().split('T')[0]}.json`;
            link.click();
            URL.revokeObjectURL(url);
            // تم إزالة الإشعار
        }
        
        // تصدير إلى Excel
        function exportToExcel(data, filename, type) {
            if (typeof XLSX === 'undefined') {
                // تم إزالة الإشعار
                return;
            }
            
            let worksheetData = [];
            
            // تحويل البيانات حسب النوع
            if (type === 'products' || type === 'inventory') {
                worksheetData = data.map(item => ({
                    'الباركود': item.product_barcode || '',
                    'اسم المنتج': item.product_name || '',
                    'التصنيف': categories.find(c => c.category_id === item.product_category)?.category_name || '',
                    'سعر البيع': item.product_price_retail || 0,
                    'سعر الشراء': item.product_cost_retail || 0,
                    'الكمية': item.stock_quantity || 0,
                    'الحد الأدنى': item.min_stock || 0,
                    'المورد': item.supplier || ''
                }));
            } else if (type === 'invoices') {
                worksheetData = data.map(item => ({
                    'رقم الفاتورة': item.invoice_id || '',
                    'التاريخ': new Date(item.timestamp).toLocaleDateString('en-GB'),
                    'العميل': item.customer_name || 'عميل نقدي',
                    'المبلغ الإجمالي': item.final_total || 0,
                    'طريقة الدفع': item.payment_method || '',
                    'الخصم': item.discount || 0,
                    'الضريبة': item.tax || 0
                }));
            } else if (type === 'debts') {
                worksheetData = data.map(item => ({
                    'اسم العميل': item.customer_name || '',
                    'رقم الهاتف': item.customer_phone || '',
                    'العنوان': item.customer_address || '',
                    'المبلغ الإجمالي': item.total_amount || item.final_total || 0,
                    'المبلغ المتبقي': item.remaining_amount || 0,
                    'القسط الشهري': item.monthly_amount || 0,
                    'عدد الأقساط': item.installment_months || 0,
                    'تاريخ الاستحقاق': new Date(item.due_date).toLocaleDateString('en-GB')
                }));
            }
            
            const worksheet = XLSX.utils.json_to_sheet(worksheetData);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, filename);
            XLSX.writeFile(workbook, `${filename}_${new Date().toISOString().split('T')[0]}.xlsx`);
            // تم إزالة الإشعار
        }
        
        // تصدير إلى PDF
        function exportToPDF(data, filename, type) {
            if (typeof jspdf === 'undefined' || typeof jspdf.jsPDF === 'undefined') {
                // تم إزالة الإشعار
                return;
            }
            
            const { jsPDF } = jspdf;
            const doc = new jsPDF();
            
            // إضافة دعم للعربية (يمكن تحسينه بإضافة خط عربي)
            let headers = [];
            let rows = [];
            
            if (type === 'products' || type === 'inventory') {
                headers = [['Barcode', 'Name', 'Category', 'Price', 'Cost', 'Stock', 'Min', 'Supplier']];
                rows = data.map(item => [
                    item.product_barcode || '',
                    item.product_name || '',
                    categories.find(c => c.category_id === item.product_category)?.category_name || '',
                    formatCurrency(item.product_price_retail || 0),
                    formatCurrency(item.product_cost_retail || 0),
                    item.stock_quantity || 0,
                    item.min_stock || 0,
                    item.supplier || ''
                ]);
            } else if (type === 'invoices') {
                headers = [['Invoice', 'Date', 'Customer', 'Total', 'Method', 'Discount', 'Tax']];
                rows = data.map(item => [
                    item.invoice_id || '',
                    new Date(item.timestamp).toLocaleDateString('en-GB'),
                    item.customer_name || 'Cash',
                    formatCurrency(item.final_total || 0),
                    item.payment_method || '',
                    formatCurrency(item.discount || 0),
                    formatCurrency(item.tax || 0)
                ]);
            } else if (type === 'debts') {
                headers = [['Customer', 'Phone', 'Total', 'Remaining', 'Monthly', 'Months', 'Due Date']];
                rows = data.map(item => [
                    item.customer_name || '',
                    item.customer_phone || '',
                    formatCurrency(item.total_amount || item.final_total || 0),
                    formatCurrency(item.remaining_amount || 0),
                    formatCurrency(item.monthly_amount || 0),
                    item.installment_months || 0,
                    new Date(item.due_date).toLocaleDateString('en-GB')
                ]);
            }
            
            doc.autoTable({
                head: headers,
                body: rows,
                startY: 20,
                styles: { font: 'helvetica', fontSize: 8 }
            });
            
            doc.save(`${filename}_${new Date().toISOString().split('T')[0]}.pdf`);
            // تم إزالة الإشعار
        }

        // استيراد البيانات
        async function importData(type) {
            const fileInputId = `import${type.charAt(0).toUpperCase() + type.slice(1)}File`;
            const fileInput = document.getElementById(fileInputId);
            
            if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
                // تم إزالة الإشعار
                return;
            }
            
            const file = fileInput.files[0];
            const fileExtension = file.name.split('.').pop().toLowerCase();
            
            try {
                if (fileExtension === 'json') {
                    await importFromJSON(file, type);
                } else if (fileExtension === 'xlsx' || fileExtension === 'xls') {
                    await importFromExcel(file, type);
                } else if (fileExtension === 'csv') {
                    await importFromCSV(file, type);
                } else {
                    // تم إزالة الإشعار
                }
            } catch (error) {
                console.error('خطأ في الاستيراد:', error);
                // تم إزالة الإشعار
            }
            
            // إعادة تعيين input
            fileInput.value = '';
        }
        
        // استيراد من JSON
        async function importFromJSON(file, type) {
            const reader = new FileReader();
            
            reader.onload = async function(e) {
                try {
                    const jsonData = JSON.parse(e.target.result);
                    
                    if (!Array.isArray(jsonData)) {
                        // تم إزالة الإشعار
                        return;
                    }
                    
                    await processImportedData(jsonData, type);
                } catch (error) {
                    console.error('خطأ في قراءة JSON:', error);
                    // تم إزالة الإشعار
                }
            };
            
            reader.readAsText(file);
        }
        
        // استيراد من Excel
        async function importFromExcel(file, type) {
            if (typeof XLSX === 'undefined') {
                // تم إزالة الإشعار
                return;
            }
            
            const reader = new FileReader();
            
            reader.onload = async function(e) {
                try {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' });
                    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                    const jsonData = XLSX.utils.sheet_to_json(firstSheet);
                    
                    // تحويل البيانات حسب النوع
                    const convertedData = convertExcelData(jsonData, type);
                    await processImportedData(convertedData, type);
                } catch (error) {
                    console.error('خطأ في قراءة Excel:', error);
                    // تم إزالة الإشعار
                }
            };
            
            reader.readAsArrayBuffer(file);
        }
        
        // استيراد من CSV
        async function importFromCSV(file, type) {
            const reader = new FileReader();
            
            reader.onload = async function(e) {
                try {
                    const csvData = e.target.result;
                    const lines = csvData.split('\n');
                    const headers = lines[0].split(',').map(h => h.trim());
                    const jsonData = [];
                    
                    for (let i = 1; i < lines.length; i++) {
                        if (!lines[i].trim()) continue;
                        
                        const values = lines[i].split(',');
                        const obj = {};
                        
                        headers.forEach((header, index) => {
                            obj[header] = values[index]?.trim() || '';
                        });
                        
                        jsonData.push(obj);
                    }
                    
                    const convertedData = convertExcelData(jsonData, type);
                    await processImportedData(convertedData, type);
                } catch (error) {
                    console.error('خطأ في قراءة CSV:', error);
                    // تم إزالة الإشعار
                }
            };
            
            reader.readAsText(file);
        }
        
        // تحويل بيانات Excel/CSV إلى الصيغة المطلوبة
        function convertExcelData(excelData, type) {
            const convertedData = [];
            
            if (type === 'products' || type === 'inventory') {
                excelData.forEach(row => {
                    // البحث عن التصنيف
                    let categoryId = '';
                    const categoryName = row['التصنيف'] || row['Category'] || '';
                    if (categoryName) {
                        const foundCategory = categories.find(c => c.category_name === categoryName);
                        categoryId = foundCategory ? foundCategory.category_id : '';
                    }
                    
                    convertedData.push({
                        type: 'product',
                        product_id: row['product_id'] || Date.now().toString() + Math.random().toString(36).substr(2, 9),
                        product_name: row['اسم المنتج'] || row['Name'] || row['product_name'] || '',
                        product_barcode: row['الباركود'] || row['Barcode'] || row['product_barcode'] || '',
                        product_price_retail: parseFloat(row['سعر البيع'] || row['Price'] || row['product_price_retail'] || 0),
                        product_price_wholesale: parseFloat(row['سعر الجملة'] || row['Wholesale Price'] || row['product_price_wholesale'] || row['سعر البيع'] || row['Price'] || 0),
                        product_cost_retail: parseFloat(row['سعر الشراء'] || row['Cost'] || row['product_cost_retail'] || 0),
                        product_cost_wholesale: parseFloat(row['تكلفة الجملة'] || row['Wholesale Cost'] || row['product_cost_wholesale'] || row['سعر الشراء'] || row['Cost'] || 0),
                        stock_quantity: parseInt(row['الكمية'] || row['Stock'] || row['stock_quantity'] || 0),
                        min_stock: parseInt(row['الحد الأدنى'] || row['Min'] || row['min_stock'] || 5),
                        product_category: row['product_category'] || categoryId || '1',
                        supplier: row['المورد'] || row['Supplier'] || row['supplier'] || '',
                        timestamp: row['timestamp'] || new Date().toISOString()
                    });
                });
            } else if (type === 'invoices') {
                excelData.forEach(row => {
                    convertedData.push({
                        type: 'sale',
                        invoice_id: row['رقم الفاتورة'] || row['Invoice'] || row['invoice_id'] || 'INV-' + Date.now(),
                        customer_name: row['العميل'] || row['Customer'] || row['customer_name'] || 'عميل نقدي',
                        final_total: parseFloat(row['المبلغ الإجمالي'] || row['Total'] || row['final_total'] || 0),
                        payment_method: row['طريقة الدفع'] || row['Method'] || row['payment_method'] || 'نقدي',
                        discount: parseFloat(row['الخصم'] || row['Discount'] || row['discount'] || 0),
                        tax: parseFloat(row['الضريبة'] || row['Tax'] || row['tax'] || 0),
                        items: row['items'] || '[]',
                        timestamp: row['timestamp'] || new Date().toISOString()
                    });
                });
            } else if (type === 'debts') {
                excelData.forEach(row => {
                    const totalAmount = parseFloat(row['المبلغ الإجمالي'] || row['Total'] || row['total_amount'] || 0);
                    const installmentMonths = parseInt(row['عدد الأقساط'] || row['Months'] || row['installment_months'] || 12);
                    const monthlyAmount = parseFloat(row['القسط الشهري'] || row['Monthly'] || row['monthly_amount'] || (totalAmount / installmentMonths));
                    
                    convertedData.push({
                        type: 'debt',
                        customer_name: row['اسم العميل'] || row['Customer'] || row['customer_name'] || '',
                        customer_phone: row['رقم الهاتف'] || row['Phone'] || row['customer_phone'] || '',
                        customer_address: row['العنوان'] || row['Address'] || row['customer_address'] || '',
                        total_amount: totalAmount,
                        remaining_amount: parseFloat(row['المبلغ المتبقي'] || row['Remaining'] || row['remaining_amount'] || totalAmount),
                        monthly_amount: monthlyAmount,
                        installment_months: installmentMonths,
                        due_date: row['due_date'] || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
                        invoice_id: row['invoice_id'] || 'INV-' + Date.now(),
                        timestamp: row['timestamp'] || new Date().toISOString()
                    });
                });
            }
            
            return convertedData;
        }
        
        // معالجة البيانات المستوردة
        async function processImportedData(data, type) {
            if (!window.dataSdk) {
                // تم إزالة الإشعار
                return;
            }
            
            let successCount = 0;
            let errorCount = 0;
            
            // تم إزالة الإشعار
            
            for (const item of data) {
                try {
                    // التأكد من نوع البيانات صحيح
                    if (type === 'products' || type === 'inventory') {
                        item.type = 'product';
                    } else if (type === 'invoices') {
                        item.type = 'sale';
                    } else if (type === 'debts') {
                        item.type = 'debt';
                    }
                    
                    const result = await window.dataSdk.create(item);
                    if (result.isOk) {
                        successCount++;
                    } else {
                        errorCount++;
                        console.error('فشل في استيراد عنصر:', item, result.error);
                    }
                } catch (error) {
                    errorCount++;
                    console.error('خطأ في استيراد عنصر:', item, error);
                }
            }
            
            // إعادة تحميل البيانات
            await new Promise(resolve => setTimeout(resolve, 500));
            
            if (successCount > 0) {
                // تم إزالة الإشعار
            } else {
                // تم إزالة الإشعار
            }
        }

        // Initialize app when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initApp);
        } else {
            initApp();
        }

        // ربط أزرار التحكم بالنافذة
        document.addEventListener('DOMContentLoaded', () => {
            // إعداد مستمعات أحداث السلة للتمرير التلقائي
            const cartSection = document.querySelector('.cart-section');
            const cartItems = document.getElementById('cartItems');
            
            if (cartSection && cartItems) {
                // التمرير للأعلى عند hover على السلة
                cartSection.addEventListener('mouseenter', () => {
                    scrollCartToTop();
                });
                
                // إعادة التمرير للأسفل عند إزالة المؤشر
                cartSection.addEventListener('mouseleave', () => {
                    scrollCartToBottom();
                });
            }
            
            // زر الإغلاق
            const closeBtn = document.querySelector('.titlebar-btn.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    if (window.electronAPI && window.electronAPI.windowClose) {
                        window.electronAPI.windowClose();
                    }
                });
            }
            
            // زر التصغير
            const minimizeBtn = document.querySelector('.titlebar-btn.minimize');
            if (minimizeBtn) {
                minimizeBtn.addEventListener('click', () => {
                    if (window.electronAPI && window.electronAPI.windowMinimize) {
                        window.electronAPI.windowMinimize();
                    }
                });
            }
            
            // زر التكبير
            const maximizeBtn = document.querySelector('.titlebar-btn.maximize');
            if (maximizeBtn) {
                let isProcessing = false;
                maximizeBtn.addEventListener('click', () => {
                    if (isProcessing) return;
                    isProcessing = true;
                    if (window.electronAPI && window.electronAPI.windowToggleMaximize) {
                        window.electronAPI.windowToggleMaximize();
                    }
                    setTimeout(() => { isProcessing = false; }, 500); // حماية من التكرار السريع
                });
                // تحديث حالة الزر بناءً على حالة النافذة
                if (window.electronAPI && window.electronAPI.onWindowMaximized) {
                    window.electronAPI.onWindowMaximized((isMaximized) => {
                        maximizeBtn.classList.toggle('is-maximized', isMaximized);
                    });
                }
            }
        });

        
    </script>
    <!-- نظام التقارير المتكامل -->
    
    <!-- نظام تسجيل الدخول -->
    <div id="loginOverlay" class="login-overlay" style="display: none;">
        <div class="login-container">
            <div class="login-header">
                <div class="login-logo">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <h2 class="login-title">نظام نقطة البيع</h2>
                <p class="login-subtitle">الرجاء تسجيل الدخول للمتابعة</p>
            </div>
            
            <form class="login-form" onsubmit="event.preventDefault(); window.securityManager.handleLogin();">
                <div class="login-input-group">
                    <label class="login-label" for="loginUsername">اسم المستخدم</label>
                    <input type="text" id="loginUsername" class="login-input" placeholder="أدخل اسم المستخدم" required>
                </div>
                
                <div class="login-input-group">
                    <label class="login-label" for="loginPassword">كلمة المرور</label>
                    <input type="password" id="loginPassword" class="login-input" placeholder="أدخل كلمة المرور" required>
                </div>
                
                <button type="submit" class="login-button">
                    <i class="fas fa-sign-in-alt"></i> تسجيل الدخول
                </button>
            </form>
            
            <div style="text-align: center; margin-top: 20px; font-size: 12px; color: var(--theme-text-tertiary);">
                الحساب الافتراضي: admin / admin123
            </div>
            
            <div style="text-align: center; margin-top: 15px;">
                <button type="button" onclick="window.resetSecuritySystem()" style="padding: 8px 16px; background: #ef4444; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 13px;">
                    <i class="fas fa-sync-alt"></i> إعادة تعيين النظام
                </button>
                <p style="font-size: 11px; color: var(--theme-text-tertiary); margin-top: 8px;">اضغط هنا إذا واجهت مشكلة في تسجيل الدخول</p>
            </div>
        </div>
    </div>

    <script>
        // دالة إعادة تعيين نظام الأمان
        window.resetSecuritySystem = function() {
            if (confirm('هل أنت متأكد؟ سيتم حذف جميع المستخدمين وإعادة إنشاء الحساب الافتراضي.')) {
                console.log('🔄 إعادة تعيين نظام الأمان...');
                
                // مسح البيانات القديمة
                localStorage.removeItem('app_users');
                sessionStorage.clear();
                
                console.log('✅ تم مسح البيانات القديمة');
                
                // إعادة تحميل الصفحة
                alert('تم إعادة تعيين النظام بنجاح. سيتم إعادة تحميل الصفحة.');
                window.location.reload();
            }
        };
    </script>

    <!-- لوحة إدارة الأمان -->
    <div id="securityPanel" class="security-panel">
        <div class="security-content">
            <div class="security-header">
                <h2 class="security-title">
                    <i class="fas fa-shield-alt"></i>
                    نظام الحماية والصلاحيات
                </h2>
                <button class="security-close" onclick="window.securityManager.closeSecurityPanel()">
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <div class="security-tabs">
                <button class="security-tab active" onclick="window.securityManager.switchSecurityTab('users')">
                    <i class="fas fa-users"></i> إدارة المستخدمين
                </button>
                <button class="security-tab" onclick="window.securityManager.switchSecurityTab('permissions')">
                    <i class="fas fa-key"></i> الصلاحيات المتاحة
                </button>
            </div>

            <div class="security-body">
                <!-- تبويب المستخدمين -->
                <div id="usersTab" class="tab-content" style="display: block;">
                    <div class="security-section">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                            <h3 class="section-title">
                                <i class="fas fa-users"></i>
                                المستخدمون المسجلون
                            </h3>
                            <button class="btn-add-user" onclick="window.securityManager.openUserModal()">
                                <i class="fas fa-plus"></i>
                                إضافة مستخدم جديد
                            </button>
                        </div>

                        <div style="overflow-x: auto;">
                            <table class="users-table">
                                <thead>
                                    <tr>
                                        <th>الاسم</th>
                                        <th>اسم المستخدم</th>
                                        <th>الدور</th>
                                        <th>الحالة</th>
                                        <th>تاريخ الإنشاء</th>
                                        <th>الإجراءات</th>
                                    </tr>
                                </thead>
                                <tbody id="usersTableBody">
                                    <!-- سيتم ملؤها بواسطة JavaScript -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <!-- تبويب الصلاحيات -->
                <div id="permissionsTab" class="tab-content" style="display: none;">
                    <div class="security-section">
                        <h3 class="section-title">
                            <i class="fas fa-info-circle"></i>
                            دليل الصلاحيات المتاحة في النظام
                        </h3>
                        
                        <div class="permissions-grid">
                            <div class="permission-card">
                                <div class="permission-card-title">
                                    <i class="fas fa-tachometer-alt" style="color: #6366f1;"></i>
                                    لوحة التحكم
                                </div>
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• عرض عدد المنتجات</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• عرض قيمة المخزون</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• عرض عدد الديون</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• عرض قيمة الديون</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• عرض الإيرادات</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• عرض الأرباح</li>
                                </ul>
                            </div>

                            <div class="permission-card">
                                <div class="permission-card-title">
                                    <i class="fas fa-bars" style="color: #8b5cf6;"></i>
                                    الشريط الجانبي
                                </div>
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• نقطة البيع</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• الفواتير</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• المنتجات</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• المخزون</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• الديون</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• التقارير</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• الطابعة</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• الإعدادات</li>
                                </ul>
                            </div>

                            <div class="permission-card">
                                <div class="permission-card-title">
                                    <i class="fas fa-boxes" style="color: #10b981;"></i>
                                    إدارة المنتجات
                                </div>
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• إضافة منتج</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• تعديل منتج</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• حذف منتج</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• تصدير المنتجات</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• استيراد المنتجات</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• إضافة فئة</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• إدارة المخزون</li>
                                </ul>
                            </div>

                            <div class="permission-card">
                                <div class="permission-card-title">
                                    <i class="fas fa-warehouse" style="color: #f59e0b;"></i>
                                    إدارة المخزون
                                </div>
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• إضافة مخزون</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• تعديل مخزون</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• حذف مخزون</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• تعديل الكمية</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• عرض السجل</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• تصدير البيانات</li>
                                </ul>
                            </div>

                            <div class="permission-card">
                                <div class="permission-card-title">
                                    <i class="fas fa-cash-register" style="color: #ec4899;"></i>
                                    نقطة البيع
                                </div>
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• الوصول لنقطة البيع</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• إتمام البيع</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• إضافة للسلة</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• البيع بالتقسيط</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• إضافة خصم</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• طباعة الفاتورة</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• إلغاء البيع</li>
                                </ul>
                            </div>

                            <div class="permission-card">
                                <div class="permission-card-title">
                                    <i class="fas fa-credit-card" style="color: #ef4444;"></i>
                                    إدارة الديون
                                </div>
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• عرض التفاصيل</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• تسديد قسط</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• حذف دين</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• تصدير البيانات</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• إرسال تذكيرات</li>
                                </ul>
                            </div>

                            <div class="permission-card">
                                <div class="permission-card-title">
                                    <i class="fas fa-chart-bar" style="color: #3b82f6;"></i>
                                    التقارير
                                </div>
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• تقارير المبيعات</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• تقارير المخزون</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• تقارير الديون</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• تقارير الأرباح</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• تصدير التقارير</li>
                                </ul>
                            </div>

                            <div class="permission-card">
                                <div class="permission-card-title">
                                    <i class="fas fa-cog" style="color: #64748b;"></i>
                                    الطابعة والإعدادات
                                </div>
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• إعداد الطابعة</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• اختبار الطباعة</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• تعديل الإعدادات</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• نسخ احتياطي</li>
                                    <li style="padding: 8px 0; color: var(--theme-text-secondary);">• استعادة البيانات</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- نافذة إضافة/تعديل مستخدم -->
    <div id="userModal" class="user-modal">
        <div class="user-modal-content">
            <div class="user-modal-header">
                <h3 class="user-modal-title" id="userModalTitle">إضافة مستخدم جديد</h3>
            </div>
            
            <div class="user-modal-body">
                <form id="userForm">
                    <input type="hidden" id="userId">
                    
                    <div class="form-group">
                        <label class="form-label" for="userName">الاسم الكامل *</label>
                        <input type="text" id="userName" class="form-input" placeholder="أدخل الاسم الكامل" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="userUsername">اسم المستخدم *</label>
                        <input type="text" id="userUsername" class="form-input" placeholder="أدخل اسم المستخدم" required>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="userPassword">كلمة المرور</label>
                        <input type="password" id="userPassword" class="form-input" placeholder="أدخل كلمة المرور">
                        <small style="color: var(--theme-text-tertiary); font-size: 12px;">اتركها فارغة للإبقاء على كلمة المرور الحالية</small>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label" for="userRole">الدور *</label>
                        <select id="userRole" class="form-select" required>
                            <option value="user">مستخدم عادي</option>
                            <option value="admin">مدير</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">الصلاحيات</label>
                        <div class="permissions-grid" style="margin-top: 10px;">
                            <!-- Dashboard -->
                            <div class="permission-card">
                                <div class="permission-card-title">لوحة التحكم</div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_dashboard_products_count" class="permission-checkbox">
                                    <label for="perm_dashboard_products_count" class="permission-label">عدد المنتجات</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_dashboard_inventory_value" class="permission-checkbox">
                                    <label for="perm_dashboard_inventory_value" class="permission-label">قيمة المخزون</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_dashboard_debts_count" class="permission-checkbox">
                                    <label for="perm_dashboard_debts_count" class="permission-label">عدد الديون</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_dashboard_debts_value" class="permission-checkbox">
                                    <label for="perm_dashboard_debts_value" class="permission-label">قيمة الديون</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_dashboard_revenue" class="permission-checkbox">
                                    <label for="perm_dashboard_revenue" class="permission-label">الإيرادات</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_dashboard_profit" class="permission-checkbox">
                                    <label for="perm_dashboard_profit" class="permission-label">الأرباح</label>
                                </div>
                            </div>

                            <!-- Sidebar -->
                            <div class="permission-card">
                                <div class="permission-card-title">القوائم الجانبية</div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_sidebar_pos" class="permission-checkbox">
                                    <label for="perm_sidebar_pos" class="permission-label">نقطة البيع</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_sidebar_invoices" class="permission-checkbox">
                                    <label for="perm_sidebar_invoices" class="permission-label">الفواتير</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_sidebar_products" class="permission-checkbox">
                                    <label for="perm_sidebar_products" class="permission-label">المنتجات</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_sidebar_inventory" class="permission-checkbox">
                                    <label for="perm_sidebar_inventory" class="permission-label">المخزون</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_sidebar_debts" class="permission-checkbox">
                                    <label for="perm_sidebar_debts" class="permission-label">الديون</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_sidebar_reports" class="permission-checkbox">
                                    <label for="perm_sidebar_reports" class="permission-label">التقارير</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_sidebar_printer" class="permission-checkbox">
                                    <label for="perm_sidebar_printer" class="permission-label">الطابعة</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_sidebar_settings" class="permission-checkbox">
                                    <label for="perm_sidebar_settings" class="permission-label">الإعدادات</label>
                                </div>
                            </div>

                            <!-- عرض الصفحات -->
                            <div class="permission-card">
                                <div class="permission-card-title">عرض الصفحات</div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_sales_view" class="permission-checkbox">
                                    <label for="perm_sales_view" class="permission-label">المبيعات</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_products_view" class="permission-checkbox">
                                    <label for="perm_products_view" class="permission-label">المنتجات</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_inventory_view" class="permission-checkbox">
                                    <label for="perm_inventory_view" class="permission-label">المخزون</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_debts_view" class="permission-checkbox">
                                    <label for="perm_debts_view" class="permission-label">الديون</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_reports_view" class="permission-checkbox">
                                    <label for="perm_reports_view" class="permission-label">التقارير</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_settings_view" class="permission-checkbox">
                                    <label for="perm_settings_view" class="permission-label">الإعدادات</label>
                                </div>
                            </div>

                            <!-- المنتجات -->
                            <div class="permission-card">
                                <div class="permission-card-title">إدارة المنتجات</div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_products_add" class="permission-checkbox">
                                    <label for="perm_products_add" class="permission-label">إضافة</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_products_edit" class="permission-checkbox">
                                    <label for="perm_products_edit" class="permission-label">تعديل</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_products_delete" class="permission-checkbox">
                                    <label for="perm_products_delete" class="permission-label">حذف</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_products_export" class="permission-checkbox">
                                    <label for="perm_products_export" class="permission-label">تصدير</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_products_import" class="permission-checkbox">
                                    <label for="perm_products_import" class="permission-label">استيراد</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_products_add_category" class="permission-checkbox">
                                    <label for="perm_products_add_category" class="permission-label">إضافة فئة</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_products_stock_management" class="permission-checkbox">
                                    <label for="perm_products_stock_management" class="permission-label">إدارة المخزون</label>
                                </div>
                            </div>

                            <!-- المخزون -->
                            <div class="permission-card">
                                <div class="permission-card-title">إدارة المخزون</div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_inventory_add" class="permission-checkbox">
                                    <label for="perm_inventory_add" class="permission-label">إضافة</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_inventory_edit" class="permission-checkbox">
                                    <label for="perm_inventory_edit" class="permission-label">تعديل</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_inventory_delete" class="permission-checkbox">
                                    <label for="perm_inventory_delete" class="permission-label">حذف</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_inventory_adjust" class="permission-checkbox">
                                    <label for="perm_inventory_adjust" class="permission-label">تعديل الكمية</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_inventory_history" class="permission-checkbox">
                                    <label for="perm_inventory_history" class="permission-label">عرض السجل</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_inventory_export" class="permission-checkbox">
                                    <label for="perm_inventory_export" class="permission-label">تصدير</label>
                                </div>
                            </div>

                            <!-- نقطة البيع -->
                            <div class="permission-card">
                                <div class="permission-card-title">نقطة البيع</div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_pos_access" class="permission-checkbox">
                                    <label for="perm_pos_access" class="permission-label">الوصول</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_pos_sell" class="permission-checkbox">
                                    <label for="perm_pos_sell" class="permission-label">إتمام البيع</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_pos_add_to_cart" class="permission-checkbox">
                                    <label for="perm_pos_add_to_cart" class="permission-label">إضافة للسلة</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_pos_installment" class="permission-checkbox">
                                    <label for="perm_pos_installment" class="permission-label">البيع بالتقسيط</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_pos_discount" class="permission-checkbox">
                                    <label for="perm_pos_discount" class="permission-label">إضافة خصم</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_pos_print" class="permission-checkbox">
                                    <label for="perm_pos_print" class="permission-label">طباعة</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_pos_cancel" class="permission-checkbox">
                                    <label for="perm_pos_cancel" class="permission-label">إلغاء البيع</label>
                                </div>
                            </div>

                            <!-- الفواتير -->
                            <div class="permission-card">
                                <div class="permission-card-title">إدارة الفواتير</div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_invoices_view" class="permission-checkbox">
                                    <label for="perm_invoices_view" class="permission-label">عرض الفواتير</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_invoices_delete" class="permission-checkbox">
                                    <label for="perm_invoices_delete" class="permission-label">حذف الفواتير</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_invoices_export" class="permission-checkbox">
                                    <label for="perm_invoices_export" class="permission-label">تصدير الفواتير</label>
                                </div>
                            </div>

                            <!-- الديون -->
                            <div class="permission-card">
                                <div class="permission-card-title">إدارة الديون</div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_debts_view_details" class="permission-checkbox">
                                    <label for="perm_debts_view_details" class="permission-label">عرض التفاصيل</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_debts_payment" class="permission-checkbox">
                                    <label for="perm_debts_payment" class="permission-label">تسديد</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_debts_delete" class="permission-checkbox">
                                    <label for="perm_debts_delete" class="permission-label">حذف</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_debts_export" class="permission-checkbox">
                                    <label for="perm_debts_export" class="permission-label">تصدير</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_debts_reminders" class="permission-checkbox">
                                    <label for="perm_debts_reminders" class="permission-label">تذكيرات</label>
                                </div>
                            </div>

                            <!-- التقارير -->
                            <div class="permission-card">
                                <div class="permission-card-title">التقارير</div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_reports_sales" class="permission-checkbox">
                                    <label for="perm_reports_sales" class="permission-label">المبيعات</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_reports_inventory" class="permission-checkbox">
                                    <label for="perm_reports_inventory" class="permission-label">المخزون</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_reports_debts" class="permission-checkbox">
                                    <label for="perm_reports_debts" class="permission-label">الديون</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_reports_profit" class="permission-checkbox">
                                    <label for="perm_reports_profit" class="permission-label">الأرباح</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_reports_export" class="permission-checkbox">
                                    <label for="perm_reports_export" class="permission-label">تصدير</label>
                                </div>
                            </div>

                            <!-- الإعدادات -->
                            <div class="permission-card">
                                <div class="permission-card-title">الإعدادات</div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_printer_configure" class="permission-checkbox">
                                    <label for="perm_printer_configure" class="permission-label">إعداد الطابعة</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_printer_test" class="permission-checkbox">
                                    <label for="perm_printer_test" class="permission-label">اختبار الطباعة</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_settings_edit" class="permission-checkbox">
                                    <label for="perm_settings_edit" class="permission-label">تعديل الإعدادات</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_settings_backup" class="permission-checkbox">
                                    <label for="perm_settings_backup" class="permission-label">نسخ احتياطي</label>
                                </div>
                                <div class="permission-item">
                                    <input type="checkbox" id="perm_settings_restore" class="permission-checkbox">
                                    <label for="perm_settings_restore" class="permission-label">استعادة</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                
                <div class="form-actions">
                    <button type="button" class="btn-secondary" onclick="window.securityManager.closeUserModal()">
                        <i class="fas fa-times"></i> إلغاء
                    </button>
                    <button type="button" class="btn-primary" onclick="window.securityManager.saveUser()">
                        <i class="fas fa-save"></i> حفظ
                    </button>
                </div>
            </div>
        </div>
    </div>

    <script src="./reports-system.js"></script>
    <script src="./expenses-system.js"></script>
    
    <!-- =============================================== -->
    <!-- النوافذ المنبثقة الجديدة للتحديثات المطلوبة -->
    <!-- =============================================== -->
    
    <!-- نافذة تعديل الدين -->
    <div id="editDebtModal" class="modal">
        <div class="modal-content" style="max-width: 900px;">
            <div class="modal-header">
                <h2><i class="fas fa-edit"></i> تعديل بيانات الدين</h2>
                <button class="close-modal" onclick="closeEditDebtModal()">&times;</button>
            </div>
            <div class="modal-body">
                <form id="editDebtForm" onsubmit="saveEditedDebt(event)">
                    <input type="hidden" id="editDebtId">
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">اسم العميل <span style="color: red;">*</span></label>
                            <input type="text" id="editDebtCustomerName" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">رقم الهاتف</label>
                            <input type="tel" id="editDebtCustomerPhone" class="form-input">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">المبلغ الإجمالي <span style="color: red;">*</span></label>
                            <input type="number" id="editDebtTotalAmount" class="form-input" required min="0" step="0.01">
                        </div>
                        <div class="form-group">
                            <label class="form-label">المبلغ المدفوع</label>
                            <input type="number" id="editDebtPaidAmount" class="form-input" min="0" step="0.01">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">عدد الأشهر</label>
                            <input type="number" id="editDebtMonths" class="form-input" min="1">
                        </div>
                        <div class="form-group">
                            <label class="form-label">القسط الشهري</label>
                            <input type="number" id="editDebtMonthlyPayment" class="form-input" readonly>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">ملاحظات</label>
                        <textarea id="editDebtNotes" class="form-input" rows="3"></textarea>
                    </div>
                    
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" onclick="closeEditDebtModal()">
                            <i class="fas fa-times"></i> إلغاء
                        </button>
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-save"></i> حفظ التعديلات
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <!-- نافذة إضافة دين جديد محسّنة مع المنتجات -->
    <div id="addManualDebtModal" class="modal">
        <div class="modal-content" style="max-width: 1000px;">
            <div class="modal-header">
                <h2><i class="fas fa-plus-circle"></i> إضافة دين جديد</h2>
                <button class="close-modal" onclick="closeAddManualDebtModal()">&times;</button>
            </div>
            <div class="modal-body">
                <form id="addManualDebtForm" onsubmit="saveManualDebt(event)">
                    <!-- معلومات العميل -->
                    <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                        <i class="fas fa-user"></i> معلومات العميل
                    </h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">اسم العميل <span style="color: red;">*</span></label>
                            <input type="text" id="manualDebtCustomerName" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">رقم الهاتف <span style="color: red;">*</span></label>
                            <input type="tel" id="manualDebtPhone" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">العنوان</label>
                            <input type="text" id="manualDebtAddress" class="form-input">
                        </div>
                    </div>
                    
                    <!-- المنتجات المشتراة -->
                    <h3 style="color: var(--primary-color); margin: 2rem 0 1rem;">
                        <i class="fas fa-shopping-cart"></i> المنتجات المشتراة
                    </h3>
                    <div id="debtProductsContainer">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>المنتج</th>
                                    <th>السعر</th>
                                    <th>الكمية</th>
                                    <th>الإجمالي</th>
                                    <th>إجراءات</th>
                                </tr>
                            </thead>
                            <tbody id="debtProductsTable">
                                <!-- المنتجات ستضاف هنا -->
                            </tbody>
                        </table>
                        <button type="button" class="btn btn-success" onclick="addDebtProductRow()">
                            <i class="fas fa-plus"></i> إضافة منتج
                        </button>
                    </div>
                    
                    <!-- معلومات الدفع -->
                    <h3 style="color: var(--primary-color); margin: 2rem 0 1rem;">
                        <i class="fas fa-money-bill-wave"></i> معلومات الدفع والتقسيط
                    </h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">إجمالي المبلغ</label>
                            <input type="number" id="manualDebtTotalAmount" class="form-input" readonly>
                        </div>
                        <div class="form-group">
                            <label class="form-label">المبلغ المدفوع مقدماً</label>
                            <input type="number" id="manualDebtPaidAmount" class="form-input" min="0" step="0.01" value="0" onchange="calculateManualDebtInstallment()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">المبلغ المتبقي</label>
                            <input type="number" id="manualDebtRemainingAmount" class="form-input" readonly>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">عدد الأقساط (بالأشهر) <span style="color: red;">*</span></label>
                            <input type="number" id="manualDebtInstallmentMonths" class="form-input" required min="1" value="3" onchange="calculateManualDebtInstallment()">
                        </div>
                        <div class="form-group">
                            <label class="form-label">القسط الشهري</label>
                            <input type="number" id="manualDebtMonthlyAmount" class="form-input" readonly>
                        </div>
                        <div class="form-group">
                            <label class="form-label">تاريخ أول قسط</label>
                            <input type="date" id="manualDebtFirstDate" class="form-input">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">ملاحظات</label>
                        <textarea id="manualDebtNotes" class="form-input" rows="3" placeholder="أي ملاحظات إضافية..."></textarea>
                    </div>
                    
                    <!-- رقم الفاتورة -->
                    <div class="form-group">
                        <label class="form-label">رقم الفاتورة</label>
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <input type="text" id="manualDebtInvoiceId" class="form-input" placeholder="أدخل رقم الفاتورة أو اترك فارغاً للتوليد التلقائي" style="flex: 1;">
                            <button type="button" class="btn btn-secondary" onclick="generateInvoiceNumber()" style="white-space: nowrap;">
                                <i class="fas fa-sync-alt"></i> توليد رقم
                            </button>
                        </div>
                        <small style="color: var(--text-secondary); display: block; margin-top: 5px;">
                            <i class="fas fa-info-circle"></i> إذا تركت الحقل فارغاً، سيتم توليد رقم تلقائياً
                        </small>
                    </div>
                    
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" onclick="closeAddManualDebtModal()">
                            <i class="fas fa-times"></i> إلغاء
                        </button>
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-save"></i> حفظ الدين
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <!-- نافذة تفاصيل المنتج في المخزون -->
    <div id="productDetailsModal" class="modal">
        <div class="modal-content" style="max-width: 700px;">
            <div class="modal-header">
                <h2><i class="fas fa-info-circle"></i> تفاصيل المنتج</h2>
                <button class="close-modal" onclick="closeProductDetailsModal()">&times;</button>
            </div>
            <div class="modal-body" id="productDetailsContent">
                <!-- محتوى التفاصيل سيتم إضافته ديناميكياً -->
            </div>
        </div>
    </div>
    
    <!-- نافذة تعديل المنتج -->
    <div id="editProductModal" class="modal">
        <div class="modal-content" style="max-width: 800px;">
            <div class="modal-header">
                <h2><i class="fas fa-edit"></i> تعديل المنتج</h2>
                <button class="close-modal" onclick="closeEditProductModal()">&times;</button>
            </div>
            <div class="modal-body">
                <form id="editProductForm" onsubmit="saveEditedProduct(event)">
                    <input type="hidden" id="editProductId">
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">اسم المنتج <span style="color: red;">*</span></label>
                            <input type="text" id="editProductName" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">الباركود <span style="color: red;">*</span></label>
                            <input type="text" id="editProductBarcode" class="form-input" required>
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">التصنيف</label>
                            <select id="editProductCategory" class="form-select">
                                <!-- التصنيفات ستضاف ديناميكياً -->
                            </select>
                        </div>
                        <div class="form-group">
                            <label class="form-label">الكمية</label>
                            <input type="number" id="editProductStock" class="form-input" min="0">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label class="form-label">سعر الشراء</label>
                            <input type="number" id="editProductCost" class="form-input" min="0" step="0.01">
                        </div>
                        <div class="form-group">
                            <label class="form-label">سعر البيع</label>
                            <input type="number" id="editProductPrice" class="form-input" min="0" step="0.01">
                        </div>
                    </div>
                    
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" onclick="closeEditProductModal()">
                            <i class="fas fa-times"></i> إلغاء
                        </button>
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-save"></i> حفظ التعديلات
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <!-- نافذة نقل المنتج بين التصنيفات -->
    <div id="moveProductCategoryModal" class="modal">
        <div class="modal-content" style="max-width: 500px;">
            <div class="modal-header">
                <h2><i class="fas fa-exchange-alt"></i> نقل المنتج إلى تصنيف آخر</h2>
                <button class="close-modal" onclick="closeMoveProductCategoryModal()">&times;</button>
            </div>
            <div class="modal-body">
                <form id="moveProductCategoryForm" onsubmit="saveProductCategoryMove(event)">
                    <input type="hidden" id="moveProductId">
                    
                    <div class="form-group">
                        <label class="form-label">المنتج الحالي</label>
                        <input type="text" id="moveProductName" class="form-input" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">التصنيف الحالي</label>
                        <input type="text" id="moveProductCurrentCategory" class="form-input" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">التصنيف الجديد <span style="color: red;">*</span></label>
                        <select id="moveProductNewCategory" class="form-select" required>
                            <option value="">اختر التصنيف الجديد...</option>
                            <!-- التصنيفات ستضاف ديناميكياً -->
                        </select>
                    </div>
                    
                    <div class="form-actions">
                        <button type="button" class="btn btn-secondary" onclick="closeMoveProductCategoryModal()">
                            <i class="fas fa-times"></i> إلغاء
                        </button>
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-check"></i> نقل المنتج
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    <!-- =============================================== -->
    <!-- الدوال الجديدة للتحديثات المطلوبة -->
    <!-- =============================================== -->
    <script>
    
    // ============================================
    // دوال إدارة الديون المحسّنة
    // ============================================
    
    // فتح نافذة تعديل الدين
    function openEditDebtModal(debtId) {
        const debt = debtsData.find(d => d.id === debtId);
        if (!debt) {
            // تم إزالة الإشعار
            return;
        }
        
        document.getElementById('editDebtId').value = debt.id;
        document.getElementById('editDebtCustomerName').value = debt.customer_name || '';
        document.getElementById('editDebtCustomerPhone').value = debt.customer_phone || '';
        document.getElementById('editDebtTotalAmount').value = debt.total_amount || 0;
        document.getElementById('editDebtPaidAmount').value = debt.paid_amount || 0;
        document.getElementById('editDebtMonths').value = debt.installment_months || 1;
        document.getElementById('editDebtMonthlyPayment').value = debt.monthly_installment || 0;
        document.getElementById('editDebtNotes').value = debt.notes || '';
        
        showModal('editDebtModal');
    }
    
    // إغلاق نافذة تعديل الدين
    function closeEditDebtModal_OLD() {
        // نسخة قديمة - غير مستخدمة
        closeModal('editDebtModal');
        document.getElementById('editDebtForm').reset();
    }
    
    // حفظ تعديلات الدين
    async function saveEditedDebt(event) {
        event.preventDefault();
        
        const debtId = document.getElementById('editDebtId').value;
        const customerName = document.getElementById('editDebtCustomerName').value;
        const customerPhone = document.getElementById('editDebtCustomerPhone').value;
        const totalAmount = parseFloat(document.getElementById('editDebtTotalAmount').value) || 0;
        const paidAmount = parseFloat(document.getElementById('editDebtPaidAmount').value) || 0;
        const months = parseInt(document.getElementById('editDebtMonths').value) || 1;
        const notes = document.getElementById('editDebtNotes').value;
        
        const remainingAmount = totalAmount - paidAmount;
        const monthlyPayment = remainingAmount / months;
        
        // تحديث بيانات الدين
        const debtIndex = debtsData.findIndex(d => d.id === debtId);
        if (debtIndex === -1) {
            // تم إزالة الإشعار
            return;
        }
        
        debtsData[debtIndex] = {
            ...debtsData[debtIndex],
            customer_name: customerName,
            customer_phone: customerPhone,
            total_amount: totalAmount,
            paid_amount: paidAmount,
            remaining_amount: remainingAmount,
            installment_months: months,
            monthly_installment: monthlyPayment,
            notes: notes,
            updated_at: new Date().toISOString()
        };
        
        // حفظ التحديثات
        await saveToLocalStorage('debtsData', debtsData);
        
        closeEditDebtModal();
        updateDebtsView();
        // تم إزالة الإشعار
    }
    
    // فتح نافذة إضافة دين جديد محسّنة
    let debtProductsArray = [];
    
    function showAddManualDebtModal() {
        manualDebtProducts = [];
        document.getElementById('manualDebtProductsTable').innerHTML = '';
        document.getElementById('manualDebtProductsContainer').style.display = 'none';
        
        // مسح الحقول
        document.getElementById('manualDebtCustomerName').value = '';
        document.getElementById('manualDebtCustomerPhone').value = '';
        document.getElementById('manualDebtCustomerAddress').value = '';
        document.getElementById('manualDebtDate').valueAsDate = new Date();
        document.getElementById('manualDebtTotalAmount').value = 0;
        document.getElementById('manualDebtDownPayment').value = 0;
        document.getElementById('manualDebtMonths').value = 12;
        document.getElementById('manualDebtAdditionalAmount').value = 0;
        document.getElementById('manualDebtStartDate').valueAsDate = new Date();
        document.getElementById('manualDebtNotes').value = '';
        
        calculateManualDebtInstallments();
        showModal('addManualDebtModal');
    }
    
    function closeAddManualDebtModal() {
        closeModal('addManualDebtModal');
        manualDebtProducts = [];
        
        // مسح النموذج
        document.getElementById('manualDebtCustomerName').value = '';
        document.getElementById('manualDebtPhone').value = '';
        document.getElementById('manualDebtAddress').value = '';
        document.getElementById('manualDebtTotalAmount').value = '';
        document.getElementById('manualDebtPaidAmount').value = '0';
        document.getElementById('manualDebtRemainingAmount').value = '';
        document.getElementById('manualDebtInstallmentMonths').value = '3';
        document.getElementById('manualDebtMonthlyAmount').value = '';
        document.getElementById('manualDebtFirstDate').value = '';
        document.getElementById('manualDebtNotes').value = '';
        document.getElementById('manualDebtInvoiceId').value = '';
        
        // مسح جدول المنتجات
        document.getElementById('debtProductsTable').innerHTML = '';
    }
    
    // إضافة صف منتج جديد
    function addDebtProductRow() {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <input type="text" class="form-input debt-product-name" placeholder="اسم المنتج" list="productsList" onchange="updateDebtProductPrice(this)">
                <datalist id="productsList">
                    ${products.map(p => `<option value="${p.name}" data-price="${p.price}">${p.name} - ${p.price} دينار</option>`).join('')}
                </datalist>
            </td>
            <td>
                <input type="number" class="form-input debt-product-price" placeholder="السعر" min="0" step="0.01" onchange="calculateDebtProductTotal(this)">
            </td>
            <td>
                <input type="number" class="form-input debt-product-quantity" placeholder="الكمية" min="1" value="1" onchange="calculateDebtProductTotal(this)">
            </td>
            <td>
                <input type="number" class="form-input debt-product-total" placeholder="الإجمالي" readonly>
            </td>
            <td>
                <button type="button" class="btn btn-danger btn-sm" onclick="removeDebtProductRow(this)">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        document.getElementById('debtProductsTable').appendChild(row);
    }
    
    // تحديث سعر المنتج عند اختياره
    function updateDebtProductPrice(input) {
        const productName = input.value;
        const product = products.find(p => p.name === productName);
        if (product) {
            const row = input.closest('tr');
            row.querySelector('.debt-product-price').value = product.price;
            calculateDebtProductTotal(row.querySelector('.debt-product-price'));
        }
    }
    
    // حساب إجمالي المنتج
    function calculateDebtProductTotal(input) {
        const row = input.closest('tr');
        const price = parseFloat(row.querySelector('.debt-product-price').value) || 0;
        const quantity = parseFloat(row.querySelector('.debt-product-quantity').value) || 0;
        const total = price * quantity;
        row.querySelector('.debt-product-total').value = total.toFixed(2);
        
        // حساب إجمالي الدين
        calculateManualDebtTotal();
    }
    
    // حساب إجمالي الدين
    function calculateManualDebtTotal() {
        let total = 0;
        document.querySelectorAll('.debt-product-total').forEach(input => {
            total += parseFloat(input.value) || 0;
        });
        
        document.getElementById('manualDebtTotalAmount').value = total.toFixed(2);
        calculateManualDebtInstallment();
    }
    
    // حساب القسط الشهري
    function calculateManualDebtInstallment() {
        const totalAmount = parseFloat(document.getElementById('manualDebtTotalAmount').value) || 0;
        const paidAmount = parseFloat(document.getElementById('manualDebtPaidAmount').value) || 0;
        const months = parseInt(document.getElementById('manualDebtInstallmentMonths').value) || 1;
        
        const remainingAmount = totalAmount - paidAmount;
        const monthlyAmount = remainingAmount / months;
        
        document.getElementById('manualDebtRemainingAmount').value = remainingAmount.toFixed(2);
        document.getElementById('manualDebtMonthlyAmount').value = monthlyAmount.toFixed(2);
    }
    
    // حذف صف منتج
    function removeDebtProductRow(button) {
        button.closest('tr').remove();
        calculateManualDebtTotal();
    }
    
    // حفظ الدين الجديد
    // توليد رقم فاتورة تلقائي
    function generateInvoiceNumber() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        
        const invoiceNumber = `INV-${year}${month}${day}-${random}`;
        document.getElementById('manualDebtInvoiceId').value = invoiceNumber;
        
        // تم إزالة الإشعار
    }
    
    // حفظ الدين الجديد
    async function saveManualDebt() {
        // جمع البيانات من النموذج الصحيح
        const customerName = document.getElementById('manualDebtCustomerName').value.trim();
        const customerPhone = document.getElementById('manualDebtCustomerPhone').value.trim();
        const customerAddress = document.getElementById('manualDebtCustomerAddress').value.trim();
        const totalAmount = parseFloat(document.getElementById('manualDebtTotalAmount').value) || 0;
        const downPayment = parseFloat(document.getElementById('manualDebtDownPayment').value) || 0;
        const months = parseInt(document.getElementById('manualDebtMonths').value) || 1;
        const additionalAmount = parseFloat(document.getElementById('manualDebtAdditionalAmount').value) || 0;
        const startDate = document.getElementById('manualDebtStartDate').value;
        const notes = document.getElementById('manualDebtNotes').value.trim();
        
        // جمع المنتجات من الجدول - استخدام manualDebtProducts المتغير العام
        const productsToSave = manualDebtProducts && manualDebtProducts.length > 0 ? 
            manualDebtProducts : [];
        
        console.log('📦 المنتجات المضافة:', productsToSave);
        
        // التحقق من صحة البيانات
        if (!customerName || !customerPhone) {
            alert('⚠️ يرجى إدخال اسم العميل ورقم الهاتف');
            return;
        }
        
        if (totalAmount <= 0) {
            alert('⚠️ يرجى إدخال مبلغ الدين');
            return;
        }
        
        if (productsToSave.length === 0) {
            alert('⚠️ يرجى إضافة منتج واحد على الأقل');
            return;
        }
        
        // حساب الأقساط
        const remaining = totalAmount - downPayment + additionalAmount;
        const monthly = remaining / months;
        const installments = [];
        const startDateObj = startDate ? new Date(startDate) : new Date();
        
        for (let i = 0; i < months; i++) {
            const dueDate = new Date(startDateObj);
            dueDate.setMonth(dueDate.getMonth() + i);
            
            installments.push({
                month: i + 1,
                amount: monthly,
                due_date: dueDate.toISOString(),
                status: 'pending',
                paid_date: null,
                paid_amount: 0
            });
        }
        
        const currentDate = new Date().toISOString();
        const debtId = 'debt_' + Date.now();
        
        // إنشاء الدين الجديد
        const newDebt = {
            type: 'debt',
            id: debtId,
            debt_id: debtId,
            invoice_id: 'INV-' + Date.now(),
            customer_name: customerName,
            customer_phone: customerPhone,
            customer_address: customerAddress,
            date: document.getElementById('manualDebtDate').value || new Date().toISOString().split('T')[0],
            total_amount: totalAmount,
            down_payment: downPayment,
            additional_amount: additionalAmount,
            remaining_amount: remaining,
            paid_amount: downPayment,
            installment_months: months,
            monthly_amount: monthly,
            start_date: startDate || new Date().toISOString().split('T')[0],
            notes: notes,
            products: productsToSave,
            installments: installments,
            status: 'نشط',
            created_at: currentDate,
            updated_at: currentDate,
            timestamp: currentDate
        };
        
        console.log('💾 حفظ الدين:', newDebt);
        
        try {
            // 1. إضافة إلى debtsData أولاً
            debtsData.push(newDebt);
            console.log('✅ تمت الإضافة إلى debtsData');
            
            // 2. حفظ في localStorage فوراً
            await saveToLocalStorage('debtsData', debtsData);
            console.log('✅ تم حفظ في localStorage');
            
            // 3. حفظ نسخة احتياطية
            const cachedDebts = debtsData.map(d => ({...d, type: 'debt'}));
            localStorage.setItem('cached_debts', JSON.stringify(cachedDebts));
            console.log('✅ تم حفظ نسخة احتياطية');
            
            // 4. محاولة الحفظ في dataSdk (اختياري)
            if (window.dataSdk) {
                try {
                    const result = await window.dataSdk.create(newDebt);
                    if (result.isOk) {
                        console.log('✅ تم حفظ في dataSdk');
                        // تحديث ID إذا كان مختلفاً
                        if (result.id && result.id !== newDebt.id) {
                            const index = debtsData.findIndex(d => d.id === newDebt.id);
                            if (index !== -1) {
                                debtsData[index].id = result.id;
                                debtsData[index].debt_id = result.id;
                                await saveToLocalStorage('debtsData', debtsData);
                            }
                        }
                    }
                } catch (sdkError) {
                    console.warn('⚠️ فشل الحفظ في dataSdk (ليس خطيراً):', sdkError);
                }
            }
            
            // 5. محاولة الحفظ في Firebase (اختياري)
            if (window.database) {
                try {
                    const uid = localStorage.getItem('app_uid');
                    if (uid) {
                        await window.database.ref(`users/${uid}/debts/${debtId}`).set(newDebt);
                        console.log('✅ تم حفظ في Firebase');
                    }
                } catch (fbError) {
                    console.warn('⚠️ فشل الحفظ في Firebase (ليس خطيراً):', fbError);
                }
            }
            
            // إغلاق النافذة وتحديث الجدول
            closeAddManualDebtModal();
            renderDebtsTable();
            
            alert('✅ تم حفظ الدين بنجاح');
            console.log('✅ تمت عملية الحفظ بنجاح');
            
        } catch (error) {
            console.error('❌ خطأ في حفظ الدين:', error);
            alert('❌ حدث خطأ في حفظ الدين: ' + error.message);
        }
    }
    
    // ============================================
    // دوال إدارة المنتجات في نافذة الدين
    // ============================================
    
    // دالة البحث عن المنتجات لنافذة إضافة دين
    function searchProductsForDebt(searchTerm) {
        const resultsContainer = document.getElementById('manualDebtProductSearchResults');
        
        if (!searchTerm || searchTerm.trim() === '') {
            resultsContainer.style.display = 'none';
            return;
        }
        
        const filtered = products.filter(p => 
            p.name && p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.barcode && p.barcode.includes(searchTerm)
        );
        
        if (filtered.length === 0) {
            resultsContainer.innerHTML = '<div style="padding: 1rem; text-align: center; color: var(--theme-text-secondary);">لا توجد نتائج</div>';
            resultsContainer.style.display = 'block';
            return;
        }
        
        resultsContainer.innerHTML = filtered.map(p => `
            <div onclick="selectProductForDebt('${p.id}')" style="padding: 0.75rem; cursor: pointer; border-bottom: 1px solid var(--theme-border-color); transition: all 0.2s;"
                 onmouseover="this.style.background='var(--theme-bg-secondary)'" 
                 onmouseout="this.style.background='transparent'">
                <div style="font-weight: 500; color: var(--theme-text-primary);">${p.name}</div>
                <div style="font-size: 0.85rem; color: var(--theme-text-secondary);">
                    ${p.product_cost_retail ? p.product_cost_retail.toLocaleString() : '0'} دينار
                </div>
            </div>
        `).join('');
        
        resultsContainer.style.display = 'block';
    }
    
    // دالة اختيار منتج من نتائج البحث
    function selectProductForDebt(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        document.getElementById('manualDebtProductName').value = product.name;
        document.getElementById('manualDebtProductPrice').value = product.product_cost_retail || 0;
        document.getElementById('manualDebtProductQty').value = 1;
        document.getElementById('manualDebtProductSearchResults').style.display = 'none';
        document.getElementById('manualDebtProductSearch').value = '';
    }
    
    // دالة إضافة منتج في نافذة الدين
    function addManualDebtProduct() {
        const name = document.getElementById('manualDebtProductName').value.trim();
        const price = parseFloat(document.getElementById('manualDebtProductPrice').value) || 0;
        const qty = parseInt(document.getElementById('manualDebtProductQty').value) || 1;
        
        if (!name || price <= 0 || qty <= 0) {
            // تم إزالة الإشعار
            return;
        }
        
        const total = price * qty;
        manualDebtProducts.push({ name, price, qty, total });
        
        renderManualDebtProducts();
        updateManualDebtTotal();
        
        // مسح الحقول
        document.getElementById('manualDebtProductName').value = '';
        document.getElementById('manualDebtProductPrice').value = '';
        document.getElementById('manualDebtProductQty').value = 1;
    }
    
    // دالة عرض المنتجات في الجدول
    function renderManualDebtProducts() {
        const container = document.getElementById('manualDebtProductsContainer');
        const tbody = document.getElementById('manualDebtProductsTable');
        
        if (manualDebtProducts.length === 0) {
            container.style.display = 'none';
            return;
        }
        
        container.style.display = 'block';
        tbody.innerHTML = manualDebtProducts.map((p, index) => `
            <tr>
                <td>${p.name}</td>
                <td>${p.price.toLocaleString()} دينار</td>
                <td>${p.qty}</td>
                <td>${p.total.toLocaleString()} دينار</td>
                <td>
                    <button class="action-btn delete-btn" onclick="removeManualDebtProduct(${index})" title="حذف">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }
    
    // دالة حذف منتج
    function removeManualDebtProduct(index) {
        manualDebtProducts.splice(index, 1);
        renderManualDebtProducts();
        updateManualDebtTotal();
    }
    
    // دالة تحديث المبلغ الإجمالي
    function updateManualDebtTotal() {
        const total = manualDebtProducts.reduce((sum, p) => sum + p.total, 0);
        document.getElementById('manualDebtTotalAmount').value = total;
        calculateManualDebtInstallments();
    }
    
    // دالة حساب الأقساط
    function calculateManualDebtInstallments() {
        const totalAmount = parseFloat(document.getElementById('manualDebtTotalAmount').value) || 0;
        const downPayment = parseFloat(document.getElementById('manualDebtDownPayment').value) || 0;
        const months = parseInt(document.getElementById('manualDebtMonths').value) || 1;
        const additionalAmount = parseFloat(document.getElementById('manualDebtAdditionalAmount').value) || 0;
        
        const remaining = totalAmount - downPayment + additionalAmount;
        const monthly = remaining / months;
        const finalTotal = totalAmount + additionalAmount;
        
        document.getElementById('manualDebtRemainingAmount').textContent = remaining.toLocaleString() + ' دينار';
        document.getElementById('manualDebtMonthlyAmount').textContent = monthly.toLocaleString() + ' دينار';
        document.getElementById('manualDebtFinalTotal').textContent = finalTotal.toLocaleString() + ' دينار';
    }
    
    // دوال مماثلة لنافذة التعديل
    function searchProductsForEditDebt(searchTerm) {
        const resultsContainer = document.getElementById('editDebtProductSearchResults');
        
        if (!searchTerm || searchTerm.trim() === '') {
            resultsContainer.style.display = 'none';
            return;
        }
        
        const filtered = products.filter(p => 
            p.name && p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.barcode && p.barcode.includes(searchTerm)
        );
        
        if (filtered.length === 0) {
            resultsContainer.innerHTML = '<div style="padding: 1rem; text-align: center; color: var(--theme-text-secondary);">لا توجد نتائج</div>';
            resultsContainer.style.display = 'block';
            return;
        }
        
        resultsContainer.innerHTML = filtered.map(p => `
            <div onclick="selectProductForEditDebt('${p.id}')" style="padding: 0.75rem; cursor: pointer; border-bottom: 1px solid var(--theme-border-color); transition: all 0.2s;"
                 onmouseover="this.style.background='var(--theme-bg-secondary)'" 
                 onmouseout="this.style.background='transparent'">
                <div style="font-weight: 500; color: var(--theme-text-primary);">${p.name}</div>
                <div style="font-size: 0.85rem; color: var(--theme-text-secondary);">
                    ${p.product_cost_retail ? p.product_cost_retail.toLocaleString() : '0'} دينار
                </div>
            </div>
        `).join('');
        
        resultsContainer.style.display = 'block';
    }
    
    function selectProductForEditDebt(productId) {
        const product = products.find(p => p.id === productId);
        if (!product) return;
        
        document.getElementById('editDebtProductName').value = product.name;
        document.getElementById('editDebtProductPrice').value = product.product_cost_retail || 0;
        document.getElementById('editDebtProductQty').value = 1;
        document.getElementById('editDebtProductSearchResults').style.display = 'none';
        document.getElementById('editDebtProductSearch').value = '';
    }
    
    function addEditDebtProduct() {
        const name = document.getElementById('editDebtProductName').value.trim();
        const price = parseFloat(document.getElementById('editDebtProductPrice').value) || 0;
        const qty = parseInt(document.getElementById('editDebtProductQty').value) || 1;
        
        if (!name || price <= 0 || qty <= 0) {
            // تم إزالة الإشعار
            return;
        }
        
        const total = price * qty;
        editDebtProducts.push({ name, price, qty, total });
        
        renderEditDebtProducts();
        updateEditDebtTotal();
        
        document.getElementById('editDebtProductName').value = '';
        document.getElementById('editDebtProductPrice').value = '';
        document.getElementById('editDebtProductQty').value = 1;
    }
    
    function renderEditDebtProducts() {
        const container = document.getElementById('editDebtProductsContainer');
        const tbody = document.getElementById('editDebtProductsTable');
        
        if (editDebtProducts.length === 0) {
            container.style.display = 'none';
            return;
        }
        
        container.style.display = 'block';
        tbody.innerHTML = editDebtProducts.map((p, index) => `
            <tr>
                <td>${p.name}</td>
                <td>${p.price.toLocaleString()} دينار</td>
                <td>${p.qty}</td>
                <td>${p.total.toLocaleString()} دينار</td>
                <td>
                    <button class="action-btn delete-btn" onclick="removeEditDebtProduct(${index})" title="حذف">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `).join('');
    }
    
    function removeEditDebtProduct(index) {
        editDebtProducts.splice(index, 1);
        renderEditDebtProducts();
        updateEditDebtTotal();
    }
    
    function updateEditDebtTotal() {
        const total = editDebtProducts.reduce((sum, p) => sum + p.total, 0);
        document.getElementById('editDebtTotalAmount').value = total;
        calculateEditDebtInstallments();
    }
    
    function calculateEditDebtInstallments() {
        const totalAmount = parseFloat(document.getElementById('editDebtTotalAmount').value) || 0;
        const downPayment = parseFloat(document.getElementById('editDebtDownPayment').value) || 0;
        const months = parseInt(document.getElementById('editDebtMonths').value) || 1;
        const additionalAmount = parseFloat(document.getElementById('editDebtAdditionalAmount').value) || 0;
        
        const remaining = totalAmount - downPayment + additionalAmount;
        const monthly = remaining / months;
        const finalTotal = totalAmount + additionalAmount;
        
        document.getElementById('editDebtRemainingAmount').textContent = remaining.toLocaleString() + ' دينار';
        document.getElementById('editDebtMonthlyAmount').textContent = monthly.toLocaleString() + ' دينار';
        document.getElementById('editDebtFinalTotal').textContent = finalTotal.toLocaleString() + ' دينار';
    }
    
    // دالة فتح نافذة التعديل
    async function showEditDebtModal(debtId) {
        console.log('🔍 فتح نافذة تعديل الدين:', debtId, 'نوع:', typeof debtId);
        currentEditDebtId = debtId;
        
        // دالة مساعدة للمقارنة تدعم كل أنواع المعرفات
        const compareIds = (id1, id2) => {
            if (id1 == id2) return true; // مقارنة عادية (== بدلاً من ===)
            if (String(id1) === String(id2)) return true; // مقارنة كنصوص
            if (Number(id1) === Number(id2)) return true; // مقارنة كأرقام
            return false;
        };
        
        // البحث في debtsData أولاً
        let debt = debtsData.find(d => {
            const id = d.id || d.__backendId || d.debt_id;
            return compareIds(id, debtId);
        });
        
        console.log('📊 نتيجة البحث في debtsData:', debt ? 'تم العثور عليه' : 'لم يتم العثور');
        console.log('📋 عدد الديون في debtsData:', debtsData.length);
        
        // إذا لم يتم العثور عليه، جرب البحث في dataSdk
        if (!debt && window.dataSdk) {
            console.log('🔍 البحث في dataSdk...');
            const allData = window.dataSdk.getAll();
            console.log('📊 إجمالي السجلات في dataSdk:', allData.length);
            
            const allDebts = allData.filter(item => item.type === 'debt');
            console.log('📊 عدد الديون في dataSdk:', allDebts.length);
            console.log('📋 معرفات الديون:', allDebts.map(d => ({
                id: d.id,
                __backendId: d.__backendId,
                debt_id: d.debt_id,
                customer: d.customer_name
            })));
            
            debt = allDebts.find(d => {
                const id = d.id || d.__backendId || d.debt_id;
                return compareIds(id, debtId);
            });
            
            if (debt) {
                console.log('✅ تم العثور على الدين في dataSdk');
                // إضافة الدين إلى debtsData للمرة القادمة
                if (!debtsData.find(d => compareIds(d.id || d.__backendId || d.debt_id, debtId))) {
                    debtsData.push(debt);
                    console.log('✅ تم إضافة الدين إلى debtsData');
                }
            }
        }
        
        if (!debt) {
            console.error('❌ لم يتم العثور على الدين:', debtId);
            console.error('📋 المعرفات المتاحة في debtsData:', debtsData.map(d => d.id || d.__backendId || d.debt_id));
            // تم إزالة الإشعار
            return;
        }
        
        console.log('✅ بيانات الدين:', debt);
        
        // تعبئة البيانات
        document.getElementById('editDebtCustomerName').value = debt.customer_name || '';
        document.getElementById('editDebtCustomerPhone').value = debt.customer_phone || '';
        document.getElementById('editDebtCustomerAddress').value = debt.customer_address || '';
        document.getElementById('editDebtDate').value = debt.date || new Date().toISOString().split('T')[0];
        document.getElementById('editDebtTotalAmount').value = debt.total_amount || 0;
        document.getElementById('editDebtDownPayment').value = debt.down_payment || debt.paid_amount || 0;
        document.getElementById('editDebtMonths').value = debt.installment_months || 1;
        document.getElementById('editDebtAdditionalAmount').value = debt.additional_amount || 0;
        document.getElementById('editDebtStartDate').value = debt.start_date || '';
        document.getElementById('editDebtNotes').value = debt.notes || '';
        
        // تحميل المنتجات إذا كانت موجودة
        editDebtProducts = debt.products ? [...debt.products] : [];
        renderEditDebtProducts();
        calculateEditDebtInstallments();
        
        showModal('editDebtModal');
    }
    
    function closeEditDebtModal() {
        closeModal('editDebtModal');
        currentEditDebtId = null;
        editDebtProducts = [];
    }
    
    // دالة حفظ التعديلات
    async function updateDebt() {
        if (!currentEditDebtId) {
            alert('⚠️ لم يتم تحديد الدين للتعديل');
            return;
        }
        
        // دالة مساعدة للمقارنة تدعم كل أنواع المعرفات
        const compareIds = (id1, id2) => {
            if (id1 == id2) return true;
            if (String(id1) === String(id2)) return true;
            if (Number(id1) === Number(id2)) return true;
            return false;
        };
        
        const debtIndex = debtsData.findIndex(d => {
            const id = d.id || d.__backendId || d.debt_id;
            return compareIds(id, currentEditDebtId);
        });
        
        if (debtIndex === -1) {
            console.error('❌ لم يتم العثور على الدين في debtsData:', currentEditDebtId);
            alert('❌ لم يتم العثور على الدين');
            return;
        }
        
        const customerName = document.getElementById('editDebtCustomerName').value.trim();
        const customerPhone = document.getElementById('editDebtCustomerPhone').value.trim();
        
        if (!customerName || !customerPhone) {
            alert('⚠️ يرجى إدخال اسم العميل ورقم الهاتف');
            return;
        }
        
        const totalAmount = parseFloat(document.getElementById('editDebtTotalAmount').value) || 0;
        const downPayment = parseFloat(document.getElementById('editDebtDownPayment').value) || 0;
        const months = parseInt(document.getElementById('editDebtMonths').value) || 1;
        const additionalAmount = parseFloat(document.getElementById('editDebtAdditionalAmount').value) || 0;
        const startDate = document.getElementById('editDebtStartDate').value;
        const debtDate = document.getElementById('editDebtDate').value;
        
        // حساب الأقساط الجديدة
        const remaining = totalAmount - downPayment + additionalAmount;
        const monthly = remaining / months;
        const installments = [];
        const startDateObj = startDate ? new Date(startDate) : new Date();
        
        // إنشاء جدول الأقساط
        for (let i = 0; i < months; i++) {
            const dueDate = new Date(startDateObj);
            dueDate.setMonth(dueDate.getMonth() + i);
            
            // الحفاظ على الأقساط المدفوعة إذا كانت موجودة
            const existingInstallment = debtsData[debtIndex].installments?.[i];
            
            installments.push({
                month: i + 1,
                amount: monthly,
                due_date: dueDate.toISOString(),
                status: existingInstallment?.status || 'pending',
                paid_date: existingInstallment?.paid_date || null,
                paid_amount: existingInstallment?.paid_amount || 0
            });
        }
        
        // تحديث الدين
        const updatedDebt = {
            ...debtsData[debtIndex],
            type: 'debt',
            customer_name: customerName,
            customer_phone: customerPhone,
            customer_address: document.getElementById('editDebtCustomerAddress').value.trim() || '',
            date: debtDate || new Date().toISOString().split('T')[0],
            total_amount: totalAmount,
            down_payment: downPayment,
            additional_amount: additionalAmount,
            remaining_amount: remaining,
            paid_amount: downPayment,
            installment_months: months,
            monthly_amount: monthly,
            start_date: startDate || new Date().toISOString().split('T')[0],
            notes: document.getElementById('editDebtNotes').value.trim() || '',
            products: editDebtProducts || debtsData[debtIndex].products || [],
            installments: installments,
            status: debtsData[debtIndex].status || 'نشط',
            updated_at: new Date().toISOString()
        };
        
        // إزالة أي حقول undefined
        Object.keys(updatedDebt).forEach(key => {
            if (updatedDebt[key] === undefined) {
                delete updatedDebt[key];
            }
        });
        
        console.log('💾 تحديث الدين:', updatedDebt);
        
        try {
            // 1. تحديث في debtsData
            debtsData[debtIndex] = updatedDebt;
            console.log('✅ تم تحديث في debtsData');
            
            // 2. حفظ في localStorage فوراً
            await saveToLocalStorage('debtsData', debtsData);
            console.log('✅ تم حفظ في localStorage');
            
            // 3. حفظ نسخة احتياطية
            const cachedDebts = debtsData.map(d => ({...d, type: 'debt'}));
            localStorage.setItem('cached_debts', JSON.stringify(cachedDebts));
            console.log('✅ تم حفظ نسخة احتياطية');
            
            // 4. محاولة التحديث في dataSdk (اختياري)
            if (window.dataSdk && debtsData[debtIndex].id) {
                try {
                    const result = await window.dataSdk.update(debtsData[debtIndex].id, updatedDebt);
                    if (result.isOk) {
                        console.log('✅ تم التحديث في dataSdk');
                    }
                } catch (sdkError) {
                    console.warn('⚠️ فشل التحديث في dataSdk (ليس خطيراً):', sdkError);
                }
            }
            
            // 5. محاولة التحديث في Firebase (اختياري)
            if (window.database) {
                try {
                    const uid = localStorage.getItem('app_uid');
                    if (uid && currentEditDebtId) {
                        await window.database.ref(`users/${uid}/debts/${currentEditDebtId}`).set(updatedDebt);
                        console.log('✅ تم التحديث في Firebase');
                    }
                } catch (fbError) {
                    console.warn('⚠️ فشل التحديث في Firebase (ليس خطيراً):', fbError);
                }
            }
            
            closeEditDebtModal();
            renderDebtsTable();
            
            alert('✅ تم تحديث الدين بنجاح');
            console.log('✅ تمت عملية التحديث بنجاح');
            
        } catch (error) {
            console.error('❌ خطأ في تحديث الدين:', error);
            alert('❌ حدث خطأ في تحديث الدين: ' + error.message);
        }
    }
    
    // تحديث دالة processInstallmentPayment لتضمين التاريخ
    async function processInstallmentPaymentUpdated() {
        const customerName = document.getElementById('customerName').value.trim();
        const customerPhone = document.getElementById('customerPhone').value.trim();
        const customerAddress = document.getElementById('customerAddress').value.trim();
        const months = parseInt(document.getElementById('installmentMonths').value) || 12;
        const additionalAmount = parseFloat(document.getElementById('additionalAmount').value) || 0;
        const downPayment = parseFloat(document.getElementById('downPayment').value) || 0;
        const startDate = document.getElementById('installmentStartDate').value;
        
        if (!customerName || !customerPhone) {
            // تم إزالة الإشعار
            return;
        }
        
        if (cart.length === 0) {
            // تم إزالة الإشعار
            return;
        }
        
        const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const totalWithAddition = cartTotal + additionalAmount;
        const remainingAmount = totalWithAddition - downPayment;
        const monthlyPayment = remainingAmount / months;
        
        // إنشاء جدول الأقساط مع التواريخ
        const installments = [];
        const startDateObj = startDate ? new Date(startDate) : new Date();
        
        for (let i = 0; i < months; i++) {
            const dueDate = new Date(startDateObj);
            dueDate.setMonth(dueDate.getMonth() + i);
            
            installments.push({
                month: i + 1,
                amount: monthlyPayment,
                due_date: dueDate.toISOString(),
                status: 'pending',
                paid_date: null,
                paid_amount: 0
            });
        }
        
        // إنشاء سجل الدين
        const debt = {
            id: 'debt_' + Date.now(),
            customer_name: customerName,
            customer_phone: customerPhone,
            customer_address: customerAddress,
            total_amount: totalWithAddition,
            down_payment: downPayment,
            remaining_amount: remainingAmount,
            installment_months: months,
            monthly_amount: monthlyPayment,
            additional_amount: additionalAmount,
            start_date: startDate,
            installments: installments,
            products: cart.map(item => ({
                name: item.name,
                price: item.price,
                qty: item.quantity,
                total: item.price * item.quantity
            })),
            date: new Date().toISOString(),
            status: 'active',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        
        debtsData.push(debt);
        
        // حفظ وإتمام العملية
        try {
            if (window.database) {
                await window.database.ref('debts/' + debt.id).set(debt);
            }
            
            await saveToLocalStorage('debtsData', debtsData);
            
            cart = [];
            updateCartDisplay();
            closeModal('paymentModal');
            // تم إزالة الإشعار
            updateDebtsView();
        } catch (error) {
            console.error('خطأ في حفظ الدين:', error);
            // تم إزالة الإشعار
        }
    }
    
    // ============================================
    // دوال إدارة المخزون المحسّنة
    // ============================================
    
    // دوال بحث موحدة للمنتج
    function findProductById(productId) {
        return products.find(
            p => String(p.id) === String(productId) || String(p.product_id) === String(productId) || String(p.barcode) === String(productId)
        );
    }
    function findProductIndexById(productId) {
        return products.findIndex(
            p => String(p.id) === String(productId) || String(p.product_id) === String(productId) || String(p.barcode) === String(productId)
        );
    }

    // عرض تفاصيل المنتج
    function showProductDetails(productId) {
        const product = findProductById(productId);
        if (!product) {
            // تم إزالة الإشعار
            return;
        }
        
        const totalCost = (product.cost || 0) * (product.stock || 0);
        const totalValue = (product.price || 0) * (product.stock || 0);
        const expectedProfit = totalValue - totalCost;
        const profitMargin = totalCost > 0 ? ((expectedProfit / totalCost) * 100).toFixed(2) : 0;
        
        const content = `
            <div style="padding: 1rem;">
                <div class="stats-grid" style="margin-bottom: 1.5rem;">
                    <div class="stat-card">
                        <div class="stat-label">اسم المنتج</div>
                        <div class="stat-value" style="font-size: 1.2rem;">${product.name}</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-label">الباركود</div>
                        <div class="stat-value" style="font-size: 1.2rem;">${product.barcode}</div>
                    </div>
                </div>
                
                <table class="table">
                    <tbody>
                        <tr>
                            <th><i class="fas fa-layer-group"></i> التصنيف</th>
                            <td>${product.category || 'غير محدد'}</td>
                        </tr>
                        <tr>
                            <th><i class="fas fa-warehouse"></i> الكمية المتوفرة</th>
                            <td>${product.stock || 0}</td>
                        </tr>
                        <tr>
                            <th><i class="fas fa-coins"></i> سعر الشراء</th>
                            <td>${(product.cost || 0).toLocaleString()} دينار</td>
                        </tr>
                        <tr>
                            <th><i class="fas fa-money-bill"></i> سعر البيع</th>
                            <td>${(product.price || 0).toLocaleString()} دينار</td>
                        </tr>
                        <tr>
                            <th><i class="fas fa-chart-line"></i> التكلفة الإجمالية</th>
                            <td>${totalCost.toLocaleString()} دينار</td>
                        </tr>
                        <tr>
                            <th><i class="fas fa-dollar-sign"></i> القيمة المتوقعة</th>
                            <td>${totalValue.toLocaleString()} دينار</td>
                        </tr>
                        <tr>
                            <th><i class="fas fa-chart-pie"></i> الربح المتوقع</th>
                            <td style="color: ${expectedProfit >= 0 ? 'var(--success-color)' : 'var(--danger-color)'};">
                                ${expectedProfit.toLocaleString()} دينار
                            </td>
                        </tr>
                        <tr>
                            <th><i class="fas fa-percent"></i> هامش الربح</th>
                            <td>${profitMargin}%</td>
                        </tr>
                        <tr>
                            <th><i class="fas fa-calendar"></i> تاريخ الإضافة</th>
                            <td>${product.created_at ? new Date(product.created_at).toLocaleDateString('en-GB') : 'غير محدد'}</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="form-actions">
                    <button class="btn btn-primary" onclick="closeProductDetailsModal(); openEditProductModal('${product.id}');">
                        <i class="fas fa-edit"></i> تعديل
                    </button>
                    <button class="btn btn-secondary" onclick="closeProductDetailsModal()">
                        <i class="fas fa-times"></i> إغلاق
                    </button>
                </div>
            </div>
        `;
        
        document.getElementById('productDetailsContent').innerHTML = content;
        showModal('productDetailsModal');
    }
    
    function closeProductDetailsModal() {
        hideModal('productDetailsModal');
    }
    
    // فتح نافذة تعديل المنتج
    function openEditProductModal(productId) {
        const product = findProductById(productId);
        if (!product) {
            // تم إزالة الإشعار
            return;
        }
        document.getElementById('editProductId').value = product.id || '';
        document.getElementById('editProductName').value = product.name || '';
        document.getElementById('editProductBarcode').value = product.barcode || '';
        document.getElementById('editProductStock').value = product.stock != null ? product.stock : 0;
        document.getElementById('editProductCost').value = product.cost != null ? product.cost : 0;
        document.getElementById('editProductPrice').value = product.price != null ? product.price : 0;
        // ملء التصنيفات
        const categorySelect = document.getElementById('editProductCategory');
        categorySelect.innerHTML = '<option value="">بدون تصنيف</option>';
        if (Array.isArray(categories) && categories.length > 0) {
            categories.forEach(cat => {
                const option = document.createElement('option');
                option.value = cat.name;
                option.textContent = cat.name;
                if (product.category === cat.name) option.selected = true;
                categorySelect.appendChild(option);
            });
        }
        showModal('editProductModal');
    }
    
    function closeEditProductModal() {
        hideModal('editProductModal');
        document.getElementById('editProductForm').reset();
    }
    
    // حفظ تعديلات المنتج
    async function saveEditedProduct(event) {
        event.preventDefault();
        
        const productId = document.getElementById('editProductId').value;
        const name = document.getElementById('editProductName').value;
        const barcode = document.getElementById('editProductBarcode').value;
        const category = document.getElementById('editProductCategory').value;
        const stock = parseInt(document.getElementById('editProductStock').value) || 0;
        const cost = parseFloat(document.getElementById('editProductCost').value) || 0;
        const price = parseFloat(document.getElementById('editProductPrice').value) || 0;
        
        const productIndex = findProductIndexById(productId);
        if (productIndex === -1) {
            // تم إزالة الإشعار
            return;
        }
        
        products[productIndex] = {
            ...products[productIndex],
            name: name,
            barcode: barcode,
            category: category,
            stock: stock,
            cost: cost,
            price: price,
            updated_at: new Date().toISOString()
        };
        if (window.dataSdk) {
            await window.dataSdk.save({ ...products[productIndex], type: 'product' });
        }
        closeEditProductModal();
        updateInventoryView();
        // تم إزالة الإشعار
    }
    
    // حذف المنتج
    async function deleteProduct(productId) {
        if (!confirm('هل أنت متأكد من حذف هذا المنتج؟ لا يمكن التراجع عن هذا الإجراء!')) {
            return;
        }
        const productIndex = findProductIndexById(productId);
        if (productIndex === -1) {
            // تم إزالة الإشعار
            return;
        }
        if (window.dataSdk) {
            await window.dataSdk.delete(productId);
            // إعادة تحميل المنتجات من القاعدة بعد الحذف (انتظار فعلي)
            if (typeof window.dataSdk.getAll === 'function') {
                const allData = await window.dataSdk.getAll();
                products = allData.filter(item => item.type === 'product');
            }
        }
        // تحديث جميع الواجهات بعد الحذف
        if (typeof updateAllViews === 'function') {
            updateAllViews();
        } else if (typeof updateInventoryView === 'function') {
            updateInventoryView();
        }
        // تم إزالة الإشعار
    }
    
    // فتح نافذة نقل المنتج بين التصنيفات
    function openMoveProductCategoryModal(productId) {
        const product = findProductById(productId);
        if (!product) {
            // تم إزالة الإشعار
            return;
        }
        
        document.getElementById('moveProductId').value = product.id;
        document.getElementById('moveProductName').value = product.name;
        document.getElementById('moveProductCurrentCategory').value = product.category || 'بدون تصنيف';
        
        // ملء التصنيفات المتاحة
        const categorySelect = document.getElementById('moveProductNewCategory');
        categorySelect.innerHTML = '<option value="">اختر التصنيف الجديد...</option>';
        categories.forEach(cat => {
            if (cat.name !== product.category) {
                const option = document.createElement('option');
                option.value = cat.name;
                option.textContent = cat.name;
                categorySelect.appendChild(option);
            }
        });
        
        showModal('moveProductCategoryModal');
    }
    
    function closeMoveProductCategoryModal() {
        hideModal('moveProductCategoryModal');
        document.getElementById('moveProductCategoryForm').reset();
    }
    
    // حفظ نقل المنتج إلى تصنيف جديد
    async function saveProductCategoryMove(event) {
        event.preventDefault();
        
        const productId = document.getElementById('moveProductId').value;
        const newCategory = document.getElementById('moveProductNewCategory').value;
        
        if (!newCategory) {
            // تم إزالة الإشعار
            return;
        }
        
        const productIndex = products.findIndex(p => p.id === productId);
        if (productIndex === -1) {
            // تم إزالة الإشعار
            return;
        }
        
        products[productIndex].category = newCategory;
        products[productIndex].updated_at = new Date().toISOString();
        
        await dataSDK.save({ ...products[productIndex], type: 'product' });
        
        closeMoveProductCategoryModal();
        updateInventoryView();
        // تم إزالة الإشعار
    }
    
    // طباعة تقرير المخزون
    function printInventoryReport() {
        const storeSettings = JSON.parse(localStorage.getItem('storeSettings') || '{}');
        const storeName = storeSettings.storeName || storeSettings.store_name || 'اسم المتجر';
        const today = new Date().toLocaleDateString('en-GB');
        
        // حساب الإحصائيات
        let totalCost = 0;
        let totalValue = 0;
        let totalProfit = 0;
        
        products.forEach(product => {
            const cost = (product.cost || 0) * (product.stock || 0);
            const value = (product.price || 0) * (product.stock || 0);
            totalCost += cost;
            totalValue += value;
        });
        
        totalProfit = totalValue - totalCost;
        const profitMargin = totalCost > 0 ? ((totalProfit / totalCost) * 100).toFixed(2) : 0;
        
        let html = `
        <div style="width:100%;max-width:800px;margin:0 auto;padding:20px;font-family:'Cairo',sans-serif;background:#fff;color:#222;direction:rtl;">
            <div style="text-align:center;margin-bottom:20px;border-bottom:3px solid #6366f1;padding-bottom:15px;">
                <h1 style="margin:0 0 5px 0;font-size:2rem;color:#2d3748;">${storeName}</h1>
                <h2 style="margin:0;font-size:1.5rem;color:#6366f1;">تقرير المخزون الشامل</h2>
                <p style="margin:10px 0 0;font-size:1rem;color:#666;">التاريخ: ${today}</p>
            </div>
            
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:15px;margin-bottom:25px;">
                <div style="background:linear-gradient(135deg,#6366f1,#4f46e5);color:#fff;padding:15px;border-radius:10px;text-align:center;">
                    <div style="font-size:0.9rem;margin-bottom:5px;">إجمالي التكلفة</div>
                    <div style="font-size:1.5rem;font-weight:bold;">${totalCost.toLocaleString()} دينار</div>
                </div>
                <div style="background:linear-gradient(135deg,#10b981,#059669);color:#fff;padding:15px;border-radius:10px;text-align:center;">
                    <div style="font-size:0.9rem;margin-bottom:5px;">القيمة المتوقعة</div>
                    <div style="font-size:1.5rem;font-weight:bold;">${totalValue.toLocaleString()} دينار</div>
                </div>
                <div style="background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;padding:15px;border-radius:10px;text-align:center;">
                    <div style="font-size:0.9rem;margin-bottom:5px;">الربح المتوقع</div>
                    <div style="font-size:1.5rem;font-weight:bold;">${totalProfit.toLocaleString()} دينار</div>
                </div>
            </div>
            
            <table style="width:100%;border-collapse:collapse;margin-top:20px;">
                <thead>
                    <tr style="background:#6366f1;color:#fff;">
                        <th style="padding:10px;border:1px solid #ddd;text-align:center;">#</th>
                        <th style="padding:10px;border:1px solid #ddd;text-align:right;">المنتج</th>
                        <th style="padding:10px;border:1px solid #ddd;text-align:center;">التصنيف</th>
                        <th style="padding:10px;border:1px solid #ddd;text-align:center;">الكمية</th>
                        <th style="padding:10px;border:1px solid #ddd;text-align:center;">سعر الشراء</th>
                        <th style="padding:10px;border:1px solid #ddd;text-align:center;">سعر البيع</th>
                        <th style="padding:10px;border:1px solid #ddd;text-align:center;">التكلفة الإجمالية</th>
                        <th style="padding:10px;border:1px solid #ddd;text-align:center;">القيمة المتوقعة</th>
                    </tr>
                </thead>
                <tbody>`;
        
        products.forEach((product, index) => {
            const cost = (product.cost || 0) * (product.stock || 0);
            const value = (product.price || 0) * (product.stock || 0);
            
            html += `
                <tr style="background:${index % 2 === 0 ? '#fff' : '#f9fafb'};">
                    <td style="padding:8px;border:1px solid #ddd;text-align:center;">${index + 1}</td>
                    <td style="padding:8px;border:1px solid #ddd;text-align:right;">${product.name}</td>
                    <td style="padding:8px;border:1px solid #ddd;text-align:center;">${product.category || '-'}</td>
                    <td style="padding:8px;border:1px solid #ddd;text-align:center;">${product.stock || 0}</td>
                    <td style="padding:8px;border:1px solid #ddd;text-align:center;">${(product.cost || 0).toLocaleString()}</td>
                    <td style="padding:8px;border:1px solid #ddd;text-align:center;">${(product.price || 0).toLocaleString()}</td>
                    <td style="padding:8px;border:1px solid #ddd;text-align:center;">${cost.toLocaleString()}</td>
                    <td style="padding:8px;border:1px solid #ddd;text-align:center;">${value.toLocaleString()}</td>
                </tr>`;
        });
        
        html += `
                </tbody>
            </table>
            
            <div style="margin-top:30px;padding:20px;background:#f9fafb;border-radius:10px;text-align:center;">
                <p style="font-size:1.2rem;color:#6366f1;font-weight:bold;margin:0;">
                    هامش الربح الإجمالي: ${profitMargin}%
                </p>
            </div>
            
            <div style="margin-top:30px;text-align:center;color:#666;font-size:0.9rem;">
                <p style="margin:5px 0;">تم إنشاء التقرير بواسطة نظام نقاط البيع المتقدم</p>
                <p style="margin:5px 0;">شركة الإبداع الرقمي - إدارة كرار السعبري</p>
            </div>
        </div>`;
        
        if (window.electronAPI && window.electronAPI.printInvoiceHtml) {
            window.electronAPI.printInvoiceHtml(html, { silent: false });
            // تم إزالة الإشعار
        } else {
            const printWindow = window.open('', '_blank');
            printWindow.document.write(html);
            printWindow.document.close();
            printWindow.print();
        }
    }
    
    // تحديث عرض جدول المخزون مع أزرار الإجراءات
    const originalUpdateInventoryView = window.updateInventoryView;
    window.updateInventoryView = function() {
        if (originalUpdateInventoryView) {
            originalUpdateInventoryView();
        }
        
        // إضافة أزرار الإجراءات لكل منتج
        const inventoryTableBody = document.getElementById('inventoryTableBody');
        if (inventoryTableBody) {
            const rows = inventoryTableBody.querySelectorAll('tr');
            rows.forEach((row, index) => {
                const product = products[index];
                if (product && row.cells.length < 8) {
                    const actionsCell = row.insertCell(-1);
                    actionsCell.innerHTML = `
                        <div class="action-buttons">
                            <button class="btn-icon btn-info" onclick="showProductDetails('${product.id}')" title="التفاصيل">
                                <i class="fas fa-info-circle"></i>
                            </button>
                            <button class="btn-icon btn-primary" onclick="openEditProductModal('${product.id}')" title="تعديل">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn-icon btn-warning" onclick="openMoveProductCategoryModal('${product.id}')" title="نقل">
                                <i class="fas fa-exchange-alt"></i>
                            </button>
                            <button class="btn-icon btn-danger" onclick="deleteProduct('${product.id}')" title="حذف">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    `;
                }
            });
        }
    };
    
    // تحديث عرض جدول الديون مع زر التعديل
    const originalUpdateDebtsView = window.updateDebtsView;
    window.updateDebtsView = function() {
        if (originalUpdateDebtsView) {
            originalUpdateDebtsView();
        }
        
        // إضافة زر التعديل لكل دين
        const debtsTableBody = document.getElementById('debtsTableBody');
        if (debtsTableBody) {
            const rows = debtsTableBody.querySelectorAll('tr');
            rows.forEach((row, index) => {
                const debt = debtsData[index];
                if (debt) {
                    // البحث عن خلية الإجراءات
                    const actionsCell = row.cells[row.cells.length - 1];
                    if (actionsCell && !actionsCell.querySelector('.edit-debt-btn')) {
                        const editButton = document.createElement('button');
                        editButton.className = 'btn-icon btn-warning edit-debt-btn';
                        editButton.title = 'تعديل';
                        editButton.innerHTML = '<i class="fas fa-edit"></i>';
                        editButton.onclick = () => openEditDebtModal(debt.id);
                        
                        actionsCell.insertBefore(editButton, actionsCell.firstChild);
                    }
                }
            });
        }
    };
    
    // إصلاحات شاملة
    console.log('✅ تم تحميل التحديثات والإصلاحات بنجاح!');
    
    // استدعاء التحديثات عند تحميل الصفحة
    document.addEventListener('DOMContentLoaded', function() {
        console.log('🔄 تطبيق التحديثات...');
        
        // تحديث العروض
        if (typeof updateInventoryView === 'function') {
            updateInventoryView();
        }
        if (typeof updateDebtsView === 'function') {
            updateDebtsView();
        }
    });






    
    
    </script>
    
    <!-- 💰 نظام إدارة التسديدات المتكامل -->
    <script>
    // نظام إدارة التسديدات
    (function() {
        'use strict';

        // بيانات التسديدات
        let allPayments = [];
        let filteredPayments = [];
        let currentFilters = {
            searchText: '',
            dateFrom: '',
            dateTo: '',
            status: 'all',
            sortBy: 'date_desc'
        };

        /**
         * تهيئة صفحة التسديدات
         */
        window.initPaymentsPage = async function() {
            console.log('🔧 تهيئة صفحة التسديدات...');
            await loadAllPayments();
            setupPaymentsEventListeners();
            applyPaymentsFilters();
            updatePaymentsStats();
        };

        /**
         * تحميل جميع التسديدات من الديون
         */
        async function loadAllPayments() {
            try {
                allPayments = [];
                
                // تحميل الديون
                const debts = window.dataSdk.query({ type: 'debt' });
                
                if (!debts || debts.length === 0) {
                    console.log('⚠️ لا توجد ديون محفوظة');
                    return;
                }
                
                // استخراج جميع الأقساط من الديون
                debts.forEach(debt => {
                    if (debt.installments && Array.isArray(debt.installments)) {
                        debt.installments.forEach((installment, index) => {
                            allPayments.push({
                                id: `${debt.id}_${index}`,
                                debt_id: debt.id,
                                customer_name: debt.customer_name,
                                customer_phone: debt.customer_phone,
                                month: installment.month,
                                amount: installment.amount,
                                due_date: installment.due_date,
                                paid_date: installment.paid_date,
                                status: installment.status || 'pending',
                                notes: installment.notes || '',
                                total_debt: debt.total_amount || debt.final_total,
                                monthly_amount: debt.monthly_amount,
                                installment_months: debt.installment_months,
                                installments: debt.installments // للاستخدام في التفاصيل
                            });
                        });
                    }
                });

                console.log(`✅ تم تحميل ${allPayments.length} تسديد`);
            } catch (error) {
                console.error('❌ خطأ في تحميل التسديدات:', error);
                // تم إزالة الإشعار
            }
        }

        /**
         * إعداد مستمعي الأحداث
         */
        function setupPaymentsEventListeners() {
            // البحث
            const searchInput = document.getElementById('paymentsSearchInput');
            if (searchInput) {
                searchInput.addEventListener('input', (e) => {
                    currentFilters.searchText = e.target.value;
                    applyPaymentsFilters();
                });
            }
        }

        /**
         * تطبيق الفلاتر
         */
        window.applyPaymentsFilters = function() {
            // تحديث الفلاتر من الحقول
            const dateFrom = document.getElementById('paymentsDateFrom')?.value || '';
            const dateTo = document.getElementById('paymentsDateTo')?.value || '';
            const status = document.getElementById('paymentsStatusFilter')?.value || 'all';
            const sortBy = document.getElementById('paymentsSortFilter')?.value || 'date_desc';
            
            currentFilters.dateFrom = dateFrom;
            currentFilters.dateTo = dateTo;
            currentFilters.status = status;
            currentFilters.sortBy = sortBy;

            filteredPayments = [...allPayments];

            // فلتر البحث النصي
            if (currentFilters.searchText) {
                const searchLower = currentFilters.searchText.toLowerCase();
                filteredPayments = filteredPayments.filter(payment => 
                    payment.customer_name.toLowerCase().includes(searchLower) ||
                    (payment.customer_phone && payment.customer_phone.includes(searchLower))
                );
            }

            // فلتر التاريخ من
            if (currentFilters.dateFrom) {
                const fromDate = new Date(currentFilters.dateFrom);
                filteredPayments = filteredPayments.filter(payment => {
                    const dueDate = new Date(payment.due_date);
                    return dueDate >= fromDate;
                });
            }

            // فلتر التاريخ إلى
            if (currentFilters.dateTo) {
                const toDate = new Date(currentFilters.dateTo);
                filteredPayments = filteredPayments.filter(payment => {
                    const dueDate = new Date(payment.due_date);
                    return dueDate <= toDate;
                });
            }

            // فلتر الحالة
            if (currentFilters.status !== 'all') {
                if (currentFilters.status === 'overdue') {
                    // الأقساط المتأخرة: غير مسددة وتاريخ الاستحقاق قد مضى
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    filteredPayments = filteredPayments.filter(payment => {
                        const dueDate = new Date(payment.due_date);
                        return payment.status !== 'paid' && dueDate < today;
                    });
                } else if (currentFilters.status === 'upcoming') {
                    // الأقساط القادمة: غير مسددة وتاريخ الاستحقاق لم يأتِ بعد
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    filteredPayments = filteredPayments.filter(payment => {
                        const dueDate = new Date(payment.due_date);
                        return payment.status !== 'paid' && dueDate >= today;
                    });
                } else {
                    filteredPayments = filteredPayments.filter(payment => 
                        payment.status === currentFilters.status
                    );
                }
            }

            // الترتيب
            filteredPayments.sort((a, b) => {
                switch (currentFilters.sortBy) {
                    case 'date_desc':
                        return new Date(b.due_date) - new Date(a.due_date);
                    case 'date_asc':
                        return new Date(a.due_date) - new Date(b.due_date);
                    case 'amount_desc':
                        return b.amount - a.amount;
                    case 'amount_asc':
                        return a.amount - b.amount;
                    case 'customer_asc':
                        return a.customer_name.localeCompare(b.customer_name, 'ar');
                    case 'customer_desc':
                        return b.customer_name.localeCompare(a.customer_name, 'ar');
                    default:
                        return 0;
                }
            });

            renderPaymentsTable();
            updatePaymentsStats();
        };

        /**
         * عرض جدول التسديدات
         */
        function renderPaymentsTable() {
            const tbody = document.getElementById('paymentsTableBody');
            const noDataMessage = document.getElementById('noPaymentsMessage');
            
            if (!tbody) return;

            if (filteredPayments.length === 0) {
                tbody.innerHTML = '';
                if (noDataMessage) noDataMessage.style.display = 'block';
                return;
            }

            if (noDataMessage) noDataMessage.style.display = 'none';

            tbody.innerHTML = filteredPayments.map(payment => {
                const statusInfo = getPaymentStatus(payment);
                
                // تنسيق تاريخ الاستحقاق مع اسم اليوم
                const dueDate = new Date(payment.due_date);
                const dueDayName = dueDate.toLocaleDateString('ar-IQ', { weekday: 'long' });
                const dueDateStr = dueDate.toLocaleDateString('ar-IQ', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                const dueDateFull = `${dueDayName}<br>${dueDateStr}`;
                
                // تنسيق تاريخ التسديد مع اسم اليوم
                let paidDateFull = '-';
                if (payment.paid_date) {
                    const paidDate = new Date(payment.paid_date);
                    const paidDayName = paidDate.toLocaleDateString('ar-IQ', { weekday: 'long' });
                    const paidDateStr = paidDate.toLocaleDateString('ar-IQ', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });
                    paidDateFull = `${paidDayName}<br>${paidDateStr}`;
                }

                return `
                    <tr>
                        <td><span style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 6px 16px; border-radius: 20px; font-weight: 700; font-size: 1rem;">الشهر ${payment.month}</span></td>
                        <td><strong style="font-size: 1rem;">${payment.customer_name}</strong></td>
                        <td style="direction: ltr; text-align: center;">${payment.customer_phone || '-'}</td>
                        <td><strong style="color: var(--primary-color); font-size: 1.05rem;">${payment.amount.toLocaleString('en')} دينار</strong></td>
                        <td style="font-size: 0.9rem; line-height: 1.5;">${dueDateFull}</td>
                        <td style="font-size: 0.9rem; line-height: 1.5;">${paidDateFull}</td>
                        <td>
                            <span class="badge ${statusInfo.class}" style="padding: 8px 16px; border-radius: 20px; font-weight: 700; font-size: 0.95rem;">
                                <i class="${statusInfo.icon}"></i> ${statusInfo.text}
                            </span>
                        </td>
                        <td>
                            <div class="action-buttons" style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
                                <button class="btn-icon btn-info" onclick="viewPaymentDetailsFromPaymentsPage('${payment.debt_id}')" title="عرض التفاصيل" style="width: 45px; height: 45px; border-radius: 12px; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3); transition: all 0.3s;">
                                    <i class="fas fa-eye" style="font-size: 1.3rem;"></i>
                                </button>
                                ${payment.status === 'paid' ? `
                                    <button class="btn-icon btn-warning" onclick="cancelInstallmentPaymentFromPaymentsPage('${payment.debt_id}', ${payment.month})" title="إلغاء التسديد" style="width: 45px; height: 45px; border-radius: 12px; box-shadow: 0 4px 12px rgba(251, 191, 36, 0.3); transition: all 0.3s;">
                                        <i class="fas fa-undo-alt" style="font-size: 1.3rem;"></i>
                                    </button>
                                ` : ''}
                            </div>
                        </td>
                    </tr>
                `;
            }).join('');
        }

        /**
         * الحصول على حالة القسط
         */
        function getPaymentStatus(payment) {
            if (payment.status === 'paid') {
                return {
                    text: 'مسدد',
                    class: 'badge-success',
                    icon: 'fas fa-check-circle'
                };
            }

            const today = new Date();
            today.setHours(0, 0, 0, 0);
            const dueDate = new Date(payment.due_date);
            dueDate.setHours(0, 0, 0, 0);

            if (dueDate < today) {
                return {
                    text: 'متأخر',
                    class: 'badge-danger',
                    icon: 'fas fa-exclamation-triangle'
                };
            } else if (dueDate.getTime() === today.getTime()) {
                return {
                    text: 'مستحق اليوم',
                    class: 'badge-warning',
                    icon: 'fas fa-calendar-day'
                };
            } else {
                const diffDays = Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24));
                if (diffDays <= 7) {
                    return {
                        text: `قادم (${diffDays} أيام)`,
                        class: 'badge-warning',
                        icon: 'fas fa-clock'
                    };
                } else {
                    return {
                        text: 'قادم',
                        class: 'badge-info',
                        icon: 'fas fa-clock'
                    };
                }
            }
        }

        /**
         * تحديث الإحصائيات
         */
        function updatePaymentsStats() {
            const stats = calculatePaymentsStats();

            // تحديث العدادات
            document.getElementById('totalPaymentsCount').textContent = stats.total.toLocaleString('en');
            document.getElementById('paidPaymentsCount').textContent = stats.paid.toLocaleString('en');
            document.getElementById('overduePaymentsCount').textContent = stats.overdue.toLocaleString('en');
            document.getElementById('upcomingPaymentsCount').textContent = stats.upcoming.toLocaleString('en');
            document.getElementById('totalPaidAmount').textContent = stats.paidAmount.toLocaleString('en') + ' د';
            document.getElementById('totalRemainingAmount').textContent = stats.remainingAmount.toLocaleString('en') + ' د';
        }

        /**
         * حساب الإحصائيات
         */
        function calculatePaymentsStats() {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            let stats = {
                total: allPayments.length,
                paid: 0,
                pending: 0,
                overdue: 0,
                upcoming: 0,
                paidAmount: 0,
                remainingAmount: 0
            };

            allPayments.forEach(payment => {
                if (payment.status === 'paid') {
                    stats.paid++;
                    stats.paidAmount += payment.amount;
                } else {
                    stats.remainingAmount += payment.amount;
                    const dueDate = new Date(payment.due_date);
                    dueDate.setHours(0, 0, 0, 0);

                    if (dueDate < today) {
                        stats.overdue++;
                    } else {
                        stats.upcoming++;
                    }
                }
            });

            return stats;
        }

        /**
         * فلترة حسب الحالة
         */
        window.filterPaymentsByStatus = function(status) {
            const statusFilter = document.getElementById('paymentsStatusFilter');
            if (statusFilter) {
                statusFilter.value = status;
                applyPaymentsFilters();
            }
        };

        /**
         * إعادة تعيين الفلاتر
         */
        window.resetPaymentsFilters = function() {
            document.getElementById('paymentsSearchInput').value = '';
            document.getElementById('paymentsDateFrom').value = '';
            document.getElementById('paymentsDateTo').value = '';
            document.getElementById('paymentsStatusFilter').value = 'all';
            document.getElementById('paymentsSortFilter').value = 'date_desc';
            
            currentFilters = {
                searchText: '',
                dateFrom: '',
                dateTo: '',
                status: 'all',
                sortBy: 'date_desc'
            };
            
            applyPaymentsFilters();
            // تم إزالة الإشعار
        };

        /**
         * فلترة التسديدات (للبحث السريع)
         */
        window.filterPayments = function() {
            applyPaymentsFilters();
        };

        /**
         * تحديث صفحة التسديدات
         */
        window.refreshPaymentsPage = async function() {
            // تم إزالة الإشعار
            await loadAllPayments();
            applyPaymentsFilters();
            // تم إزالة الإشعار
        };

        /**
         * عرض تفاصيل القسط
         */
        window.viewPaymentDetails = function(debtId) {
            // استخدام نفس دالة عرض تفاصيل الدين
            if (typeof showDebtDetails === 'function') {
                showDebtDetails(debtId);
            } else {
                // تم إزالة الإشعار
            }
        };

        /**
         * طباعة إيصال التسديد
         */
        window.printPaymentReceipt = async function(debtId, month) {
            try {
                // الحصول على بيانات الدين
                const debt = window.dataSdk.getById(parseInt(debtId));
                if (!debt) {
                    // تم إزالة الإشعار
                    return;
                }

                // الحصول على القسط المسدد
                const paidInstallment = debt.installments.find(inst => inst.month === month);
                if (!paidInstallment) {
                    // تم إزالة الإشعار
                    return;
                }

                // الحصول على إعدادات المتجر
                const storeSettings = window.elementSdk.getConfig();

                // توليد محتوى الإيصال
                const receiptHtml = generateInstallmentPaymentReceipt({
                    debt,
                    paidInstallment,
                    storeSettings
                });

                // طباعة الإيصال
                if (window.electronAPI && window.electronAPI.printInvoiceHtml) {
                    await window.electronAPI.printInvoiceHtml(receiptHtml, {
                        silent: true,
                        pageSize: { width: 80000, height: 297000 }
                    });
                    // تم إزالة الإشعار
                } else {
                    // طباعة عبر المتصفح
                    const printWindow = window.open('', '_blank');
                    printWindow.document.write(receiptHtml);
                    printWindow.document.close();
                    printWindow.print();
                }
            } catch (error) {
                console.error('خطأ في طباعة الإيصال:', error);
                // تم إزالة الإشعار
            }
        };

        /**
         * تصدير تقرير Excel
         */
        window.exportPaymentsReport = function() {
            if (filteredPayments.length === 0) {
                // تم إزالة الإشعار
                return;
            }

            // تحويل البيانات إلى CSV
            let csv = 'اسم العميل,رقم الهاتف,رقم القسط,تاريخ الاستحقاق,المبلغ,تاريخ الدفع,الحالة\n';
            
            filteredPayments.forEach(payment => {
                const status = getPaymentStatus(payment).text;
                const paidDate = payment.paid_date ? 
                    new Date(payment.paid_date).toLocaleDateString('en-GB') : '-';
                
                csv += `${payment.customer_name},`;
                csv += `${payment.customer_phone || '-'},`;
                csv += `الشهر ${payment.month},`;
                csv += `${new Date(payment.due_date).toLocaleDateString('en-GB')},`;
                csv += `${payment.amount},`;
                csv += `${paidDate},`;
                csv += `${status}\n`;
            });

            // تنزيل الملف
            const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
            const link = document.createElement('a');
            const url = URL.createObjectURL(blob);
            link.setAttribute('href', url);
            link.setAttribute('download', `تقرير_التسديدات_${new Date().toISOString().split('T')[0]}.csv`);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // تم إزالة الإشعار
        };

        /**
         * طباعة تقرير التسديدات
         */
        window.printPaymentsReport = function() {
            if (filteredPayments.length === 0) {
                // تم إزالة الإشعار
                return;
            }

            const stats = calculatePaymentsStats();
            const currentDate = new Date().toLocaleDateString('ar-IQ', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
            });

            let html = `
                <!DOCTYPE html>
                <html dir="rtl" lang="ar">
                <head>
                    <meta charset="UTF-8">
                    <title>تقرير التسديدات</title>
                    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
                    <style>
                        * { margin: 0; padding: 0; box-sizing: border-box; }
                        body { font-family: 'Cairo', sans-serif; padding: 20px; background: white; }
                        .header { text-align: center; margin-bottom: 30px; border-bottom: 3px solid #667eea; padding-bottom: 20px; }
                        .header h1 { color: #667eea; font-size: 28px; margin-bottom: 10px; }
                        .header p { color: #666; font-size: 14px; }
                        .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-bottom: 30px; }
                        .stat-box { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px; border-radius: 10px; text-align: center; }
                        .stat-box .value { font-size: 24px; font-weight: bold; margin-bottom: 5px; }
                        .stat-box .label { font-size: 14px; opacity: 0.9; }
                        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                        th, td { padding: 12px; text-align: right; border: 1px solid #ddd; }
                        th { background: #667eea; color: white; font-weight: 600; }
                        tr:nth-child(even) { background: #f9f9f9; }
                        .badge { padding: 5px 10px; border-radius: 15px; font-size: 12px; font-weight: 600; }
                        .badge-success { background: #10b981; color: white; }
                        .badge-danger { background: #ef4444; color: white; }
                        .badge-warning { background: #f59e0b; color: white; }
                        .badge-info { background: #06b6d4; color: white; }
                        @media print {
                            body { padding: 10px; }
                            .no-print { display: none; }
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>📊 تقرير التسديدات والأقساط</h1>
                        <p>${currentDate}</p>
                    </div>

                    <div class="stats">
                        <div class="stat-box">
                            <div class="value">${stats.total}</div>
                            <div class="label">إجمالي الأقساط</div>
                        </div>
                        <div class="stat-box">
                            <div class="value">${stats.paid}</div>
                            <div class="label">أقساط مسددة</div>
                        </div>
                        <div class="stat-box">
                            <div class="value">${stats.overdue}</div>
                            <div class="label">أقساط متأخرة</div>
                        </div>
                        <div class="stat-box">
                            <div class="value">${stats.paidAmount.toLocaleString('en')} د</div>
                            <div class="label">المبالغ المسددة</div>
                        </div>
                        <div class="stat-box">
                            <div class="value">${stats.remainingAmount.toLocaleString('en')} د</div>
                            <div class="label">المبالغ المتبقية</div>
                        </div>
                        <div class="stat-box">
                            <div class="value">${stats.upcoming}</div>
                            <div class="label">أقساط قادمة</div>
                        </div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>العميل</th>
                                <th>الهاتف</th>
                                <th>القسط</th>
                                <th>الاستحقاق</th>
                                <th>المبلغ</th>
                                <th>تاريخ الدفع</th>
                                <th>الحالة</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${filteredPayments.map(payment => {
                                const statusInfo = getPaymentStatus(payment);
                                const paidDate = payment.paid_date ? 
                                    new Date(payment.paid_date).toLocaleDateString('ar-IQ', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    }) : '-';
                                
                                return `
                                    <tr>
                                        <td><strong>${payment.customer_name}</strong></td>
                                        <td>${payment.customer_phone || '-'}</td>
                                        <td>الشهر ${payment.month}</td>
                                        <td>${new Date(payment.due_date).toLocaleDateString('ar-IQ', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        })}</td>
                                        <td><strong>${payment.amount.toLocaleString('en')} د</strong></td>
                                        <td>${paidDate}</td>
                                        <td><span class="badge ${statusInfo.class}">${statusInfo.text}</span></td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>

                    <div style="margin-top: 30px; text-align: center; color: #666; font-size: 12px;">
                        <p>تم إنشاء التقرير بواسطة نظام نقاط البيع - شركة الإبداع الرقمي</p>
                    </div>
                </body>
                </html>
            `;

            const printWindow = window.open('', '_blank');
            printWindow.document.write(html);
            printWindow.document.close();
            printWindow.print();
        };

        // تحميل البيانات عند عرض الصفحة
        const originalShowPage = window.showPage;
        window.showPage = function(page) {
            if (originalShowPage) {
                originalShowPage(page);
            }
            
            if (page === 'payments') {
                setTimeout(() => {
                    initPaymentsPage();
                }, 100);
            }
        };

        /**
         * دوال معالجة الأزرار من صفحة التسديدات
         */
        
        // تسديد قسط من صفحة التسديدات
        window.payInstallmentFromPaymentsPage = function(debtId, month) {
            if (typeof payInstallment === 'function') {
                payInstallment(parseInt(debtId), month);
            } else {
                // تم إزالة الإشعار
            }
        };

        // عرض تفاصيل الدين من صفحة التسديدات
        window.viewPaymentDetailsFromPaymentsPage = function(debtId) {
            if (typeof showDebtDetails === 'function') {
                showDebtDetails(parseInt(debtId));
            } else {
                // تم إزالة الإشعار
            }
        };

        // طباعة إيصال التسديد من صفحة التسديدات
        window.printPaymentReceiptFromPaymentsPage = async function(debtId, month) {
            try {
                const debt = window.dataSdk.getById(parseInt(debtId));
                if (!debt) {
                    // تم إزالة الإشعار
                    return;
                }

                const paidInstallment = debt.installments.find(inst => inst.month === month);
                if (!paidInstallment) {
                    // تم إزالة الإشعار
                    return;
                }

                const storeSettings = window.elementSdk.getConfig();
                const receiptHtml = generateInstallmentPaymentReceipt({
                    debt,
                    paidInstallment,
                    storeSettings
                });

                if (window.electronAPI && window.electronAPI.printInvoiceHtml) {
                    await window.electronAPI.printInvoiceHtml(receiptHtml, {
                        silent: true,
                        pageSize: { width: 80000, height: 297000 }
                    });
                    // تم إزالة الإشعار
                } else {
                    const printWindow = window.open('', '_blank');
                    printWindow.document.write(receiptHtml);
                    printWindow.document.close();
                    printWindow.print();
                }
            } catch (error) {
                console.error('خطأ في طباعة الإيصال:', error);
                // تم إزالة الإشعار
            }
        };

        // إلغاء تسديد قسط من صفحة التسديدات
        window.cancelInstallmentPaymentFromPaymentsPage = async function(debtId, month) {
            if (!confirm('هل أنت متأكد من إلغاء تسديد هذا القسط؟')) {
                return;
            }

            try {
                const debt = window.dataSdk.getById(parseInt(debtId));
                if (!debt) {
                    // تم إزالة الإشعار
                    return;
                }

                const installmentIndex = debt.installments.findIndex(inst => inst.month === month);
                if (installmentIndex === -1) {
                    // تم إزالة الإشعار
                    return;
                }

                const installment = debt.installments[installmentIndex];
                if (installment.status !== 'paid') {
                    // تم إزالة الإشعار
                    return;
                }

                // إلغاء التسديد
                installment.status = 'pending';
                installment.paid_date = null;
                
                // تحديث المبلغ المدفوع
                debt.paid_amount = (debt.paid_amount || 0) - installment.amount;
                debt.remaining_amount = (debt.remaining_amount || 0) + installment.amount;

                // حفظ التحديثات
                const result = await window.dataSdk.update(parseInt(debtId), debt);
                
                if (result.isOk) {
                    // تم إزالة الإشعار
                    // تحديث الصفحة
                    await refreshPaymentsPage();
                } else {
                    // تم إزالة الإشعار
                }
            } catch (error) {
                console.error('خطأ في إلغاء التسديد:', error);
                // تم إزالة الإشعار
            }
        };

        /**
         * دوال الطباعة الشاملة
         */

        // طباعة إحصائيات معينة مع الجدول
        window.printSpecificPaymentsReport = function(filterType) {
            // تطبيق الفلتر المطلوب
            const statusFilter = document.getElementById('paymentsStatusFilter');
            if (statusFilter) {
                statusFilter.value = filterType;
                applyPaymentsFilters();
            }

            // الانتظار قليلاً لتطبيق الفلتر ثم الطباعة
            setTimeout(() => {
                printPaymentsReport();
            }, 300);
        };

        // طباعة قسم إحصائيات محدد فقط
        window.printPaymentsStat = function(statType) {
            if (allPayments.length === 0) {
                // تم إزالة الإشعار
                return;
            }

            const stats = calculatePaymentsStats();
            const currentDate = new Date().toLocaleDateString('ar-IQ', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
            });

            let statTitle = '';
            let statValue = '';
            let statDescription = '';

            switch(statType) {
                case 'total':
                    statTitle = 'إجمالي الأقساط';
                    statValue = stats.total;
                    statDescription = 'العدد الكلي لجميع الأقساط في النظام';
                    break;
                case 'paid':
                    statTitle = 'الأقساط المسددة';
                    statValue = stats.paid;
                    statDescription = 'عدد الأقساط التي تم تسديدها بالكامل';
                    break;
                case 'overdue':
                    statTitle = 'الأقساط المتأخرة';
                    statValue = stats.overdue;
                    statDescription = 'عدد الأقساط المتأخرة عن موعد استحقاقها';
                    break;
                case 'upcoming':
                    statTitle = 'الأقساط القادمة';
                    statValue = stats.upcoming;
                    statDescription = 'عدد الأقساط القادمة التي لم تستحق بعد';
                    break;
                case 'paidAmount':
                    statTitle = 'إجمالي المبالغ المسددة';
                    statValue = stats.paidAmount.toLocaleString('en') + ' دينار';
                    statDescription = 'مجموع المبالغ المالية المسددة';
                    break;
                case 'remainingAmount':
                    statTitle = 'إجمالي المبالغ المتبقية';
                    statValue = stats.remainingAmount.toLocaleString('en') + ' دينار';
                    statDescription = 'مجموع المبالغ المالية المتبقية';
                    break;
            }

            const html = `
                <!DOCTYPE html>
                <html dir="rtl" lang="ar">
                <head>
                    <meta charset="UTF-8">
                    <title>تقرير ${statTitle}</title>
                    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
                    <style>
                        * { margin: 0; padding: 0; box-sizing: border-box; }
                        body { 
                            font-family: 'Cairo', sans-serif; 
                            padding: 40px; 
                            background: white; 
                            text-align: center;
                        }
                        .header { 
                            border-bottom: 4px solid #667eea; 
                            padding-bottom: 30px; 
                            margin-bottom: 50px; 
                        }
                        .header h1 { 
                            color: #667eea; 
                            font-size: 32px; 
                            margin-bottom: 15px; 
                        }
                        .header p { color: #666; font-size: 16px; }
                        .stat-container {
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            padding: 60px;
                            border-radius: 20px;
                            margin: 30px auto;
                            max-width: 600px;
                            box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                        }
                        .stat-value {
                            font-size: 72px;
                            font-weight: bold;
                            margin: 20px 0;
                        }
                        .stat-label {
                            font-size: 28px;
                            margin-bottom: 15px;
                            opacity: 0.95;
                        }
                        .stat-desc {
                            font-size: 18px;
                            opacity: 0.85;
                            margin-top: 20px;
                        }
                        .footer {
                            margin-top: 60px;
                            padding-top: 30px;
                            border-top: 2px solid #e0e0e0;
                            color: #666;
                            font-size: 14px;
                        }
                        @media print {
                            body { padding: 20px; }
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>📊 تقرير ${statTitle}</h1>
                        <p>${currentDate}</p>
                    </div>

                    <div class="stat-container">
                        <div class="stat-label">${statTitle}</div>
                        <div class="stat-value">${statValue}</div>
                        <div class="stat-desc">${statDescription}</div>
                    </div>

                    <div class="footer">
                        <p>تم إنشاء التقرير بواسطة نظام نقاط البيع</p>
                        <p>شركة الإبداع الرقمي © 2025</p>
                    </div>
                </body>
                </html>
            `;

            const printWindow = window.open('', '_blank');
            printWindow.document.write(html);
            printWindow.document.close();
            printWindow.print();
        };

        // طباعة الصفحة كاملة (جميع الإحصائيات + الجدول)
        window.printCompletePaymentsReport = function() {
            if (allPayments.length === 0) {
                // تم إزالة الإشعار
                return;
            }

            const stats = calculatePaymentsStats();
            const currentDate = new Date().toLocaleDateString('ar-IQ', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
            });

            const html = `
                <!DOCTYPE html>
                <html dir="rtl" lang="ar">
                <head>
                    <meta charset="UTF-8">
                    <title>تقرير التسديدات الشامل</title>
                    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap" rel="stylesheet">
                    <style>
                        * { margin: 0; padding: 0; box-sizing: border-box; }
                        body { font-family: 'Cairo', sans-serif; padding: 20px; background: white; }
                        .header { 
                            text-align: center; 
                            margin-bottom: 30px; 
                            border-bottom: 3px solid #667eea; 
                            padding-bottom: 20px; 
                        }
                        .header h1 { color: #667eea; font-size: 32px; margin-bottom: 10px; }
                        .header p { color: #666; font-size: 16px; }
                        .stats { 
                            display: grid; 
                            grid-template-columns: repeat(3, 1fr); 
                            gap: 20px; 
                            margin-bottom: 30px; 
                        }
                        .stat-box { 
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                            color: white; 
                            padding: 25px; 
                            border-radius: 15px; 
                            text-align: center; 
                        }
                        .stat-box .value { font-size: 36px; font-weight: bold; margin-bottom: 10px; }
                        .stat-box .label { font-size: 18px; opacity: 0.95; }
                        table { 
                            width: 100%; 
                            border-collapse: collapse; 
                            margin-top: 30px; 
                        }
                        th, td { 
                            padding: 14px 8px; 
                            text-align: center; 
                            border: 1px solid #ddd; 
                            font-size: 14px;
                        }
                        th { 
                            background: #667eea; 
                            color: white; 
                            font-weight: 600; 
                        }
                        tr:nth-child(even) { background: #f9f9f9; }
                        .badge { 
                            padding: 6px 12px; 
                            border-radius: 15px; 
                            font-size: 13px; 
                            font-weight: 600; 
                            display: inline-block;
                        }
                        .badge-success { background: #10b981; color: white; }
                        .badge-danger { background: #ef4444; color: white; }
                        .badge-warning { background: #f59e0b; color: white; }
                        .badge-info { background: #06b6d4; color: white; }
                        .footer { 
                            margin-top: 40px; 
                            text-align: center; 
                            color: #666; 
                            font-size: 13px; 
                            padding-top: 20px;
                            border-top: 2px solid #e0e0e0;
                        }
                        @media print {
                            body { padding: 10px; }
                            .stat-box .value { font-size: 28px; }
                            .stat-box .label { font-size: 14px; }
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>📊 تقرير التسديدات والأقساط الشامل</h1>
                        <p>${currentDate}</p>
                    </div>

                    <div class="stats">
                        <div class="stat-box">
                            <div class="value">${stats.total}</div>
                            <div class="label">إجمالي الأقساط</div>
                        </div>
                        <div class="stat-box">
                            <div class="value">${stats.paid}</div>
                            <div class="label">أقساط مسددة</div>
                        </div>
                        <div class="stat-box">
                            <div class="value">${stats.overdue}</div>
                            <div class="label">أقساط متأخرة</div>
                        </div>
                        <div class="stat-box">
                            <div class="value">${stats.upcoming}</div>
                            <div class="label">أقساط قادمة</div>
                        </div>
                        <div class="stat-box">
                            <div class="value">${stats.paidAmount.toLocaleString('en')} د</div>
                            <div class="label">المبالغ المسددة</div>
                        </div>
                        <div class="stat-box">
                            <div class="value">${stats.remainingAmount.toLocaleString('en')} د</div>
                            <div class="label">المبالغ المتبقية</div>
                        </div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>العميل</th>
                                <th>الهاتف</th>
                                <th>القسط</th>
                                <th>الاستحقاق</th>
                                <th>المبلغ</th>
                                <th>تاريخ التسديد</th>
                                <th>الحالة</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${filteredPayments.map(payment => {
                                const statusInfo = getPaymentStatus(payment);
                                const dueDate = new Date(payment.due_date);
                                const dueDateStr = dueDate.toLocaleDateString('ar-IQ', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                });
                                const paidDate = payment.paid_date ? 
                                    new Date(payment.paid_date).toLocaleDateString('ar-IQ', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    }) : '-';
                                
                                return `
                                    <tr>
                                        <td><strong>${payment.customer_name}</strong></td>
                                        <td>${payment.customer_phone || '-'}</td>
                                        <td>الشهر ${payment.month}</td>
                                        <td>${dueDateStr}</td>
                                        <td><strong>${payment.amount.toLocaleString('en')} د</strong></td>
                                        <td>${paidDate}</td>
                                        <td><span class="badge ${statusInfo.class}">${statusInfo.text}</span></td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>

                    <div class="footer">
                        <p>تم إنشاء التقرير بواسطة نظام نقاط البيع - شركة الإبداع الرقمي</p>
                        <p>تاريخ الطباعة: ${currentDate}</p>
                    </div>
                </body>
                </html>
            `;

            const printWindow = window.open('', '_blank');
            printWindow.document.write(html);
            printWindow.document.close();
            printWindow.print();
        };

        /**
         * دوال التصدير الجديدة
         */

        // تصدير كـ JSON
        window.exportPaymentsAsJSON = function() {
            if (allPayments.length === 0) {
                // تم إزالة الإشعار
                return;
            }

            const dataToExport = allPayments.map(payment => ({
                'رقم القسط': payment.month,
                'اسم العميل': payment.customer_name,
                'رقم الهاتف': payment.customer_phone || '-',
                'المبلغ': payment.amount,
                'تاريخ الاستحقاق': payment.due_date,
                'تاريخ التسديد': payment.paid_date || '-',
                'الحالة': payment.status,
                'معرف الدين': payment.debt_id
            }));

            const dataStr = JSON.stringify(dataToExport, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `تسديدات_${new Date().toISOString().split('T')[0]}.json`;
            link.click();
            URL.revokeObjectURL(url);
            
            // تم إزالة الإشعار
        };

        // تصدير كـ Excel (CSV)
        window.exportPaymentsAsExcel = function() {
            exportPaymentsReport(); // استخدام الدالة الموجودة
        };

        // تصدير كـ PDF
        window.exportPaymentsAsPDF = function() {
            if (allPayments.length === 0) {
                // تم إزالة الإشعار
                return;
            }

            // استخدام دالة الطباعة لإنشاء PDF
            printCompletePaymentsReport();
            // تم إزالة الإشعار
        };

        /**
         * دوال الطباعة المحسّنة - مع البيانات الكاملة
         */

        // طباعة إحصائيات معينة مع جدول البيانات المفلترة
        window.printPaymentsStat = function(statType) {
            if (allPayments.length === 0) {
                // تم إزالة الإشعار
                return;
            }

            const stats = calculatePaymentsStats();
            const currentDate = new Date().toLocaleDateString('ar-IQ', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long'
            });

            let statTitle = '';
            let statValue = '';
            let statDescription = '';
            let dataToShow = [];

            // تحديد البيانات حسب النوع
            switch(statType) {
                case 'total':
                    statTitle = 'إجمالي الأقساط';
                    statValue = stats.total;
                    statDescription = 'جميع الأقساط في النظام';
                    dataToShow = allPayments;
                    break;
                case 'paid':
                    statTitle = 'الأقساط المسددة';
                    statValue = stats.paid;
                    statDescription = 'الأقساط التي تم تسديدها';
                    dataToShow = allPayments.filter(p => p.status === 'paid');
                    break;
                case 'overdue':
                    statTitle = 'الأقساط المتأخرة';
                    statValue = stats.overdue;
                    statDescription = 'الأقساط المتأخرة عن موعدها';
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    dataToShow = allPayments.filter(p => {
                        const dueDate = new Date(p.due_date);
                        return p.status !== 'paid' && dueDate < today;
                    });
                    break;
                case 'upcoming':
                    statTitle = 'الأقساط القادمة';
                    statValue = stats.upcoming;
                    statDescription = 'الأقساط القادمة';
                    const todayUpcoming = new Date();
                    todayUpcoming.setHours(0, 0, 0, 0);
                    dataToShow = allPayments.filter(p => {
                        const dueDate = new Date(p.due_date);
                        return p.status !== 'paid' && dueDate >= todayUpcoming;
                    });
                    break;
                case 'paidAmount':
                    statTitle = 'إجمالي المبالغ المسددة';
                    statValue = stats.paidAmount.toLocaleString('en') + ' دينار';
                    statDescription = 'مجموع المبالغ المسددة';
                    dataToShow = allPayments.filter(p => p.status === 'paid');
                    break;
                case 'remainingAmount':
                    statTitle = 'إجمالي المبالغ المتبقية';
                    statValue = stats.remainingAmount.toLocaleString('en') + ' دينار';
                    statDescription = 'مجموع المبالغ المتبقية';
                    dataToShow = allPayments.filter(p => p.status !== 'paid');
                    break;
            }

            // إنشاء HTML للطباعة
            const html = `
                <!DOCTYPE html>
                <html dir="rtl" lang="ar">
                <head>
                    <meta charset="UTF-8">
                    <title>تقرير ${statTitle}</title>
                    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap" rel="stylesheet">
                    <style>
                        * { margin: 0; padding: 0; box-sizing: border-box; }
                        body { 
                            font-family: 'Cairo', sans-serif; 
                            padding: 30px; 
                            background: white; 
                        }
                        .header { 
                            text-align: center;
                            border-bottom: 4px solid #667eea; 
                            padding-bottom: 25px; 
                            margin-bottom: 40px; 
                        }
                        .header h1 { 
                            color: #667eea; 
                            font-size: 38px; 
                            margin-bottom: 12px;
                            font-weight: 900;
                        }
                        .header p { color: #666; font-size: 17px; }
                        .stat-container {
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            padding: 50px;
                            border-radius: 20px;
                            margin: 25px auto 40px;
                            max-width: 700px;
                            box-shadow: 0 15px 50px rgba(0,0,0,0.25);
                            text-align: center;
                        }
                        .stat-value {
                            font-size: 80px;
                            font-weight: 900;
                            margin: 25px 0;
                            text-shadow: 0 4px 8px rgba(0,0,0,0.2);
                        }
                        .stat-label {
                            font-size: 32px;
                            margin-bottom: 18px;
                            opacity: 0.95;
                            font-weight: 700;
                        }
                        .stat-desc {
                            font-size: 20px;
                            opacity: 0.85;
                            margin-top: 25px;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-top: 30px;
                            box-shadow: 0 2px 15px rgba(0,0,0,0.1);
                        }
                        th, td {
                            padding: 16px 12px;
                            text-align: center;
                            border: 1px solid #e0e0e0;
                            font-size: 15px;
                        }
                        th {
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            font-weight: 700;
                            font-size: 16px;
                        }
                        tr:nth-child(even) { background: #f8f9fa; }
                        tr:hover { background: #e8f4fd; }
                        .badge {
                            padding: 6px 14px;
                            border-radius: 15px;
                            font-size: 14px;
                            font-weight: 700;
                            display: inline-block;
                        }
                        .badge-success { background: #10b981; color: white; }
                        .badge-danger { background: #ef4444; color: white; }
                        .badge-warning { background: #f59e0b; color: white; }
                        .badge-info { background: #06b6d4; color: white; }
                        .footer { 
                            margin-top: 50px; 
                            padding-top: 25px; 
                            border-top: 2px solid #e0e0e0; 
                            text-align: center;
                            color: #666; 
                            font-size: 15px; 
                        }
                        @media print {
                            body { padding: 15px; }
                            .stat-value { font-size: 65px; }
                            .stat-label { font-size: 26px; }
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>📊 ${statTitle}</h1>
                        <p>${currentDate}</p>
                    </div>

                    <div class="stat-container">
                        <div class="stat-label">${statTitle}</div>
                        <div class="stat-value">${statValue}</div>
                        <div class="stat-desc">${statDescription}</div>
                    </div>

                    ${dataToShow.length > 0 ? `
                        <h2 style="color: #667eea; margin: 30px 0 20px; font-size: 28px; text-align: center;">تفاصيل ${statTitle}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>القسط</th>
                                    <th>العميل</th>
                                    <th>الهاتف</th>
                                    <th>المبلغ</th>
                                    <th>الاستحقاق</th>
                                    <th>التسديد</th>
                                    <th>الحالة</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${dataToShow.map(payment => {
                                    const statusInfo = getPaymentStatus(payment);
                                    const dueDate = new Date(payment.due_date);
                                    const dueDateStr = dueDate.toLocaleDateString('ar-IQ', {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric'
                                    });
                                    const paidDate = payment.paid_date ? 
                                        new Date(payment.paid_date).toLocaleDateString('ar-IQ', {
                                            year: 'numeric',
                                            month: 'short',
                                            day: 'numeric'
                                        }) : '-';
                                    
                                    return `
                                        <tr>
                                            <td><strong>الشهر ${payment.month}</strong></td>
                                            <td><strong>${payment.customer_name}</strong></td>
                                            <td>${payment.customer_phone || '-'}</td>
                                            <td><strong>${payment.amount.toLocaleString('en')} د</strong></td>
                                            <td>${dueDateStr}</td>
                                            <td>${paidDate}</td>
                                            <td><span class="badge ${statusInfo.class}">${statusInfo.text}</span></td>
                                        </tr>
                                    `;
                                }).join('')}
                            </tbody>
                        </table>
                    ` : '<p style="text-align: center; color: #999; font-size: 18px; margin-top: 30px;">لا توجد بيانات لعرضها</p>'}

                    <div class="footer">
                        <p style="font-weight: 700; margin-bottom: 8px;">تم إنشاء التقرير بواسطة نظام نقاط البيع</p>
                        <p>شركة الإبداع الرقمي © 2025</p>
                        <p style="margin-top: 8px; font-size: 13px;">تاريخ الطباعة: ${currentDate}</p>
                    </div>
                </body>
                </html>
            `;

            const printWindow = window.open('', '_blank');
            printWindow.document.write(html);
            printWindow.document.close();
            printWindow.print();
        };

        console.log('✅ تم تحميل نظام إدارة التسديدات');
    })();



    
    </script>
    

    <script src="./reports-system.js"></script>
    <script src="./expenses-system.js"></script>
    
    <!-- قوالب الطباعة المحدثة -->
    <script>
/**
 * قوالب الطباعة المحسنة - معرض يعقوب للأجهزة الكهربائية
 * نسخة محدثة بتصميم مضغوط واحترافي
 */

(function() {
    'use strict';
    
    /**
     * دالة مساعدة لتحويل الأرقام العربية إلى إنجليزية
     */
    function toEnglishDigits(str) {
        if (!str) return str;
        const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
        const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        
        let result = String(str);
        for (let i = 0; i < 10; i++) {
            result = result.replace(new RegExp(arabicDigits[i], 'g'), englishDigits[i]);
        }
        return result;
    }
    
    /**
     * قالب الطباعة للدفع النقدي - تصميم محسن
     */
    window.generateYaqoubCashReceipt = function(sale, settings) {
        // دمج الإعدادات المحفوظة مع الإعدادات الممررة
        const savedSettings = JSON.parse(localStorage.getItem('printerSettings') || '{}');
        const finalSettings = { ...savedSettings, ...settings };
        
        // بيانات المتجر من الإعدادات
        const storeName = finalSettings.store_name || 'معرض يعقوب للأجهزة الكهربائية';
        const storeAddress = finalSettings.store_address || 'باب الهاشمية قرب مدرسة الكرار';
        const storePhone = finalSettings.store_phone || localStorage.getItem('storePhone') || '07803092185';
        const storeLogo = finalSettings.store_logo || 'yaqoub_logo.png';
        const showLogo = finalSettings.show_logo !== false;

        // قالب A4 دائمًا
        let receiptWidth = '210mm';

        // إصلاح التاريخ والوقت
        let saleDate = sale.date ? new Date(sale.date) : (sale.timestamp ? new Date(sale.timestamp) : new Date());
        if (typeof saleDate === 'string') saleDate = new Date(saleDate);
        const dateStr = saleDate.toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
        const timeStr = saleDate.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        let html = `
        <div style="
            width: ${receiptWidth};
            margin: 0 auto;
            padding: 32px 32px;
            font-family: 'Cairo', sans-serif;
            background: #fff;
            color: #222;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            box-shadow: 0 4px 24px rgba(0,0,0,0.08);
            line-height: 1.7;
            font-size: 18px;
            direction: rtl;
            text-align: right;
        ">
        `;

        // رأس الفاتورة
        html += `
        <div style="text-align: center; margin-bottom: 24px; direction: rtl;">
            <h1 style="margin: 0 0 8px 0; font-size: 2.5rem; font-weight: bold; color: #2d3748; letter-spacing: 2px;">${storeName}</h1>
            <div style="font-size: 1.2rem; color: #374151; margin-bottom: 4px;">${storeAddress}</div>
            <div style="font-size: 1.1rem; color: #6366f1;">📞 ${storePhone}</div>
            ${showLogo ? `<div style="width:100%;text-align:center;margin:12px 0 0 0;">
            <img src="${storeLogo}" alt="Logo" style="max-width:120px;max-height:120px;display:inline-block;vertical-align:middle;border-radius:16px;box-shadow:0 2px 8px rgba(0,0,0,0.08);margin-bottom:8px;" />
            </div>` : ''}
        </div>
        <div style="border-top: 2px solid #6366f1; margin: 24px 0 16px 0;"></div>
        `;

        // معلومات الفاتورة
        html += `
        <div style="display: flex; justify-content: flex-start; gap: 48px; margin-bottom: 18px; font-size: 1.1rem; direction: ltr;">
            <div><b>Invoice No.:</b> ${toEnglishDigits(sale.invoice_id)}</div>
            <div><b>Date:</b> ${toEnglishDigits(dateStr)}</div>
            <div><b>Time:</b> ${toEnglishDigits(timeStr)}</div>
        </div>
        <div style="border-top: 1px dashed #bbb; margin: 18px 0 18px 0;"></div>
        `;

        // جدول المنتجات
        let items = sale.items;
        if (typeof items === 'string') {
            try {
                items = JSON.parse(items);
            } catch {
                items = [];
            }
        }
        if (items && items.length > 0) {
            html += `
            <table style="width: 100%; border-collapse: collapse; font-size: 1.1rem; margin: 18px 0; background: #f9fafb; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03); direction: ltr;">
            <thead>
                <tr style="background: #6366f1; color: #fff;">
                <th style="padding: 12px 0;">#</th>
                <th style="padding: 12px 0;">Product Name</th>
                <th style="padding: 12px 0;">Qty</th>
                <th style="padding: 12px 0;">Unit Price</th>
                <th style="padding: 12px 0;">Total</th>
                </tr>
            </thead>
            <tbody>
        `;
            items.forEach((item, index) => {
                const name = item.product_name || item.name || '—';
                const price = item.product_price || item.price || 0;
                html += `
            <tr style="background: ${index % 2 === 0 ? '#fff' : '#f3f4f6'}; text-align: center; direction: ltr;">
                <td style="padding: 10px 0;">${toEnglishDigits(index + 1)}</td>
                <td style="padding: 10px 0; text-align: left;">${name}</td>
                <td style="padding: 10px 0;">${toEnglishDigits(item.quantity)}</td>
                <td style="padding: 10px 0;">${toEnglishDigits(price.toLocaleString('en'))}</td>
                <td style="padding: 10px 0; font-weight: bold; color: #10b981;">${toEnglishDigits((price * item.quantity).toLocaleString('en'))}</td>
            </tr>
            `;
            });
            html += `</tbody></table>`;
        }

        html += `<div style="border-top: 2px solid #6366f1; margin: 24px 0 16px 0;"></div>`;

        // الإجمالي بالعربية مع الخصم الإضافي
        const additionalDiscount = sale.additional_discount || 0;
        const totalDiscount = (sale.discount || 0) + additionalDiscount;
        
        html += `
        <div style="font-size: 1.3rem; font-weight: bold; margin: 32px 0 12px 0; text-align: right; direction: rtl;">
            <div style="display: flex; justify-content: flex-start; gap: 48px; margin-bottom: 10px;">
            <div><span style="color:#374151;">المجموع الجزئي:</span> <span>${toEnglishDigits((sale.total_amount || 0).toLocaleString('en'))}</span></div>
            ${sale.discount ? `<div><span style="color:#374151;">الخصم:</span> <span style="color: #10b981;">- ${toEnglishDigits(sale.discount.toLocaleString('en'))}</span></div>` : ''}
            ${additionalDiscount > 0 ? `<div><span style="color:#374151;">خصم إضافي:</span> <span style="color: #10b981;">- ${toEnglishDigits(additionalDiscount.toLocaleString('en'))}</span></div>` : ''}
            </div>
            ${totalDiscount > 0 ? `<div style="display: flex; justify-content: flex-start; gap: 48px; margin-bottom: 10px; padding: 8px; background: #f0fdf4; border-radius: 6px;">
                <div><span style="color:#15803d;">إجمالي الخصم:</span> <span style="color: #15803d; font-weight: bold;">- ${toEnglishDigits(totalDiscount.toLocaleString('en'))}</span></div>
            </div>` : ''}
            <div style="display: flex; justify-content: flex-start; gap: 48px; border-top: 2px solid #6366f1; padding-top: 12px; margin-top: 8px;">
            <div><span style="color:#2d3748;">الإجمالي النهائي:</span> <span style="color:#e11d48; font-size:1.5rem;">${toEnglishDigits((sale.final_total || sale.total_amount || 0).toLocaleString('en'))}</span></div>
            </div>
        </div>
        `;

        // الملاحظات من الإعدادات
        const notes = [];
        if (finalSettings.note1) notes.push(finalSettings.note1);
        if (finalSettings.note2) notes.push(finalSettings.note2);
        if (finalSettings.note3) notes.push(finalSettings.note3);
        if (finalSettings.note4) notes.push(finalSettings.note4);
        if (finalSettings.note5) notes.push(finalSettings.note5);
        if (finalSettings.note6) notes.push(finalSettings.note6);
        
        // إضافة معلومات الصيانة
        if (finalSettings.show_maintenance !== false) {
            const maintenanceName = finalSettings.maintenance_name || 'حمزه أبو حوراء';
            const maintenanceService = finalSettings.maintenance_service || 'صيانة السبالت';
            const maintenancePhone = finalSettings.maintenance_phone || '+964 785 570 6118';
            notes.push(`مسؤول ${maintenanceService}: ${maintenanceName} - هاتف: <span dir="ltr" style="unicode-bidi: embed;">${maintenancePhone}</span> <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Iraq.svg" alt="Iraq Flag" style="height: 1em; vertical-align: middle; margin-right: 4px;" />`);
        }
        
        if (notes.length > 0) {
            html += `
            <div style="margin-top:28px; padding:16px 12px; background:#fffbe7; border-radius:8px; border:1px solid #ffe082;">
                <div style="font-size:1.05rem; font-weight:bold; color:#c62828; margin-bottom:6px; text-align:right; direction:rtl;">ملاحظات هامة:</div>
                <ol style="font-size:1rem; padding-right:22px; margin:0; text-align:right; direction:rtl;">
                ${notes.map(n => `<li>${toEnglishDigits(n)}</li>`).join('')}
                </ol>
            </div>
            `;
        }

        // التذييل بالعربية
        html += `<div style="text-align: center; margin-top: 40px; font-size: 1.1rem; color: #666; direction: rtl;">
        <p style="margin: 4px 0;">شكراً لتعاملكم مع ${storeName}</p>
        <p style="margin: 4px 0;">نتطلع لخدمتكم مرة أخرى</p>
        <p style="margin-top: 18px; color: #6366f1; font-size: 1.2rem;">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
        </div>`;
        html += `</div>`;
        return html;
    };
    
    /**
     * قالب الطباعة للتقسيط - تصميم مضغوط محسن
     */
    window.generateYaqoubInstallmentReceipt = function(sale, settings) {
        // دمج الإعدادات المحفوظة مع الإعدادات الممررة
        const savedSettings = JSON.parse(localStorage.getItem('printerSettings') || '{}');
        const finalSettings = { ...savedSettings, ...settings };
        
        // استخراج التاريخ والساعة
        const saleDate = new Date(sale.timestamp || sale.created_at || Date.now());
        const dateStr = saleDate.toLocaleDateString('ar-IQ', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            weekday: 'long'
        });
        const timeStr = saleDate.toLocaleTimeString('ar-IQ', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true
        });
        
        // استخراج تفاصيل الأقساط من installment_details أو من مستوى الفاتورة
        const installmentDetails = sale.installment_details || {};
        const originalSubtotal = installmentDetails.original_subtotal || sale.subtotal || 0;
        const additionalAmount = installmentDetails.additional_amount || sale.additional_amount || 0;
        const downPayment = installmentDetails.down_payment || sale.down_payment || 0;
        const totalBeforeDiscount = originalSubtotal + additionalAmount;
        
        // حساب المبلغ الإجمالي النهائي
        let finalTotal = originalSubtotal; // البداية من المبلغ الأصلي
        if (additionalAmount > 0) finalTotal += additionalAmount; // إضافة المبلغ الإضافي
        if (downPayment > 0) finalTotal -= downPayment; // خصم الدفعة المقدمة
        
        const remainingAmount = installmentDetails.remaining_amount || sale.remaining_amount || (totalBeforeDiscount - downPayment);
        const monthlyAmount = installmentDetails.monthly_amount || sale.monthly_amount || 0;
        const installmentMonths = installmentDetails.installment_months || sale.installment_months || 0;
        const startDate = installmentDetails.start_date || sale.start_date || null;
        const advancedControlUsed = installmentDetails.advanced_control_used || installmentDetails.custom_values_used || false;
        
        // بيانات المتجر من الإعدادات
        const storeName = finalSettings.store_name || 'يعقوب للاجهزه الكهربائيه';
        const storeAddress = finalSettings.store_address || 'باب الهاشميه قرب مدرسه الكرار';
        const storePhone = finalSettings.store_phone || '07803092185';
        
        let html = `<div style="width:210mm;min-height:297mm;margin:0 auto;padding:12mm 10mm;font-family:'Cairo',sans-serif;background:#fff;color:#222;line-height:1.4;font-size:11px;box-sizing:border-box;">
        
        <!-- الهيدر المحسّن -->
        <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:8px;padding-bottom:6px;border-bottom:2px solid #6366f1;">
            <!-- اليسار: اسم المحل -->
            <div style="flex:0 0 35%;">
                <h1 style="margin:0;font-size:1.3rem;font-weight:bold;color:#2d3748;">${storeName}</h1>
            </div>
            <!-- اليمين: العنوان والهاتف -->
            <div style="flex:0 0 60%;text-align:left;">
                <div style="font-size:0.95rem;color:#374151;font-weight:600;margin-bottom:2px;">${storeAddress}</div>
                <div style="font-size:0.9rem;color:#6366f1;font-weight:600;">📞 ${storePhone}</div>
            </div>
        </div>
        
        <!-- عنوان الفاتورة ومعلوماتها -->
        <div style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:6px;padding:6px 10px;margin-bottom:8px;color:#fff;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <div>
                    <div style="font-size:1.05rem;font-weight:bold;">📋 فاتورة تقسيط</div>
                    <div style="font-size:0.85rem;opacity:0.95;">رقم: ${sale.invoice_id || ''}</div>
                </div>
                <div style="text-align:left;font-size:0.85rem;">
                    <div>📅 ${dateStr}</div>
                    <div>🕐 ${timeStr}</div>
                </div>
            </div>
        </div>
        
        <!-- معلومات العميل - صف واحد -->
        <div style="background:#f8fafc;border-radius:6px;padding:6px 8px;margin-bottom:8px;border:1px solid #e2e8f0;">
            <div style="font-weight:bold;color:#1e293b;margin-bottom:4px;font-size:0.95rem;">👤 معلومات العميل</div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;font-size:0.9rem;">
                <div><strong>الاسم:</strong> ${sale.customer_name || ''}</div>
                <div><strong>الهاتف:</strong> ${sale.customer_phone || ''}</div>
                <div><strong>العنوان:</strong> ${sale.customer_address || ''}</div>
            </div>
        </div>
        
        <!-- تفاصيل الأقساط - مضغوط -->
        <div style="background:#f0f9ff;border-radius:6px;padding:6px 8px;margin-bottom:8px;border:1px solid #bae6fd;">
            <div style="font-weight:bold;color:#0c4a6e;margin-bottom:4px;font-size:0.95rem;">💳 تفاصيل الأقساط</div>
            <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;font-size:0.85rem;">
                <div style="background:#dbeafe;padding:4px;border-radius:4px;text-align:center;">
                    <div style="font-weight:600;color:#1e40af;font-size:0.8rem;">المبلغ الأصلي</div>
                    <div style="font-weight:bold;color:#1e3a8a;">${originalSubtotal.toLocaleString()}</div>
                </div>
                ${additionalAmount > 0 ? `<div style="background:#fce7f3;padding:4px;border-radius:4px;text-align:center;">
                    <div style="font-weight:600;color:#9f1239;font-size:0.8rem;">مبلغ إضافي</div>
                    <div style="font-weight:bold;color:#be123c;">${additionalAmount.toLocaleString()}</div>
                </div>` : ''}
                ${downPayment > 0 ? `<div style="background:#d1fae5;padding:4px;border-radius:4px;text-align:center;">
                    <div style="font-weight:600;color:#065f46;font-size:0.8rem;">دفعة مقدمة</div>
                    <div style="font-weight:bold;color:#047857;">${downPayment.toLocaleString()}</div>
                </div>` : ''}
                <div style="background:#fee2e2;padding:4px;border-radius:4px;text-align:center;">
                    <div style="font-weight:600;color:#7f1d1d;font-size:0.8rem;">المتبقي</div>
                    <div style="font-weight:bold;color:#991b1b;">${remainingAmount.toLocaleString()}</div>
                </div>
                <div style="background:#fef3c7;padding:4px;border-radius:4px;text-align:center;">
                    <div style="font-weight:600;color:#78350f;font-size:0.8rem;">عدد الأشهر</div>
                    <div style="font-weight:bold;color:#92400e;">${installmentMonths}</div>
                </div>
                <div style="background:#ffedd5;padding:4px;border-radius:4px;text-align:center;">
                    <div style="font-weight:600;color:#7c2d12;font-size:0.8rem;">القسط الشهري</div>
                    <div style="font-weight:bold;color:#9a3412;">${monthlyAmount.toLocaleString()}</div>
                </div>
                ${startDate ? `<div style="background:#e0e7ff;padding:4px;border-radius:4px;text-align:center;">
                    <div style="font-weight:600;color:#3730a3;font-size:0.8rem;">تاريخ البداية</div>
                    <div style="font-weight:bold;color:#4338ca;font-size:0.8rem;">${new Date(startDate).toLocaleDateString('en-GB')}</div>
                </div>` : ''}
                ${advancedControlUsed ? `<div style="background:#ede9fe;padding:4px;border-radius:4px;text-align:center;grid-column:1/-1;">
                    <div style="font-weight:600;color:#5b21b6;font-size:0.8rem;">⚙️ تحكم متقدم</div>
                </div>` : ''}
            </div>
        </div>
        
        <!-- جدول المنتجات - مضغوط -->
        <div style="margin-bottom:8px;">
            <table style="width:100%;border-collapse:collapse;font-size:0.9rem;border:1px solid #e5e7eb;">
            <thead>
                <tr style="background:#6366f1;color:#fff;">
                    <th style="padding:4px 6px;width:6%;text-align:center;border:1px solid rgba(255,255,255,0.2);">#</th>
                    <th style="padding:4px 6px;width:44%;text-align:right;border:1px solid rgba(255,255,255,0.2);">المنتج</th>
                    <th style="padding:4px 6px;width:12%;text-align:center;border:1px solid rgba(255,255,255,0.2);">الكمية</th>
                    <th style="padding:4px 6px;width:18%;text-align:center;border:1px solid rgba(255,255,255,0.2);">السعر</th>
                    <th style="padding:4px 6px;width:20%;text-align:center;border:1px solid rgba(255,255,255,0.2);">الإجمالي</th>
                </tr>
            </thead>
            <tbody>`;
        
        let items = sale.items;
        if (typeof items === 'string') {
            try { items = JSON.parse(items); } catch { items = []; }
        }
        
        items.forEach((item, index) => {
            const name = item.product_name || item.name || '—';
            const price = item.product_price || item.price || 0;
            const qty = item.quantity || 1;
            const total = price * qty;
            html += `<tr style="background:${index%2===0?'#fff':'#f9fafb'};">
                <td style="padding:4px 6px;text-align:center;border:1px solid #e5e7eb;font-weight:600;">${index+1}</td>
                <td style="padding:4px 6px;text-align:right;border:1px solid #e5e7eb;">${name}</td>
                <td style="padding:4px 6px;text-align:center;border:1px solid #e5e7eb;font-weight:600;">${qty}</td>
                <td style="padding:4px 6px;text-align:center;border:1px solid #e5e7eb;font-weight:600;">${price.toLocaleString()}</td>
                <td style="padding:4px 6px;text-align:center;border:1px solid #e5e7eb;font-weight:bold;color:#10b981;">${total.toLocaleString()}</td>
            </tr>`;
        });
        
        html += `</tbody></table></div>
        
        <!-- ملخص المبالغ - مضغوط -->
        <div style="background:#fef3c7;border-radius:6px;padding:6px 8px;margin-bottom:8px;border:1px solid #fde68a;">
            <div style="font-weight:bold;color:#78350f;margin-bottom:4px;font-size:0.95rem;">💰 ملخص المبالغ</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;font-size:0.9rem;">
                <div style="display:flex;justify-content:space-between;padding:3px 6px;background:#e0f2fe;border-radius:4px;">
                    <span>المجموع الجزئي:</span>
                    <strong>${originalSubtotal.toLocaleString()}</strong>
                </div>
                ${additionalAmount > 0 ? `<div style="display:flex;justify-content:space-between;padding:3px 6px;background:#fce7f3;border-radius:4px;">
                    <span>مبلغ إضافي:</span>
                    <strong style="color:#be123c;">+${additionalAmount.toLocaleString()}</strong>
                </div>` : ''}
                ${downPayment > 0 ? `<div style="display:flex;justify-content:space-between;padding:3px 6px;background:#d1fae5;border-radius:4px;">
                    <span>دفعة مقدمة:</span>
                    <strong style="color:#047857;">-${downPayment.toLocaleString()}</strong>
                </div>` : ''}
                <div style="grid-column:1/-1;display:flex;justify-content:space-between;padding:6px;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);border-radius:4px;color:#fff;">
                    <span style="font-size:1rem;font-weight:bold;">💵 الإجمالي النهائي:</span>
                    <strong style="font-size:1.1rem;">${finalTotal.toLocaleString()} دينار</strong>
                </div>
            </div>
        </div>
        
        <!-- ملاحظات مضغوطة -->
        <div style="background:#fffbeb;border-radius:6px;padding:6px 8px;margin-bottom:8px;border:1px solid #fbbf24;">
            <div style="font-weight:bold;color:#b91c1c;margin-bottom:4px;font-size:0.9rem;">⚠️ ملاحظات هامة</div>
            <ol style="font-size:0.8rem;padding-right:18px;margin:0;line-height:1.5;">`;
        
        // الملاحظات من الإعدادات
        const notes = [];
        if (finalSettings.note1) notes.push(finalSettings.note1);
        if (finalSettings.note2) notes.push(finalSettings.note2);
        if (finalSettings.note3) notes.push(finalSettings.note3);
        if (finalSettings.note4) notes.push(finalSettings.note4);
        if (finalSettings.note5) notes.push(finalSettings.note5);
        if (finalSettings.note6) notes.push(finalSettings.note6);
        
        // قيم افتراضية إذا لم يكن هناك ملاحظات
        if (notes.length === 0) {
            notes.push('المبلغ الموجود هو وصل أمانة');
            notes.push('السعر محمي 24 ساعة');
            notes.push('المباع لا يرجع ولا يبدل');
            notes.push('الخطأ والسهو مرجوع للطرفين');
            notes.push('الشركة المصنعة مسؤولة عن الضمان');
            notes.push('كسر الشاشة غير داخل بالضمان');
        }
        
        notes.forEach(note => {
            html += `<li>${note}</li>`;
        });
        
        // إضافة معلومات الصيانة
        if (finalSettings.show_maintenance !== false) {
            const maintenanceName = finalSettings.maintenance_name || 'حمزه ابو حوراء';
            const maintenanceService = finalSettings.maintenance_service || 'صيانة السبالت';
            const maintenancePhone = finalSettings.maintenance_phone || '+964 785 570 6118';
            
            html += `<li style="margin-top:4px;">
                    <div style="background:#e0f2fe;padding:4px 6px;border-radius:4px;border:1px solid #bae6fd;">
                        <strong style="color:#0c4a6e;">👨‍🔧 ${maintenanceService}:</strong> ${maintenanceName}
                        <div style="direction:ltr;text-align:left;font-weight:bold;color:#0c4a6e;margin-top:2px;">
                            📱 <span style="letter-spacing:1px;">${maintenancePhone}</span>
                        </div>
                    </div>
                </li>`;
        }
        
        html += `</ol>
        </div>
        
        <!-- التوقيعات -->
        <div style="display:flex;justify-content:space-between;gap:30px;margin-top:10px;">
            <div style="flex:1;text-align:center;">
                <div style="font-size:0.9rem;font-weight:bold;margin-bottom:15px;">✍️ توقيع البائع</div>
                <div style="border-bottom:1px dashed #9ca3af;"></div>
            </div>
            <div style="flex:1;text-align:center;">
                <div style="font-size:0.9rem;font-weight:bold;margin-bottom:15px;">✍️ توقيع العميل</div>
                <div style="border-bottom:1px dashed #9ca3af;"></div>
            </div>
        </div>
        
        <!-- الختام -->
        <div style="text-align:center;margin-top:10px;padding-top:6px;border-top:2px solid #e5e7eb;">
            <p style="margin:2px 0;font-size:0.95rem;font-weight:bold;color:#6366f1;">🌟 شكراً لتعاملكم معنا 🌟</p>
            <p style="margin:2px 0;font-size:0.85rem;color:#6b7280;">نتطلع لخدمتكم مرة أخرى</p>
        </div>
        </div>`;
        return html;
    };
    
    console.log('✅ تم تحميل قوالب الطباعة المحدثة - معرض يعقوب');
})();




    </script>
    
    
    <style>
    /* أنماط إضافية للمفاتيح */
    .switch-container input[type="checkbox"] {
        position: relative;
        width: 50px;
        height: 26px;
        -webkit-appearance: none;
        appearance: none;
        background: #ccc;
        border-radius: 50px;
        outline: none;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    
    .switch-container input[type="checkbox"]:checked {
        background: linear-gradient(135deg, #667eea, #764ba2);
    }
    
    .switch-container input[type="checkbox"]::before {
        content: '';
        position: absolute;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background: white;
        top: 2px;
        right: 2px;
        transition: all 0.3s ease;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    
    .switch-container input[type="checkbox"]:checked::before {
        transform: translateX(-24px);
    }

    /* ==========================================
       🔔 نظام الإشعارات v4.0 - CSS
       ========================================== */
/* ===================================
   🔔 نظام الإشعارات v3.0 - CSS النهائي المحسّن
   =================================== */

/* ===== زر الإشعارات في top-actions ===== */
.notification-bell-btn {
    position: relative;
    width: 42px;
    height: 42px;
    border: none;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);
    margin: 0 8px;
}

.notification-bell-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(102, 126, 234, 0.35);
}

.notification-bell-btn:active {
    transform: translateY(0);
}

.notification-bell-btn i {
    font-size: 18px;
}

/* ===== شارة العدد ===== */
.notification-count-badge {
    position: absolute;
    top: -6px;
    left: -6px;
    min-width: 20px;
    height: 20px;
    background: linear-gradient(135deg, #ef4444, #dc2626);
    border-radius: 10px;
    color: white;
    font-size: 10px;
    font-weight: 700;
    display: none;
    align-items: center;
    justify-content: center;
    padding: 0 5px;
    border: 2px solid white;
    box-shadow: 0 2px 8px rgba(239, 68, 68, 0.4);
    animation: badge-pulse 2s infinite;
}

.notification-count-badge.visible {
    display: flex;
}

@keyframes badge-pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
}

/* ===== الخلفية المعتمة (Overlay) ===== */
.notifications-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 99998;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);
}

.notifications-modal-overlay.active {
    opacity: 1;
    visibility: visible;
}

/* ===== لوحة الإشعارات المركزية ===== */
.notifications-center-modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.9);
    width: 98%;
    max-width: 850px;
    max-height: 90vh;
    background: white;
    border-radius: 20px;
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.35);
    z-index: 99999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.notifications-center-modal.active {
    opacity: 1;
    visibility: visible;
    transform: translate(-50%, -50%) scale(1);
}

/* ===== رأس اللوحة ===== */
.notifications-modal-header {
    padding: 24px 28px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
}

.notifications-modal-title {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 0;
    font-size: 28px;
    font-weight: 800;
}

.notifications-modal-title i {
    font-size: 32px;
}

/* ===== أزرار رأس اللوحة ===== */
.notifications-modal-actions {
    display: flex;
    gap: 8px;
}

.notifications-modal-action-btn {
    width: 38px;
    height: 38px;
    border: none;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
}

.notifications-modal-action-btn:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.05);
}

/* ===== جسم اللوحة ===== */
.notifications-modal-body {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
}

/* ===== رسالة فارغة ===== */
.notifications-empty-state {
    text-align: center;
    padding: 60px 20px;
    color: #9ca3af;
}

.notifications-empty-state i {
    font-size: 72px;
    margin-bottom: 20px;
    opacity: 0.4;
}

.notifications-empty-state p {
    font-size: 16px;
    margin: 0;
    font-weight: 500;
}

/* ===== عنصر الإشعار ===== */
.notification-item-card {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 16px;
    border-radius: 14px;
    background: #f9fafb;
    margin-bottom: 12px;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    border: 2px solid transparent;
}

.notification-item-card.unread {
    background: linear-gradient(135deg, #eff6ff 0%, #f9fafb 100%);
    border-color: #93c5fd;
}

.notification-item-card:hover {
    background: #f3f4f6;
    transform: translateX(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* ===== أيقونة الإشعار ===== */
.notification-item-icon {
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* ===== محتوى الإشعار ===== */
.notification-item-content {
    flex: 1;
    min-width: 0;
}

.notification-item-title {
    font-size: 22px;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 8px;
    line-height: 1.5;
}

.notification-item-message {
    font-size: 18px;
    color: #6b7280;
    margin-bottom: 10px;
    line-height: 1.6;
}

.notification-item-time {
    font-size: 15px;
    color: #9ca3af;
    display: flex;
    align-items: center;
    gap: 6px;
}

/* ===== زر حذف الإشعار ===== */
.notification-item-delete {
    flex-shrink: 0;
    width: 34px;
    height: 34px;
    border: none;
    background: rgba(239, 68, 68, 0.1);
    border-radius: 8px;
    color: #ef4444;
    cursor: pointer;
    opacity: 0;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.notification-item-card:hover .notification-item-delete {
    opacity: 1;
}

.notification-item-delete:hover {
    background: rgba(239, 68, 68, 0.2);
    transform: scale(1.1);
}


/* تمييز المنتج عند النقر من الإشعار */
.product-highlighted {
    animation: highlightPulse 2s ease-in-out 3;
    background: linear-gradient(90deg, 
        rgba(251, 191, 36, 0.2) 0%, 
        rgba(251, 191, 36, 0.4) 50%, 
        rgba(251, 191, 36, 0.2) 100%);
    border: 2px solid #fbbf24 !important;
    box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
}

@keyframes highlightPulse {
    0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 20px rgba(251, 191, 36, 0.5);
    }
    50% {
        transform: scale(1.02);
        box-shadow: 0 0 30px rgba(251, 191, 36, 0.8);
    }
}

.product-highlighted::before {
    content: '⚠️ تنبيه: هذا المنتج منخفض المخزون';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: #fbbf24;
    color: #000;
    padding: 5px 15px;
    border-radius: 5px;
    font-size: 12px;
    font-weight: bold;
    white-space: nowrap;
    z-index: 1000;
    animation: fadeInOut 4s ease-in-out;
}

@keyframes fadeInOut {
    0%, 100% { opacity: 0; }
    10%, 90% { opacity: 1; }
}

/* ===== Toast Notifications ===== */
.notifications-toast-container {
    position: fixed;
    top: 90px;
    left: 20px;
    z-index: 100000;
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 420px;
    pointer-events: none;
}

.notification-toast-card {
    background: white;
    border-radius: 14px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    padding: 16px;
    transform: translateX(-120%);
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    opacity: 0;
    pointer-events: all;
    border-right: 4px solid #3b82f6;
    max-width: 420px;
}

.notification-toast-card.visible {
    transform: translateX(0);
    opacity: 1;
}

/* ===== أولويات Toast ===== */
.notification-toast-card.priority-critical {
    border-right-color: #ef4444;
    background: linear-gradient(135deg, #fef2f2 0%, #ffffff 100%);
}

.notification-toast-card.priority-high {
    border-right-color: #f59e0b;
    background: linear-gradient(135deg, #fffbeb 0%, #ffffff 100%);
}

.notification-toast-card.priority-medium {
    border-right-color: #3b82f6;
}

.notification-toast-card.priority-low {
    border-right-color: #10b981;
}

/* ===== محتوى Toast ===== */
.notification-toast-content {
    display: flex;
    align-items: flex-start;
    gap: 12px;
}

.notification-toast-icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.9);
    font-size: 20px;
}

.notification-toast-body {
    flex: 1;
    min-width: 0;
}

.notification-toast-title {
    font-size: 15px;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 4px;
}

.notification-toast-message {
    font-size: 13px;
    color: #6b7280;
    line-height: 1.5;
}

.notification-toast-close {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 6px;
    color: #9ca3af;
    cursor: pointer;
    transition: all 0.2s;
}

.notification-toast-close:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #6b7280;
}

/* ===== Scrollbar ===== */
.notifications-modal-body::-webkit-scrollbar {
    width: 8px;
}

.notifications-modal-body::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.notifications-modal-body::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 10px;
}

.notifications-modal-body::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #5568d3, #6a3e8a);
}

/* ===== Responsive ===== */
@media (max-width: 768px) {
    .notification-bell-btn {
        width: 38px;
        height: 38px;
    }
    
    .notifications-center-modal {
        width: 95%;
        max-height: 90vh;
    }
    
    .notifications-modal-header {
        padding: 20px;
    }
    
    .notifications-modal-title {
        font-size: 18px;
    }
    
    .notifications-toast-container {
        left: 10px;
        right: 10px;
        max-width: calc(100% - 20px);
    }
    
    .notification-toast-card {
        max-width: 100%;
    }
}

/* ===== تجنب التضارب ===== */
.notification-bell-btn,
.notifications-modal-overlay,
.notifications-center-modal,
.notifications-toast-container {
    font-family: 'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
    </style>
    
    
    <script src="products-fixes.js"></script>


    
    <!-- ==========================================
         🔔 نظام الإشعارات v4.0 - إشعارات تفصيلية
         ========================================== -->
    <script>
/* ===================================
   🔔 نظام الإشعارات v4.0 - إشعارات تفصيلية
   ميزة جديدة: إشعار منفصل لكل عميل ومنتج
   =================================== */

(function() {
    'use strict';
    
    if (window.NotificationsSystemV4) {
        console.warn('⚠️ نظام الإشعارات v4 محمّل بالفعل');
        return;
    }
    
    console.log('🔔 تحميل نظام الإشعارات v4.0 - التفصيلي...');


    // ==================== NotificationPersistence ====================
    class NotificationPersistenceV4 {
        constructor() {
            this.storageKey = 'yaqoub_notifications_read';
            this.dismissedKey = 'yaqoub_notifications_dismissed';
            this.shownKey = 'yaqoub_notifications_shown';
        }
        
        markAsRead(notificationId) {
            const readIds = this.getReadIds();
            if (!readIds.includes(notificationId)) {
                readIds.push(notificationId);
                localStorage.setItem(this.storageKey, JSON.stringify(readIds));
            }
        }
        
        markAsDismissed(notificationId) {
            const dismissedIds = this.getDismissedIds();
            if (!dismissedIds.includes(notificationId)) {
                dismissedIds.push(notificationId);
                localStorage.setItem(this.dismissedKey, JSON.stringify(dismissedIds));
            }
        }
        
        markAsShown(notificationId) {
            const shownIds = this.getShownIds();
            if (!shownIds.includes(notificationId)) {
                shownIds.push(notificationId);
                localStorage.setItem(this.shownKey, JSON.stringify(shownIds));
            }
        }
        
        getReadIds() {
            try {
                const data = localStorage.getItem(this.storageKey);
                return data ? JSON.parse(data) : [];
            } catch (e) { return []; }
        }
        
        getDismissedIds() {
            try {
                const data = localStorage.getItem(this.dismissedKey);
                return data ? JSON.parse(data) : [];
            } catch (e) { return []; }
        }
        
        getShownIds() {
            try {
                const data = localStorage.getItem(this.shownKey);
                return data ? JSON.parse(data) : [];
            } catch (e) { return []; }
        }
        
        isRead(notificationId) {
            return this.getReadIds().includes(notificationId);
        }
        
        isDismissed(notificationId) {
            return this.getDismissedIds().includes(notificationId);
        }
        
        isShown(notificationId) {
            return this.getShownIds().includes(notificationId);
        }
        
        shouldShow(notificationId) {
            return !this.isRead(notificationId) && 
                   !this.isDismissed(notificationId) &&
                   !this.isShown(notificationId);
        }
        
        clearOldData() {
            // مسح البيانات القديمة (اختياري)
            const maxAge = 30 * 24 * 60 * 60 * 1000; // 30 يوم
            // يمكن تطوير هذا لاحقاً
        }
    }

    // ==================== NotificationEngine ====================
    class NotificationEngineV4 {
        constructor() {
            this.checkInterval = 5 * 60 * 1000; // 5 دقائق
            this.isRunning = false;
            this.lastCheck = null;
            this.intervalId = null;
        }
        
        start() {
            if (this.isRunning) return;
            
            this.isRunning = true;
            console.log('🔔 بدء محرك الإشعارات v4');
            
            this.performCheck();
            
            this.intervalId = setInterval(() => {
                this.performCheck();
            }, this.checkInterval);
        }
        
        stop() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
            this.isRunning = false;
            console.log('🔕 إيقاف محرك الإشعارات v4');
        }
        
        async performCheck() {
            console.log('🔍 فحص النظام التفصيلي...');
            
            const notifications = [];
            
            try {
                const stockNotifs = await this.checkInventory();
                notifications.push(...stockNotifs);
                
                const debtNotifs = await this.checkDebts();
                notifications.push(...debtNotifs);
                
                this.lastCheck = new Date();
                
                if (notifications.length > 0) {
                    await this.processNotifications(notifications);
                }
                
                console.log(`✅ الفحص: ${notifications.length} إشعار تفصيلي`);
                
            } catch (error) {
                console.error('❌ خطأ في الفحص:', error);
            }
            
            return notifications;
        }
        
        async checkInventory() {
            const notifications = [];
            
            try {
                // 1. محاولة جلب المنتجات من productsData المحلية أولاً
                let products = [];
                
                // جلب من المتغير العام
                if (window.productsData && Array.isArray(window.productsData)) {
                    products = window.productsData;
                    console.log('📦 جلب المنتجات من productsData:', products.length);
                }
                
                // جلب من localStorage كنسخة احتياطية
                if (products.length === 0) {
                    const savedProducts = localStorage.getItem('productsData');
                    if (savedProducts) {
                        try {
                            const parsed = JSON.parse(savedProducts);
                            if (Array.isArray(parsed)) {
                                products = parsed;
                                console.log('📦 جلب المنتجات من localStorage:', products.length);
                            }
                        } catch (e) {
                            console.warn('⚠️ خطأ في تحليل المنتجات من localStorage');
                        }
                    }
                }
                
                // 2. محاولة جلب من dataSdk كآخر خيار
                if (products.length === 0 && window.dataSdk) {
                    products = await window.dataSdk.query({ type: 'product' });
                    console.log('📦 جلب المنتجات من dataSdk:', products ? products.length : 0);
                }
                
                if (!products || products.length === 0) {
                    console.log('ℹ️ لا توجد منتجات للفحص');
                    return notifications;
                }
                
                // المنتجات المنخفضة: فقط إذا كانت الكمية <= الحد الأدنى
                const lowStock = products.filter(p => {
                    const stock = p.stock_quantity || p.quantity || 0;
                    const minStock = p.min_stock_quantity || p.min_stock || 0;
                    // لا نعطي إشعار إذا لم يحدد المستخدم حد أدنى
                    if (!minStock || minStock <= 0) return false;
                    // نعطي إشعار فقط إذا كانت الكمية <= الحد الأدنى المحدد
                    return stock > 0 && stock <= minStock;
                });

                // المنتجات النافذة: الكمية = 0
                const outOfStock = products.filter(p => {
                    const stock = p.stock_quantity || p.quantity || 0;
                    return stock === 0;
                });
                
                console.log(`🔍 فحص المخزون: منخفض=${lowStock.length}, نافذ=${outOfStock.length}`);
                
                // إنشاء إشعار منفصل لكل منتج نافذ
                outOfStock.forEach(product => {
                    const productName = product.name || product.product_name || product.title || 'منتج بدون اسم';
                    notifications.push({
                        id: `out-stock-${product.id}-${Date.now()}`,
                        type: 'out_of_stock',
                        priority: 'critical',
                        title: `نفذ من المخزون: ${productName}`,
                        message: `المنتج "${productName}" نفد من المخزون تماماً`,
                        icon: 'fa-times-circle',
                        color: '#ef4444',
                        timestamp: new Date().toISOString(),
                        data: {
                            product: product,
                            productId: product.id,
                            productName: productName,
                            stock: 0
                        }
                    });
                });
                
                // إنشاء إشعار منفصل لكل منتج منخفض
                lowStock.forEach(product => {
                    const remaining = product.stock_quantity || product.quantity || 0;
                    const minStock = product.min_stock_quantity || product.min_stock || 10;
                    const productName = product.name || product.product_name || product.title || 'منتج بدون اسم';
                    notifications.push({
                        id: `low-stock-${product.id}-${Date.now()}`,
                        type: 'low_stock',
                        priority: 'high',
                        title: `منخفض: ${productName}`,
                        message: `المنتج "${productName}" - المتبقي: ${remaining} وحدة فقط (الحد الأدنى: ${minStock})`,
                        icon: 'fa-exclamation-triangle',
                        color: '#f59e0b',
                        timestamp: new Date().toISOString(),
                        data: {
                            product: product,
                            productId: product.id,
                            productName: productName,
                            stock: remaining,
                            minStock: minStock
                        }
                    });
                });
                
                // إشعار ملخص للمنتجات النافذة (إضافي)
                if (outOfStock.length > 0) {
                    notifications.push({
                        id: `summary-out-stock-${Date.now()}`,
                        type: 'out_of_stock_summary',
                        priority: 'critical',
                        title: `إجمالي المنتجات النافذة`,
                        message: `${outOfStock.length} منتج نفد من المخزون`,
                        icon: 'fa-warehouse',
                        color: '#ef4444',
                        timestamp: new Date().toISOString(),
                        data: {
                            count: outOfStock.length,
                            products: outOfStock
                        }
                    });
                }
                
                // إشعار ملخص للمنتجات المنخفضة (إضافي)
                if (lowStock.length > 0) {
                    notifications.push({
                        id: `summary-low-stock-${Date.now()}`,
                        type: 'low_stock_summary',
                        priority: 'high',
                        title: `إجمالي المنتجات المنخفضة`,
                        message: `${lowStock.length} منتج قارب على النفاذ`,
                        icon: 'fa-chart-line',
                        color: '#f59e0b',
                        timestamp: new Date().toISOString(),
                        data: {
                            count: lowStock.length,
                            products: lowStock
                        }
                    });
                }
                
            } catch (error) {
                console.error('❌ خطأ في فحص المخزون:', error);
            }
            
            return notifications;
        }
        
        async checkDebts() {
            const notifications = [];
            
            try {
                // 1. جلب الديون من مصادر متعددة
                let debts = [];
                
                // جلب من المتغير العام
                if (window.debtsData && Array.isArray(window.debtsData)) {
                    debts = window.debtsData;
                    console.log('📦 جلب الديون من debtsData:', debts.length);
                }
                
                // جلب من localStorage كنسخة احتياطية
                if (debts.length === 0) {
                    const savedDebts = localStorage.getItem('debtsData');
                    if (savedDebts) {
                        try {
                            const parsed = JSON.parse(savedDebts);
                            if (Array.isArray(parsed)) {
                                debts = parsed;
                                console.log('📦 جلب الديون من localStorage:', debts.length);
                            }
                        } catch (e) {
                            console.warn('⚠️ خطأ في تحليل الديون من localStorage');
                        }
                    }
                }
                
                // 2. محاولة جلب من dataSdk كآخر خيار
                if (debts.length === 0 && window.dataSdk) {
                    debts = await window.dataSdk.query({ type: 'debt' });
                    console.log('📦 جلب الديون من dataSdk:', debts ? debts.length : 0);
                }
                
                if (!debts || debts.length === 0) {
                    console.log('ℹ️ لا توجد ديون للفحص');
                    return notifications;
                }
                
                const now = new Date();
                
                // فحص الديون المتأخرة بناءً على الأقساط الفعلية
                const overdue = debts.filter(debt => {
                    // تخطي الديون المسددة بالكامل
                    let paidMonths = 0;
                    let totalMonths = 0;
                    
                    if (debt.installments && Array.isArray(debt.installments) && debt.installments.length > 0) {
                        totalMonths = debt.installments.length;
                        debt.installments.forEach(inst => {
                            if (inst.status === 'paid') {
                                paidMonths++;
                            }
                        });
                    }
                    
                    const isPaid = paidMonths === totalMonths && totalMonths > 0;
                    if (isPaid) return false;
                    
                    // فحص التأخير بناءً على الأقساط الفعلية
                    if (debt.installments && Array.isArray(debt.installments) && debt.installments.length > 0) {
                        // ابحث عن أقساط غير مدفوعة ومتأخرة
                        const unpaidOverdue = debt.installments.filter(inst => {
                            if (inst.status === 'paid') return false;
                            const dueDate = new Date(inst.due_date);
                            return dueDate < now;
                        });
                        return unpaidOverdue.length > 0;
                    } else {
                        // إذا لم يكن هناك أقساط، استخدم due_date أو start_date
                        const checkDate = debt.due_date || debt.start_date || debt.date;
                        if (checkDate) {
                            const dueDate = new Date(checkDate);
                            const totalAmount = debt.total_amount || debt.final_total || 0;
                            const paidAmount = debt.paid_amount || 0;
                            const remainingAmount = totalAmount - paidAmount;
                            return dueDate < now && remainingAmount > 0;
                        }
                        return false;
                    }
                });
                
                // الديون القريبة (خلال 3 أيام) بناءً على الأقساط
                const upcoming = debts.filter(debt => {
                    // تخطي الديون المسددة بالكامل
                    let paidMonths = 0;
                    let totalMonths = 0;
                    
                    if (debt.installments && Array.isArray(debt.installments) && debt.installments.length > 0) {
                        totalMonths = debt.installments.length;
                        debt.installments.forEach(inst => {
                            if (inst.status === 'paid') {
                                paidMonths++;
                            }
                        });
                    }
                    
                    const isPaid = paidMonths === totalMonths && totalMonths > 0;
                    if (isPaid) return false;
                    
                    const threeDays = new Date();
                    threeDays.setDate(threeDays.getDate() + 3);
                    
                    // فحص الأقساط القريبة
                    if (debt.installments && Array.isArray(debt.installments) && debt.installments.length > 0) {
                        const upcomingInstallments = debt.installments.filter(inst => {
                            if (inst.status === 'paid') return false;
                            const dueDate = new Date(inst.due_date);
                            return dueDate >= now && dueDate <= threeDays;
                        });
                        return upcomingInstallments.length > 0;
                    } else {
                        const checkDate = debt.due_date || debt.start_date || debt.date;
                        if (checkDate) {
                            const dueDate = new Date(checkDate);
                            return dueDate >= now && dueDate <= threeDays;
                        }
                        return false;
                    }
                });
                
                console.log(`🔍 فحص الديون: متأخرة=${overdue.length}, قريبة=${upcoming.length}`);
                
                // إنشاء إشعار منفصل لكل دين متأخر
                overdue.forEach(debt => {
                    const totalAmount = debt.total_amount || debt.final_total || 0;
                    const paidAmount = debt.paid_amount || 0;
                    const remainingAmount = totalAmount - paidAmount;
                    const amount = this.formatCurrency(remainingAmount);
                    const customerName = debt.customer_name || 'عميل غير معروف';
                    
                    // حساب عدد الأيام المتأخرة
                    let daysPast = 0;
                    if (debt.installments && Array.isArray(debt.installments) && debt.installments.length > 0) {
                        const overdueInstallments = debt.installments.filter(inst => {
                            if (inst.status === 'paid') return false;
                            const dueDate = new Date(inst.due_date);
                            return dueDate < now;
                        });
                        if (overdueInstallments.length > 0) {
                            // استخدم أقدم قسط متأخر
                            const oldestOverdue = overdueInstallments.reduce((oldest, inst) => {
                                const instDate = new Date(inst.due_date);
                                const oldestDate = new Date(oldest.due_date);
                                return instDate < oldestDate ? inst : oldest;
                            });
                            daysPast = Math.floor((now - new Date(oldestOverdue.due_date)) / (1000 * 60 * 60 * 24));
                        }
                    } else {
                        const checkDate = debt.due_date || debt.start_date || debt.date;
                        if (checkDate) {
                            daysPast = Math.floor((now - new Date(checkDate)) / (1000 * 60 * 60 * 24));
                        }
                    }
                    
                    notifications.push({
                        id: `overdue-${debt.id || debt.debt_id}-${Date.now()}`,
                        type: 'overdue_debt',
                        priority: daysPast > 30 ? 'critical' : 'high',
                        title: `دين متأخر: ${customerName}`,
                        message: `المبلغ المتبقي: ${amount} - متأخر ${daysPast} يوم`,
                        icon: 'fa-exclamation-circle',
                        color: '#ef4444',
                        timestamp: new Date().toISOString(),
                        data: {
                            debt: debt,
                            debtId: debt.id || debt.debt_id,
                            customerId: debt.customer_id,
                            customerName: customerName,
                            amount: remainingAmount,
                            daysPast: daysPast,
                            dueDate: debt.due_date || debt.start_date
                        }
                    });
                });
                
                // إنشاء إشعار منفصل لكل دين قريب
                upcoming.forEach(debt => {
                    const totalAmount = debt.total_amount || debt.final_total || 0;
                    const paidAmount = debt.paid_amount || 0;
                    const remainingAmount = totalAmount - paidAmount;
                    const amount = this.formatCurrency(remainingAmount);
                    const customerName = debt.customer_name || 'عميل غير معروف';
                    
                    // حساب عدد الأيام المتبقية
                    let daysLeft = 0;
                    if (debt.installments && Array.isArray(debt.installments) && debt.installments.length > 0) {
                        const upcomingInstallments = debt.installments.filter(inst => {
                            if (inst.status === 'paid') return false;
                            const dueDate = new Date(inst.due_date);
                            const threeDays = new Date();
                            threeDays.setDate(threeDays.getDate() + 3);
                            return dueDate >= now && dueDate <= threeDays;
                        });
                        if (upcomingInstallments.length > 0) {
                            // استخدم أقرب قسط
                            const nearestUpcoming = upcomingInstallments.reduce((nearest, inst) => {
                                const instDate = new Date(inst.due_date);
                                const nearestDate = new Date(nearest.due_date);
                                return instDate < nearestDate ? inst : nearest;
                            });
                            daysLeft = Math.ceil((new Date(nearestUpcoming.due_date) - now) / (1000 * 60 * 60 * 24));
                        }
                    } else {
                        const checkDate = debt.due_date || debt.start_date || debt.date;
                        if (checkDate) {
                            daysLeft = Math.ceil((new Date(checkDate) - now) / (1000 * 60 * 60 * 24));
                        }
                    }
                    
                    notifications.push({
                        id: `upcoming-${debt.id || debt.debt_id}-${Date.now()}`,
                        type: 'upcoming_debt',
                        priority: 'medium',
                        title: `دين قريب: ${customerName}`,
                        message: `المبلغ المتبقي: ${amount} - يستحق خلال ${daysLeft} يوم`,
                        icon: 'fa-clock',
                        color: '#f59e0b',
                        timestamp: new Date().toISOString(),
                        data: {
                            debt: debt,
                            debtId: debt.id || debt.debt_id,
                            customerId: debt.customer_id,
                            customerName: customerName,
                            amount: remainingAmount,
                            daysLeft: daysLeft,
                            dueDate: debt.due_date || debt.start_date
                        }
                    });
                });
                
                // إشعار ملخص للديون المتأخرة (إضافي)
                if (overdue.length > 0) {
                    const total = overdue.reduce((sum, d) => {
                        const totalAmount = d.total_amount || d.final_total || 0;
                        const paidAmount = d.paid_amount || 0;
                        return sum + (totalAmount - paidAmount);
                    }, 0);
                    notifications.push({
                        id: `summary-overdue-${Date.now()}`,
                        type: 'overdue_debts_summary',
                        priority: 'critical',
                        title: `إجمالي الديون المتأخرة`,
                        message: `${overdue.length} دين متأخر - المجموع: ${this.formatCurrency(total)}`,
                        icon: 'fa-money-bill-wave',
                        color: '#ef4444',
                        timestamp: new Date().toISOString(),
                        data: {
                            count: overdue.length,
                            totalAmount: total,
                            debts: overdue
                        }
                    });
                }
                
                // إشعار ملخص للديون القريبة (إضافي)
                if (upcoming.length > 0) {
                    const total = upcoming.reduce((sum, d) => {
                        const totalAmount = d.total_amount || d.final_total || 0;
                        const paidAmount = d.paid_amount || 0;
                        return sum + (totalAmount - paidAmount);
                    }, 0);
                    notifications.push({
                        id: `summary-upcoming-${Date.now()}`,
                        type: 'upcoming_debts_summary',
                        priority: 'medium',
                        title: `إجمالي الديون القريبة`,
                        message: `${upcoming.length} دين - المجموع: ${this.formatCurrency(total)}`,
                        icon: 'fa-calendar-alt',
                        color: '#f59e0b',
                        timestamp: new Date().toISOString(),
                        data: {
                            count: upcoming.length,
                            totalAmount: total,
                            debts: upcoming
                        }
                    });
                }
                
            } catch (error) {
                console.error('❌ خطأ في فحص الديون:', error);
            }
            
            return notifications;
        }
        
        async processNotifications(notifications) {
            // تصفية الإشعارات - عرض فقط الجديدة
            const newNotifications = notifications.filter(n => {
                if (window.NotificationsSystemV4?.persistence) {
                    return window.NotificationsSystemV4.persistence.shouldShow(n.id);
                }
                return true;
            });
            
            if (newNotifications.length === 0) {
                console.log('ℹ️ لا توجد إشعارات جديدة');
                return;
            }
            
            console.log(`🔔 ${newNotifications.length} إشعار جديد`);
            
            // عرض Toast فقط للإشعارات الملخصة الجديدة
            const summaryNotifs = newNotifications.filter(n => 
                n.type.includes('_summary')
            );
            
            for (const notif of summaryNotifs) {
                window.NotificationsSystemV4.ui.showToast(notif);
                // تحديد كمعروض
                if (window.NotificationsSystemV4?.persistence) {
                    window.NotificationsSystemV4.persistence.markAsShown(notif.id);
                }
            }
            
            // إضافة جميع الإشعارات الجديدة للمدير
            for (const notif of newNotifications) {
                window.NotificationsSystemV4.manager.add(notif);
                
                // تحديد الإشعارات الفردية كمعروضة أيضاً
                if (!notif.type.includes('_summary') && 
                    window.NotificationsSystemV4?.persistence) {
                    window.NotificationsSystemV4.persistence.markAsShown(notif.id);
                }
            }
        }
        
        formatCurrency(amount) {
            return new Intl.NumberFormat('ar-IQ', {
                style: 'decimal',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(amount) + ' د.ع';
        }
    }

    // ==================== NotificationManager ====================
    class NotificationManagerV4 {
        constructor() {
            this.notifications = [];
            this.unreadCount = 0;
        }
        
        add(notif) {
            // تحقق من عدم وجود الإشعار مسبقاً
            const exists = this.notifications.some(n => n.id === notif.id);
            if (exists) return;
            
            // تحقق من أن الإشعار لم يتم قراءته أو حذفه سابقاً
            if (window.NotificationsSystemV4?.persistence) {
                if (!window.NotificationsSystemV4.persistence.shouldShow(notif.id)) {
                    return; // لا تظهر إشعارات مقروءة أو محذوفة
                }
            }
            
            this.notifications.unshift(notif);
            this.unreadCount++;
            this.updateBadge();
            this.playSound();
        }
        
        markAsRead(id) {
            const notif = this.notifications.find(n => n.id === id);
            if (notif && !notif.read) {
                notif.read = true;
                notif.readAt = new Date().toISOString();
                this.unreadCount = Math.max(0, this.unreadCount - 1);
                this.updateBadge();
            }
        }
        
        markAllAsRead() {
            this.notifications.forEach(n => {
                if (!n.read) {
                    n.read = true;
                    n.readAt = new Date().toISOString();
                }
            });
            this.unreadCount = 0;
            this.updateBadge();
            window.NotificationsSystemV4.ui.renderModal();
        }
        
        delete(id) {
            const index = this.notifications.findIndex(n => n.id === id);
            if (index !== -1) {
                const notif = this.notifications[index];
                if (!notif.read) {
                    this.unreadCount--;
                }
                this.notifications.splice(index, 1);
                this.updateBadge();
            }
        }
        
        clearAll() {
            this.notifications = [];
            this.unreadCount = 0;
            this.updateBadge();
            window.NotificationsSystemV4.ui.renderModal();
        }
        
        getAll() {
            return this.notifications;
        }
        
        updateBadge() {
            const badge = document.getElementById('notificationsBadgeV4');
            if (badge) {
                if (this.unreadCount > 0) {
                    badge.textContent = this.unreadCount > 99 ? '99+' : this.unreadCount;
                    badge.classList.add('visible');
                } else {
                    badge.classList.remove('visible');
                }
            }
        }
        
        playSound() {
            try {
                const ctx = new (window.AudioContext || window.webkitAudioContext)();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                
                osc.frequency.value = 800;
                osc.type = 'sine';
                
                gain.gain.setValueAtTime(0.3, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
                
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.5);
            } catch (error) {
                console.warn('تعذر تشغيل الصوت');
            }
        }
    }

    // ==================== NotificationUI ====================
    class NotificationUIV4 {
        constructor() {
            this.modalOverlay = null;
            this.modal = null;
            this.toastContainer = null;
            this.initUI();
        }
        
        initUI() {
            this.addBellButton();
            this.createModal();
            this.createToastContainer();
        }
        
        addBellButton() {
            const topActions = document.querySelector('.top-actions');
            
            if (!topActions) {
                console.error('❌ لم يتم العثور على .top-actions');
                return;
            }
            
            const bellBtn = document.createElement('button');
            bellBtn.className = 'notification-bell-btn';
            bellBtn.id = 'notificationsBellBtnV4';
            bellBtn.innerHTML = `
                <i class="fas fa-bell"></i>
                <span class="notification-count-badge" id="notificationsBadgeV4">0</span>
            `;
            
            bellBtn.addEventListener('click', () => {
                this.toggleModal();
            });
            
            const themeToggle = topActions.querySelector('.theme-toggle');
            if (themeToggle) {
                topActions.insertBefore(bellBtn, themeToggle);
            } else {
                topActions.appendChild(bellBtn);
            }
            
            console.log('✅ تم إضافة زر الإشعارات v4');
        }
        
        createModal() {
            this.modalOverlay = document.createElement('div');
            this.modalOverlay.className = 'notifications-modal-overlay';
            this.modalOverlay.id = 'notificationsOverlayV4';
            this.modalOverlay.addEventListener('click', () => {
                this.closeModal();
            });
            document.body.appendChild(this.modalOverlay);
            
            this.modal = document.createElement('div');
            this.modal.className = 'notifications-center-modal';
            this.modal.id = 'notificationsModalV4';
            this.modal.innerHTML = `
                <div class="notifications-modal-header">
                    <h3 class="notifications-modal-title">
                        <i class="fas fa-bell"></i>
                        الإشعارات التفصيلية
                    </h3>
                    <div class="notifications-modal-actions">
                        <button class="notifications-modal-action-btn" id="markAllReadBtnV4" title="تعليم الكل كمقروء">
                            <i class="fas fa-check-double"></i>
                        </button>
                        <button class="notifications-modal-action-btn" id="clearAllBtnV4" title="مسح الكل">
                            <i class="fas fa-trash"></i>
                        </button>
                        <button class="notifications-modal-action-btn" id="closeModalBtnV4" title="إغلاق">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="notifications-modal-body" id="notificationsBodyV4">
                    <!-- الإشعارات ستظهر هنا -->
                </div>
            `;
            
            document.body.appendChild(this.modal);
            
            document.getElementById('markAllReadBtnV4').addEventListener('click', () => {
                window.NotificationsSystemV4.manager.markAllAsRead();
            });
            
            document.getElementById('clearAllBtnV4').addEventListener('click', () => {
                if (confirm('هل تريد مسح جميع الإشعارات؟')) {
                    window.NotificationsSystemV4.manager.clearAll();
                }
            });
            
            document.getElementById('closeModalBtnV4').addEventListener('click', () => {
                this.closeModal();
            });
            
            console.log('✅ تم إنشاء لوحة الإشعارات v4');
        }
        
        createToastContainer() {
            this.toastContainer = document.createElement('div');
            this.toastContainer.className = 'notifications-toast-container';
            this.toastContainer.id = 'toastsContainerV4';
            document.body.appendChild(this.toastContainer);
        }
        
        toggleModal() {
            const isActive = this.modal.classList.contains('active');
            
            if (isActive) {
                this.closeModal();
            } else {
                this.openModal();
            }
        }
        
        openModal() {
            this.renderModal();
            this.modalOverlay.classList.add('active');
            this.modal.classList.add('active');
        }
        
        closeModal() {
            this.modalOverlay.classList.remove('active');
            this.modal.classList.remove('active');
        }
        
        renderModal() {
            const body = document.getElementById('notificationsBodyV4');
            if (!body) return;
            
            const notifications = window.NotificationsSystemV4.manager.getAll();
            
            if (notifications.length === 0) {
                body.innerHTML = `
                    <div class="notifications-empty-state">
                        <i class="fas fa-bell-slash"></i>
                        <p>لا توجد إشعارات</p>
                    </div>
                `;
                return;
            }
            
            body.innerHTML = notifications.map(n => this.createItemHTML(n)).join('');
        }
        
        createItemHTML(notif) {
            const timeAgo = this.getTimeAgo(notif.timestamp);
            const readClass = notif.read ? 'read' : 'unread';
            
            return `
                <div class="notification-item-card ${readClass}" 
                     data-notif-id="${notif.id}"
                     onclick="window.NotificationsSystemV4.ui.handleItemClick('${notif.id}')">
                    <div class="notification-item-icon" style="color: ${notif.color}">
                        <i class="fas ${notif.icon}"></i>
                    </div>
                    <div class="notification-item-content">
                        <div class="notification-item-title">${notif.title}</div>
                        <div class="notification-item-message">${notif.message}</div>
                        <div class="notification-item-time">
                            <i class="fas fa-clock"></i> ${timeAgo}
                        </div>
                    </div>
                    <button class="notification-item-delete" 
                            onclick="event.stopPropagation(); window.NotificationsSystemV4.manager.delete('${notif.id}'); window.NotificationsSystemV4.ui.renderModal();">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
        }
        
        handleItemClick(id) {
            const notif = window.NotificationsSystemV4.manager.notifications.find(n => n.id === id);
            if (!notif) return;
            
            window.NotificationsSystemV4.manager.markAsRead(id);
            
            // التوجيه حسب النوع
            switch (notif.type) {
                case 'out_of_stock':
                case 'low_stock':
                    // الانتقال لمنتج محدد
                    this.navigateToProduct(notif.data.productId);
                    break;
                    
                case 'out_of_stock_summary':
                case 'low_stock_summary':
                    // الانتقال لصفحة المخزون
                    this.navigateToInventory();
                    break;
                    
                case 'overdue_debt':
                case 'upcoming_debt':
                    // الانتقال لعميل محدد
                    this.navigateToCustomer(notif.data.customerId || notif.data.debtId);
                    break;
                    
                case 'overdue_debts_summary':
                case 'upcoming_debts_summary':
                    // الانتقال لصفحة الديون
                    this.navigateToDebts();
                    break;
            }
            
            this.closeModal();
        }
        
        navigateToProduct(productId) {
            console.log('🎯 الانتقال للمنتج:', productId);
            
            // الانتقال لصفحة إدارة المنتجات
            if (typeof showPage === 'function') {
                showPage('products');
            }
            
            // بعد التحميل، التمرير للمنتج
            setTimeout(() => {
                const productElement = document.querySelector(`[data-product-id="${productId}"], tr[data-product-id="${productId}"]`);
                if (productElement) {
                    productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    productElement.style.backgroundColor = '#fef3c7';
                    setTimeout(() => {
                        productElement.style.backgroundColor = '';
                    }, 2000);
                }
            }, 500);
        }
        
        navigateToCustomer(customerId) {
            console.log('🎯 الانتقال للعميل:', customerId);
            
            // الانتقال لصفحة الديون
            if (typeof showPage === 'function') {
                showPage('debts');
            }
            
            // بعد التحميل، البحث عن العميل
            setTimeout(() => {
                // محاولة إيجاد الدين في الجدول
                const debtRow = document.querySelector(`[data-debt-id="${customerId}"], [data-customer-id="${customerId}"]`);
                if (debtRow) {
                    debtRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    debtRow.style.backgroundColor = '#fef3c7';
                    setTimeout(() => {
                        debtRow.style.backgroundColor = '';
                    }, 2000);
                } else {
                    // إذا لم يكن هناك data attribute، نحاول فتح تفاصيل الدين
                    const viewButton = document.querySelector(`button[onclick*="${customerId}"]`);
                    if (viewButton) {
                        viewButton.click();
                    }
                }
            }, 500);
        }
        
        navigateToInventory() {
            if (typeof showPage === 'function') {
                showPage('products'); // الانتقال لصفحة إدارة المنتجات
            }
        }
        
        navigateToDebts() {
            if (typeof showPage === 'function') {
                showPage('debts');
            }
        }
        
        showToast(notif) {
            const toast = document.createElement('div');
            toast.className = `notification-toast-card priority-${notif.priority}`;
            toast.innerHTML = `
                <div class="notification-toast-content">
                    <div class="notification-toast-icon" style="color: ${notif.color}">
                        <i class="fas ${notif.icon}"></i>
                    </div>
                    <div class="notification-toast-body">
                        <div class="notification-toast-title">${notif.title}</div>
                        <div class="notification-toast-message">${notif.message}</div>
                    </div>
                    <button class="notification-toast-close" onclick="this.parentElement.parentElement.remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            `;
            
            this.toastContainer.appendChild(toast);
            
            setTimeout(() => {
                toast.classList.add('visible');
            }, 100);
            
            const duration = this.getToastDuration(notif.priority);
            setTimeout(() => {
                toast.classList.remove('visible');
                setTimeout(() => {
                    toast.remove();
                }, 400);
            }, duration);
        }
        
        getToastDuration(priority) {
            switch (priority) {
                case 'critical': return 10000;
                case 'high': return 7000;
                case 'medium': return 5000;
                default: return 4000;
            }
        }
        
        getTimeAgo(timestamp) {
            const now = new Date();
            const then = new Date(timestamp);
            const diffMs = now - then;
            const diffMins = Math.floor(diffMs / 60000);
            
            if (diffMins < 1) return 'الآن';
            if (diffMins < 60) return `منذ ${diffMins} دقيقة`;
            
            const diffHours = Math.floor(diffMins / 60);
            if (diffHours < 24) return `منذ ${diffHours} ساعة`;
            
            const diffDays = Math.floor(diffHours / 24);
            if (diffDays < 7) return `منذ ${diffDays} يوم`;
            
            return then.toLocaleDateString('en-GB');
        }
    }

    // ==================== تهيئة النظام ====================
    
    function initSystemV4() {
        console.log('🔔 تهيئة نظام الإشعارات v4.0 التفصيلي...');
        
        try {
            window.NotificationsSystemV4 = {
                engine: new NotificationEngineV4(),
                manager: new NotificationManagerV4(),
                ui: new NotificationUIV4(),
                persistence: new NotificationPersistenceV4()
            };
            
            setTimeout(() => {
                window.NotificationsSystemV4.engine.start();
            }, 3000);
            
            console.log('✅ نظام الإشعارات v4.0 التفصيلي جاهز');
            
        } catch (error) {
            console.error('❌ خطأ في تهيئة النظام:', error);
        }
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSystemV4);
    } else {
        initSystemV4();
    }
    
    // ==================== دوال مساعدة ====================
    
    window.testNotificationsV4 = function() {
        console.log('🧪 اختبار نظام الإشعارات v4 التفصيلي...');
        
        // إشعار منتج محدد نافذ
        window.NotificationsSystemV4.manager.add({
            id: 'test-product-1',
            type: 'out_of_stock',
            priority: 'critical',
            title: 'نفذ من المخزون: كولا',
            message: 'المنتج "كولا" نفد من المخزون تماماً',
            icon: 'fa-times-circle',
            color: '#ef4444',
            timestamp: new Date().toISOString(),
            data: { productId: '123', productName: 'كولا' }
        });
        
        // إشعار دين محدد متأخر
        window.NotificationsSystemV4.manager.add({
            id: 'test-debt-1',
            type: 'overdue_debt',
            priority: 'high',
            title: 'دين متأخر: أحمد علي',
            message: 'المبلغ: 500,000 د.ع - متأخر 15 يوم',
            icon: 'fa-exclamation-circle',
            color: '#ef4444',
            timestamp: new Date().toISOString(),
            data: { customerId: '456', customerName: 'أحمد علي', amount: 500000 }
        });
        
        window.NotificationsSystemV4.ui.renderModal();
        console.log('✅ تم إضافة إشعارات تجريبية');
    };
    
    window.recheckNotificationsV4 = async function() {
        if (window.NotificationsSystemV4 && window.NotificationsSystemV4.engine) {
            await window.NotificationsSystemV4.engine.performCheck();
        }
    };
    
    console.log('✅ تم تحميل نظام الإشعارات v4.0 التفصيلي بنجاح');
})();
    </script>
 </body>
