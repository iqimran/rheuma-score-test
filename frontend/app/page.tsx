'use client';

import { Button } from '../components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from "next/link";
// import { Poppins, Cairo } from "next/font/google";
import { poppins,cairo } from "@/lib/fonts";

// export const cairo = Cairo({
//   subsets: ["arabic"],
//   weight: ["500", "600", "800"],
//   variable: "--font-cairo",
// });

export default function Home() {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="mx-auto px-2 py-4 max-w-screen-xl">

        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-3 row-span-2">
            <Card className="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
              <div className="flex justify-center mb-2">
                <div className="w-32 h-32 relative">
                  <Image
                    src="/images/dash28-crp.png"
                    alt="Medical consultation"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-center text-lg font-bold text-gray-800">
                Disease Activity Score-28 (DAS28-CRP)
              </h3>
              <Link href="/calculators/das28-crp">
                <Button
                  className="bg-red-600 hover:bg-red-700 text-white mt-4 w-full">
                  Calculate Now
                </Button>
              </Link>

            </Card>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Card className="bg-white p-6 rounded-2xl shadow-lg flex flex-col">
              <div className="flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Image
                    src="/rheumascore-logo-actual.png"
                    alt="RheumaScore"
                    width={270}
                    height={70}
                    priority
                    className=""
                  />
                  </div>
                  <p className={`${cairo.className} mb-3 mt-9 
                    mx-auto
                    max-w-[420px]
                    text-center
                    text-md
                    leading-[1.45]
                    tracking-[0.01em]
                    `}>
                    {/* Knowledge Platform for rheuma patients */}
                    Track Disease Activity with Confidence
                  </p>
                  <table className="table-fixed">
                  
                      <tbody>
                        <tr>
                            <td className="" colSpan={2}>
                          <div className="relative w-[458px] sm:w-[658px] md:w-[458px] lg:w-[658px] aspect-[658/123]">
                                  {/* <p className="text-[#1F4E79] text-left font-extrabold text-3xl tracking-wide">
                                    Jenphar
                                  </p>
                                  <p className="text-[#4FA3D1] text-left text-lg italic font-medium">
                                    Bangladesh
                                  </p> */}
                                  <Image
                                    src="/jenphar-logo.png"
                                    alt="Doctor consultation"
                                    fill
                                    priority
                                    className="object-contain"
                                  />
                                </div>
                              </td>
                          </tr>
                      </tbody>
                      
                  </table>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-3 row-span-2">
            <Card className="bg-[#724FCF] p-6 rounded-2xl shadow-lg text-white flex flex-col justify-between">
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 relative">
                  <Image
                    src="/images/dash28.png"
                    alt="Medical presentation"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-center text-lg font-bold mb-3">DAS 28</h3>
              <Link href="/calculators/das28">
                <Button className="bg-white text-black hover:bg-gray-100 mt-6 w-full">
                  Calculate Now
                </Button>
              </Link>

            </Card>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 md:col-span-3">
            <div className="w-full h-full relative">
              <Image
                src="/images/2nd-left.png"
                alt="Medical consultation"
                fill
                //className="object-contain"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Card className="bg-white p-6 rounded-2xl shadow-lg flex flex-col">
              <div className="flex gap-4 mb-4">
                <div className="w-48 h-40 relative flex-shrink-0">
                  <Image
                    src="/images/dash28-esr.png"
                    alt="Doctor consultation"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    Disease Activity Score-28 (DAS28-ESR)
                  </h3>
                  <p className="text-gray-600 mb-8">
                    The DAS28-ESP assesses rheumatoid arthritis activity using joint evaluations, CRP levels, and patient-reported to gauge inflammation and disease status.
                  </p>
                 <Link href="/calculators/das28-esr">
                  <Button className="bg-[#3C91C9] hover:bg-[#4FA3D1] text-white w-full">
                    Calculate Now
                  </Button>
                </Link>
                </div>

              </div>


            </Card>
          </div>
          <div className="col-span-12 md:col-span-3"> 
            <Card className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-2xl shadow-lg flex flex-col">
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 relative">
                  <Image
                    src="/images/cdai.png"
                    alt="Medical professional"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-center text-lg font-bold text-gray-800 mb-3">
                Clinical Disease Activity Index (CDAI)
              </h3>
              <Link href="/calculators/cdai">
                <Button className="bg-[#3C91C9] hover:bg-[#4FA3D1] text-white w-full">
                  Calculate Now
                </Button>
                </Link>
            </Card>
          </div>

        </div>
        
        <div className="grid grid-cols-12 gap-3 py-4">
          <div className="col-span-12 md:col-span-3">
            <Card className="bg-gradient-to-br from-yellow-400 to-orange-400 p-6 rounded-2xl shadow-lg flex flex-col">
              <h3 className="text-center text-lg font-bold text-gray-800 mb-2">
                Simple Disease Activity Index (SDAI)
              </h3>
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 relative">
                  <Image
                    src="/images/sdai.png"
                    alt="Medical chart"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <Link href="/calculators/sdai">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 w-full">
                Calculate Now
              </Button>
              </Link>

            </Card>
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between">
              <h3 className="text-center text-lg font-bold text-gray-800 mb-11 lg:mt-8 md:mt-8 sm:mt-12">
                Ankylosing Spondylitis Disease Activity Score (ASDAS-ESR)
              </h3>
              <Link href="/calculators/asdas-esr">
                <Button className="bg-[#3C91C9] hover:bg-[#4FA3D1] text-white w-full">
                  Calculate Now
                  </Button>
              </Link>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-3">
            <Card className="bg-[#3C91C9] p-6 rounded-2xl shadow-lg text-white flex flex-col justify-between">
              <h3 className="text-center text-lg font-bold mb-6 lg:mt-5 md:pt-8 sm:pt-10">
                Ankylosing Spondylitis Disease Activity <br/> (ASDAS-CRP)
              </h3>
              <Link href="/calculators/asdas-crp">
                <Button className="bg-white text-black hover:bg-gray-100 w-full">
                  Calculate Now
                </Button>
              </Link>

            </Card>
          </div>
          <div className="col-span-12 md:col-span-3">
            <div className="w-full h-full relative">
              <Image
                src="/images/4th-right.png"
                alt="Medical consultation"
                fill
                //className="object-contain"
              />
            </div>
          </div>
        </div>

        <section className="mb-10 pt-8">
          <h2 className="text-4xl font-bold text-center mb-10">
            <span className="text-red-600">Patient's knowledge</span>{' '}
            <span className="text-blue-500">Platform</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"> 
               <div className="relative"> 
                <Image
                  width={615}
                  height={400}
                  src="/images/RA-Poster-1.jpg" alt="Healthy lifestyle" className="object-cover" /> 
               </div>
              {/* <div className="p-6 flex justify-between items-center"> <h3 className="text-xl font-bold text-gray-800">Lifestyle Recommendation</h3> <Button className="bg-[#3C91C9] hover:bg-[#4FA3D1] text-white"> Learn more... </Button> </div> */}
            </Card>
            <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"> 
              <div className="relative"> 
                <Image
                  width={615}
                  height={400}
                  src="/images/RA-Poster-2.jpg" alt="Education materials" className="object-cover" /> 
              </div>
              {/* <div className="p-6 flex justify-between items-center"> <h3 className="text-xl font-bold text-gray-800">Disease Educational Materials</h3> <Button className="bg-[#3C91C9] hover:bg-[#4FA3D1] text-white"> Learn more... </Button> </div> */}
            </Card>
            {/* <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"> <div className="relative h-64"> <Image src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Healthy recipe" fill className="object-cover" /> </div> <div className="p-6 flex justify-between items-center"> <h3 className="text-xl font-bold text-gray-800">Diet Recommendations for RA patients</h3> <Button className="bg-[#3C91C9] hover:bg-[#4FA3D1] text-white"> Learn more... </Button> </div> </Card> */}
            {/* <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"> <div className="relative h-64"> <Image src="https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Reference" fill className="object-cover" /> </div> <div className="p-6 flex justify-between items-center"> <h3 className="text-xl font-bold text-gray-800">Reference</h3> <Button className="bg-[#3C91C9] hover:bg-[#4FA3D1] text-white"> Learn more... </Button> </div> </Card> */}
          </div>
        </section>

        <footer className="border-t border-gray-200 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
           
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
              <Image
                  src="/rheumascore-logo-actual.png"
                  alt="RheumaScore"
                  width={250}
                  height={70}
                  priority
                  className=""
                />
            </div>

            {/* Right: Powered by + Copyright */}
            <div className="text-center md:text-right">
              {/* Powered by */}
              <div className="flex items-center justify-center md:justify-end gap-1 text-xs text-gray-600 mb-1">
                <span>Powered by</span>
                <Image
                  src="/dacivo-logo.png"   // change to your image path
                  alt="Powered by"
                  width={60}
                  height={20}
                  className="object-contain"
                />
              </div>

              {/* Copyright */}
              <p className="text-sm text-gray-600">
                Copyright © 2025 Jenphar Bangladesh Limited, All rights reserved
              </p>
            </div>

          </div>
        </footer>
      </div>
    </div>
  );
}
