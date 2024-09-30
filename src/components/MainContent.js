import '../styles/MainContent.css';
import Title from './Title';
import Text from './Text';
export default function MainContent() {
    return (
        <div className="main-container">

            <div className='main-content'>
                <Text text="نحن نقدم لك تقنية مبتكرة للكشف عن أمراض النخيل، مما يساعدك في الحفاظ على صحة شجيراتك وزيادة إنتاجيتها"/>
            </div>
            <div className='main-imag'>
                <img src='/images/main.png' alt='A farmer on a palm tree' />
            </div>

            <div className='main-content one'>
            <Title title='تحليل دقيق للصور' />
            <Text text="نستخدم خوارزميات متقدمة لتحليل الصور الملتقطة لأشجار النخيل. هذه التقنية تعمل على تحديد المشكلات الصحية بدقة عالية، مما يساعد في اتخاذ القرارات السليمة"/>
            </div>
            <div className='main-content two'>
            <Title title='نتائج سريعة' />
            <Text text="بعد تحميل الصور، ستحصل على نتائج تحليل دقيقة في غضون دقائق. نعمل على تسريع عملية الكشف لتتمكن من اتخاذ الإجراءات اللازمة في الوقت المناسب"/>
            </div>

            <div className='main-imag'>
                <img src='/images/main2.png' alt='A farmer on a palm tree' />
            </div>

            <div className='main-content three'>
            <Title title='حماية البيئة' />
            <Text text="بفضل الكشف المبكر عن الأمراض، يمكنك الحفاظ على البيئة وتقليل استخدام المواد الكيميائية الضارة، مما يساهم في زراعة مستدام’"/>
            </div>
        </div>
    );
}