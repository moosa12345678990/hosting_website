'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '/analytics', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '/engagement', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '/security', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '/integrations', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '/automations', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '/demo', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '/contact', icon: PhoneIcon },
]

 function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/">
            <img
              alt="CloudX Hosting"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-white">
              Product
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
            </PopoverButton>

            <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800 shadow-lg">
              <div className="p-4">
                {products.map((item) => (
                  <Link key={item.name} href={item.href} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-white/5">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                      <item.icon aria-hidden="true" className="h-6 w-6 text-gray-400 group-hover:text-white" />
                    </div>
                    <div className="flex-auto">
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/10 bg-gray-700/50">
                {callsToAction.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-white hover:bg-gray-700/50"
                  >
                    <item.icon aria-hidden="true" className="h-5 w-5 text-gray-500" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="/features" className="text-sm font-semibold text-white">
            Features
          </Link>
          <Link href="/marketplace" className="text-sm font-semibold text-white">
            Marketplace
          </Link>
          <Link href="/company" className="text-sm font-semibold text-white">
            Company
          </Link>
        </PopoverGroup>

        {/* Login */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/login" className="text-sm font-semibold text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>

      {/* Mobile menu dialog */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img
                alt="CloudX Hosting"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3 pl-3 text-base font-semibold text-white hover:bg-white/5">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-white hover:bg-white/5"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Link href="/features" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                  Features
                </Link>
                <Link href="/marketplace" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                  Marketplace
                </Link>
                <Link href="/company" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                  Company
                </Link>
              </div>

              <div className="py-6">
                <Link href="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-white/5">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}


export {Header};