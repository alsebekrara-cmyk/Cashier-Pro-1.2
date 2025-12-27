#!/bin/bash
echo "🔨 بناء ملف واحد من الملفات المنفصلة..."

OUTPUT="index-rebuilt.html"

echo "<!DOCTYPE html>" > $OUTPUT
echo "<html lang='ar' dir='rtl'>" >> $OUTPUT
echo "<head>" >> $OUTPUT
echo "    <meta charset='UTF-8'>" >> $OUTPUT
echo "    <meta name='viewport' content='width=device-width, initial-scale=1.0'>" >> $OUTPUT
echo "    <title>نظام نقاط البيع - Digital Creativity</title>" >> $OUTPUT
echo "    <link href='https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap' rel='stylesheet'>" >> $OUTPUT
echo "    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'>" >> $OUTPUT
echo "    <script src='https://www.gstatic.com/firebasejs/9.22.1/firebase-app-compat.js'></script>" >> $OUTPUT
echo "    <script src='https://www.gstatic.com/firebasejs/9.22.1/firebase-database-compat.js'></script>" >> $OUTPUT
echo "    <script src='https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore-compat.js'></script>" >> $OUTPUT
echo "</head>" >> $OUTPUT
echo "<body>" >> $OUTPUT

# إضافة JavaScript الرئيسي
cat core/main-functions.js >> $OUTPUT

# إضافة CSS
echo "<style>" >> $OUTPUT
cat styles/main-extracted.css | sed '/<style>/d;/<\/style>/d' >> $OUTPUT
cat styles/enhanced-modals.css >> $OUTPUT
echo "</style>" >> $OUTPUT

# إضافة HTML
cat index-body.html >> $OUTPUT

# إضافة منطق التطبيق
cat core/app-logic.js >> $OUTPUT

# إضافة الأنظمة الإضافية
cat reports-system.js >> $OUTPUT
cat expenses-system.js >> $OUTPUT
cat yaqoub-print-templates.js >> $OUTPUT
cat products-fixes.js >> $OUTPUT
cat payments-page-update.js >> $OUTPUT

echo "</body>" >> $OUTPUT
echo "</html>" >> $OUTPUT

echo "✅ تم البناء بنجاح: $OUTPUT"
wc -l $OUTPUT
