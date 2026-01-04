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
      <div className="container mx-auto px-2 py-3 max-w-5xl">

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-3 row-span-2">
            <Card className="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 relative">
                  <Image
                    src="/images/dash28-crp.png"
                    alt="Medical consultation"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-center text-lg font-bold text-gray-800 mb-2">
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
                  <div className="flex items-center justify-center gap-2 mb-3 mt-6">
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
                    Knowledge Platform for rheuma patients
                  </p>
                  <table className="table-fixed">
                  
                      <tbody>
                        <tr>
                            <td className="w-[54%]">
                                <div className="">
                                  <p className="text-[#1F4E79] text-left font-extrabold text-3xl tracking-wide">
                                    Jenphar
                                  </p>
                                  <p className="text-[#4FA3D1] text-left text-lg italic font-medium">
                                    Bangladesh
                                  </p>
                                </div>
                              </td>
                              <td className="w-[1px] align-middle">
                                <div className="h-14 w-[2px] bg-[#9CA3AF] opacity-80" />
                              </td>
                              <td className="w-1/2"> 
                                <div className="text-right leading-tight" dir="rtl">
                                  <p className={`${cairo.className} text-[#1F4E79] font-extrabold text-3xl`}>
                                    جنفار
                                  </p>
                                  <p className={`${cairo.className} text-[#4FA3D1] text-lg text-right font-medium`}>
                                    بنغلاديش
                                  </p>
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
            <Card className="bg-gradient-to-br from-purple-700 to-purple-800 p-6 rounded-2xl shadow-lg text-white flex flex-col justify-between">
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
              <h3 className="text-center text-lg font-bold mb-2">DAS 28</h3>
              <Link href="/calculators/das28">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 mt-4 w-full">
                  Calculate Now
                </Button>
              </Link>

            </Card>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-3 md:-translate-y-[35px]">
            <div className="w-full h-full relative">
              <Image
                src="/images/2nd-left.png"
                alt="Medical consultation"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:-translate-y-[65px] md:-translate-y-[75px]">
            <Card className="bg-white p-6 rounded-2xl shadow-lg flex flex-col">
              <div className="flex gap-4 mb-4">
                <div className="w-32 h-34 relative flex-shrink-0">
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
                  <p className="text-xs text-gray-600">
                    The DAS28-ESP assesses rheumatoid arthritis activity using joint evaluations, CRP levels, and patient-reported to gauge inflammation and disease status.
                  </p>
                 <Link href="/calculators/das28-esr">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                    Calculate Now
                  </Button>
                </Link>
                </div>

              </div>


            </Card>
          </div>
          <div className="col-span-12 md:col-span-3 row-span-2 md:-translate-y-[45px]"> 
            <Card className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-2xl shadow-lg flex flex-col">
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 relative">
                  <Image
                    src="/images/cdai.png"
                    alt="Medical professional"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <h3 className="text-center text-lg font-bold text-gray-800 mb-2">
                Clinical Disease Activity Index (CDAI)
              </h3>
              {/* <div className="flex justify-center mb-4">
                <Image
                  src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Arthritis"
                  width={200}
                  height={100}
                  className="w-full h-24 object-cover rounded-lg"
                />
              </div> */}
              <Link href="/calculators/cdai">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                  Calculate Now
                </Button>
                </Link>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-3 md:-translate-y-[115px]">
            <Card className="bg-gradient-to-br from-yellow-400 to-orange-400 p-6 rounded-2xl shadow-lg flex flex-col">
              {/* <div className="mb-4">
                <Image
                  src="/images/sdai.png"
                  alt="Arthritis hands"
                  width={200}
                  height={120}
                  className="w-full h-32 object-cover rounded-lg mb-4 w-full"
                />
              </div> */}
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
          <div className="col-span-12 md:col-span-3 md:-translate-y-[115px]">
            <Card className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between">
              <h3 className="text-center text-lg font-bold text-gray-800 mb-4 lg:mt-8 md:mt-8 sm:mt-12">
                Ankylosing Spondylitis Disease Activity Score (ASDAS-ESR)
              </h3>
              <Link href="/calculators/asdas-esr">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                  Calculate Now
                  </Button>
              </Link>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-3 md:-translate-y-[115px]">
            <Card className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 rounded-2xl shadow-lg text-white flex flex-col justify-between">
              <h3 className="text-center text-lg font-bold mb-4 lg:mt-14 md:mt-10 sm:mt-12">
                Ankylosing Spondylitis Disease Activity (ASDAS-CRP)
              </h3>
              <Link href="/calculators/asdas-crp">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                  Calculate Now
                </Button>
              </Link>

            </Card>
          </div>
          <div className="col-span-12 md:col-span-3 md:-translate-y-[75px]">
            <div className="w-full h-full relative">
              <Image
                src="/images/4th-right.png"
                alt="Medical consultation"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <section className="mb-10 md:-translate-y-[70px] sm:pt-6 md:pt-6">
          <h2 className="text-4xl font-bold text-center mb-10">
            <span className="text-red-600">Patient's knowledge</span>{' '}
            <span className="text-blue-500">Platform</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Liver health"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Liver Health Tips</h3>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Learn more...
                </Button>
              </div>
            </Card>

            <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Healthy lifestyle"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Lifestyle Recommendation</h3>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Learn more...
                </Button>
              </div>
            </Card>

            <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/4031867/pexels-photo-4031867.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Education materials"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Disease Educational Materials</h3>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Learn more...
                </Button>
              </div>
            </Card>

            <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Healthy recipe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Liver Friendly Recipe</h3>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Learn more...
                </Button>
              </div>
            </Card>

            <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/6330644/pexels-photo-6330644.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Product information"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Product List & Contact Info</h3>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Learn more...
                </Button>
              </div>
            </Card>

            <Card className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="https://images.pexels.com/photos/1557652/pexels-photo-1557652.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Reference"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Reference</h3>
                <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                  Learn more...
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <footer className="border-t border-gray-200 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-red-400 rounded-full"></div>
              <h2 className="text-2xl font-bold">
                <span className="text-red-600">Rheuma</span>
                <span className="text-blue-500">Score</span>
              </h2> */
              }
              <Image
                  src="/rheumascore-logo-actual.png"
                  alt="RheumaScore"
                  width={250}
                  height={70}
                  priority
                  className=""
                />
            </div>
            <p className="text-sm text-gray-600">
              Copyright © 2025 Jenphar Bangladesh Limited, All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
