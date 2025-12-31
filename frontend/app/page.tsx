'use client';

import { Button } from '../components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="bg-gradient-to-br from-pink-100 to-pink-200 p-6 rounded-2xl shadow-lg flex flex-col justify-between">
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 relative">
                <Image
                  src="https://images.pexels.com/photos/5722883/pexels-photo-5722883.jpeg?auto=compress&cs=tinysrgb&w=200"
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

          <Card className="bg-white p-6 rounded-2xl shadow-lg flex flex-col">
            <div className="flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-3 mt-4">
                  {/* <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-red-400 rounded-full"></div>
                  <h1 className="text-3xl font-bold">
                    <span className="text-red-600">Rheuma</span>
                    <span className="text-blue-500">Score</span>
                  </h1> */}
                  <Image
                  src="/rheumascore-logo-actual.png"
                  alt="RheumaScore"
                  width={250}
                  height={70}
                  priority
                  className=""
                />
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Knowledge Platform for rheuma patients
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <p className="text-blue-500 font-bold text-xl">Jenphar</p>
                    <p className="text-blue-400 text-sm italic">Bangladesh</p>
                  </div>
                  <div className="h-12 w-px bg-gray-300"></div>
                  <div className="text-center">
                    <p className="text-blue-600 font-bold text-xl" style={{direction: 'rtl'}}>جنفار</p>
                    <p className="text-blue-400 text-sm" style={{direction: 'rtl'}}>بنغلاديش</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 rounded-2xl shadow-lg text-white flex flex-col justify-between">
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 relative">
                <Image
                  src="https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=200"
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

          <Card className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex gap-4 mb-4">
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image
                  src="https://images.pexels.com/photos/5722883/pexels-photo-5722883.jpeg?auto=compress&cs=tinysrgb&w=150"
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
              </div>
            </div>
            <Link href="/calculators/das28-esr">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                Calculate Now
              </Button>
            </Link>

          </Card>

          <Card className="bg-gradient-to-br from-yellow-400 to-orange-400 p-6 rounded-2xl shadow-lg flex flex-col">
            <div className="mb-4">
              <Image
                src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Arthritis hands"
                width={200}
                height={120}
                className="w-full h-32 object-cover rounded-lg mb-4 w-full"
              />
            </div>
            <h3 className="text-center text-lg font-bold text-gray-800 mb-2">
              Simple Disease Activity Index (SDAI)
            </h3>
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 relative">
                <Image
                  src="https://images.pexels.com/photos/5726788/pexels-photo-5726788.jpeg?auto=compress&cs=tinysrgb&w=100"
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

          <Card className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between">
            <h3 className="text-center text-lg font-bold text-gray-800 mb-4">
              Ankylosing Spondylitis Disease Activity Score (ASDAS-ESR)
            </h3>
            <Link href="/calculators/asdas-esr">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                Calculate Now
                </Button>
            </Link>
          </Card>

          <Card className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 rounded-2xl shadow-lg text-white flex flex-col justify-between">
            <h3 className="text-center text-lg font-bold mb-4">
              Ankylosing Spondylitis Disease Activity (ASDAS-CRP)
            </h3>
            <Link href="/calculators/asdas-crp">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 w-full">
                Calculate Now
              </Button>
            </Link>

          </Card>

          <Card className="bg-gradient-to-br from-gray-100 to-gray-200 p-6 rounded-2xl shadow-lg flex flex-col">
            <div className="flex justify-center mb-4">
              <div className="w-32 h-32 relative">
                <Image
                  src="https://images.pexels.com/photos/5722882/pexels-photo-5722882.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Medical professional"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-center text-lg font-bold text-gray-800 mb-2">
              Clinical Disease Activity Index (CDAI)
            </h3>
            <div className="flex justify-center mb-4">
              <Image
                src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=200"
                alt="Arthritis"
                width={200}
                height={100}
                className="w-full h-24 object-cover rounded-lg"
              />
            </div>
             <Link href="/calculators/cdai">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                Calculate Now
              </Button>
              </Link>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-12">
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

        <footer className="border-t border-gray-200 pt-8 mt-16">
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
