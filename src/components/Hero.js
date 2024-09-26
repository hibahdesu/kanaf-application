import '../styles/Home.css';
import Button from './Button';
import Title from './Title';
import Text from './Text';
export default function Hero() {
    return (
        <div className="hero-container">
            <div>
                <img src='/images/img1.jpg' alt='Palm tree' />
            </div>

            <div className='content'>
                <Title title="اكتشف صحة نخلتك باستخدام الذكاء الاصطناعي مع كنف" />
                <Text text=" التقط صورة لنخلتك، ودعنا نساعدك في تحديد ما إذا كانت مصابة بأمراض أم لا."/>
                <Button title={'ابدأ الآن'}/>
            </div>
        </div>
    );
}