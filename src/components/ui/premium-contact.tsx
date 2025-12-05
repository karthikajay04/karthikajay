import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import resumeFile from '../../assets/images/Resume/Karthik Ajay resume(single page).pdf';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
    Mail,
    Phone,
    Send,
    User,
    MessageSquare,
    Building,
    ArrowRight,
    Sparkles,
    CheckCircle,
    Clock,
    Globe,
    Shield,
    Linkedin,
    Zap
} from 'lucide-react';

const contactMethods = [
    {
        icon: Mail,
        title: "Email Us",
        description: "Get in touch via email",
        value: "karthikajay2020@gmail.com",
        link: "mailto:karthikajay2020@gmail.com",
        gradient: "from-blue-500/20 to-cyan-500/20",
        hoverColor: "blue"
    },
    {
        icon: Phone,
        title: "Call Us",
        description: "Speak directly with our team",
        value: "+91 9895235920",
        link: "tel:+919895235920",
        gradient: "from-green-500/20 to-emerald-500/20",
        hoverColor: "green"
    },
    {
        icon: Linkedin,
        title: "LinkedIn",
        description: "Connect with us",
        value: "Connect",
        link: "https://www.linkedin.com/in/karthik-ajay-a2bb772a0/",
        gradient: "from-purple-500/20 to-pink-500/20",
        hoverColor: "purple"
    }
];

const companyStats = [
    { label: "Response Time", value: "< 2 hours", icon: Clock },
    { label: "Projects", value: "20+", icon: Globe },
    { label: "Years of Learning Experience", value: "3+", icon: Shield },
    { label: "Success Rate", value: "99.9%", icon: Zap }
];

