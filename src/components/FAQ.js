import '../styles/FAQ.css';
import Title from './Title';

export default function FAQ() {
    return (
        <div className="faq-container">
            <div className='faq-content'>
                <Title title="الأسئلة الشائعة"/> 
            </div>

            <div className="faq-item">
                <h3>كيف يعمل التطبيق؟</h3>
                <p>يمكنك تحميل صورة لنخلةك، وسيقوم الذكاء الاصطناعي بتحليل الصورة وتقديم تقرير عن حالة النخلة.</p>
            </div>

            <div className="faq-item">
                <h3>ما هي أنواع الأمراض التي يمكن اكتشافها؟</h3>
                <p>يمكننا اكتشاف مجموعة من الأمراض، بما في ذلك مرض السوسة، والبياض الدقيقي، وغيرها من الأمراض الشائعة.</p>
            </div>

            <div className="faq-item">
                <h3>هل يمكنني استخدام التطبيق على الهاتف المحمول؟</h3>
                <p>نعم، التطبيق متاح على الهواتف المحمولة والأجهزة اللوحية.</p>
            </div>
        </div>
    );
}