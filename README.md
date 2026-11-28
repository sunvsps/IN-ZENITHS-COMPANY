# INZENITH_EVENTS

เว็บไซต์ของ IN ZENITHS (Digital Studio) รับทำเว็บไซต์ ระบบอีเวนต์ และให้คำปรึกษาด้านดิจิทัล

- `index.html` หน้าแรก: แนะนำบริการทั้ง 3 ขั้นตอนการทำงาน และผลงาน มีแถบโปรโมท Santa Box ด้านบน (ลบได้หลังหมดเทศกาล) และการ์ด Santa Box ใน Portfolio
- `events.html` หน้ารายละเอียดระบบลงทะเบียนและเช็กอินงานอีเวนต์ พร้อมแพ็กเกจ
- `interactive.html` หน้ารวมงาน Interactive (ตอนนี้มี Santa Box) เพิ่มผลงานใหม่ตามคอมเมนต์ในไฟล์ ภาพปกวางที่ `images/interactive/`
- `drafts/option-a.html` แบบที่ไม่ได้เลือก (เพิ่ม section ทำเว็บในหน้าอีเวนต์) เก็บไว้ดูเปรียบเทียบ
- `images/` วางภาพหน้าจอที่นี่ แล้วแก้ช่อง `.shot` ให้ชี้มาที่ไฟล์
- ภาพทั้งหมดบนเว็บเป็น mockup วาดด้วย HTML/CSS (คลาส `.mk`) ไม่ใช้ไฟล์ภาพ: ผลงาน 3 ชิ้นใน `index.html`, ภาพฟีเจอร์ 4 ภาพใน `events.html` และปก Santa Box ใน `interactive.html` แก้ข้อความในภาพได้ตรงใน HTML ชื่อคนและตัวเลขในภาพเป็นข้อมูลตัวอย่าง

ราคา จำนวนแขก และภาพผลงาน ยังเป็นค่าตัวอย่าง ต้องแก้ให้เป็นข้อมูลจริง

ช่องทางติดต่อ: โทร 095-915-9875 · LINE OA `@IN_ZENITHS` (https://lin.ee/PHwOjOQ) · อีเมล sales@inzeniths.com

ลิงก์ Santa Box ชี้ไปที่ `https://inzeniths.com/santa` โดย `functions/santa/` ส่งต่อทุกหน้าใต้ `/santa` ไปที่ `play.inzeniths.com` (repo `InZeniths_Interactive_lab`) Cloudflare Pages ต้อง deploy จาก Git หรือ `npx wrangler pages deploy .` (การลากไฟล์อัปโหลดในหน้าเว็บไม่รัน Functions)
