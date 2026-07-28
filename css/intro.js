document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const introScene = document.getElementById('intro-scene');

    // 1. Interactive Parallax Effect (ซองขยับตามเมาส์เบาๆ สร้างมิติ 3D)
    introScene.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        envelopeWrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    // รีเซ็ตตำแหน่งเมื่อเอาเมาส์ออก
    introScene.addEventListener('mouseleave', () => {
        envelopeWrapper.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });

    // 2. เตรียมพร้อมสำหรับ Step 2: เมื่อคลิกซองจดหมาย
    envelopeWrapper.addEventListener('click', () => {
        console.log("Envelope clicked! Ready for Step 2: Opening Animation.");
        
        // หยุดเอฟเฟกต์ลอยตามเมาส์
        introScene.style.pointerEvents = 'none';
        
        // ส่งสัญญาณเพื่อเริ่ม Step 2 (เราจะมาเขียนลำดับแอนิเมชันต่อในขั้นถัดไปครับ)
        startCinematicOpening();
    });
});

function startCinematicOpening() {
    // โค้ด Step 2: ซองยกขึ้น -> Wax แตก -> ฝาเปิด -> การ์ดเลื่อน จะถูกนำมาใส่ที่นี่!
    alert("ซองสร้างเสร็จแล้ว! พร้อมต่อ Step 2: ทำแอนิเมชัน Wax แตก และเปิดซองทันทีครับ");
}