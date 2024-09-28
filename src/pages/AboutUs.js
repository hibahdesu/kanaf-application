import React from 'react';
import '../styles/About.css';
import Title from '../components/Title'; 
import Text from '../components/Text';
import Button from '../components/Button';

const AboutUs = () => {
  return (
    <div className="container">
      <div className="about-container">
            <div className="background-image">
                <div className="overlay">
                    <div className="about-content">
                      <Title title='نحن هنا لمساعدة المزارعين في حماية أشجارهم من الأمراض والآفات' />
                      <Title title='نستخدم أحدث التقنيات لتقديم أفضل الحلول' />
                      <Button title=' تواصل معنا' href='/contact'/>
                    </div>
                </div>
            </div>
        </div>
        <section className="welcome-section">
          <Text text='مرحبًا بكم في كنف، المنصة الرائدة التي تسعى لتحقيق مستقبل أفضل للمزارعين ومالكي أشجار النخيل. نحن هنا لمساعدتكم في حماية أشجاركم من الأمراض والآفات التي تهدد صحتها وإنتاجها.' />
        </section>

    <section className="about-section">
      <div className="about-title">
          <Title title="من نحن" />
      </div>

      <div className="about-image-container">
          <img src="/images/img5.jpg" alt="Palm tree" className="about-image" />
      </div>

      <div className="about-description">
          <Text text="نحن فريق من المتخصصين في الزراعة والتكنولوجيا، نهدف إلى استخدام الذكاء الاصطناعي لمساعدة المزارعين في حماية نخلاتهم. من خلال تحليل الصور، يمكننا تحديد الأمراض المحتملة وتقديم المشورة للحفاظ على صحة النخيل." />
      </div>
    </section>
      

    <section className="vision-section vision-one">
      <div className="image-container-about image-one">
      </div>
      <div className="text-container-about">
        <Title title='رؤيتنا' />
        <Text text='تتمثل رؤيتنا في تعزيز الزراعة المستدامة وتوفير أدوات فعالة لمزارعينا. من خلال استخدام تقنيات الذكاء الاصطناعي المتقدمة، نهدف إلى تقديم حلول مبتكرة تساعد في الكشف المبكر عن الأمراض التي تصيب أشجار النخيل، مما يضمن صحة المحاصيل وزيادة الإنتاجية.' />
      </div>
    </section>

    <section className="vision-section vision-two">
      
      <div className="text-container-about">
        <Title title='مهمتنا' />
        <Text text='مهمتنا هي تمكين المزارعين من اتخاذ قرارات مستنيرة لحماية أشجارهم. نقدم خدمة فريدة تتيح لكم تحميل صور لأشجار النخيل الخاصة بكم، حيث يقوم نظامنا الذكي بتحليل الصور وتقديم تقييم دقيق لحالة الأشجار.' />
      </div>
      
      <div className="image-container-about image-two">
      </div>
    </section>

    </div>
  );
};

export default AboutUs;