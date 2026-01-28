<section className="mb-10 pt-8">
    <h2 className="text-4xl font-bold text-center mb-10">
        <span className="text-red-600">Patient's knowledge</span>{' '}
        <span className="text-blue-500">Platform</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

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
                <Button className="bg-[#3C91C9] hover:bg-[#4FA3D1] text-white">
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
                <Button className="bg-[#3C91C9] hover:bg-[#4FA3D1] text-white">
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
                <h3 className="text-xl font-bold text-gray-800">Diet Recommendations for RA patients</h3>
                <Button className="bg-[#3C91C9] hover:bg-[#4FA3D1] text-white">
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
                <Button className="bg-[#3C91C9] hover:bg-[#4FA3D1] text-white">
                    Learn more...
                </Button>
            </div>
        </Card>
    </div>
</section>