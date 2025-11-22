import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// Import cute cat decorations
import chooseCat1 from '../assets/choosecat1.jpg';
import chooseCat2 from '../assets/choosecat2.jpg';
import chooseCat3 from '../assets/choosecat3.jpg';
import cat1 from '../assets/cat1.avif';
import cat2 from '../assets/cat2.jpg';
import cat3 from '../assets/cat3.jpg';
import cat4 from '../assets/cat4.png';
import cat5 from '../assets/cat5.webp';
import floatingCat1 from '../assets/flotingcat1.webp';
import floatingCat2 from '../assets/flotingcat2.webp';
import floatingCat3 from '../assets/flotingcat3.avif';

const MessageSection = ({ sectionNumber, content, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const getSectionStyle = (num) => {
        switch (num) {
            case 1:
                return {
                    component: Section1,
                    animation: {
                        initial: { scale: 0, opacity: 0 },
                        animate: isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 },
                        transition: {
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            delay: delay
                        }
                    }
                };
            case 2:
                return {
                    component: Section2,
                    animation: {
                        initial: { x: -100, opacity: 0 },
                        animate: isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 },
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            delay: delay
                        }
                    }
                };
            case 3:
                return {
                    component: Section3,
                    animation: {
                        initial: { y: 50, opacity: 0 },
                        animate: isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 },
                        transition: {
                            duration: 0.8,
                            delay: delay
                        }
                    }
                };
            case 4:
                return {
                    component: Section4,
                    animation: {
                        initial: { opacity: 0 },
                        animate: isInView ? { opacity: 1 } : { opacity: 0 },
                        transition: {
                            duration: 0.6,
                            delay: delay
                        }
                    }
                };
            case 5:
                return {
                    component: Section5,
                    animation: {
                        initial: { y: -100, rotate: -10, opacity: 0 },
                        animate: isInView ? { y: 0, rotate: -1, opacity: 1 } : { y: -100, rotate: -10, opacity: 0 },
                        transition: {
                            type: "spring",
                            stiffness: 150,
                            damping: 12,
                            delay: delay
                        }
                    }
                };
            default:
                return {
                    component: Section1,
                    animation: {}
                };
        }
    };

    const { component: SectionComponent, animation } = getSectionStyle(sectionNumber);

    return (
        <motion.div
            ref={ref}
            className="my-16 px-4"
            {...animation}
        >
            <SectionComponent content={content} />
        </motion.div>
    );
};

