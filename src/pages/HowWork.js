import React from 'react';
import '../styles/HowWork.css';
import Title from '../components/Title'; 
import Text from '../components/Text';
import Button from '../components/Button';

const HowWork = () => {
    return (
        <div className="container">
            <Title title="كيفية استخدام التطبيق" />
            <div className="how-work-content">
                <div className="step">
                    <div className="image-container">
                    <Title title='1' />
                    <Title title='التقاط الصور' />
                    </div>
                    <div className="text-container">
                        <Text text=" استخدم كاميرا الهاتف لالتقاط صور لأشجار النخيل التي تود فحصها. تأكد من أن الصور واضحة وتظهر تفاصيل الأوراق والجذع." />
                    </div>
                </div>
                <div className="step">
                    <div className="text-container">
                        <Text text=" بعد التقاط الصور، قم بتحميلها إلى التطبيق. سيقوم التطبيق بتحليل الصور باستخدام تقنيات الذكاء الاصطناعي للكشف عن أي علامات للأمراض." />
                    </div>
                    <div className="image-container">
                    <Title title='2' />
                    <Title title='تحليل الصور' />
                    </div>
                </div>
                <div className="step">
                    <div className="image-container">
                        <Title title='3' />
                        <Title title=' عرض النتائج' />
                
                    </div>
                    <div className="text-container">
                        <Text text=" بمجرد الانتهاء من التحليل، ستظهر لك النتائج في شكل تقرير يحتوي على معلومات حول صحة الشجرة وأي أمراض محتملة." />
                    </div>
                </div>
                <div className="step">
                    <div className="text-container">
                        <Text text=" إذا كنت بحاجة إلى المزيد من المساعدة أو لديك استفسارات، يمكنك التواصل معنا عبر صفحة تواصل معنا'." />
                    </div>
                    <div className="image-container">
                        <Title title='4' />
                        <Title title='التواصل معنا' />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HowWork;