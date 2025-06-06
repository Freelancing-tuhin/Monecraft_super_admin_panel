
import CodeModal from '../../CodeModal'

const FullWidthTabsCode = () => {
  return (
    <div>
       <CodeModal>
              {`
    import { Tabs } from "flowbite-react";
    import { Icon } from "@iconify/react";

    <div className="overflow-x-auto mt-2">
       <Tabs aria-label="Full width tabs"  variant="fullWidth">
            <Tabs.Item
              active
              title="Profile"
              icon={() => <Icon icon="solar:shield-user-outline" height={20} />}
            >
              This is
              <span className="font-medium text-gray-800 dark:text-white">
                Profile tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </Tabs.Item>
            <Tabs.Item
              title="Dashboard"
              icon={() => <Icon icon="solar:graph-linear" height={20} />}
            >
              This is
              <span className="font-medium text-gray-800 dark:text-white">
                Dashboard tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </Tabs.Item>
            <Tabs.Item
              title="Settings"
              icon={() => <Icon icon="solar:settings-outline" height={20} />}
            >
              This is
              <span className="font-medium text-gray-800 dark:text-white">
                Settings tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </Tabs.Item>
            <Tabs.Item
              title="Contacts"
              icon={() => (
                <Icon icon="solar:accessibility-linear" height={20} />
              )}
            >
              This is
              <span className="font-medium text-gray-800 dark:text-white">
                Contacts tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </Tabs.Item>
            <Tabs.Item disabled title="Disabled">
              Disabled content
            </Tabs.Item>
          </Tabs>
    </div>
              `}
            </CodeModal>
    </div>
  )
}

export default FullWidthTabsCode
