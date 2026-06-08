import Hero from "../components/Hero";

export default function AMOSSPage() {
    return (
        <>
            <Hero title="AMOSS" />

            <section className="bg-[#faf8f2] py-20">

                <div className="max-w-7xl mx-auto px-8">

                    <div className="grid lg:grid-cols-2 gap-20">

                        {/* LEFT */}

                        <div>

                            <div className="w-[140px] h-[140px] bg-white rounded-xl shadow-sm flex items-center justify-center mb-8">

                                <img
                                    src="https://via.placeholder.com/100"
                                    alt="logo"
                                    className="w-20"
                                />

                            </div>

                            <h1 className="font-serif text-[58px] leading-tight mb-8">

                                AMOSS: A Spiritual Movement for Worship and Service Harmony

                            </h1>

                            <p className="text-lg leading-10 mb-8">

                                AMOSS, an acronym for an essential movement committed to ensuring consistency and devotion in worship and sacramental service, preparing dedicated individuals to uphold the Church traditions and rituals with deep meaning and value.

                            </p>

                            <div className="space-y-6">

                                <div className="flex gap-4">

                                    <span className="text-2xl">●</span>

                                    <p>
                                        Providing guidance to altar boys in all parishes of the Malankara Church to ensure uniformity and systematic service in worship.
                                    </p>

                                </div>


                                <div className="flex gap-4">

                                    <span className="text-2xl">●</span>

                                    <p>
                                        Moulding individuals who possess God's grace, unwavering dedication and commitment to spiritual and sacramental life.
                                    </p>

                                </div>


                                <div className="flex gap-4">

                                    <span className="text-2xl">●</span>

                                    <p>
                                        Training acolytes to practice Holy Church traditions and ritual services without alteration while preserving their meaning and significance.
                                    </p>

                                </div>

                            </div>

                            <hr className="my-10" />

                            <h2 className="font-serif text-5xl mb-6">

                                Office Bearers

                            </h2>

                            <div className="space-y-5 text-xl">

                                <p>Vice President:</p>

                                <p>Secretary:</p>

                                <p>Joint Secretary:</p>

                            </div>

                        </div>


                        {/* RIGHT */}

                        <div className="overflow-hidden rounded-[70px_0px_70px_0px]">

                            <img
                                src="https://via.placeholder.com/800x250"
                                className="w-full h-[250px] object-cover"
                                alt=""
                            />

                            <div className="grid grid-cols-2">

                                <img
                                    src="https://via.placeholder.com/400x250"
                                    className="w-full h-[250px] object-cover"
                                    alt=""
                                />

                                <img
                                    src="https://via.placeholder.com/400x250"
                                    className="w-full h-[250px] object-cover"
                                    alt=""
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}