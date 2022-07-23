const liItem = document.querySelectorAll('.cards__filter-item');
        const imgItem = document.querySelectorAll('.card');

        liItem.forEach(item => {
            item.onclick = function() {
            //active
            liItem.forEach(item => {
                item.className = "cards__filter-item";
            })
            item.className = "cards__filter-item-active";

            //Filter
            const value = item.textContent;
            imgItem.forEach(img => {
                img.style.display = 'none';
                if (img.getAttribute('data-filter') == value.toLowerCase() || value == "Все") {
                    img.style.display = 'block';
                }
            })
           }
        });