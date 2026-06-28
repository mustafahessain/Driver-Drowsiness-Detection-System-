// تفعيل مكتبة AOS (Animate On Scroll) لعمل حركات ديناميكية رائعة أثناء التمرير أمام اللجنة
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000, // مدة حركة العنصر (ثانية واحدة)
        once: true,     // الحركة تحدث مرة واحدة فقط أثناء التمرير لأسفل
        offset: 100     // يبدأ التحريك قبل ظهور العنصر بـ 100 بكسل
    });
});

// دالة المحاكي التفاعلي للتحكم في خطوات الأكشن (Simulation Logic)
function triggerSim(stage, buttonElement) {
    // 1. تحديث أزرار التحكم لتظهر الزر النشط فقط
    const buttons = document.querySelectorAll('.sim-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');

    // 2. جلب عناصر شاشة المحاكاة
    const screen = document.getElementById('simScreen');
    const title = document.getElementById('simTitle');
    const desc = document.getElementById('simDesc');
    const car = document.getElementById('simCar');

    // 3. تغيير المحتوى وتغيير موضع السيارة مع الحفاظ على اتجاهها للأمام scaleX(-1)
    if (stage === 1) {
        screen.style.borderLeftColor = "#ef4444"; 
        title.innerText = "🚨 المرحلة 1: تفعيل نظام الإنذار المبكر";
        desc.innerText = "بمجرد حساب الـ EAR وهبوطه عن الحد المسموح، يُطلق الكود إشارة برمجية لتشغيل الـ Buzzer الصوتي عالي التردد وميض فلاشات LED داخل الكابينة لإيقاظ السائق فورا.";
        car.style.left = "20px";
        car.style.transform = "scaleX(-1) scale(1)"; // الحفاظ على اتجاه وجه السيارة للأمام
    } 
    else if (stage === 2) {
        screen.style.borderLeftColor = "#f59e0b"; 
        title.innerText = "⚠️ المرحلة 2: تشغيل إشارات التحذير المحيطية";
        desc.innerText = "في حال عدم استجابة السائق خلال 3 ثوانٍ، يفترض النظام فقدان الوعي. يقوم الأردوينو بتفعيل الريلاي لتشغيل إشارات الانتظار الأربعة (Hazard Lights) لتنبيه السيارات المجاورة.";
        car.style.left = "30%";
        car.style.transform = "scaleX(-1) scale(1.1)"; 
    } 
    else if (stage === 3) {
        screen.style.borderLeftColor = "#3b82f6"; 
        title.innerText = "🚗 المرحلة 3: تخفيض السرعة والانحراف يميناً";
        desc.innerText = "يبدأ الـ Motor Driver بتقليل نبضات الـ PWM للمواتير لتهدئة السرعة تدريجياً، بالتوازي مع توجيه العجلات للانحراف نحو الجانب الأيمن من الطريق، مع الاعتماد على حساسات الـ Ultrasonic لتفادي الأرصفة.";
        car.style.left = "65%";
        car.style.transform = "scaleX(-1) scale(1)"; 
    } 
    else if (stage === 4) {
        screen.style.borderLeftColor = "#10b981"; 
        title.innerText = "🛑 المرحلة 4: التوقف التام وإرسال استغاثة SOS";
        desc.innerText = "تقف المركبة تماماً على جانب الطريق ويتم إغلاق المحرك حمايةً للمنشآت والركاب، وفي نفس اللحظة يقوم النظام بإرسال رسالة SMS تحتوي على إحداثيات الموقع الجغرافي الحالي للطوارئ وعائلة السائق.";
        car.style.left = "calc(100% - 60px)";
        car.style.transform = "scaleX(-1) scale(0.9)"; 
    }
}
