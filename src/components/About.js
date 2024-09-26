import '../styles/About.css';
import Title from '../components/Title';
import Text from '../components/Text';

export default function About() {
    return (
        <div className="about-container">
            <div className='about-content'>
                <Title title="من نحن"/>
            </div>

            <div>
                <img src='/images/About.png' alt='Palm tree' />
            </div>

            <div className='about-content'>
                <Text text="نحن فريق من المتخصصين في الزراعة والتكنولوجيا، نهدف إلى استخدام الذكاء الاصطناعي لمساعدة المزارعين في حماية نخلاتهم. من خلال تحليل الصور، يمكننا تحديد الأمراض المحتملة وتقديم المشورة للحفاظ على صحة النخيل."/>
            </div>
        </div>
    );
}