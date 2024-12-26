let ads = document.querySelectorAll('.ad-image');
            let currentAd = 0;

            function changeAd() {
                ads[currentAd].style.display = 'none'; // 隐藏
                currentAd = (currentAd + 1) % ads.length; // 切换
                ads[currentAd].style.display = 'block'; 
            }

            // 初始化
            ads.forEach((ad, index) => {
                if (index !== currentAd) ad.style.display = 'none';
            });

            setInterval(changeAd, 3000); // 每3秒切换