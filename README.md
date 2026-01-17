# Auto Ankauf (Next.js + Tailwind + shadcn/ui)

موقع صفحات SEO + نموذج تواصل لإرسال **Anfrage** (طلب شراء سيارة) عبر API داخل Next.js.

## تشغيل المشروع محليًا

```bash
npm install
npm run dev
```

يفتح على: `http://localhost:3000`

## أهم المسارات

- الصفحة الرئيسية: `src/app/page.tsx`
- قالب صفحات الـSEO: `src/components/SEOPageTemplate.tsx`
- صفحات المدن/الحالات: داخل `src/app/*/page.tsx`
- API إرسال الطلب: `src/app/api/send-inquiry/route.ts`

## المتغيرات البيئية (Environment)

أنشئ ملف `.env.local` (أو عدّل الموجود) وأضف:

- `WEB3FORMS_ACCESS_KEY` (اختياري)
  - إذا كان غير موجود، الـAPI ستعيد Success للمستخدم لكن ستسجّل تحذير في الـlogs.

## النشر على Netlify

هذا المشروع يحتوي `netlify.toml`.

- Build command: `npm run build`
- Publish: `.next`

> إذا كنت تستخدم Vercel بدل Netlify، يكفي ربط الريبو وتشغيل Build افتراضي.

## إرسال الطلبات (API)

Endpoint:
- `POST /api/send-inquiry`

يستقبل `multipart/form-data` من النموذج، ويقوم بإرسال البيانات عبر Web3Forms.

### المتغيرات البيئية
أنشئ ملف `.env.local` وضع:

```bash
WEB3FORMS_ACCESS_KEY=YOUR_KEY_HERE
```

> إذا كان المفتاح غير موجود، الـAPI يرجّع **success** (حتى لا يتعطل المستخدم) لكنه يسجّل تحذير في الـlogs.

## النشر على Netlify

الملف `netlify.toml` مضبوط على:

- Build: `npm run build`
- Publish: `.next`

وتفعيل `@netlify/plugin-nextjs`.

---

إذا أردت، نتابع مراجعة الملفات **ملف ملف** ونصلّح أي شيء (SEO, performance, form UX, tracking, …).
الملف `netlify.toml` مضبوط على:

- Build: `npm run build`
- Plugin: `@netlify/plugin-nextjs`

## ملاحظات سريعة

- استخدم `npm run lint` للتأكد من TypeScript + ESLint.
- استخدم `npm run format` لتنسيق الكود عبر Biome.
# autofranken2
# autofranken2
# autofranken2
# autofranken2
# autofranken2
# autofranken2
# autofranken2
# autofranken2
