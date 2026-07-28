document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const introScene = document.getElementById('intro-scene');

    // 1. Interactive Parallax Effect (ซองขยับตามเมาส์เบาๆ)
    introScene.addEventListener('mousemove', (e) => {
        // ถ้ากำลังเปิดซองอยู่ ให้หยุดเอฟเฟกต์ตามเมาส์
        if (envelopeWrapper.classList.contains('is-opening')) return;
        
        const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        envelopeWrapper.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });

    introScene.addEventListener('mouseleave', () => {
        if (envelopeWrapper.classList.contains('is-opening')) return;
        envelopeWrapper.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });

    // 2. เมื่อคลิกซองจดหมาย เริ่มแอนิเมชัน Step 2
    envelopeWrapper.addEventListener('click', () => {
        if (envelopeWrapper.classList.contains('is-opening')) return;
        
        // ล็อกไม่ให้คลิกซ้ำ หรือเอียงตามเมาส์อีก
        introScene.style.pointerEvents = 'none';
        
        // เริ่มเล่นฉากเปิดซอง
        startCinematicOpening();
    });
});

function startCinematicOpening() {
    const wrapper = document.getElementById('envelope-wrapper');
    const flap = document.getElementById('env-flap');
    const wax = document.getElementById('wax-seal');
    const card = document.getElementById('card-stub');
    const introScene = document.getElementById('intro-scene');
    const mainContent = document.getElementById('main-content');
    const clickPrompt = document.querySelector('.click-prompt');

    // ลำดับที่ 1: ซ่อนข้อความ CLICK TO OPEN และล็อกตำแหน่งซองให้ตั้งตรง
    if (clickPrompt) clickPrompt.style.opacity = '0';
    wrapper.classList.add('is-opening');
    wrapper.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1.05)';

    // ลำดับที่ 2 (ผ่านไป 0.4 วินาที): แสตมป์ครั่ง (Wax Seal) แตกและเลือนหายไป
    setTimeout(() => {
        wax.classList.add('wax-broken');
    }, 400);

    // ลำดับที่ 3 (ผ่านไป 0.8 วินาที): ฝาซองด้านบนหมุนพับเปิดขึ้น 180 องศา
    setTimeout(() => {
        flap.classList.add('flap-open');
    }, 800);

    // ลำดับที่ 4 (ผ่านไป 1.6 วินาที): ดึงการ์ดออกจากซอง ขยายเข้าหาผู้ใช้งาน และให้ซองจางลง
    setTimeout(() => {
        card.classList.add('card-pulling');
        wrapper.classList.add('fade-envelope');
    }, 1600);

    // ลำดับที่ 5 (ผ่านไป 2.8 วินาที): ตัดเข้าสู่หน้าการ์ดหลัก (Main Content)
    setTimeout(() => {
        introScene.style.transition = 'opacity 1s ease-out';
        introScene.style.opacity = '0';
        
        setTimeout(() => {
            introScene.style.display = 'none';
            mainContent.classList.remove('hidden');
            mainContent.classList.add('cinematic-show');
            
            // เลื่อนหน้าจอขึ้นไปบนสุด (สำหรับมือถือ)
            window.scrollTo(0, 0);
        }, 1000);
    }, 2800);
}
