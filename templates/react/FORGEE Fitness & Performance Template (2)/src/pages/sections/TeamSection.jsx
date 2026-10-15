import React from 'react';
import { Label, H2, BodyText, SectionMarker } from '../../components/Typography';

export default function TeamSection() {
  const team = [
    { initials: 'RF', name: 'Rodrigo Farias', role: 'Head Coach', cref: 'CREF 045821-G/SP' },
    { initials: 'AL', name: 'Ana Luísa', role: 'Conditioning', cref: 'CREF 078342-G/SP' },
    { initials: 'BT', name: 'Bruno T.', role: 'Mobility & Rehab', cref: 'CREF 091205-G/SP' },
    { initials: 'CD', name: 'Camila D.', role: 'Personal Trainer', cref: 'CREF 063417-G/SP' }
  ];

  return (
    <section className="px-6 md:px-12 py-24 md:py-32 max-w-[1600px] mx-auto border-t border-[#D6CFC5]">
      <SectionMarker current="06" total="09" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        <div>
          <Label className="mb-6">Quem te acompanha</Label>
          <H2 className="mb-8">COACHES QUE<br/>TREINAM.</H2>
          <BodyText>
            Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
          </BodyText>
        </div>

        <div className="flex flex-col justify-center">
          <div className="border-t border-[#1A1812]">
            {team.map((member, i) => (
              <div key={i} className="flex items-center justify-between py-6 border-b border-[#D6CFC5] group hover:bg-[#EDE9E3] transition-colors -mx-6 px-6 sm:mx-0 sm:px-4 cursor-default">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-[#D6CFC5] flex items-center justify-center text-xs font-bold tracking-widest text-[#1A1812]">
                    {member.initials}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold tracking-tight text-[#1A1812] group-hover:pl-2 transition-all">{member.name}</h4>
                    <span className="text-xs uppercase tracking-widest text-[#6B6259]">{member.role}</span>
                  </div>
                </div>
                <div className="text-[10px] text-[#A09688] tracking-widest uppercase hidden sm:block">
                  {member.cref}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}