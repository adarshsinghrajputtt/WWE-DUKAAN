// Superstar Data
const superstars = [
    {
        id: 'roman',
        name: 'Roman Reigns',
        brand: 'Raw',
        image: '/assets/img/Superstars img/Roman.png',
        description: 'The Tribal Chief, held the Undisputed WWE Universal Champion for 1,316 days , making it the longest reign since 1988. Leader of The Bloodline and one of the most dominant champions in WWE history.',
        stats: {
            finisher: "Spear, Guillotine Choke",
            weight: '265 lbs',
            hometown: 'Pensacola, FL'
        }
    },
    {
        id: 'seth',
        name: 'Seth Rollins',
        brand: 'Raw',
        image: '/assets/img/Superstars img/Seth Rollins.png',
        description: 'The Visionary, World Heavyweight Champion known for high-flying moves and tactical brilliance. Former Shield member and multiple-time world champion.',
        stats: {
            finisher: "Curb Stomp, Pedigree",
            weight: '217 lbs',
            hometown: 'Davenport, IA'
        }
    },
    {
        id: 'cody',
        name: 'Cody Rhodes',
        brand: 'SmackDown',
        image: '/assets/img/Superstars img/Cody Rhodes.png',
        description: 'The American Nightmare, Royal Rumble winner and one of the most popular superstars in WWE. Known for his technical wrestling ability and dedication to finishing his story.',
        stats: {
            finisher: "Cross Rhodes, Figure Eight",
            weight: '220 lbs',
            hometown: 'Marietta, GA'
        }
    },
    {
        id: 'gunther',
        name: 'Gunther',
        brand: 'Raw',
        image: '/assets/img/Superstars img/Gunther.png',
        description: 'The Ring General, longest-reigning Intercontinental Champion in WWE history. Leader of Imperium and known for his devastating striking ability.',
        stats: {
            finisher: "Powerbomb, Chop",
            weight: '275 lbs',
            hometown: 'Vienna, Austria'
        }
    },
    {
        id: 'randy',
        name: 'Randy Orton',
        brand: 'SmackDown',
        image: '/assets/img/Superstars img/Randy Ortan.png',
        description: 'The Apex Predator, known as the Legend Killer. Multiple-time WWE Champion and one of the most naturally gifted wrestlers in history.',
        stats: {
            finisher: "RKO, Punt Kick",
            weight: '250 lbs',
            hometown: 'St. Louis, MO'
        }
    },
    {
        id: 'bianca',
        name: 'Bianca Belair',
        brand: 'Raw',
        image: '/assets/img/Superstars img/Bianca Belair.png',
        description: 'The EST of WWE, former Raw and SmackDown Women\'s Champion. Known for her incredible strength and athletic ability.',
        stats: {
            finisher: "KOD (Kiss of Death)",
            weight: '165 lbs',
            hometown: 'Knoxville, TN'
        }
    },
    {
        id: 'bayley',
        name: 'Bayley',
        brand: 'SmackDown',
        image: '/assets/img/Superstars img/Bayleyy.png',
        description: 'The Role Model, leader of Damage CTRL. Former Grand Slam Champion known for her technical wrestling ability and mind games.',
        stats: {
            finisher: "Rose Plant",
            weight: '119 lbs',
            hometown: 'San Jose, CA'
        }
    },
    {
        id: 'trick',
        name: 'Trick Williams',
        brand: 'NXT',
        image: '/assets/img/Superstars img/Trick Williams.png',
        description: 'The rising star of NXT, NXT Champion known for his charisma and explosive in-ring style. Often seen with Carmelo Hayes.',
        stats: {
            finisher: "Trick Shot",
            weight: '216 lbs',
            hometown: 'Washington, DC'
        }
    },
    {
        id: 'melo',
        name: 'Carmelo Hayes',
        brand: 'SmackDown',
        image: '/assets/img/Superstars img/Carmelo Hayes.png',
        description: 'Former NXT Champion, The A Champion known for his high-flying ability and supreme confidence. One of the most promising young talents.',
        stats: {
            finisher: "Nothing But Net",
            weight: '210 lbs',
            hometown: 'Boston, MA'
        }
    },
    {
        id: 'ilja',
        name: 'Ilja Dragunov',
        brand: 'NXT',
        image: '/assets/img/Superstars img/Ilja Dragunov.png',
        description: 'The Mad Dragon, NXT Champion known for his intense wrestling style and unmatched determination. Former NXT UK Champion.',
        stats: {
            finisher: "H-Bomb, Torpedo Moscow",
            weight: '190 lbs',
            hometown: 'Moscow, Russia'
        }
    },
    {
        id: 'dominik',
        name: 'Dominik Mysterio',
        brand: 'Raw',
        image: '/assets/img/Superstars img/Dominik Mysterio.png',
        description: 'The Latino Heat, member of The Judgment Day. Known for his controversial tactics and family legacy in wrestling.',
        stats: {
            finisher: "Frog Splash",
            weight: '190 lbs',
            hometown: 'San Diego, CA'
        }
    },
    {
        id: 'la',
        name: 'LA Knight',
        brand: 'SmackDown',
        image: '/assets/img/Superstars img/LA Knight.png',
        description: 'The Megastar, one of the most popular superstars in WWE. Known for his charismatic promos and in-ring intensity.',
        stats: {
            finisher: "BFT (Blunt Force Trauma)",
            weight: '245 lbs',
            hometown: 'Maryland'
        }
    },
    {
        id: 'rhea',
        name: 'Rhea Ripley',
        brand: 'Raw',
        image: '/assets/img/Superstars img/Rhea Ripley.png',
        description: 'Mami, Women\'s World Champion and member of The Judgment Day. Known for her incredible strength and dominant presence.',
        stats: {
            finisher: "Riptide",
            weight: '137 lbs',
            hometown: 'Adelaide, Australia'
        }
    },
    {
        id: 'becky',
        name: 'Becky Lynch',
        brand: 'Raw',
        image: '/assets/img/Superstars img/Becky Lynch.png',
        description: 'The Man, former Raw and SmackDown Women\'s Champion. One of the most popular female superstars in WWE history.',
        stats: {
            finisher: "Manhandle Slam",
            weight: '135 lbs',
            hometown: 'Dublin, Ireland'
        }
    },
    {
        id: 'roxanne',
        name: 'Roxanne Perez',
        brand: 'NXT',
        image: '/assets/img/Superstars img/Roxanne Perez.png',
        description: 'Former NXT Women\'s Champion, known for her technical wrestling ability and fighting spirit. One of the youngest champions in NXT history.',
        stats: {
            finisher: "Pop Rocks",
            weight: '115 lbs',
            hometown: 'Houston, TX'
        }
    }
];

    // Generate Superstar Cards
    function generateSuperstarCards() {
        const container = document.querySelector('.superstar__container');
        container.innerHTML = superstars.map(star => `
            <article class="superstar__card" data-category="${star.brand.toLowerCase()}">
                <div class="superstar__circle"></div>
                <img src="${star.image}" alt="${star.name}" class="superstar__img">
                <h3 class="superstar__name">${star.name}</h3>
                <span class="superstar__brand">${star.brand}</span>
                <br>
                <button class="superstar__button" onclick="openPopup('${star.id}')">
                    View Profile
                </button>
            </article>
        `).join('');
    }

    // Filter Functionality
    const filterButtons = document.querySelectorAll('.superstars__item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active-superstar'));
            // Add active class to clicked button
            button.classList.add('active-superstar');
            
            const filter = button.getAttribute('data-filter');
            const cards = document.querySelectorAll('.superstar__card');
            
            cards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Enhanced Superstar Data with Achievements
    const superstarAchievements = {
        roman: {
            name: "Roman Reigns",
            achievements: [
                { title: "Undisputed WWE Universal Champion", year: "2022-2024" },
                { title: "WWE Universal Champion", year: "2020-2022" },
                { title: "WWE Champion", year: "2015-2016, 2016, 2016-2017, 2022" },
                { title: "Intercontinental Champion", year: "2017" },
                { title: "United States Champion", year: "2016" },
                { title: "Royal Rumble Winner", year: "2015" }
            ]
        },
        seth: {
            name: "Seth Rollins",
            achievements: [
                { title: "World Heavyweight Champion", year: "2023-2024" },
                { title: "WWE Champion", year: "2015, 2019" },
                { title: "Universal Champion", year: "2019" },
                { title: "Intercontinental Champion", year: "2018" },
                { title: "United States Champion", year: "2015" },
                { title: "NXT Champion", year: "2012-2013" },
                { title: "Money in the Bank Winner", year: "2014" }
            ]
        },
        cody: {
            name: "Cody Rhodes",
            achievements: [
                { title: "Undisputed WWE Universal Champion", year: "2024-Present" },
                { title: "Royal Rumble Winner", year: "2024" },
                { title: "Intercontinental Champion", year: "2011-2012" },
                { title: "Tag Team Champion", year: "2013" }
            ]
        },
        gunther: {
            name: "GUNTHER",
            achievements: [
                { title: "World Heavyweight Champion", year: "2024-Presnt" },
                { title: "Intercontinental Champion", year: "2022-2024" },
                { title: "NXT UK Champion", year: "2019-2022" },
                { title: "NXT Tag Team Champion", year: "2022" }
            ]
        },
        randy: {
            name: "Randy Orton",
            achievements: [
                { title: "WWE Champion", year: "2004, 2007-2008, 2009, 2010, 2011, 2013, 2016, 2020" },
                { title: "World Heavyweight Champion", year: "2004, 2005, 2006, 2007, 2011" },
                { title: "Intercontinental Champion", year: "2003-2004" },
                { title: "Royal Rumble Winner", year: "2009, 2017" }
            ]
        },
        bianca: {
            name: "Bianca Belair",
            achievements: [
                { title: "Raw Women's Champion", year: "2022-2023" },
                { title: "SmackDown Women's Champion", year: "2021-2022" },
                { title: "Royal Rumble Winner", year: "2021" }
            ]
        },
        bayley: {
            name: "Bayley",
            achievements: [
                { title: "SmackDown Women's Champion", year: "2019-2020" },
                { title: "Raw Women's Champion", year: "2017, 2019" },
                { title: "Women's Tag Team Champion", year: "2019, 2020" },
                { title: "NXT Women's Champion", year: "2015-2016" },
                { title: "Money in the Bank Winner", year: "2019" }
            ]
        },
        trick: {
            name: "Trick Williams",
            achievements: [
                { title: "NXT Champion", year: "2024-Present" },
                { title: "NXT North American Champion", year: "2023" }
            ]
        },
        melo: {
            name: "Carmelo Hayes",
            achievements: [
                { title: "NXT Champion", year: "2023" },
                { title: "NXT North American Champion", year: "2021-2022, 2022-2023" },
                { title: "Breakout Tournament Winner", year: "2021" }
            ]
        },
        ilja: {
            name: "Ilja Dragunov",
            achievements: [
                { title: "NXT Champion", year: "2023-Present" },
                { title: "NXT UK Champion", year: "2021-2022" }
            ]
        },
        dominik: {
            name: "Dominik Mysterio",
            achievements: [
                { title: "NXT North American Champion", year: "2023" },
                { title: "SmackDown Tag Team Champion", year: "2021" }
            ]
        },
        la: {
            name: "LA Knight",
            achievements: [
                { title: "United States Champion", year: "2024" },
                { title: "Million Dollar Champion", year: "2021" }
            ]
        },
        rhea: {
            name: "Rhea Ripley",
            achievements: [
                { title: "Women's World Champion", year: "2023-2024" },
                { title: "Raw Women's Champion", year: "2021" },
                { title: "NXT Women's Champion", year: "2019-2020" },
                { title: "NXT UK Women's Champion", year: "2018-2019" },
                { title: "Women's Tag Team Champion", year: "2022" }
            ]
        },
        becky: {
            name: "Becky Lynch",
            achievements: [
                { title: "Raw Women's Champion", year: "2019-2020, 2021-2022" },
                { title: "SmackDown Women's Champion", year: "2018-2019, 2019" },
                { title: "NXT Women's Champion", year: "2023" },
                { title: "Royal Rumble Winner", year: "2019" }
            ]
        },
        roxanne: {
            name: "Roxanne Perez",
            achievements: [
                { title: "NXT Women's Champion", year: "2022-2023" },
                { title: "NXT Women's Tag Team Champion", year: "2022" },
                { title: "Breakout Tournament Winner", year: "2022" }
            ]
        }
    };

    // Popup Functions
    function openPopup(id) {
                const superstar = superstars.find(star => star.id === id);
                const achievements = superstarAchievements[id];
                
                if (!superstar || !achievements) return;

                // Populate popup content
                document.getElementById('popupImg').src = superstar.image;
                document.getElementById('popupImg').alt = superstar.name;
                document.getElementById('popupName').textContent = superstar.name;
                document.getElementById('popupBrand').textContent = superstar.brand;
                document.getElementById('popupFinisherMove').textContent = superstar.stats.finisher;
                document.getElementById('popupWeight').textContent = superstar.stats.weight;
                document.getElementById('popupHometown').textContent = superstar.stats.hometown;
                document.getElementById('popupDescription').textContent = superstar.description;

                // Generate Achievements HTML
                const achievementsHTML = achievements.achievements.map(achievement => `
                    <div class="achievement__item">
                        <i class="ri-trophy-line achievement__icon"></i>
                        <div class="achievement__details">
                            <span class="achievement__title">${achievement.title}</span>
                            <span class="achievement__year">${achievement.year}</span>
                        </div>
                    </div>
                `).join('');

                document.getElementById('popupAchievements').innerHTML = achievementsHTML;

                // Show popup
                const popup = document.getElementById('superstarPopup');
                popup.classList.add('active');
                document.body.style.overflow = 'hidden';
            }

            function closePopup() {
                const popup = document.getElementById('superstarPopup');
                popup.classList.remove('active');
                document.body.style.overflow = 'auto';
            }

            // Event Listeners
            document.addEventListener('DOMContentLoaded', function() {
                // Generate initial superstar cards
                generateSuperstarCards();

                // Close button click handler
                const closeButton = document.getElementById('popupClose');
                closeButton.addEventListener('click', closePopup);

                // Close when clicking outside the popup content
                const popup = document.getElementById('superstarPopup');
                popup.addEventListener('click', function(e) {
                    if (e.target === popup) {
                        closePopup();
                    }
                });

                // Escape key handler
                document.addEventListener('keydown', function(e) {
                    if (e.key === 'Escape') {
                        closePopup();
                    }
                });
            });

        // Initialize superstar cards
        generateSuperstarCards();

        // SCROLL HEADER
        function scrollHeader() {
            const header = document.getElementById('header')
            if (this.scrollY >= 80) header.classList.add('scroll-header');
            else header.classList.remove('scroll-header')
        }
        window.addEventListener('scroll', scrollHeader)