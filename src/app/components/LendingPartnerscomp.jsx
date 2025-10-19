"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Star, Award } from 'lucide-react';

export default function LendingPartnerscomp() {
    const preferredPartners = [
        {
            id: 1,
            name: "KFCPL",
            logo: "/partners1.png", // Replace with actual logo path
            grievance: "Grievance Redressal Mechanism",
            contact: {
                phone: "+91 98340 0280",
                email: "grievance@kfcpl.co.in"
            },
            address: "Gautam Vihar #46, 2nd Floor, Phase-III, DLF, NH-8 Gurgaon, New Ashokapuram Chhatisgarh, Raipur District, PIN- 492001",
            featured: true
        },
        {
            id: 2,
            name: "SCIL CAPITAL",
            logo: "/partners2.png", // Replace with actual logo path
            grievance: "Grievance Redressal Mechanism",
            contact: {
                phone: "+91 (0) 124 4517200",
                email: "teamrm@scilfinance.com"
            },
            address: "3rd, 1400 Cabin Park, 1222 Mathura Fort-II, New Delhi- 422011",
            featured: true
        }
    ];

    const otherPartners = [
        {
            id: 3,
            name: "ADITYA BIRLA CAPITAL",
            logo: "/partners3.png",
            grievance: "Grievance Redressal Mechanism",
            contact: {
                phone: "+91 0999 2898",
                email: "grievance.financemfe@adityabirlacapital.com"
            },
            address: "1064 Floor, Tower-I, 1 Grate Noida/Delhi Centre, Gurgaon 18E Gurgaon Rd, Okhla Indust, Royal Marg, Highway on Road, New Delhi- 400015"
        },
        {
            id: 4,
            name: "APHELION",
            logo: "/partners4.png",
            grievance: "Grievance Redressal Mechanism",
            contact: {
                phone: "+91 1800 11 50011",
                email: "contactus@aphelionfinance.com",
                email2: "madhu@aphelionfinance.com"
            },
            address: "2nd Floor, 8 Wing, Khasganj mun Bld Marg, Dr. RV Kotulaka Road, Mulund West, Mumbai- 400080"
        },
        {
            id: 5,
            name: "CAPSAVE",
            logo: "/partners5.png",
            grievance: "Grievance Redressal Mechanism",
            contact: {
                phone: "+91 0999 2899",
                email: "grievance@capsave.com"
            },
            address: "D-903, B-204, Tower 6, Lotus Boulevard Lux, Wishers, 5/9 near Highway, Gurgaon-8 145, Gurgaon - 400025"
        },
        {
            id: 6,
            name: "DCB BANK",
            logo: "/partners6.png",
            grievance: "Grievance Redressal Mechanism",
            contact: {
                phone: "+91 212 6618 1000",
                email: "retail.info@dcbbank.com"
            },
            address: "601 & 602, 6th floor 1 Business Park, Himachal, Jansardal Road, Marg, Uttara Park, New Karol Bagh"
        },
        {
            id: 7,
            name: "DBS BANK",
            logo: "/partners7.png",
            grievance: "Grievance Redressal Mechanism",
            contact: {
                name: "Anita Dixit",
                phone: "+91 22 6614 7578",
                email: "businesscarein@dbs.com"
            },
            address: "DBS Bank India Limited, The Ruby Towers, 6th Floor, Senapati Bapat Marg, Dadar, Mumbai - 400028"
        },
        {
            id: 8,
            name: "IIFL FINANCE",
            logo: "/partners8.png",
            grievance: "Grievance Redressal Mechanism",
            contact: {
                name: "Mr. Amlan Singh",
                phone: "+91 22 41035099",
                email: "grv@iifl.com"
            },
            address: "Sun Infotech Park, Road No. 16V, Plot No. B-23, Thane Industrial Area, Wagle Estate, Thane - 400604"
        }

    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    };

    const PartnerCard = ({ partner, featured = false }) => (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative"
        >
            {/* Card Background with Gradient Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>

            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-emerald-500/5 to-teal-500/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 sm:p-8 h-full flex flex-col hover:border-emerald-400/40 transition-all duration-500">
                {/* Featured Badge */}
                {featured && (
                    <motion.div
                        className="absolute -top-3 -right-3 bg-gradient-to-r from-emerald-400 to-teal-600 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                        <Star className="w-3 h-3 fill-white" />
                        Preferred Partner
                    </motion.div>
                )}

                {/* Logo Section */}
                <motion.div
                    className="flex items-center justify-center mb-6 h-20 sm:h-24"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="w-full max-w-[200px] h-full flex items-center justify-center bg-white rounded-xl p-4 shadow-md group-hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                        {partner.logo ? (
                            <img
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                className="max-w-full max-h-full object-contain"
                            />
                        ) : (
                            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                                {partner.name}
                            </span>
                        )}
                    </div>
                </motion.div>

                {/* Grievance */}
                <div className="flex items-center gap-2 mb-4">
                    <motion.div
                        className="bg-emerald-500/20 p-2 rounded-lg"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Award className="w-4 h-4 text-emerald-400" />
                    </motion.div>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-300">{partner.grievance}</p>
                </div>

                {/* Contact Details */}
                <div className="space-y-3 mb-4 flex-grow">
                    <motion.div
                        className="flex items-start gap-3 text-emerald-200/75"
                        whileHover={{ x: 4, color: "rgb(204, 251, 241)" }}
                        transition={{ duration: 0.2 }}
                    >
                        <Phone className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                        <p className="text-xs sm:text-sm">{partner.contact.phone}</p>
                    </motion.div>

                    <motion.div
                        className="flex items-start gap-3 text-emerald-200/75"
                        whileHover={{ x: 4, color: "rgb(204, 251, 241)" }}
                        transition={{ duration: 0.2 }}
                    >
                        <Mail className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                        <div className="text-xs sm:text-sm">
                            <p>{partner.contact.email}</p>
                            {partner.contact.email2 && <p className="mt-1">{partner.contact.email2}</p>}
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex items-start gap-3 text-emerald-200/75"
                        whileHover={{ x: 4, color: "rgb(204, 251, 241)" }}
                        transition={{ duration: 0.2 }}
                    >
                        <MapPin className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                        <p className="text-xs sm:text-sm leading-relaxed">{partner.address}</p>
                    </motion.div>
                </div>

                {/* Decorative Bottom Border */}
                <motion.div
                    className="h-1 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full mt-4"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                />
            </div>
        </motion.div>
    );

    return (
        <section className="min-h-screen bg-gradient-to-br from-teal-950 via-slate-900 to-black text-white py-16 sm:py-20 md:py-24 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/12 rounded-full blur-3xl"
                    animate={{ y: [0, -8, 0], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
                    animate={{ rotate: 360, opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-400/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Main Heading */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            Our Lending Partners
                        </span>
                    </motion.h1>
                    <motion.p
                        className="text-emerald-200/75 text-base sm:text-lg max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Trusted financial institutions empowering your growth
                    </motion.p>
                </motion.div>

                {/* Preferred Partners Section */}
                <motion.div
                    className="mb-16 sm:mb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-8 sm:mb-12"
                        variants={cardVariants}
                    >
                        <motion.div
                            className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-transparent to-emerald-400"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        />
                        <h2 className="text-2xl sm:text-3xl font-bold text-emerald-300">Preferred Partners</h2>
                        <motion.div
                            className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-emerald-400 to-transparent"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        {preferredPartners.map((partner) => (
                            <PartnerCard key={partner.id} partner={partner} featured={true} />
                        ))}
                    </div>
                </motion.div>

                {/* Other Partners Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-8 sm:mb-12"
                        variants={cardVariants}
                    >
                        <motion.div
                            className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-transparent to-teal-400"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        />
                        <h2 className="text-2xl sm:text-3xl font-bold text-teal-300">Other Lending Partners</h2>
                        <motion.div
                            className="h-0.5 w-12 sm:w-16 bg-gradient-to-r from-teal-400 to-transparent"
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {otherPartners.map((partner) => (
                            <PartnerCard key={partner.id} partner={partner} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}