// Section 1: Cute Scrapbook Style Card
const Section1 = ({ content }) => (
    <div className="max-w-4xl mx-auto relative">
        {/* Hanging Cat Decorations */}
        <motion.div
            className="absolute -top-6 -left-6 w-16 h-16 rounded-full overflow-hidden shadow-lg border-4 border-pink-300 bg-white p-1 z-10"
            animate={{
                rotate: [0, 5, -5, 0],
                y: [0, -3, 0]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <img src={cat1} alt="Hanging cat" className="w-full h-full object-cover rounded-full" />
        </motion.div>
        <motion.div
            className="absolute -top-6 -right-6 w-14 h-14 rounded-full overflow-hidden shadow-lg border-4 border-purple-300 bg-white p-1 z-10"
            animate={{
                rotate: [0, -5, 5, 0],
                y: [0, -2, 0]
            }}
            transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
            }}
        >
            <img src={floatingCat1} alt="Hanging cat" className="w-full h-full object-cover rounded-full" />
        </motion.div>

        {/* Scrapbook Card */}
        <div className="bg-linaer-to-br from-pink-100 to-rose-100 rounded-3xl p-8 shadow-xl relative border-4 border-white transform rotate-1">
            {/* Decorative tape */}
            <div className="absolute -top-2 left-8 w-16 h-8 bg-pink-300 opacity-60 rounded transform -rotate-12"></div>
            <div className="absolute -top-2 right-12 w-12 h-6 bg-purple-300 opacity-60 rounded transform rotate-12"></div>

            {/* Corner decorations */}
            <div className="absolute top-4 right-4 text-4xl opacity-60">🍰</div>
            <div className="absolute bottom-4 left-4 text-3xl opacity-40">�</div>

            <p className="font-comfort text-lg md:text-xl text-pink-800 leading-relaxed text-center relative z-5">
                Ami my babyyyy bbg 😭💕
                i’m sitting here typing this with shaky hands and teary eyes because how do i even fit two whole years of you into one message yrrrrr
                like literally i don’t know what i did to deserve you but thank God every day that I was added in to that random gc.... you’re not just my best friend, you’re my soul in another body, my safe place, my anytime. “kaha mar gaii online aa kuttiiiiiiiiiiiiii” person, my everything. i could be saying random nonsense and you’ll still listen like every word matters. you get my mood swings, my bina matlab ka rona dhona, my random dramabaazi and you never leave. never.
                i still don’t remember exactly how i became your bbg but honestly who cares, i’m never letting that title go 😭 and you are not allowed to treat your other friends the way you treat me 🙂🔪 ik ik tune bahot baar bataya he her different person ki different jagah hoti he dil me but who cares meri sabse badi honi chahiye dosto me (kya karu behennnn jal jati he teko offline dosto k sath dekh k 🥲🥲 they don't even know how lucky they are)

                you came into my life when everything felt heavy and suddenly it wasn’t. it’s like God looked at me struggling and said “here take this girl, she’ll hold your hand even from 2000 km away”. and you do. every single day. Every single moment even tho you are not here....teko pata he esa bahot baar hua he when I was feeling alone and ghar k kalesh and stuff and everytime thinking about you and our friendship is what actually saved me....it was like koi naa atleast mere pass amiii to he, ik there is atleast one person who is never gonna leave me no matter what happens, thank you ml, thank you for being that person.
            </p>
        </div>
    </div>
);

// Section 2: Cute Letter Style with Wax Seal
const Section2 = ({ content }) => (
    <div className="max-w-3xl mx-auto relative">
        {/* Hanging Cat Decorations */}
        <motion.div
            className="absolute -top-8 left-4 w-12 h-12 rounded-full overflow-hidden shadow-lg border-3 border-rose-300 bg-white p-1 z-10"
            animate={{
                rotate: [0, 8, -8, 0],
                y: [0, -4, 0]
            }}
            transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <img src={cat2} alt="Hanging cat" className="w-full h-full object-cover rounded-full" />
        </motion.div>
        <motion.div
            className="absolute -top-8 right-4 w-10 h-10 rounded-full overflow-hidden shadow-lg border-3 border-blue-300 bg-white p-1 z-10"
            animate={{
                rotate: [0, -6, 6, 0],
                y: [0, -2, 0]
            }}
            transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8
            }}
        >
            <img src={floatingCat2} alt="Hanging cat" className="w-full h-full object-cover rounded-full" />
        </motion.div>

        {/* Letter Style Card */}
        <div className="bg-cream-50 rounded-2xl p-8 shadow-2xl relative border-2 border-pink-200 transform -rotate-1">
            {/* Wax seal */}
            <div className="absolute -top-4 right-8 w-12 h-12 bg-red-400 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                💕
            </div>

            {/* Letter lines */}
            <div className="absolute inset-0 p-8 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="h-px bg-pink-200 opacity-30 mb-6" style={{ marginTop: i === 0 ? '2rem' : '1.5rem' }}></div>
                ))}
            </div>

            <p className="font-handwritten text-lg md:text-xl text-purple-700 leading-relaxed relative z-5">
                Me ye bolne wali thi ki if you were a guy i would have married you long ago but fir yaad aya teko usse koi fark nai padta....tere liye to me already teri bandi hu 🥹🎀 and TBH I am not even complaining, infact I love that.(Flirting skills kuch jyada hi achhi he teri 😭😭)
                Teko pata he teko dekh k vo wala song yaad ata he "I can treat you better than him" whenever we are flirting.

                you’re the only person in this whole world jisse mujhe explain nahi karna padta. i can be silent for 5 seconds and you’ll already know what’s in my head. i can disappear for days (ik mera khoon karne ka dil karta he naa?? Kar le bbg tere hato marna bhi sukoon ki mot hogi🥹) and the second i come back it’s like we never even paused. we just pick up from the exact same vibe and start yapping again like nothing happened. that’s how strong we are ml.

            </p>
        </div>
    </div>
);

