import { AvatarCard } from '@/components/Home/avatar-card';
import { SectionPage } from '@/components/section';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { educations } from '@/data/educations';

const educationsOrder = educations
	.sort((educA, educB) => educA.id - educB.id)
	.reverse();

export default function AboutPage() {
	return (
		<SectionPage>
			<div className='flex flex-col sm:flex-row gap-6'>
				<div className='w-full sm:w-4/12'>
					<AvatarCard
						isAvatar
						isWelcome={false}
						isAbout={false}
						isPassion
					/>
				</div>
				<div className='w-full sm:w-8/12'>
					<Card className='w-full'>
						<CardContent>
							<div className=' flex'>
								<p className='text-2xl font-semibold'>
									Olá, eu sou{' '}
									<span className='text-primary font-bold'> Patrick</span>
								</p>
							</div>

							<div className='space-y-4 text-left text-xs '>
								<p>
									Sou um profissional em transição de carreira com 7 anos de
									experiência em auditoria e consultoria tributária municipal,
									atualmente focado no desenvolvimento frontend com React e em
									constante aperfeiçoamento no ecossistema Javascript para me
									tornar um desenvolvedor Fullstack. Minha formação em Ciências
									Contábeis me proporcionou uma forte capacidade analítica e
									atenção aos detalhes, que aplico durante os estudos e na
									criação projetos pessoais, com interfaces e soluções
									escaláveis e com boa performance.
								</p>

								<p>
									Após anos de experiência contribuindo com municípios para
									otimizarem processos fiscais, garantindo economia e
									alavancagem da arrecadação, decidi expandir minha carreira
									para a área de tecnologia, buscando agregar valor com
									habilidades técnicas e pessoais.
								</p>
								<p>
									Estou em uma formação de aprendizado Fullstack e com o curso
									de Engenharia de Software em andamento. Inicialmente focado em
									consolidar todo conhecimento para frontend, utilizando
									tecnologia do ecossistema Javascript como React e diversas
									ferramentas afins, com o objetivo maior de expandir meus
									conhecimentos para cobrir a stack completa de Desenvolvedor
									Fullstack.
								</p>

								<p>
									Estou motivado a aplicar essas habilidades para criar soluções
									intuitivas, escaláveis e de alta performance, ao mesmo tempo
									em que busco oportunidades para colaborar em projetos
									inovadores. Minha meta é crescer na área de desenvolvimento,
									contribuindo com interfaces e serviços eficientes, sempre com
									foco na melhor experiência para o usuário.
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
			<div className='pb-6'>
				<Card className='h-[450px] mt-6'>
					<CardContent>
						<CardTitle className='w-full text-start text-lg font-medium'>
							Cursos e Especializações
						</CardTitle>

						<div className='flex w-full h-full flex-col gap-4 overflow-y-auto [&::-webkit-scrollbar]:hidden'>
							{educationsOrder.map(educ => (
								<div
									className='flex w-full flex-col gap-1 border-b pb-4 text-xs font-light'
									key={educ.id}>
									<p className='text-sm font-bold text-primary'>
										{educ.name} -
										<span className='text-muted-foreground'>
											{' '}
											{educ.workload}
										</span>
									</p>
									<p>
										Conteúdo:
										<span className='text-muted-foreground'>
											{' '}
											{educ.description}
										</span>
									</p>

									<p>
										Instituição:
										<span className='text-muted-foreground'>
											{' '}
											{educ.institution}
										</span>
									</p>

									<p>
										Acesse em:
										<span className='text-muted-foreground'>
											{' '}
											{educ.urlVerification}
										</span>
									</p>
									<p>
										Código de Verificação:
										<span className='text-muted-foreground'>
											{' '}
											{educ.certificationCode}
										</span>
									</p>
								</div>
							))}
						</div>
					</CardContent>
				</Card>
			</div>
		</SectionPage>
	);
}
