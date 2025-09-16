"use client";

import { Dialog, Transition } from "@headlessui/react";
import {
  Fragment,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const VISIT_STORAGE_KEY = "convoice-inactive-notice";

type InactiveProjectContextValue = {
  openResourcesModal: () => void;
  openLaunchDemoModal: () => void;
};

const InactiveProjectContext = createContext<InactiveProjectContextValue | undefined>(
  undefined,
);

export function useInactiveProject() {
  const context = useContext(InactiveProjectContext);

  if (!context) {
    throw new Error(
      "useInactiveProject must be used within an InactiveProjectProvider",
    );
  }

  return context;
}

const placeholderLinks = [
  { name: "Placeholder Site One", url: "https://www.placeholder-one.example" },
  { name: "Placeholder Site Two", url: "https://www.placeholder-two.example" },
  { name: "Placeholder Site Three", url: "https://www.placeholder-three.example" },
  { name: "Placeholder Site Four", url: "https://www.placeholder-four.example" },
];

type InactiveProjectProviderProps = {
  children: ReactNode;
};

export function InactiveProjectProvider({
  children,
}: InactiveProjectProviderProps) {
  const [showFirstVisitModal, setShowFirstVisitModal] = useState(false);
  const [activeArchiveModal, setActiveArchiveModal] = useState<
    "resources" | "launch-demo" | null
  >(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const hasSeenNotice = window.localStorage.getItem(VISIT_STORAGE_KEY);

    if (!hasSeenNotice) {
      setShowFirstVisitModal(true);
      window.localStorage.setItem(VISIT_STORAGE_KEY, "true");
    }
  }, []);

  const openResourcesModal = useCallback(() => {
    setActiveArchiveModal("resources");
  }, []);

  const openLaunchDemoModal = useCallback(() => {
    setActiveArchiveModal("launch-demo");
  }, []);

  const contextValue = useMemo(
    () => ({
      openResourcesModal,
      openLaunchDemoModal,
    }),
    [openResourcesModal, openLaunchDemoModal],
  );

  return (
    <InactiveProjectContext.Provider value={contextValue}>
      {children}

      <Transition appear show={showFirstVisitModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setShowFirstVisitModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-900/30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-lg font-semibold text-slate-900">
                    Convoice is archived
                  </Dialog.Title>
                  <Dialog.Description className="mt-2 text-sm text-slate-600">
                    This site is preserved for documentation and showcasing purposes. The
                    product is no longer active, and interactive features may be limited.
                  </Dialog.Description>
                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      className="rounded-md bg-main-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-main-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-500"
                      onClick={() => setShowFirstVisitModal(false)}
                    >
                      Got it
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={activeArchiveModal !== null} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={() => setActiveArchiveModal(null)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-900/30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-lg font-semibold text-slate-900">
                    {activeArchiveModal === "launch-demo"
                      ? "Live demo unavailable"
                      : "Demo booking unavailable"}
                  </Dialog.Title>
                  <Dialog.Description className="mt-2 text-sm text-slate-600">
                    {activeArchiveModal === "launch-demo"
                      ? "Convoice is archived and the live demo experience has been retired. You&apos;re welcome to explore some of our other websites:"
                      : "We&apos;re not actively working on Convoice at the moment. In the meantime, you&apos;re welcome to explore some of our other websites:"}
                  </Dialog.Description>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {placeholderLinks.map((link) => (
                      <li key={link.url}>
                        <span className="font-medium">{link.name}</span>
                        <span className="mx-1">→</span>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-main-500 underline-offset-2 hover:underline"
                        >
                          {link.url}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex justify-end gap-3">
                    <button
                      type="button"
                      className="rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-500"
                      onClick={() => setActiveArchiveModal(null)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </InactiveProjectContext.Provider>
  );
}
