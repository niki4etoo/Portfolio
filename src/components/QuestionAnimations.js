import gsap from 'gsap';

const QuestionAnimations = (questionRef, answersRef, setIndex) => {

    const timeline = gsap.timeline();
            
    timeline.to(questionRef.current, {
        y: -300,
        ease: "Power4.easeOut",
        duration: 0.5,
    }).to([ answersRef.current[0], answersRef.current[1], answersRef.current[2] ], {
        opacity: 0,
        stagger: 0.25,
        ease: "Power4.easeOut"
    }).to(answersRef.current[3], {
        opacity: 0,
        stagger: 0.25,
        ease: "Power4.easeOut",
        onComplete: () => {
            setIndex(index => index + 1);
        }
    }).to(questionRef.current, { // Next question
        y: 0,
        ease: "Power4.easeIn"
    }).to([ answersRef.current[3], answersRef.current[2], answersRef.current[1], answersRef.current[0] ], { // revert the opacity for each answer back to 1
        opacity: 1,
        stagger: 0.25,
        ease: "Power4.easeOut",
    });

}

export default QuestionAnimations;