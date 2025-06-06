import CodeModal from 'src/components/ui-components/CodeModal'


const PopoverBgDropcode = () => {
  return (
    <div>
      <CodeModal>
        {`
    
    import {
    Popover,
    PopoverButton,
    PopoverPanel,
    PopoverBackdrop,
    } from "@headlessui/react";    
     
    <div className="flex gap-8 bg-lightgray dark:bg-dark py-2 px-4 rounded-sm w-full flex justify-center">
          <Popover className="relative ">
            <PopoverButton className="block text-sm font-semibold text-ld focus:outline-none data-[active]:text-primary data-[hover]:text-primary data-[focus]:outline-1 data-[focus]:outline-white">
              Open Popover
            </PopoverButton>
            <PopoverBackdrop className="fixed inset-0 bg-black/15 z-50" />
            <PopoverPanel
              transition
              anchor="bottom"
              className="w-52 z-[60] py-4 rounded-sm bg-white dark:bg-dark text-sm shadow-md dark:shadow-dark-md transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
            >
              <div className="flex flex-col gap-1">
                <a href="/analytics" className="ui-dropdown-item">
                  Analytics
                </a>
                <a href="/engagement" className="ui-dropdown-item">
                  Engagement
                </a>
                <a href="/security" className="ui-dropdown-item">
                  Security
                </a>
                <a href="/integrations" className="ui-dropdown-item">
                  Integrations
                </a>
              </div>
            </PopoverPanel>
          </Popover>
    </div>
        `}
      </CodeModal>
    </div>
  )
}

export default PopoverBgDropcode
