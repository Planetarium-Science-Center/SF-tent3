// Get the modal and close button elements
const modal = document.getElementById('popup-modal');
const closeBtn = document.querySelector('.close-btn');

// Workshop data for Map 1
const workshops = {
    "workshop27": {
        title: "مدرسة فاطمة الزهراء التجريبية",
        description: "عرض تقديمي: بناء الأهرامات من حيث الأحجار المبني بها والأدوات المستخدمة ومما صُنعت الأدوات",
        age: "المرحلة الابتدائية",
        time: "15 دقيقة"
    },
    "workshop28": {
        title: "مدرسة قصر رأس التين",
        description: "عرض تقديمي: الزراعة وعرض الأدوات الخاصة بها",
        age: "المرحلة الابتدائية",
        time: "15 دقيقة"
    },
    "workshop29": {
        title: "مدرسة اللواء محمد نجيب الرسمية لغات",
        description: "ورشة عمل: الشكل الهندسي للأهرامات والحجارة المستخدمة",
        age: "مرحلة رياض أطفال - المرحلة الابتدائية - المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "45 دقيقة"
    },
    "workshop30": {
        title: "مدرسة براعم طيبة الأزهرية الخاصة",
        description: "عرض تقديمي: الظواهر العلمية الغريبة في مصر قديمًا مثل وجود كهرباء في الأهرامات ووجود حطام طائرة بسقارة",
        age: "المرحلة الابتدائية - المرحلة الاعدادية",
        time: "15 دقيقة"
    },
    "workshop31": {
        title: "مدرسة القادسية الخاصة",
        description: "عرض تقديمي: العلاج بالأعشاب والنباتات في مصر القديمة كما يشرح الإسعافات الأولية وأنشطة لتوضيح كيفية استخدام الحبر السري",
        age: "المرحلة الابتدائية - المرحلة الاعدادية",
        time: "15 دقيقة"
    },
    "workshop32": {
        title: "مدرسة بايونيرز الدولية، القسم الأمريكي",
        description: "عرض تقديمي: التكنولوجيا ما بين الماضي والحاضر وكيفية الاستفادة من التكنولوجيا لمعرفة أسرار الماضي",
        age: "المرحلة الابتدائية - المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "15 دقيقة"
    },
    "workshopG-mind": {
        title: "G-Mind مؤسسة",
        description: "يستخدم الزوار نظارات العالم الافتراضي للدخول إلى عالم مرئي يأخذهم في رحلة إلى الأماكن المشهورة بمصر، وذلك إلى جانب الوقوف لرؤية مراحل التحنيط والأدوات المستخدمة",
        age: "مرحلة رياض أطغال - المرحلة الابتدائية - المرحلة الاعدادية",
        time: "30 دقيقة"
    }
};

// Function to open the modal with specific workshop data
function openModal(workshop) {
    document.getElementById('workshop-title').textContent = workshops[workshop].title;
    document.getElementById('workshop-description').textContent = workshops[workshop].description;
    document.getElementById('workshop-age').textContent = workshops[workshop].age;
    document.getElementById('workshop-time').textContent = workshops[workshop].time;
    modal.style.display = 'flex';
}

// Add event listeners to all buttons
const buttons = document.querySelectorAll('.popup-btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const workshop = button.getAttribute('data-workshop');
        openModal(workshop);
    });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