// Section 3: Cute Cloud Dream Card
const Section3 = ({ content }) => (
    <div className="max-w-4xl mx-auto text-center relative py-12">
        {/* Hanging Cat Decorations */}
        <motion.div
            className="absolute -top-6 left-8 w-14 h-14 rounded-full overflow-hidden shadow-lg border-3 border-pink-300 bg-white p-1 z-10"
            animate={{
                rotate: [0, 10, -10, 0],
                y: [0, -5, 0]
            }}
            transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <img src={cat3} alt="Hanging cat" className="w-full h-full object-cover rounded-full" />
        </motion.div>
        <motion.div
            className="absolute -top-6 right-8 w-12 h-12 rounded-full overflow-hidden shadow-lg border-3 border-purple-300 bg-white p-1 z-10"
            animate={{
                rotate: [0, -8, 8, 0],
                y: [0, -3, 0]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.7
            }}
        >
            <img src={floatingCat3} alt="Hanging cat" className="w-full h-full object-cover rounded-full" />
        </motion.div>

        {/* Cloud Style Card */}
        <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-full p-12 shadow-2xl relative border-4 border-white transform rotate-2">
            {/* Cloud decorations */}
            <div className="absolute -top-4 -left-4 text-6xl opacity-20">☁️</div>
            <div className="absolute -top-2 -right-6 text-4xl opacity-20">☁️</div>
            <div className="absolute -bottom-4 -left-6 text-5xl opacity-20">☁️</div>
            <div className="absolute -bottom-2 -right-4 text-4xl opacity-20">☁️</div>

            {/* Floating Icons */}
            <motion.div
                className="absolute top-4 left-1/4 text-3xl"
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                💕
            </motion.div>
            <motion.div
                className="absolute top-8 right-1/4 text-2xl"
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, -10, 0]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
            >
                ⭐
            </motion.div>
            <motion.div
                className="absolute bottom-4 left-1/3 text-3xl"
                animate={{
                    y: [0, -12, 0],
                    rotate: [0, 15, 0]
                }}
                transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            >
                💖
            </motion.div>
            <motion.div
                className="absolute bottom-8 right-1/3 text-2xl"
                animate={{
                    y: [0, -8, 0],
                    rotate: [0, -15, 0]
                }}
                transition={{
                    duration: 3.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                }}
            >
                🌟
            </motion.div>

            <p className="font-heading text-xl md:text-2xl text-purple-600 leading-relaxed px-8 relative z-5">
                you get my sarcasm, my crying, my 3a.m. overthinking(yrrr 3 baje se bhoot vale sare incidents yaad aa gaye😭😭) my random “i love you” attacks, my everything. no one has ever understood me the way you do and honestly?? i don’t want anyone else to. Tu kafi me mere liye...or koi nai chahiye ab.

                i love how we went from “lmao same” in a random gc to me crying because i miss your face so much it hurts. i love how you call me out on my bakwas but still hype me up like i’m the coolest person ever. i love how you flirt with me shamelessly and make me blush like a stupid teenager 😭😭

            </p>
        </div>
    </div>
);

