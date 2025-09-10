import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BookOpen } from 'lucide-react';

export default function Testimonials() {

    return (
        <section className="">
            <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
                <div className="mx-auto mb-10 max-w-2xl text-center">
                    <h2 className="text-3xl font-semibold md:text-4xl">Trusted by students</h2>
                    <p className="text-muted-foreground mt-3">
                        From last-minute assignments to research publications, academic-aid has helped
                        400+ students submit confidently. Hear from some of them below.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
                    <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
                        <CardHeader>
                            <BookOpen />
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-2xl ">Paper ko mera professor ne accept kar liya — IEEE formatting exactly jaise bola tha. Time par mila aur clarity top-class. Highly recommended.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src="https://wwwui-avatars.com/api/?name=Aman+V&background=0D8ABC&color=fff"
                                            alt="Shekinah Tshiokufila"
                                            height="300"
                                            width="300"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>AV</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <cite className="text-sm font-medium">Aman Verma</cite>
                                        <span className="text-muted-foreground block text-sm">Research Papers</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-2">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-xl">Published my chapter with their help. Submission process was confusing but team handled references and submission mail.</p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src=""
                                            alt="Priya Singh"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>PS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Priya Singh</cite>
                                        <span className="text-muted-foreground block text-sm">Research Publication</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Last din me project bana ke de diya!!</p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src=""
                                            alt="Arvind"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>A</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Arvind</cite>
                                        <span className="text-muted-foreground block text-sm">Mini Project</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                    <Card className="card variant-mixed">
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p>Report format was good, graphs and algorithms were included. Fast Service as well.</p>

                                <div className="grid grid-cols-[auto_1fr] gap-3">
                                    <Avatar className="size-12">
                                        <AvatarImage
                                            src=""
                                            alt="Nisha Patel"
                                            height="400"
                                            width="400"
                                            loading="lazy"
                                        />
                                        <AvatarFallback>NP</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-medium">Nisha Patel</cite>
                                        <span className="text-muted-foreground block text-sm">Project Report</span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}