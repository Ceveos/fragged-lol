import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="text-center py-5">
      <div className="inline-block p-4 bg-white rounded-lg shadow-md border border-gray-200">
        <Image
          src="/meme.png" // Replace with the path to your meme image
          alt="CS2 Meme"
          width={500} // Adjust size as needed
          height={500}
          className="rounded-md"
        />
      </div>
      
      <p className="mt-6 text-lg text-gray-700 font-semibold max-w-md mx-auto">
      🎮🔥 Behold, the CS2 prodigy has arrived! My AK-47 sprays are like poetry in motion, a symphony of bullets that never miss their mark. Every headshot, a masterpiece; every spray, a work of art. 🎨💀

You thought you could sneak up on me? Think again. I&apos;ve got map awareness that puts GPS systems to shame. My no-scope AWP shots? They&apos;re legendary, leaving enemies wondering if I have a sixth sense. 🎯😈

I&apos;m not just playing the game; I&apos;m rewriting the rules. Each round is not a battle, it&apos;s a performance, and I&apos;m the star of the show. Flashbangs? More like flash-dance, as I pirouette through the chaos, untouched. 💣💃

So next time you step into my server, remember: you&apos;re not just facing a player, you&apos;re facing a legend. My skills are not just skills; they&apos;re a statement. You&apos;ve been #FRAGGEDBYTHEBEST, and it&apos;s an honor you&apos;ll never forget. ggez. 🏆🚫
      </p>
    </div>
  </div>
  );
}
