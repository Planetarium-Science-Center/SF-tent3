// Get the modal and close button elements
const modal = document.getElementById('popup-modal');
const closeBtn = document.querySelector('.close-btn');

// Workshop data for Map 1
const workshops = {
    "workshop27": {
        title: "مدرسة الترسانة",
        description: "عرض تقديمي: شرح للعلاج بالأعشاب والنباتات في مصر القديمة باستخدام عرض تلفزيوني والاستشهاد ببرديات",
        age: "المرحلة الابتدائية",
        time: "15 دقيقة"
    },
    "workshop28": {
        title: "مدرسة العهد الجديد الابتدائية",
        description: "عرض تقديمي: عرض لتطور الطب عند قدماء المصريين والمستشفيات قديمًا كما يعرض الأدوات المستخدمة في العمليات الجراحية",
        age: "المرحلة الابتدائية - المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "15 دقيقة"
    },
    "workshop29": {
        title: "مدرسة ناصر الحكيم الابتدائية الرسمية",
        description: "عرض تقديمي: سيوضح كيفية الاهتمام بالصحة عن طريق تناول موضوع التمرينات الرياضية في مصر القديمة والنظام الغذائي المتوازن الذي يتضمن الحبوب والأسماك والطيور واللحوم والفاكهة والخضروات والنظافة الشخصية ومدى أهميتها للإنسان",
        age: "المرحلة الابتدائية - المرحلة الاعدادية - المرحلة الثانوية والجامعية",
        time: "15 دقيقة"
    },
    "workshop30": {
        title: "مدرسة الإقبال، السرايا",
        description: "عرض تقديمي: أنواع الخطوط في اللغة المصرية القديمة ومواد الكتابة والأدوات المستخدمة في الخطوط المختلفة",
        age: "المرحلة الاعدادية",
        time: "15 دقيقة"
    },
    "workshop31": {
        title: "مدرسة كلية البنات القومية",
        description: "عرض تقديمي: استخدام قدماء المصريون للصخور لمعرفة النجوم وكيفية استخدام جهاز مرخت لحساب ساعات الليل والنهار بطريقة مبسطة",
        age: "المرحلة الابتدائية",
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
        description: "يستخدم الزوار نظارات العالم الافتراضي للدخول إلى عالم مرئي يأخذهم في رحلة إلى الأماكن المشهورة بمصر، وذلك إلى جانب الوقوف لرؤية مراحل التحنيط والأدوات المستخدمة وكما ينتقلوا لزيارة الأهرامات وأبو الهول ويتوقفوا لمعرفة الفنون في هذا الوقت",
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