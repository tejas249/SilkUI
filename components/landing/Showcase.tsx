import React from 'react'
import AIInput_05_Glassmorphism from '../silkui/ai-input/ai-input-05'
import Card06 from '../silkui/card/card-06'
import Alert04 from '../silkui/alert copy/alert-04'
import Pricing_01 from '../silkui/pricing/pricing-01'
import { SocialLogin } from '../silkui/blocks/auth-basic/social-login'
import Btn02 from '../silkui/button/btn-02'
import Btn09 from '../silkui/button/btn-09'
import BentoGrid from '../silkui/bento-grid'

const Showcase: React.FC = () => {
  return (
    <section className="container mx-auto my-20 px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Showcase</h2>

      <div className="flex gap-10 flex-wrap justify-center items-start">
        <AIInput_05_Glassmorphism />
        <Card06 />
        <Alert04 />
      </div>

      <div className="mt-14 flex flex-col md:flex-row gap-8 items-center justify-center">
     
        <BentoGrid items={[]}/>
      </div>
    </section>
  )
}

export default Showcase