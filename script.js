        // Floating Hearts Animation
        function createHeart() {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = Math.random() > 0.5 ? '💖' : '💕';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
            document.getElementById('hearts-container').appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 6000);
        }

        // Create hearts continuously
        setInterval(createHeart, 1000);

        // Navigation Function
        function showSection(sectionId) {
            // Hide all sections
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionId).classList.add('active');
            
            // Add some sparkle effect
            createHeartBurst();
        }

        // Countdown Timer
        function updateCountdown() {
            // Set your girlfriend's birthday date here (year, month-1, day)
            const birthday = new Date(2025, 7, 31); // December 25, 2025 - adjust as needed
            const now = new Date();
            const difference = birthday.getTime() - now.getTime();
            
            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                
                document.getElementById('days').textContent = days.toString().padStart(2, '0');
                document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
                document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
                document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
            } else {
                // Birthday has arrived!
                document.getElementById('timer').innerHTML = '<h2 style="color: #ff1493; font-size: 2.5rem;">🎉 HARI ULANG TAHUNMU! 🎉</h2>';
            }
        }

        // Update countdown every second
        setInterval(updateCountdown, 1000);
        updateCountdown(); // Initial call

        // Photo Gallery Interaction
        function showPhotoMessage(photoNum) {
            const messages = [
                "Kamu adalah hadiah terindah dalam hidupku 🌹",
                "Kamu membuatku merasa hidup  💐",
                "Kamu membuatku merasa dicintai 🌸",
                "Aku tidak pernah merasa sendirian denganmu 🌷",
                "Kamu adalah tempatku beristirahat, tempatku merasa tenang 🪷",
                "Kamu adalah cinta pertamaku 🥰"
            ];
            
            alert(messages[photoNum - 1]);
            createHeartBurst();
        }

        // Surprise Function
        function revealSurprise() {
            const surpriseContent = document.getElementById('surprise-content');
            surpriseContent.style.display = 'block';
            surpriseContent.style.animation = 'fadeIn 1s ease-in';
            createHeartExplosion();
        }

        // Heart Explosion Effect
        function createHeartExplosion() {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.innerHTML = '💖';
                    heart.style.position = 'fixed';
                    heart.style.left = '50%';
                    heart.style.top = '50%';
                    heart.style.fontSize = '20px';
                    heart.style.pointerEvents = 'none';
                    heart.style.zIndex = '1001';
                    
                    const angle = (i / 20) * 2 * Math.PI;
                    const distance = 100 + Math.random() * 100;
                    const endX = Math.cos(angle) * distance;
                    const endY = Math.sin(angle) * distance;
                    
                    heart.style.animation = `explode 2s ease-out forwards`;
                    heart.style.setProperty('--endX', endX + 'px');
                    heart.style.setProperty('--endY', endY + 'px');
                    
                    document.body.appendChild(heart);
                    
                    setTimeout(() => heart.remove(), 2000);
                }, i * 50);
            }
        }

        // Heart Burst Effect (smaller)
        function createHeartBurst() {
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.innerHTML = '💕';
                    heart.style.position = 'fixed';
                    heart.style.left = Math.random() * 100 + 'vw';
                    heart.style.top = '20px';
                    heart.style.fontSize = '16px';
                    heart.style.pointerEvents = 'none';
                    heart.style.zIndex = '1001';
                    heart.style.animation = 'float 3s ease-out forwards';
                    
                    document.body.appendChild(heart);
                    
                    setTimeout(() => heart.remove(), 3000);
                }, i * 100);
            }
        }

        // Add explosion animation to CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes explode {
                0% {
                    transform: translate(-50%, -50%) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translate(calc(-50% + var(--endX)), calc(-50% + var(--endY))) scale(0.5);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Create initial heart burst
            setTimeout(createHeartBurst, 1000);
        });