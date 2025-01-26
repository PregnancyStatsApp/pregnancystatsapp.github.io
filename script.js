document.addEventListener('DOMContentLoaded', () => {
  const faqData = [
    {
      question: "What sorts of trends should I expect?",
      answer: "Temperature should increase until 10-12 weeks, after which point we would expect it to level off and slowly decrease until 40 weeks.\n\nResting Heart Rate should increase until 32-34 weeks, after which point it should decrease until 40 weeks.\n\nHeart Rate Variability should decrease until 32-34 weeks, after which point it should increase until 40 weeks.\n\nRespiratory Rate should be flat or decrease until 10 weeks, then rise until 17 weeks, then slowly decrease until 40 weeks.\n\nVO2 Max should decrease throughout your pregnancy.",
      wordsToBold: ["Temperature", "Resting Heart Rate", "Heart Rate Variability", "Respiratory Rate", "VO2 Max"]
    },
    {
      question: "Is this app a replacement for medical advice?",
      answer: "No! This app is NOT a substitute for professional medical care or advice. The information provided by this app is for informational and educational purposes only. Always consult with your healthcare provider about your specific situation. Your healthcare provider knows your medical history and can give you personalized recommendations based on your individual circumstances.\n\nWhile we strive to provide accurate information based on published medical literature, the tracking features and reference ranges shown in this app should not be used to make medical decisions. Pregnancy is complex and unique to each individual, and what's normal can vary significantly.",
      wordsToBold: ["No!"]
    },
    {
      question: "What should I do if my measurements seem outside the normal range?",
      answer: "If you notice any measurements outside the typical ranges shown in the app, do not panic. These ranges are general guidelines only and many healthy pregnancies fall outside them. Additionally, sensors such as your Apple Watch are susceptible to noisy or inaccurate measurements. The most important step is to discuss any concerns with your healthcare provider. They can properly evaluate your situation with additional context and medical expertise that this app cannot provide.\n\nNever delay seeking medical attention based on information from this app. If you're worried about your pregnancy for any reason, contact your healthcare provider immediately.",
      wordsToBold: []
    },
    {
      question: "How is confidence determined?",
      answer: "For each metric, we find the trend that best fits the available data. If the trend appears to be very weak (slowly increasing/decreasing), confidence is lower. Similarly, if many points are far away from the trend line, confidence is reduced.",
      wordsToBold: []
    },
    {
      question: "Why are some metrics missing or showing very few data points?",
      answer: "We can only use whatever data are available in you Health app. Some metrics, like VO2 max, are rarely updated, and so may have fewer points for us to identify trends.  Trends with few data points should be interpreted as very rough, possibly outdated, estimates.",
      wordsToBold: []
    },
    {
      question: "Where do the reference trends come from?",
      answer: "We sourced reference trends from published literature, specifically: \n[1]: Changes in Heart Rate, Heart Rate Variability, Breathing Rate, and Skin Temperature throughout Pregnancy and the Impact of Emotions—A Longitudinal Evaluation Using a Sensor Bracelet. Verena Bossung et al. DOI: 10.3390/s23146620 \n[2]: Gestation-Specific Vital Sign Reference Ranges in Pregnancy. Lauren J Green et al, DOI: 10.1097/AOG.0000000000003721 \n[3]: Monitoring one heart to help two: heart rate variability and resting heart rate using wearable technology in active women across the perinatal period. Shon P Rowan et al. DOI: 10.1186/s12884-022-05183-z",
      wordsToBold: []
    }
  ];

  const faqContainer = document.getElementById('faq-container');

  faqData.forEach(item => {
    const faqItem = document.createElement('div');
    faqItem.classList.add('faq-item');

    const question = document.createElement('h3');
    question.textContent = item.question;
    faqItem.appendChild(question);

    const answer = document.createElement('p');
    let formattedAnswer = item.answer;
    item.wordsToBold.forEach(word => {
      const regex = new RegExp(`\\b${word}\\b`, 'g');
      formattedAnswer = formattedAnswer.replace(regex, `<strong>${word}</strong>`);
    });
    answer.innerHTML = formattedAnswer;
    faqItem.appendChild(answer);

    question.addEventListener('click', () => {
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });

    faqContainer.appendChild(faqItem);
  });
});
