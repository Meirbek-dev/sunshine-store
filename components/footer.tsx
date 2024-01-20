"use client";
import Button from "@/components/ui/button";
import { Github } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-white border-t py-6">
			<div className="h-6 md:h-6 flex flex-col md:flex-row items-center justify-center md:justify-between px-4 sm:px-6 lg:px-8 max-w-7xl">
				<div className="absolute left-1/2 -translate-x-1/2">
					<p className="text-center md:text-center text-xs text-black mb-2 md:mb-0 flex items-center flex-grow">
						&copy; 2023 Sunshine, Павлодар.
					</p>
				</div>
				<div className="absolute right-0 px-4 sm:px-6 lg:px-8">
					<Button
						onClick={() =>
							window.open(
								"https://github.com/Meirbek-dev/sunshine-store-admin",
								"_blank",
							)
						}
						className="flex items-center rounded-full bg-black px-3 py-2"
					>
						<Github size={18} color="white" />
						<span className="ml-2 text-sm font-medium text-white">
							Исходный код
						</span>
					</Button>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