export function PremiumContact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            // Replace these with your actual EmailJS service ID, template ID, and public key
            // It's best practice to use environment variables
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

            const response = await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    message: `Email: ${formData.email}\nCompany: ${formData.company}\n\n${formData.message}`,
                    time: new Date().toLocaleString(),
                },
                publicKey
            );

            console.log("EmailJS Response:", response);

            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', company: '', message: '' });
        } catch (error) {
            console.error('Failed to send email:', error);
            setIsSubmitting(false);
            // You might want to set a global error state here to show a message to the user
            alert("Failed to send message. Please try again later.");
        }
    };

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 60 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeInOut"
            }
        }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    return (
        <section className="relative py-32 bg-black text-white overflow-hidden" id="contact">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0">
                {/* Animated gradient mesh - Removed for solid black background */}
                <div className="absolute inset-0 bg-black" />

                {/* Moving orbs */}
                <motion.div
                    className="absolute top-1/3 left-1/5 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, 200, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-rose-400/10 rounded-full blur-3xl"
                    animate={{
                        x: [0, -150, 0],
                        y: [0, -80, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Communication lines */}
                <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-px h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                            style={{
                                left: `${20 + (i * 15)}%`,
                                top: `${25 + (i * 8)}%`,
                                transform: `rotate(${30 + i * 20}deg)`
                            }}
                            animate={{
                                opacity: [0.2, 0.8, 0.2],
                                scaleY: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 3 + i * 0.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.5,
                            }}
                        />
                    ))}
                </div>
            </div>

            <motion.div
                ref={containerRef}
                className="relative z-10 max-w-7xl mx-auto px-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    variants={fadeInUp}
                >
                    <motion.div
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6"
                        whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.3)" }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <Sparkles className="h-4 w-4 text-indigo-300" />
                        </motion.div>
                        <span className="text-sm font-medium text-white/80">
                            ✨ Let's Connect
                        </span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    </motion.div>

                    <motion.h2
                        className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
                        variants={fadeInUp}
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                            Get in
                        </span>
                        <br />
                        <motion.span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{
                                backgroundSize: '200% 200%'
                            }}
                        >
                            Touch
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        className="text-xl sm:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed"
                        variants={fadeInUp}
                    >
                        Ready to transform your business with Me? Let's start a conversation about your goals and how I can help you achieve them.
                    </motion.p>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
                    variants={fadeInUp}
                >
                    {companyStats.map((stat, index) => {
                        if (index === 3) {
                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    className="relative overflow-hidden rounded-2xl border border-white/[0.15] bg-white/[0.05] p-6 backdrop-blur-xl transition-all hover:bg-white/[0.08] group"
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <div className="relative z-10 flex flex-col h-full justify-between gap-4">
                                        <div>
                                            <span className="font-bold text-3xl text-white">Download</span>
                                            <p className="text-sm text-white/60">My Resume</p>
                                        </div>
                                        <a
                                            href={resumeFile}
                                            download="Karthik_Ajay_Resume.pdf"
                                            className="group/btn relative flex w-fit items-center gap-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white transition-all hover:from-indigo-600 hover:to-purple-700"
                                        >
                                            Download CV
                                            <svg className="h-4 w-4 fill-current transition-transform group-hover/btn:translate-y-0.5" viewBox="0 0 100 100">
                                                <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" fillRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>

                                    {/* Decorative Background SVGs */}
                                    <svg className="absolute -bottom-4 -right-4 h-32 w-32 text-white/[0.03] transition-transform duration-500 group-hover:scale-110" viewBox="0 0 64 64" fill="currentColor">
                                        <path d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" />
                                    </svg>
                                </motion.div>
                            );
                        }
                        return (
                            <motion.div
                                key={index}
                                className="text-center p-6 bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/[0.15] group hover:bg-white/[0.08] transition-all"
                                whileHover={{ scale: 1.05, y: -5 }}
                                variants={fadeInUp}
                            >
                                <motion.div
                                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-white/20 flex items-center justify-center mx-auto mb-3"
                                    whileHover={{ rotateY: 180 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <stat.icon className="w-6 h-6 text-indigo-300" />
                                </motion.div>
                                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-white/60 text-sm">{stat.label}</div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        className="space-y-8"
                        variants={fadeInUp}
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-4">Send us a message</h3>
                            <p className="text-white/60 text-lg">
                                Tell me about your project and I'll get back to you within 24 hours.
                            </p>
                        </div>

                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                value={formData.name}
                                                onChange={(e) => handleInputChange('name', e.target.value)}
                                                className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition-all ${errors.name ? 'border-red-400' : 'border-white/[0.15]'
                                                    }`}
                                            />
                                            {errors.name && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-red-400 text-sm mt-2"
                                                >
                                                    {errors.name}
                                                </motion.p>
                                            )}
                                        </div>

                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition-all ${errors.email ? 'border-red-400' : 'border-white/[0.15]'
                                                    }`}
                                            />
                                            {errors.email && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-red-400 text-sm mt-2"
                                                >
                                                    {errors.email}
                                                </motion.p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                                        <input
                                            type="text"
                                            placeholder="Company (Optional)"
                                            value={formData.company}
                                            onChange={(e) => handleInputChange('company', e.target.value)}
                                            className="w-full pl-10 pr-4 py-4 bg-white/[0.08] border border-white/[0.15] rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition-all"
                                        />
                                    </div>

                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-white/40" />
                                        <textarea
                                            placeholder="Tell us about your project..."
                                            rows={6}
                                            value={formData.message}
                                            onChange={(e) => handleInputChange('message', e.target.value)}
                                            className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition-all resize-none ${errors.message ? 'border-red-400' : 'border-white/[0.15]'
                                                }`}
                                        />
                                        {errors.message && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-400 text-sm mt-2"
                                            >
                                                {errors.message}
                                            </motion.p>
                                        )}
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full relative group overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-xl transition-all disabled:opacity-50"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                                            initial={{ x: "-100%" }}
                                            whileHover={{ x: "100%" }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <span className="relative flex items-center justify-center gap-2">
                                            {isSubmitting ? (
                                                <motion.div
                                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                />
                                            ) : (
                                                <>
                                                    <Send className="h-5 w-5" />
                                                    Send Message
                                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </span>
                                    </motion.button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-12"
                                >
                                    <motion.div
                                        className="w-20 h-20 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center mx-auto mb-6"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                    >
                                        <CheckCircle className="w-10 h-10 text-green-400" />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                                    <p className="text-white/60 text-lg mb-6">
                                        Thank you for reaching out. We'll get back to you within 24 hours.
                                    </p>
                                    <motion.button
                                        onClick={() => {
                                            setIsSubmitted(false);
                                            setFormData({ name: '', email: '', company: '', message: '' });
                                        }}
                                        className="px-6 py-3 bg-white/[0.08] border border-white/[0.15] rounded-xl text-white hover:bg-white/[0.12] transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Send Another Message
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Contact Methods */}
                    <motion.div
                        className="space-y-8"
                        variants={fadeInUp}
                    >
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-4">Other ways to reach us</h3>
                            <p className="text-white/60 text-lg">
                                Choose the method that works best for you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={index}
                                    href={method.link}
                                    className="block p-6 bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/[0.15] hover:bg-white/[0.08] transition-all group"
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                >
                                    <div className="flex items-center gap-4">
                                        <motion.div
                                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} border border-white/20 flex items-center justify-center`}
                                            whileHover={{ scale: 1.1, rotateY: 180 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <method.icon className="w-7 h-7 text-white" />
                                        </motion.div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-semibold text-white mb-1">{method.title}</h4>
                                            <p className="text-white/60 text-sm mb-2">{method.description}</p>
                                            <p className="text-white font-medium">{method.value}</p>
                                        </div>
                                        <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Additional Info */}

                    </motion.div>
                </div>

                {/* Floating Elements */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full"
                        style={{
                            left: `${10 + (i * 12)}%`,
                            top: `${20 + (i * 10)}%`,
                        }}
                        animate={{
                            y: [0, -40, 0],
                            opacity: [0.2, 0.8, 0.2],
                            scale: [1, 2, 1],
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 0.6,
                        }}
                    />
                ))}
            </motion.div>
        </section>
    );
}
