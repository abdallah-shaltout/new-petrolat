<template>
    <div>
        <!-- Hero Section -->
        <section class="pt-32 pb-20 px-6">
            <div class="max-w-7xl mx-auto">
                <p class="text-sm font-medium text-primary-600 mb-4">
                    المستندات القانونية
                </p>
                <h1
                    class="text-8xl lg:text-7xl md:text-5xl font-bold text-primary-700 mb-8 leading-tight"
                >
                    سياسة ملفات تعريف الارتباط
                </h1>
                <p class="text-lg text-black/80 mb-4 max-w-3xl leading-relaxed">
                    يوضح هذا النص كيف تستخدم عيادات سيتاديل ملفات تعريف الارتباط (الكوكيز) على موقعها، ولماذا نستخدمها، وكيف يمكنك إدارة تفضيلاتك.
                </p>
                <p class="text-sm text-black/60">
                    آخر تحديث: {{ lastUpdated }}
                </p>
            </div>
        </section>

        <!-- Content Section -->
        <section class="py-16 px-6 bg-white">
            <div class="max-w-4xl mx-auto space-y-12 text-start">
                <div>
                    <h2 class="text-2xl font-bold text-primary-700 mb-4">
                        ١. ما هي ملفات التعريف ولماذا نستخدمها
                    </h2>
                    <p class="text-black/70 leading-relaxed mb-3">
                        ملفات تعريف الارتباط (Cookies) هي ملفات نصية صغيرة تُخزَّن على جهازك عند زيارة موقعنا. تُستخدم لتمكين الموقع من تذكر إعداداتك أو تحسين تجربة التصفح أو فهم كيفية استخدام الزوار للموقع. عيادات سيتاديل تستخدمها لتشغيل الموقع بشكل سليم، وتذكر لغة الموقع إن وُجد خيار تبديل اللغة، وضمان أمان الجلسة عند الحجز أو ملء النماذج، وتحسين الأداء عند الحاجة.
                    </p>
                </div>

                <div>
                    <h2 class="text-2xl font-bold text-primary-700 mb-4">
                        ٢. أنواع الملفات التي نستخدمها
                    </h2>
                    <ul class="text-black/70 leading-relaxed space-y-3 list-disc list-inside">
                        <li>
                            <strong class="text-primary-700">ضرورية:</strong> لا غنى عنها لتشغيل الموقع (مثل جلسة تسجيل الدخول، الأمان، تحميل الصفحات). لا يمكن تعطيلها دون التأثير على عمل الموقع.
                        </li>
                        <li>
                            <strong class="text-primary-700">وظيفية:</strong> تذكر تفضيلاتك مثل اللغة أو المنطقة لتحسين زيارتك التالية.
                        </li>
                        <li>
                            <strong class="text-primary-700">أداء وتحليل:</strong> إن استخدمنا أدوات تحليل (مثل إحصائيات الزيارات)، قد تُستخدم ملفات لقياس عدد الزوار وطريقة استخدام الصفحات بشكل مجمّع وغير معرّف لتحسين المحتوى والتصميم.
                        </li>
                    </ul>
                    <p class="text-black/70 leading-relaxed mt-3">
                        لا نستخدم ملفات تعريف لأغراض إعلانية استهدافية من أطراف ثالثة على هذا الموقع دون موافقتك الصريحة إن طُبّق ذلك لاحقاً.
                    </p>
                </div>

                <div>
                    <h2 class="text-2xl font-bold text-primary-700 mb-4">
                        ٣. إدارة التفضيلات
                    </h2>
                    <p class="text-black/70 leading-relaxed mb-3">
                        يمكنك ضبط متصفحك لقبول أو رفض ملفات التعريف أو حذفها بعد انتهاء الجلسة. تختلف طريقة الإعداد حسب المتصفح (مثل Chrome، Safari، Firefox، Edge) ويمكن عادةً الوصول إليها من إعدادات «الخصوصية» أو «الأمان». تقييد أو حذف بعض الملفات قد يؤثر على عمل أجزاء من الموقع (مثل تذكر اللغة أو إكمال نموذج). إن أضفنا لاحقاً شريط أو صفحة لإدارة تفضيلات الكوكيز على الموقع، سنوضح الرابط أو الموضع في هذه الصفحة.
                    </p>
                </div>

                <div>
                    <h2 class="text-2xl font-bold text-primary-700 mb-4">
                        ٤. تحديثات السياسة
                    </h2>
                    <p class="text-black/70 leading-relaxed mb-3">
                        قد نحدّث سياسة ملفات التعريف من وقت لآخر ليعكس تغييرات في التقنيات أو الممارسات أو المتطلبات القانونية. سننشر النسخة المحدثة على هذه الصفحة مع تعديل تاريخ «آخر تحديث». ننصح بمراجعة هذه الصفحة بين الحين والآخر. استمرار استخدامك للموقع بعد التحديث يُعتبر موافقة على السياسة المحدثة ما لم تنص القوانين المعمول بها على خلاف ذلك.
                    </p>
                </div>
            </div>
        </section>

        <PagesHomeGetStartedSection />
    </div>
</template>

<script setup lang="ts">
const lastUpdated = "يناير ٢٠٢٥";

useHead({
    title: "سياسة ملفات تعريف الارتباط | عيادات سيتاديل",
    meta: [
        {
            name: "description",
            content:
                "سياسة ملفات تعريف الارتباط (الكوكيز) لموقع عيادات سيتاديل: أنواع الملفات المستخدمة، الغرض منها، وكيفية إدارة تفضيلاتك.",
        },
    ],
});
</script>
