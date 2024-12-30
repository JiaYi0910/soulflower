const track = document.querySelector('.carousel-track');
        const items = Array.from(track.children);

        // 複製內容以實現無縫滾動
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });

        let currentPosition = 0;
        const itemWidth = items[0].getBoundingClientRect().width + 20; // 包含 margin 的寬度
        const totalItems = items.length;

        function moveCarousel() {
            currentPosition++;
            // 重新定位到頭部，實現無縫滾動
            if (currentPosition >= totalItems * itemWidth) {
                currentPosition = 0;
                track.style.transition = 'none'; // 暫停動畫
                track.style.transform = `translateX(0)`;
                // 短暫延遲後恢復平滑動畫
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        track.style.transition = 'transform 0.5s linear';
                    });
                });
            } else {
                track.style.transform = `translateX(-${currentPosition}px)`;
            }
        }

        // 自動播放
        setInterval(moveCarousel, 16);