// Section 4: Cute Polaroid Collage Style
const Section4 = ({ content }) => (
    <div className="max-w-6xl mx-auto relative">
        {/* Hanging Cat Decorations */}
        <motion.div
            className="absolute -top-8 left-12 w-16 h-16 rounded-full overflow-hidden shadow-lg border-4 border-pink-300 bg-white p-1 z-10"
            animate={{
                rotate: [0, 12, -12, 0],
                y: [0, -6, 0]
            }}
            transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <img src={cat4} alt="Hanging cat" className="w-full h-full object-cover rounded-full" />
        </motion.div>
        <motion.div
            className="absolute -top-8 right-12 w-14 h-14 rounded-full overflow-hidden shadow-lg border-4 border-rose-300 bg-white p-1 z-10"
            animate={{
                rotate: [0, -10, 10, 0],
                y: [0, -4, 0]
            }}
            transition={{
                duration: 2.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
            }}
        >
            <img src={cat5} alt="Hanging cat" className="w-full h-full object-cover rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-pink-200 transform -rotate-2"
            >
                {/* Polaroid decorations */}
                <div className="absolute -top-3 left-4 w-20 h-24 bg-white rounded shadow-lg transform rotate-12 opacity-60"></div>
                <div className="absolute -top-2 right-6 w-16 h-20 bg-white rounded shadow-lg transform -rotate-6 opacity-60"></div>

                <p className="font-comfort text-lg md:text-xl text-purple-700 leading-relaxed relative z-5">
                    Ami you’re wayyyyy too important to me sweetheart. like actually scary important. i don’t know what i’d do if one day you weren’t there to listen to my nonsense. I can't even fucking imagine bbg I just can't, it's like I can afford to loose everything but not you NEVER YOU....

                    Kitne are log aaye or gaye (green kurte se leke army wale or even apna chhotu sauhard bhi) the thing is IDC, I don't care kuch bhi ho jaye whatever is between us should stay the same till the day we die (nai actually agale janam me bhi sath rehenge, bas pass peda ho jayio agale janam me vo kya he naa jaanu aapse ye duriya hame bardast nai hoti 😔😔🖐🏻)



                    Wowww mene bakbak karte hue kiya kuch likh diya damnnn but still it feels like abhi bahot kuch kehna baki he....ik me or tu ham dono busy rehte hu but please behennnnn aaj k din video call kar lena ya fir normal wali bhi chalegi (meri bbg ko dekhna he aaj k din 🥹🎀)

                    So now finally coming to the main point.....

                </p>
            </motion.div>

            <motion.div
                className="flex justify-center relative"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-pink-200">
                    <img
                        src={chooseCat1}
                        alt="Cute decoration"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Small floating cats around the main image */}
                <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 rounded-full overflow-hidden shadow-lg border-2 border-purple-200"
                    animate={{
                        rotate: [0, 10, -10, 0],
                        y: [0, -5, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <img src={chooseCat2} alt="Small cat" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                    className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full overflow-hidden shadow-lg border-2 border-blue-200"
                    animate={{
                        rotate: [0, -10, 10, 0],
                        x: [0, 3, -3, 0]
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                >
                    <img src={chooseCat3} alt="Small cat" className="w-full h-full object-cover" />
                </motion.div>
            </motion.div>
        </div>
    </div>
);

// Section 5: Enhanced Sticky Note Style
const Section5 = ({ content }) => (
    <div className="max-w-3xl mx-auto relative">
        {/* Hanging Cat Decorations */}
        <motion.div
            className="absolute -top-10 left-8 w-18 h-18 rounded-full overflow-hidden shadow-lg border-4 border-yellow-300 bg-white p-1 z-10"
            animate={{
                rotate: [0, 15, -15, 0],
                y: [0, -7, 0]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <img src={floatingCat1} alt="Hanging cat" className="w-full h-full object-cover rounded-full" />
        </motion.div>
        <motion.div
            className="absolute -top-10 right-8 w-16 h-16 rounded-full overflow-hidden shadow-lg border-4 border-green-300 bg-white p-1 z-10"
            animate={{
                rotate: [0, -12, 12, 0],
                y: [0, -5, 0]
            }}
            transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4
            }}
        >
            <img src={floatingCat2} alt="Hanging cat" className="w-full h-full object-cover rounded-full" />
        </motion.div>

        <div className="sticky-note bg-yellow-100 border-4 border-yellow-200 shadow-2xl">
            {/* Multiple tape pieces */}
            <div className="absolute -top-3 left-1/4 w-12 h-6 bg-yellow-400 opacity-70 rounded transform -rotate-6"></div>
            <div className="absolute -top-3 right-1/4 w-10 h-5 bg-yellow-400 opacity-70 rounded transform rotate-12"></div>

            {/* Corner fold */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-200 transform rotate-45 translate-x-4 -translate-y-4"></div>

            <p className="font-handwritten text-xl md:text-2xl text-gray-700 leading-relaxed relative z-5">
                Happiest Birthday amiiii😚🫂💗
                Hope all of your wishes come true and you always stay happy and healthy....bas hamesha khush rehh behennn, teko nai pata but teko khush dekh k meko bhi ajeeb sa sukoon milta he to khush raha kar, jo dil me aaye vo kiya kar (except khana skip karne k 🙂🔪 time se khana khana Sikh le behen varna waha aake pitungi) loveeee youuuuuu bbgggggg 💋🫂💗✨

                Again happiest birthday to the best thing that ever happened to me ml 😚🫂💗

            </p>
            <div className="absolute -top-2 -right-2 text-2xl">📌</div>
        </div>
    </div>
);

export default MessageSection;